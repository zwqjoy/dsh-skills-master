import { Button, Input, Textarea } from '../ui/index.js';
import { Icon, Modal, type IconName } from '../ui/index.js';
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { InjectFace, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { ManagedSkillDetail, ManagedSkillResource, ManagedSkillSummary, SkillCatalogEntry, SkillCatalogSummary, SkillDependencyImpact, TrashedSkillSummary } from '../shared.js';
import type { SkillTaskKind } from './drafts.js';
import type { SkillManagementClient } from './management.js';
import { ImportSkillModal } from './ImportSkillModal.js';
import { SkillHubPanel } from './SkillHubPanel.js';
import { skillsActionsCss, skillsCss, skillsMarketCss, standaloneCss } from './styles.js';

type SkillsPanelInjected = {
  toggleNavigation: () => void;
  management: SkillManagementClient;
  startSkillTask: (kind: SkillTaskKind, name?: string) => Promise<void>;
  startSkillTrial: (name: string) => Promise<void>;
  /** Switch the shared capability center to another registered panel (e.g. experts). */
  openCapability: (key: string) => void;
  hasCapability: (key: string) => boolean;
};
type SkillsPanelProps = PropsRuntime<'main'> & InjectFace<SkillsPanelInjected>;

const ALL = '全部';

function icon(kind: string) { return <Icon name={kind as IconName} />; }
function messageOf(cause: unknown): string { return cause instanceof Error ? cause.message : '技能操作失败，请重试。'; }

/** Stable brand tone for skills without a bundled marketplace icon. */
function toneOf(name: string): { background: string; color: string } {
  let hue = 0;
  for (const char of name) hue = (hue * 31 + (char.codePointAt(0) ?? 0)) % 360;
  return { background: `hsl(${hue} 36% 25%)`, color: `hsl(${hue} 84% 78%)` };
}

function SkillMark({ name, title, iconUrl, large }: { name: string; title?: string; iconUrl?: string; large?: boolean }) {
  const label = (title ?? name).trim().charAt(0).toUpperCase() || name.charAt(0).toUpperCase();
  if (iconUrl) return <img className={`skill-icon${large ? ' large' : ''}`} src={iconUrl} alt="" loading="lazy" decoding="async" />;
  return <span className={`skill-mark${large ? ' large' : ''}`} aria-hidden style={toneOf(name)}>{label}</span>;
}

export function SkillsPanel({ toggleNavigation, management, startSkillTask, startSkillTrial, openCapability, hasCapability }: SkillsPanelProps) {
  const [skills, setSkills] = useState<readonly ManagedSkillSummary[]>([]);
  const [catalog, setCatalog] = useState<SkillCatalogSummary>();
  const [category, setCategory] = useState(ALL);
  const [query, setQuery] = useState('');
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [installBusy, setInstallBusy] = useState('');
  const [preview, setPreview] = useState<SkillCatalogEntry>();
  const [selected, setSelected] = useState<ManagedSkillDetail>();
  const [editing, setEditing] = useState(false);
  const [skillDocument, setSkillDocument] = useState('');
  const [resource, setResource] = useState<(ManagedSkillResource & { isNew?: boolean })>();
  const [resourceDocument, setResourceDocument] = useState('');
  const [newResourcePath, setNewResourcePath] = useState('');
  const [trash, setTrash] = useState<readonly TrashedSkillSummary[]>([]);
  const [trashOpen, setTrashOpen] = useState(false);
  const [confirmUninstall, setConfirmUninstall] = useState<{ skill: ManagedSkillSummary; impact: SkillDependencyImpact }>();
  const [creating, setCreating] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [actionMenu, setActionMenu] = useState<string>();
  const [batchMode, setBatchMode] = useState(false);
  const [selectedNames, setSelectedNames] = useState<readonly string[]>([]);
  const [confirmBatchUninstall, setConfirmBatchUninstall] = useState(false);
  const [refreshToken, setRefreshToken] = useState(0);
  const [marketSource, setMarketSource] = useState<'local' | 'skillhub'>('local');
  const search = useRef<HTMLInputElement>(null);
  const addMenu = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLElement>(null);
  const localTab = useRef<HTMLButtonElement>(null);
  const firstView = useRef(true);

  const refresh = useCallback(async () => {
    setBusy(true); setError('');
    try {
      const [rows, summary] = await Promise.all([
        management.list(),
        management.catalog().catch(cause => { console.error('[dsh-skills-master:skills:catalog]', cause); return undefined; }),
      ]);
      setSkills(rows);
      if (summary) setCatalog(summary);
    }
    catch (cause) { console.error('[dsh-skills-master:skills:list]', cause); setError(messageOf(cause)); }
    finally { setBusy(false); }
  }, [management]);
  useEffect(() => { void refresh(); }, [refresh]);
  useEffect(() => {
    const revalidate = () => { if (document.visibilityState === 'visible') void refresh(); };
    window.addEventListener('focus', revalidate); document.addEventListener('visibilitychange', revalidate);
    return () => { window.removeEventListener('focus', revalidate); document.removeEventListener('visibilitychange', revalidate); };
  }, [refresh]);
  useEffect(() => {
    if (!addMenuOpen) return;
    const outside = (event: PointerEvent) => { if (!addMenu.current?.contains(event.target as Node)) setAddMenuOpen(false); };
    document.addEventListener('pointerdown', outside); return () => document.removeEventListener('pointerdown', outside);
  }, [addMenuOpen]);
  useEffect(() => {
    if (!actionMenu) return;
    const outside = (event: PointerEvent) => { if (!(event.target instanceof Element) || !event.target.closest('.dsm-skill-actions')) setActionMenu(undefined); };
    document.addEventListener('pointerdown', outside); return () => document.removeEventListener('pointerdown', outside);
  }, [actionMenu]);
  // Returning from SkillHub lands on the unified local view.
  useEffect(() => {
    if (firstView.current) { firstView.current = false; return; }
    panel.current?.scrollTo({ top: 0 });
    if (marketSource === 'local') localTab.current?.focus();
  }, [marketSource]);

  const install = async (entry: SkillCatalogEntry) => {
    setError(''); setNotice(''); setInstallBusy(entry.name);
    try {
      await management.installFromCatalog(entry.name);
      setPreview(undefined);
      setNotice(`已安装「${entry.title}」`);
      await refresh();
    } catch (cause) { setError(messageOf(cause)); }
    finally { setInstallBusy(''); }
  };
  const openDetail = async (name: string) => {
    setActionMenu(undefined); setError('');
    try { const detail = await management.detail(name); setSelected(detail); setSkillDocument(detail.document ?? ''); setEditing(false); setResource(undefined); }
    catch (cause) { setError(messageOf(cause)); }
  };
  const beginSkillTask = async (kind: SkillTaskKind) => {
    setCreating(true); setAddMenuOpen(false); setError('');
    try { await startSkillTask(kind); }
    catch (cause) { setError(messageOf(cause)); setCreating(false); }
  };
  const trial = async (name: string) => { setCreating(true); try { await startSkillTrial(name); } catch (cause) { setError(messageOf(cause)); setCreating(false); } };
  const setEnabled = async (skill: ManagedSkillSummary, enabled: boolean) => {
    setActionMenu(undefined); setError('');
    try { await management.setEnabled(skill.name, enabled); await refresh(); if (selected?.name === skill.name) await openDetail(skill.name); }
    catch (cause) { setError(messageOf(cause)); }
  };
  const openDirectory = async (skill: ManagedSkillSummary) => {
    setActionMenu(undefined); setError('');
    try { const detail = selected?.name === skill.name ? selected : await management.detail(skill.name); if (!detail.directoryPath) throw new Error('该技能来源不提供可打开的本地目录。'); await management.openDirectory(detail.directoryPath); }
    catch (cause) { setError(messageOf(cause)); }
  };
  const save = async () => {
    if (!selected?.revision) return;
    setBusy(true); setError('');
    try { const next = await management.update({ name: selected.name, document: skillDocument, expectedRevision: selected.revision }); setSelected(next); setSkillDocument(next.document ?? ''); setEditing(false); await refresh(); }
    catch (cause) { setError(messageOf(cause)); setBusy(false); }
  };
  const uninstall = async () => {
    if (!confirmUninstall) return;
    setBusy(true); setError('');
    try { await management.uninstall(confirmUninstall.skill.name, confirmUninstall.impact.revision); if (selected?.name === confirmUninstall.skill.name) setSelected(undefined); setConfirmUninstall(undefined); await refresh(); }
    catch (cause) { setError(messageOf(cause)); setBusy(false); setConfirmUninstall(undefined); }
  };
  const prepareUninstall = async (skill: ManagedSkillSummary) => {
    setActionMenu(undefined); setError('');
    try { setConfirmUninstall({ skill, impact: await management.dependencyImpact(skill.name) }); }
    catch (cause) { setError(messageOf(cause)); }
  };
  const openTrash = async () => {
    setError('');
    try { setTrash(await management.listTrash()); setTrashOpen(true); }
    catch (cause) { setError(messageOf(cause)); }
  };
  const restore = async (entry: TrashedSkillSummary) => {
    setBusy(true); setError('');
    try { await management.restore(entry.id); setTrash(await management.listTrash()); await refresh(); }
    catch (cause) { setError(messageOf(cause)); setBusy(false); }
  };
  const openResource = async (path: string) => {
    if (!selected) return;
    setError('');
    try { const next = await management.resource(selected.name, path); setResource(next); setResourceDocument(next.document); }
    catch (cause) { setError(messageOf(cause)); }
  };
  const beginResource = () => {
    const path = newResourcePath.trim();
    if (!path) return;
    setResource({ path, document: '', revision: '', isNew: true }); setResourceDocument(''); setNewResourcePath('');
  };
  const saveResource = async () => {
    if (!selected || !resource) return;
    setBusy(true); setError('');
    try {
      const next = await management.writeResource({ name: selected.name, path: resource.path, document: resourceDocument, expectedRevision: resource.isNew ? undefined : resource.revision });
      const detail = await management.detail(selected.name); setSelected(detail); setResource(next); setResourceDocument(next.document); await refresh();
    } catch (cause) { setError(messageOf(cause)); setBusy(false); }
  };
  const toggleBatchSelection = (name: string) => setSelectedNames(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name]);
  const toggleBatch = () => { setMarketSource('local'); setBatchMode(value => !value); setSelectedNames([]); };
  const openInstalled = () => { setActionMenu(undefined); setError(''); setQuery(''); setCategory(ALL); setBatchMode(false); setSelectedNames([]); setMarketSource('local'); };
  const runBatch = async (action: 'enable' | 'disable' | 'uninstall') => {
    if (!selectedNames.length) return;
    setBusy(true); setError('');
    try {
      const result = await management.batch(selectedNames, action);
      const failed = result.results.filter(item => !item.ok);
      await refresh();
      setSelectedNames(failed.map(item => item.name));
      if (failed.length) setError(`${result.results.length - failed.length} 项成功，${failed.length} 项失败：${failed.map(item => `${item.name}（${item.error}）`).join('；')}`);
      else { setBatchMode(false); setSelectedNames([]); }
      setConfirmBatchUninstall(false);
    } catch (cause) { setError(messageOf(cause)); setBusy(false); setConfirmBatchUninstall(false); }
  };

  const entries = catalog?.entries ?? [];
  const normalized = query.trim().toLowerCase();
  const matches = (text: string) => text.toLowerCase().includes(normalized);
  const matchingEntries = entries.filter(entry => !entry.installed && (matches(entry.name) || matches(entry.title) || matches(entry.description)));
  const matchingSkills = skills.filter(skill => matches(`${skill.name} ${skill.title ?? ''} ${skill.localizedDescription ?? skill.description} ${skill.whenToUse ?? ''}`));
  const categories = [...new Set([...matchingEntries, ...matchingSkills].flatMap(item => item.categories ?? []))].sort((a, b) => a.localeCompare(b, 'zh-CN'));
  const selectedCategory = categories.includes(category) ? category : ALL;
  const inCategory = (values?: readonly string[]) => selectedCategory === ALL || Boolean(values?.includes(selectedCategory));
  const available = matchingEntries.filter(entry => inCategory(entry.categories));
  const filtered = matchingSkills.filter(skill => inCategory(skill.categories));
  const mySkills = filtered.filter(skill => skill.manageable);
  const builtinSkills = filtered.filter(skill => !skill.manageable);
  const capabilityTabs = [['skills', '技能市场']] as const;
  const capabilityKey: Record<string, string> = { experts: 'dsh-skills-master-experts', skills: 'dsh-skills-master-skills', connectors: 'dsh-skills-master-connectors' };
  const countsLine = <div role="status" aria-live="polite" className={error ? 'error counts' : notice ? 'notice counts' : 'muted counts'}>{busy ? '正在读取…' : error || notice || `共 ${skills.length} 个已安装技能 · 当前显示 ${filtered.length} 个`}</div>;
  const batchBar = <div className="batch-bar" role="toolbar" aria-label="批量管理技能"><span>已选择 {selectedNames.length} 项</span><Button disabled={!selectedNames.length || busy} onClick={() => void runBatch('enable')}>启用</Button><Button disabled={!selectedNames.length || busy} onClick={() => void runBatch('disable')}>停用</Button><Button tone="danger" className="danger" disabled={!selectedNames.length || busy} onClick={() => setConfirmBatchUninstall(true)}>卸载</Button></div>;
  const renderSkillCard = (skill: ManagedSkillSummary) => <article className={`card ${skill.state === 'disabled' ? 'disabled' : skill.state === 'invalid' ? 'invalid' : ''} ${actionMenu === skill.name ? 'menu-open' : ''}`} key={skill.name}>
    <div className="card-top">{batchMode && skill.manageable ? <button className="batch-check" role="checkbox" aria-checked={selectedNames.includes(skill.name)} aria-label={`选择技能 ${skill.name}`} onClick={() => toggleBatchSelection(skill.name)}>{selectedNames.includes(skill.name) ? '✓' : ''}</button> : null}<button className="card-open" aria-label={`查看技能 ${skill.name}`} onClick={() => batchMode && skill.manageable ? toggleBatchSelection(skill.name) : void openDetail(skill.name)}><SkillMark name={skill.name} title={skill.title} iconUrl={skill.iconUrl} /><span className="card-title"><strong title={skill.name}>{skill.title ?? skill.name}</strong>{skill.title && skill.title !== skill.name ? <small className="slug">{skill.name}</small> : null}</span></button>
      {!batchMode && skill.manageable && <div className="dsm-skill-actions"><Button variant="ghost" size="sm" className="dsm-skill-menu-trigger" aria-label={`管理技能 ${skill.name}`} aria-haspopup="menu" aria-expanded={actionMenu === skill.name} onClick={() => setActionMenu(current => current === skill.name ? undefined : skill.name)}>•••</Button>{actionMenu === skill.name && <div className="dsm-skill-menu" role="menu"><button role="menuitem" disabled={skill.state !== 'enabled'} onClick={() => void trial(skill.name)}>去试试</button><button role="menuitem" onClick={() => void openDetail(skill.name)}>编辑</button><button role="menuitem" onClick={() => void openDirectory(skill)}>打开文件夹</button><button className="dsm-skill-uninstall" role="menuitem" onClick={() => void prepareUninstall(skill)}>卸载</button></div>}</div>}
      {!skill.manageable ? <button className="readonly-badge" aria-label={`查看技能 ${skill.name} 的只读说明`} title="由宿主或所属插件管理，点击查看说明" onClick={() => void openDetail(skill.name)}>内置 · 只读</button> : !batchMode && <button className="switch" role="switch" disabled={skill.state === 'invalid'} aria-checked={skill.state === 'enabled'} aria-label={`${skill.state === 'enabled' ? '停用' : '启用'}技能 ${skill.name}`} onClick={() => void setEnabled(skill, skill.state !== 'enabled')} />}
    </div><p className="muted">{skill.localizedDescription ?? skill.description}</p>{skill.state === 'invalid' && <small className="diagnostic">需要修复 · {skill.diagnostics?.[0]?.message}</small>}
  </article>;
  return <section ref={panel} className="dsm-skills" data-testid="dsh-skills-master-skills">
    <style>{skillsCss + skillsActionsCss + skillsMarketCss + standaloneCss}</style>
    <header className="cap-header">
      <button className="nav-toggle" onClick={toggleNavigation} aria-label="切换导航">导航</button>
      {capabilityTabs.map(([key, label]) => {
        const active = key === 'skills';
        const target = capabilityKey[key];
        const enabled = active || (target !== undefined && hasCapability(target));
        return <button key={key} className={`cap-tab ${active ? 'active' : ''}`} disabled={!enabled}
          aria-current={active ? 'page' : undefined}
          onClick={() => { if (!active && target) openCapability(target); }}>{icon(key)}{label}</button>;
      })}
      <Input ref={search} className="search" aria-label="搜索技能" placeholder="搜索技能" value={query} onChange={event => setQuery(event.currentTarget.value)} />
      <Button className={batchMode ? 'batch-toggle active' : 'batch-toggle'} onClick={toggleBatch}>{batchMode ? '退出批量' : '批量管理'}</Button>
      <Button className="trash-button" onClick={() => void openTrash()}>最近卸载</Button>
      <div className="add-menu-wrap" ref={addMenu}><Button variant="primary" className="add-skill" disabled={creating} aria-haspopup="menu" aria-expanded={addMenuOpen} onClick={() => setAddMenuOpen(open => !open)}>＋ 添加技能</Button>{addMenuOpen && <div className="add-menu" role="menu"><button role="menuitem" onClick={() => { setAddMenuOpen(false); search.current?.focus(); }}>查找技能</button><button role="menuitem" onClick={() => { setAddMenuOpen(false); setImportOpen(true); }}>上传技能</button><button role="menuitem" onClick={() => void beginSkillTask('create')}>创建技能</button></div>}</div>
    </header>
    <div className="section-head"><h1>技能市场</h1><Button className="refresh" onClick={() => { setRefreshToken(value => value + 1); void refresh(); }} disabled={busy}>刷新</Button></div>
    <nav className="skill-source-tabs" aria-label="技能来源"><button ref={localTab} className={marketSource === 'local' ? 'active' : ''} aria-current={marketSource === 'local' ? 'page' : undefined} onClick={() => setMarketSource('local')}>本地技能</button><button className={marketSource === 'skillhub' ? 'active' : ''} aria-current={marketSource === 'skillhub' ? 'page' : undefined} onClick={() => { setBatchMode(false); setSelectedNames([]); setActionMenu(undefined); setMarketSource('skillhub'); }}>SkillHub</button></nav>
    {marketSource === 'skillhub' ? <SkillHubPanel management={management} refreshToken={refreshToken} query={query} onInstalled={refresh} onOpenInstalled={openInstalled} /> : <>
    <nav className="category-tabs" aria-label="技能分类"><button className={selectedCategory === ALL ? 'active' : ''} aria-current={selectedCategory === ALL ? 'page' : undefined} onClick={() => setCategory(ALL)}>全部</button>{categories.map(label => <button key={label} className={selectedCategory === label ? 'active' : ''} aria-current={selectedCategory === label ? 'page' : undefined} onClick={() => setCategory(current => current === label ? ALL : label)}>{label}</button>)}</nav>
    {catalog?.status === 'invalid' && <p className="catalog-note" role="note">技能目录暂时不可用，已安装的技能仍可使用。</p>}
    {batchMode && batchBar}
    {countsLine}
    <section className="market-section local-skill-group" aria-label="我的安装">
      <div className="market-head"><h2>我的安装 <span className="market-count">{mySkills.length}</span></h2><span className="muted">自行安装的技能，可编辑、启停和卸载</span></div>
      {mySkills.length ? <div className="grid">{mySkills.map(renderSkillCard)}</div> : !busy && <p className="muted local-group-empty">{normalized || selectedCategory !== ALL ? '没有匹配的自行安装技能。' : '暂无自行安装的技能，可从 SkillHub 安装或上传技能。'}</p>}
    </section>
    <section className="market-section local-skill-group" aria-label="内置技能">
      <div className="market-head"><h2>内置技能 <span className="market-count">{builtinSkills.length}</span></h2><span className="muted">由宿主或所属插件提供，仅可查看说明</span></div>
      {builtinSkills.length ? <div className="grid">{builtinSkills.map(renderSkillCard)}</div> : !busy && <p className="muted local-group-empty">{normalized || selectedCategory !== ALL ? '没有匹配的内置技能。' : '暂无内置技能。'}</p>}
    </section>
    {!busy && available.length ? <section className="market-section" aria-label="可安装技能"><div className="market-head"><h2>可安装 <span className="market-count">{available.length}</span></h2><span className="muted">来自本地技能目录，点击 ＋ 直接安装</span></div>
      <div className="grid">{available.map(entry => <article className="card market-card" key={entry.name}>
        <div className="card-top"><button className="card-open" aria-label={`查看技能 ${entry.name}`} onClick={() => { setError(''); setPreview(entry); }}><SkillMark name={entry.name} title={entry.title} iconUrl={entry.iconUrl} /><span className="card-title"><strong title={entry.name}>{entry.title}</strong>{entry.categories.length ? <small>{entry.categories.slice(0, 2).join(' · ')}</small> : null}</span></button>
          <Button className="install" disabled={!entry.installable || Boolean(installBusy)} aria-label={`安装技能 ${entry.title}`} title={entry.installable ? `安装 ${entry.title}` : `暂不可安装：${entry.installLimits?.join('；') ?? '超出安装限制'}`} onClick={() => void install(entry)}>{installBusy === entry.name ? '…' : '＋'}</Button>
        </div><p className="muted">{entry.description}</p>
      </article>)}</div>
    </section> : null}
    </>}

    <Modal open={Boolean(preview)} label={preview ? `${preview.title} 技能预览` : '技能预览'} className="skill-detail-dialog catalog-dialog" onClose={() => setPreview(undefined)}>
      {preview && <article data-testid="skill-catalog-preview"><div className="detail-hero"><SkillMark large name={preview.name} title={preview.title} iconUrl={preview.iconUrl} /><div className="detail-title"><h1>{preview.title}</h1><p className="slug">{preview.name}</p><div className="detail-actions"><Button variant="primary" className="install solid" disabled={!preview.installable || Boolean(installBusy)} onClick={() => void install(preview)}>{installBusy === preview.name ? '正在安装…' : '＋ 安装'}</Button><Button onClick={() => setPreview(undefined)}>稍后再说</Button></div></div></div>
        <p className="detail-summary">{preview.description}</p>
        {preview.installLimits?.length ? <section className="validation-errors"><h3>暂不可直接安装</h3><ul>{preview.installLimits.map(item => <li key={item}>{item}</li>)}</ul><p className="muted">可通过「＋ 添加技能 → 上传技能」手动导入整理后的副本。</p></section> : null}
        <h2 className="detail-section-title">{icon('library')}基本信息</h2>
        <div className="detail-body"><dl><dt>技能标识</dt><dd><code className="command">/{preview.name}</code></dd><dt>分类</dt><dd>{preview.categories.join(' · ') || '未分类'}</dd><dt>版本</dt><dd>{preview.version ?? '未标注'}</dd></dl>{preview.examples?.length ? <><h3>使用示例</h3><ul className="example-list">{preview.examples.map(item => <li key={item}>{item}</li>)}</ul></> : null}</div>
      </article>}
    </Modal>
    <Modal open={Boolean(selected)} label={selected ? `${selected.name} 技能详情` : '技能详情'} className="skill-detail-dialog" onClose={() => { setSelected(undefined); setEditing(false); setResource(undefined); }}>
      {selected && <article data-testid="skill-detail"><div className="detail-hero"><SkillMark large name={selected.name} title={selected.title} iconUrl={selected.iconUrl} /><div className="detail-title"><h1>{selected.title ?? selected.name}</h1>{selected.title && selected.title !== selected.name ? <p className="slug">{selected.name}</p> : null}<div className="detail-actions">{selected.manageable && <Button className="try" disabled={selected.state !== 'enabled'} onClick={() => void trial(selected.name)}>去试试</Button>}{selected.manageable && <><Button onClick={() => setEditing(true)}>编辑</Button><Button onClick={() => void openDirectory(selected)}>打开文件夹</Button><Button tone="danger" className="danger" onClick={() => void prepareUninstall(selected)}>卸载</Button></>}</div></div><span className="readonly-badge" hidden={selected.manageable}>内置 · 只读</span>{selected.manageable && <button className="switch" role="switch" disabled={selected.state === 'invalid'} aria-checked={selected.state === 'enabled'} onClick={() => void setEnabled(selected, selected.state !== 'enabled')} />}</div>
        <p className="detail-summary">{selected.localizedDescription ?? selected.description}</p>{!selected.manageable && <p className="readonly-note">由宿主或所属插件提供，本页仅查看说明；如需停用或移除，请到对应插件设置中操作。只读不代表已停用。</p>}<h2 className="detail-section-title">{icon('library')}概述</h2>
        <div className="detail-body">{resource ? <><div className="resource-editor-head"><Button onClick={() => setResource(undefined)}>返回概述</Button><strong>{resource.path}</strong></div><label className="editor-label" htmlFor="resource-document">资源文件</label><Textarea id="resource-document" className="skill-editor" value={resourceDocument} onChange={event => setResourceDocument(event.currentTarget.value)} spellCheck={false} /><div className="editor-actions"><Button onClick={() => { setResourceDocument(resource.document); setResource(undefined); }}>取消</Button><Button variant="primary" className="save" disabled={busy || (!resource.isNew && resourceDocument === resource.document)} onClick={() => void saveResource()}>保存资源</Button></div></> : editing ? <><label className="editor-label" htmlFor="skill-document">SKILL.md</label><Textarea id="skill-document" className="skill-editor" value={skillDocument} onChange={event => setSkillDocument(event.currentTarget.value)} spellCheck={false} /><div className="editor-actions"><Button onClick={() => { setSkillDocument(selected.document ?? ''); setEditing(false); }}>取消</Button><Button variant="primary" className="save" disabled={busy || skillDocument === selected.document} onClick={() => void save()}>保存并重新发现</Button></div></> : <><dl><dt>名称</dt><dd>{selected.name}</dd><dt>状态</dt><dd>{selected.state === 'enabled' ? '已启用' : selected.state === 'disabled' ? '已停用' : selected.state === 'invalid' ? '需要修复' : '只读'}</dd><dt>调用方式</dt><dd><code className="command">/{selected.name}</code></dd></dl>{selected.diagnostics?.length ? <section className="validation-errors"><h3>校验问题</h3><ul>{selected.diagnostics.map(item => <li key={`${item.code}-${item.path ?? ''}`}>{item.message}</li>)}</ul><Button onClick={() => setEditing(true)}>修复 SKILL.md</Button></section> : null}{selected.manageable && <section className="resource-section"><h3>资源文件</h3>{selected.resources.length ? <div className="resource-list">{selected.resources.map(path => <Button key={path} onClick={() => void openResource(path)}>{path}</Button>)}</div> : <p className="muted">暂无附加资源</p>}<div className="new-resource"><Input aria-label="新资源路径" placeholder="例如 references/guide.md" value={newResourcePath} onChange={event => setNewResourcePath(event.currentTarget.value)} /><Button disabled={!newResourcePath.trim()} onClick={beginResource}>新建资源</Button></div></section>}<pre className="skill-document">{selected.document ?? selected.whenToUse ?? selected.description}</pre></>}{error && <p className="error" role="alert">{error}</p>}</div>
      </article>}
    </Modal>
    <Modal open={Boolean(confirmUninstall)} label="确认卸载技能" className="confirm-dialog" onClose={() => setConfirmUninstall(undefined)}>{confirmUninstall && <div><h2>卸载 {confirmUninstall.skill.name}？</h2><p>技能将移入 Skills Master 回收目录，并从所有任务的可调用技能中移除。</p>{confirmUninstall.impact.dependents.length ? <div className="dependency-impact"><strong>依赖影响</strong><ul>{confirmUninstall.impact.dependents.map(item => <li key={`${item.kind}-${item.id}`}>{item.label}{item.blocking ? '（需先解除）' : ''}</li>)}</ul></div> : <p className="dependency-clear">未发现 Skills Master 对象依赖此技能。</p>}<div className="confirm-actions"><Button onClick={() => setConfirmUninstall(undefined)}>取消</Button><Button tone="danger" className="danger solid" disabled={confirmUninstall.impact.dependents.some(item => item.blocking)} onClick={() => void uninstall()}>确认卸载</Button></div></div>}</Modal>
    <Modal open={confirmBatchUninstall} label="确认批量卸载技能" className="confirm-dialog" onClose={() => setConfirmBatchUninstall(false)}><div><h2>卸载所选 {selectedNames.length} 个技能？</h2><p>每个成功卸载的技能会分别进入可恢复目录；失败项会保留选择并显示原因。</p><div className="confirm-actions"><Button onClick={() => setConfirmBatchUninstall(false)}>取消</Button><Button tone="danger" className="danger solid" onClick={() => void runBatch('uninstall')}>确认卸载</Button></div></div></Modal>
    <Modal open={trashOpen} label="最近卸载的技能" className="trash-dialog" onClose={() => setTrashOpen(false)}><h2>最近卸载</h2>{trash.length ? <div className="trash-list">{trash.map(entry => <div key={entry.id}><div><strong>{entry.name}</strong><small>{new Date(entry.removedAt).toLocaleString()} · {entry.previousState === 'enabled' ? '原为启用' : '原为停用'}</small></div><Button disabled={busy} onClick={() => void restore(entry)}>恢复</Button></div>)}</div> : <p className="muted">没有可恢复的技能。</p>}{error && <p className="error" role="alert">{error}</p>}</Modal>
    <ImportSkillModal open={importOpen} management={management} onClose={() => setImportOpen(false)} onInstalled={async name => { await refresh(); await openDetail(name); }} />
  </section>;
}
