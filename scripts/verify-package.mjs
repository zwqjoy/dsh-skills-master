import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, symlink, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { Context } from '@deepseek-ai/cordis';
import Registry from '@deepseek-ai/dsh-skill';
import Tools from '@deepseek-ai/dsh-tools';
import assert from 'node:assert/strict';
const temp=await mkdtemp(join(tmpdir(),'dsm-package-')); const ctx=new Context();const routes=new Map();
try {
  const [packed]=JSON.parse(execFileSync('npm',['pack','--pack-destination',temp,'--json'],{encoding:'utf8'}));
  assert.ok(!packed.files.some(file=>file.path.includes('node_modules')||file.path.includes('test-results')));
  execFileSync('tar',['-xzf',join(temp,packed.filename),'-C',temp]);
  // Model the official Host's shared peer modules without copying another Harness.
  await symlink(resolve('node_modules'),join(temp,'node_modules'),'dir');
  const root=join(temp,'package');const manifest=JSON.parse(await readFile(join(root,'package.json'),'utf8'));
  assert.equal(manifest.name,'dsh-skills-master');
  assert.match(await readFile(join(root,'dist/client.browser.js'),'utf8'), /id: 'dsh-skills-master'/);
  const plugin=await import(pathToFileURL(join(root,'dist/index.js')));
  ctx.provide('systemPrompt',{tools(){},section(){},getSectionOrder(){return 0;}});
  ctx.provide('connection',{fetch:{register(route){routes.set(route.path,route);return async()=>routes.delete(route.path);}}});
  await ctx.plugin(Registry);await ctx.plugin(Tools);const owner=await ctx.plugin(plugin);
  assert.equal(routes.size,4);assert.equal(ctx.dshSkillsMaster.contractVersion,1);
  const creator=await ctx.skills.get('dsh-skills-master-skill-creator');assert.ok(creator);
  assert.match(await readFile(join(creator.resourceBase.path,'references/dsh-authoring.md'),'utf8'), /Harness/);
  await owner.dispose();assert.equal(routes.size,0);
  console.log(`PASS: ${packed.filename}; ${packed.entryCount} files; packed Host activates and disposes; bundled creator resources resolve.`);
} finally {await ctx.fiber.dispose();await rm(temp,{recursive:true,force:true});}
