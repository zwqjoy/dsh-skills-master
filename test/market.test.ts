import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readFile, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Context } from '@deepseek-ai/cordis';
import Registry from '@deepseek-ai/dsh-skill';
import { zipSync } from 'fflate';
import { SkillManager } from '../src/services/manager.js';
import { marketSlug, prepareMarketInstall, searchMarket } from '../src/services/market.js';

async function fixture() {
  const home = await mkdtemp(join(tmpdir(), 'dsm-market-'));
  const ctx = new Context(); await ctx.plugin(Registry);
  const manager = new SkillManager(ctx, { dshHome: join(home, 'dsh'), agentsHome: join(home, 'agents') });
  return { home, manager, close: async () => { await ctx.fiber.dispose(); await rm(home, {recursive:true, force:true}); } };
}
const document = '---\nname: market-sample\ndescription: Market sample fixture\n---\nSafe fixture content\n';
test('market download preflights, confirms into official root, and refuses overwrite', async () => {
  const f = await fixture();
  try {
    const bytes = zipSync({ 'SKILL.md': new TextEncoder().encode(document), 'references/help.md': new TextEncoder().encode('Help') });
    const fetcher = (async (url: string | URL | Request) => { assert.match(String(url), /version=1.2.3/); return new Response(bytes); }) as typeof fetch;
    const { staged } = await prepareMarketInstall(f.manager, {slug:'market-slug',version:'1.2.3'}, new AbortController().signal, fetcher);
    const target = join(f.home, 'dsh/skills/market-sample/SKILL.md');
    await assert.rejects(stat(target), {code:'ENOENT'});
    assert.equal(staged.inspection.name, 'market-sample');
    await f.manager.imports.commit(staged.id, 'profile');
    assert.equal(await readFile(target,'utf8'), document);
    const second = await prepareMarketInstall(f.manager, {slug:'market-slug',version:'1.2.3'}, new AbortController().signal, fetcher);
    await assert.rejects(f.manager.imports.commit(second.staged.id, 'profile'), /skill\/target-exists/);
    assert.equal(await readFile(target,'utf8'), document);
  } finally { await f.close(); }
});
test('market rejects path traversal, malformed archives and oversized downloads', async () => {
  for (const slug of ['../evil','a/b','','a?query=evil']) assert.throws(()=>marketSlug(slug));
  const f = await fixture();
  try {
    await assert.rejects(prepareMarketInstall(f.manager, {slug:'sample'}, new AbortController().signal, (async()=>new Response('bad archive')) as typeof fetch), /skill\/import-invalid-zip/);
    await assert.rejects(prepareMarketInstall(f.manager, {slug:'sample'}, new AbortController().signal, (async()=>new Response('large',{headers:{'content-length':String(51*1024*1024)}})) as typeof fetch), /50 MiB/);
  } finally { await f.close(); }
});
test('search encodes queries, pages by 24 and exposes real provider errors', async () => {
  const f = await fixture();
  try {
    const result = await searchMarket(f.manager, {query:'PDF & 中文',offset:24}, new AbortController().signal, (async(url)=> {
      const u = new URL(String(url)); assert.equal(u.searchParams.get('keyword'),'PDF & 中文'); assert.equal(u.searchParams.get('page'),'2');
      return Response.json({code:0,data:{skills:[{slug:'sample',name:'示例',description:'Description',version:'1.0.0'}],total:36}});
    }) as typeof fetch);
    assert.equal(result.items[0].name,'示例');assert.equal(result.total,36);
    await assert.rejects(searchMarket(f.manager,{},new AbortController().signal,(async()=>new Response('',{status:503})) as typeof fetch), /503/);
  } finally { await f.close(); }
});

test('category and sort operate on the remote catalog, preserving metrics and missing values', async () => {
  const f = await fixture();
  try {
    for (const sortBy of ['score', 'downloads', 'updated_at', 'stars']) {
      const response = await searchMarket(f.manager, {category:'office-efficiency',sortBy,offset:48,query:'中文'}, new AbortController().signal, (async(url)=>{
        const u = new URL(String(url));
        assert.equal(u.searchParams.get('category'),'office-efficiency');assert.equal(u.searchParams.get('sortBy'),sortBy);
        assert.equal(u.searchParams.get('page'),'3');assert.equal(u.searchParams.get('keyword'),'中文');
        return Response.json({code:0,data:{skills:[{slug:'stats',category:'office-efficiency',downloads:123456,stars:0,updated_at:1792424515147},{slug:'missing'}],total:200}});
      }) as typeof fetch);
      assert.equal(response.total,200);assert.equal(response.items[0].categoryLabel,'办公效率');
      assert.equal(response.items[0].downloads,123456);assert.equal(response.items[0].stars,0);assert.equal(response.items[0].updatedAt,1792424515147);
      assert.equal(response.items[1].downloads,undefined);assert.equal(response.items[1].updatedAt,undefined);
    }
    await assert.rejects(searchMarket(f.manager,{category:'made-up'},new AbortController().signal),/无效技能分类/);
    await assert.rejects(searchMarket(f.manager,{sortBy:'made-up'},new AbortController().signal),/无效排序方式/);
  } finally { await f.close(); }
});
