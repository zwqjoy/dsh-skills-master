import type { Context } from '@deepseek-ai/cordis';
import type { HostConnectionHandle } from '@deepseek-ai/dsh-client-connection';
import type { SkillManagementService } from '../shared.js';

export const marketPath = '/api/dsh-skills-master/market';
const api = 'https://api.skillhub.cn';
export function marketSlug(value: unknown): string {
  if (typeof value !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,127}$/i.test(value)) throw new Error('技能标识无效。');
  return value;
}
export async function searchMarket(manager: SkillManagementService, body: Record<string, unknown>, signal: AbortSignal, fetcher: typeof fetch = fetch) {
  const query = typeof body.query === 'string' ? body.query.trim().slice(0, 200) : '';
  const offset = typeof body.offset === 'number' && Number.isSafeInteger(body.offset) && body.offset >= 0 ? body.offset : 0;
  const params = new URLSearchParams({ sortBy: query ? 'score' : 'downloads', order: 'desc', page: String(Math.floor(offset / 24) + 1), pageSize: '24' });
  if (query) params.set('keyword', query);
  const response = await fetcher(`${api}/api/skills?${params}`, { signal: AbortSignal.any([signal, AbortSignal.timeout(25_000)]) });
  if (!response.ok) throw new Error(`SkillHub 目录请求失败 (${response.status})`);
  const result = await response.json() as { code?: number; data?: { skills?: Record<string, any>[]; total?: number } };
  if (result.code !== 0 || !Array.isArray(result.data?.skills)) throw new Error('SkillHub 返回了无效目录。');
  const installed = new Set((await manager.list(signal)).filter(row => row.state !== 'disabled').map(row => row.name));
  const items = result.data.skills.filter(row => typeof row.slug === 'string' && /^[a-z0-9][a-z0-9_-]{0,127}$/i.test(row.slug)).map(row => ({
    slug: row.slug as string, name: String(row.name || row.slug), description: String(row.description_zh || row.description || ''),
    categoryLabel: String(row.category || ''), version: String(row.version || ''), owner: String(row.ownerName || ''),
    iconUrl: typeof row.iconUrl === 'string' && row.iconUrl.startsWith('https://') ? row.iconUrl : undefined,
    pageUrl: `https://skillhub.cn/skills/${encodeURIComponent(row.slug)}`, installed: installed.has(row.slug),
  }));
  return { ok: true, items, total: Number(result.data.total) || items.length };
}
export async function prepareMarketInstall(manager: SkillManagementService, body: Record<string, unknown>, signal: AbortSignal, fetcher: typeof fetch = fetch) {
  const slug = marketSlug(body.slug);
  const version = typeof body.version === 'string' ? body.version : '';
  if (version && !/^[a-z0-9][a-z0-9._+-]{0,63}$/i.test(version)) throw new Error('技能版本无效。');
  const params = new URLSearchParams({ slug, source: 'dsh' });
  if (version) params.set('version', version);
  const bounded = AbortSignal.any([signal, AbortSignal.timeout(90_000)]);
  const response = await fetcher(`${api}/api/v1/download?${params}`, { signal: bounded });
  if (!response.ok) throw new Error(`SkillHub 下载失败 (${response.status})`);
  if (Number(response.headers.get('content-length')) > 50 * 1024 * 1024) { await response.body?.cancel(); throw new Error('技能包超过 50 MiB 上限。'); }
  // The existing staged import validates archive paths, bounded expansion,
  // metadata, name conflicts and fingerprints; it never executes package scripts.
  const staged = await manager.imports.stage(`${slug}.zip`, response.body, bounded);
  return { ok: true, staged };
}
export function registerMarketConnection(ctx: Context): void {
  const connection = ctx.connection as unknown as HostConnectionHandle;
  const lifetime = new AbortController();
  const pending = new Set<Promise<Response>>();
  const dispose = connection.fetch.register({ path: marketPath, methods: ['POST'], requestBody: 'buffered', fetch: (request: Request) => {
    const operation = (async () => {
      const signal = AbortSignal.any([request.signal, lifetime.signal]);
      try {
        signal.throwIfAborted();
        if (Number(request.headers.get('content-length')) > 4096) return Response.json({ ok: false, error: '请求过大。' }, { status: 413 });
        const text = await request.text();
        if (text.length > 4096) return Response.json({ ok: false, error: '请求过大。' }, { status: 413 });
        const body = JSON.parse(text) as Record<string, unknown>;
        if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('无效市场请求。');
        if (body.method === 'search') return Response.json(await searchMarket(ctx.dshSkillsMaster, body, signal));
        if (body.method === 'prepare-install') return Response.json(await prepareMarketInstall(ctx.dshSkillsMaster, body, signal));
        return Response.json({ ok: false, error: '未知市场操作。' }, { status: 400 });
      } catch (error) {
        return Response.json({ ok: false, error: signal.aborted ? '操作已取消或超时。' : error instanceof Error ? error.message : 'SkillHub 暂不可用。' }, { status: 400 });
      }
    })();
    pending.add(operation);
    void operation.finally(() => pending.delete(operation));
    return operation;
  }});
  ctx.effect(() => async () => { lifetime.abort(); await dispose(); await Promise.allSettled([...pending]); }, 'dsh-skills-master.market');
}
