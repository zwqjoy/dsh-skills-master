import { Context } from '@deepseek-ai/cordis';
import Registry from '@deepseek-ai/dsh-skill';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { SkillManager } from '../src/services/manager.js';
import { searchMarket, prepareMarketInstall } from '../src/services/market.js';
const root=await mkdtemp(join(tmpdir(),'dsm-live-'));
const ctx=new Context();
try {
  await ctx.plugin(Registry);
  const manager=new SkillManager(ctx,{dshHome:join(root,'dsh'),agentsHome:join(root,'agents')});
  const signal=AbortSignal.timeout(120_000);
  for (const sortBy of ['score','downloads','updated_at','stars']) {
    const filtered = await searchMarket(manager,{category:'office-efficiency',sortBy},signal);
    assert.ok(filtered.items.length, `live ${sortBy} results`);
    assert.ok(filtered.items.every(row => row.category === 'office-efficiency'), 'remote category filter');
  }
  console.log('PASS: live office-efficiency category with score/downloads/updated_at/stars sorts');
  const search=await searchMarket(manager,{query:'find-skills'},signal);
  assert.ok(search.items.length,'real SkillHub search results');
  const card=search.items.find(row=>row.slug==='find-skills')??search.items[0];
  const {staged}=await prepareMarketInstall(manager,{slug:card.slug,version:card.version},signal);
  assert.equal((await manager.list()).some(row=>row.name===staged.inspection.name),false,'preflight never installs');
  const receipt=await manager.imports.commit(staged.id,'profile',signal);
  assert.ok(receipt.name);
  const detail=await manager.detail(receipt.name);
  assert.ok(detail.directoryPath);assert.ok((await readFile(join(detail.directoryPath, 'SKILL.md'),'utf8')).length);
  const impact=await manager.dependencyImpact(receipt.name);
  const removed=await manager.uninstall(receipt.name,impact.revision);
  assert.equal(removed.state,'uninstalled');
  const trash=await manager.listTrash();
  assert.ok(trash.length);await manager.restore(trash[0].id);
  assert.equal((await manager.detail(receipt.name)).state,'enabled');
  console.log(JSON.stringify({result:'PASS',source:'https://api.skillhub.cn',slug:card.slug,version:card.version,declaredName:receipt.name,files:staged.inspection.files.length,checks:['live search','download','preflight without install','confirmed install','recoverable uninstall','restore'],scope:'temporary isolated home'},null,2));
} finally {await ctx.fiber.dispose();await rm(root,{recursive:true,force:true});}
