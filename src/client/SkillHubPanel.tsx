import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Modal } from '../ui/index.js';
import type { StagedSkillImport } from '../shared.js';
import type { SkillManagementClient } from './management.js';

type SkillHubCard = {
  slug: string;
  name: string;
  description: string;
  categoryLabel?: string;
  version?: string;
  owner?: string;
  iconUrl?: string;
  pageUrl?: string;
  installed?: boolean;
};

type SearchResponse = { ok: boolean; items?: SkillHubCard[]; total?: number; error?: string };
const PAGE_SIZE = 24;

function SkillHubIcon({ card }: { card: SkillHubCard }) {
  const iconUrl = card.iconUrl && /^https:\/\//i.test(card.iconUrl) ? card.iconUrl : undefined;
  return <span className="skillhub-icon" aria-hidden="true">{card.name.slice(0, 1).toUpperCase()}{iconUrl && <img src={iconUrl} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={event => { event.currentTarget.hidden = true; }} />}</span>;
}

async function skillHub<T extends { ok: boolean; error?: string }>(method: string, payload: Record<string, unknown>, signal?: AbortSignal): Promise<T> {
  const response = await fetch('/api/dsh-skills-master/market', {
    method: 'POST', credentials: 'same-origin',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ method, ...payload }), signal,
  });
  const result = await response.json() as T;
  if (!response.ok || !result.ok) throw new Error(result.error || `SkillHub 请求失败 (${response.status})`);
  return result;
}

/** Reuse the installed DSH plugin's search and verified installation path. */
export function SkillHubPanel({ query, onInstalled, onOpenInstalled, management, refreshToken }: { management: SkillManagementClient; refreshToken: number; query: string; onInstalled: () => Promise<void>; onOpenInstalled: () => void }) {
  const [cards, setCards] = useState<SkillHubCard[]>([]);
  const [total, setTotal] = useState(0);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const [installing, setInstalling] = useState('');
  const [installedName, setInstalledName] = useState('');
  const [page, setPage] = useState(0);
  const [review, setReview] = useState<{ card: SkillHubCard; staged: StagedSkillImport }>();

  useEffect(() => { setPage(0); }, [query]);

  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      setBusy(true); setError('');
      void skillHub<SearchResponse>('search', { query: query.trim(), limit: PAGE_SIZE, offset: page * PAGE_SIZE }, controller.signal)
        .then(result => { setCards([...new Map((result.items ?? []).map(item => [item.slug, item])).values()]); setTotal(result.total ?? 0); })
        .catch(cause => { if (!controller.signal.aborted) setError(cause instanceof Error ? cause.message : 'SkillHub 暂不可用'); })
        .finally(() => { if (!controller.signal.aborted) setBusy(false); });
    }, 250);
    return () => { window.clearTimeout(timer); controller.abort(); };
  }, [query, page, refreshToken]);

  const install = async (card: SkillHubCard) => {
    setInstalling(card.slug); setError('');
    try {
      const result = await skillHub<{ ok: boolean; staged: StagedSkillImport }>('prepare-install', { slug: card.slug, version: card.version });
      setReview({ card, staged: result.staged });
    } catch (cause) { setError(cause instanceof Error ? cause.message : '安装失败，请重试。'); }
    finally { setInstalling(''); }
  };

  const cancelReview = async () => {
    if (!review || installing) return;
    try { await management.discardImport(review.staged.id); setReview(undefined); }
    catch (cause) { setError(cause instanceof Error ? cause.message : '取消失败'); }
  };
  const confirmInstall = async () => {
    if (!review || installing) return;
    setInstalling(review.card.slug); setError('');
    try {
      await management.commitImport(review.staged.id, 'profile');
      setCards(current => current.map(item => item.slug === review.card.slug ? { ...item, installed: true } : item));
      setInstalledName(review.staged.inspection.name);
      setReview(undefined);
      await onInstalled();
    } catch (cause) { setError(cause instanceof Error ? cause.message : '安装失败，请重试。'); }
    finally { setInstalling(''); }
  };

  const pageCount = Math.ceil(total / PAGE_SIZE);
  const firstPage = Math.max(0, Math.min(page - 2, pageCount - 5));
  const pageNumbers = Array.from({ length: Math.min(5, pageCount) }, (_, index) => firstPage + index);

  return <section className="skillhub-market" aria-label="SkillHub 技能目录">
    <div className="market-head"><h2>SkillHub <span className="market-count">{total}</span></h2><span className="muted">来源：SkillHub · 安装到本机 DSH 技能目录</span></div>
    {installedName && <div className="skillhub-success" role="status"><span>已安装「{installedName}」。</span><Button onClick={onOpenInstalled}>查看已安装</Button><button className="skillhub-dismiss" aria-label="关闭安装提示" onClick={() => setInstalledName('')}>×</button></div>}
    {error && <p className="catalog-note" role="alert">{error}</p>}
    {busy ? <p className="muted" role="status">正在读取 SkillHub…</p> : cards.length ? <div className="grid">{cards.map(card =>
      <article className="card market-card" key={card.slug}>
        <div className="card-top"><a className="card-open" href={card.pageUrl?.startsWith('https://skillhub.cn/skills/') ? card.pageUrl : `https://skillhub.cn/skills/${encodeURIComponent(card.slug)}`} target="_blank" rel="noopener noreferrer" aria-label={`查看 ${card.name} 的来源页`}><SkillHubIcon card={card} /><span className="card-title"><strong title={card.name}>{card.name}</strong><small>{card.categoryLabel || card.owner || card.slug}</small></span></a>
          <Button className={`install${card.installed || installing === card.slug ? ' is-status' : ''}${card.installed ? ' is-installed' : ''}`} disabled={card.installed || Boolean(installing)} aria-label={card.installed ? `已安装 ${card.name}` : `安装 ${card.name}`} onClick={() => void install(card)}>{card.installed ? '已安装' : installing === card.slug ? '安装中…' : '＋'}</Button></div>
        <p className="muted">{card.description}</p>
        <small className="skillhub-meta">版本 {card.version || '未标注'} · 许可证请查看来源页</small>
      </article>)}</div> : !error && <p className="muted">没有找到匹配的技能。</p>}
    <Modal open={Boolean(review)} label="确认安装 SkillHub 技能" onClose={() => void cancelReview()}>
      {review && <><h2>安装 {review.card.name}</h2><p>{review.staged.inspection.description}</p>
        <p>版本：{review.card.version || '来源未标注'} · 安装到当前 Harness 技能目录</p>
        <p>技能名称：{review.staged.inspection.name} · {review.staged.inspection.files.length} 个文件 · {Math.ceil(review.staged.inspection.totalBytes / 1024)} KiB</p>
        <a href={review.card.pageUrl} target="_blank" rel="noopener noreferrer">查看来源与许可证</a>
        <details><summary>文件清单</summary><ul>{review.staged.inspection.files.map(path => <li key={path}>{path}</li>)}</ul></details>
        {error && <p role="alert">{error}</p>}
        <div className="detail-actions"><Button disabled={Boolean(installing)} onClick={() => void cancelReview()}>取消</Button><Button variant="primary" disabled={Boolean(installing)} onClick={() => void confirmInstall()}>{installing ? '安装中…' : '确认安装'}</Button></div>
      </>}
    </Modal>
    {!busy && pageCount > 1 && <nav className="skillhub-pagination" aria-label="SkillHub 分页"><Button disabled={page === 0} onClick={() => setPage(value => value - 1)}>上一页</Button>{firstPage > 0 && <span aria-hidden="true">…</span>}{pageNumbers.map(number => <button key={number} aria-current={page === number ? 'page' : undefined} className={page === number ? 'active' : ''} onClick={() => setPage(number)}>{number + 1}</button>)}{firstPage + pageNumbers.length < pageCount && <span aria-hidden="true">…</span>}<Button disabled={page + 1 >= pageCount} onClick={() => setPage(value => value + 1)}>下一页</Button><span className="muted">第 {page + 1} / {pageCount} 页</span></nav>}
  </section>;
}
