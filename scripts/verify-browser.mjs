import { build } from 'esbuild';
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Context } from '@deepseek-ai/cordis';
import Registry from '@deepseek-ai/dsh-skill';
import Tools from '@deepseek-ai/dsh-tools';
import * as filesystem from '@deepseek-ai/dsh-skill-filesystem';
import * as plugin from '../dist/index.js';
import { zipSync } from 'fflate';
import assert from 'node:assert/strict';
const home = await mkdtemp(join(tmpdir(), 'dsm-browser-'));
await mkdir('test-results',{recursive:true});
const original = {DSH_HOME:process.env.DSH_HOME, DSH_AGENTS_HOME:process.env.DSH_AGENTS_HOME};
const ctx = new Context(); const routes = new Map(); let browser, server;
const nativeFetch = globalThis.fetch;
const bytes = zipSync({'SKILL.md':new TextEncoder().encode('---\nname: market-sample\ndescription: 从市场安装的测试技能\n---\nMarket fixture body\n')});
let marketFailure = false; let legacyMarket = false;
globalThis.fetch = async (url, options) => {
  if (!String(url).startsWith('https://api.skillhub.cn/')) return nativeFetch(url,options);
  if (marketFailure) return new Response('',{status:503});
  if (String(url).includes('/download?')) return new Response(bytes);
  const u = new URL(String(url)); const keyword=u.searchParams.get('keyword');
  const items=keyword==='没有这个技能'?[]:Array.from({length:24},(_,i)=>({slug:i===0?'market-sample':`sample-${i}`,name:i===0?'市场测试技能':`技能示例 ${i}`,description:'清晰的技能说明，可查看来源后确认安装。',version:'1.0.0',category:u.searchParams.get('category')||'dev-programming',downloads:1234567,stars:42,updated_at:1792424515147}));
  return Response.json({code:0,data:{skills:items,total:items.length?48:0}});
};
try {
  process.env.DSH_HOME=join(home,'dsh');process.env.DSH_AGENTS_HOME=join(home,'agents');
  await mkdir(join(home,'agents/skills/local-sample'),{recursive:true});
  await writeFile(join(home,'agents/skills/local-sample/SKILL.md'),'---\nname: local-sample\ndescription: 本地测试技能\n---\nLOCAL_FIXTURE_BODY\n');
  ctx.provide('systemPrompt',{tools(){},section(){},getSectionOrder(){return 0;}});
  ctx.provide('connection',{fetch:{register(route){assert.ok(!routes.has(route.path));routes.set(route.path,route);return async()=>routes.delete(route.path);}}});
  await ctx.plugin(Registry);await ctx.plugin(Tools);await ctx.plugin(filesystem,{dshHome:process.env.DSH_HOME,agentsHome:process.env.DSH_AGENTS_HOME,watch:false});await ctx.plugin(plugin);
  await build({entryPoints:['test/browser-entry.tsx'],outfile:join(home,'entry.js'),bundle:true,format:'iife',platform:'browser',target:'es2022',loader:{'.module.css':'local-css','.woff':'dataurl','.woff2':'dataurl','.ttf':'dataurl'}});
  server=createServer(async(req,res)=>{
    try {
      if(req.url==='/entry.js'||req.url==='/entry.css'||req.url==='/client.js'){
        res.setHeader('Content-Type',req.url.endsWith('.css')?'text/css':'text/javascript');res.end(await readFile(req.url==='/client.js'?'dist/client.browser.js':join(home,req.url.slice(1))));return;
      }
      const path=new URL(req.url,'http://localhost').pathname;
      const route=routes.get(path);
      if(route){
        const chunks=[];for await(const chunk of req)chunks.push(chunk);
        const response=await route.fetch(new Request(`http://localhost${req.url}`,{method:req.method,headers:req.headers,...(req.method!=='GET'?{body:Buffer.concat(chunks)}:{})}));
        if (legacyMarket && path==='/api/dsh-skills-master/market') { res.setHeader('Content-Type','application/json'); res.end(JSON.stringify({ok:true,total:199580,items:[{slug:'old',name:'旧版全站结果'}]})); return; }
        res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));return;
      }
      res.setHeader('Content-Type','text/html');res.end(`<!doctype html><html lang="zh"><meta charset="utf-8"><link rel="stylesheet" href="/entry.css"><style>:root{--dsw-alias-bg-base:#faf9f6;--dsw-alias-bg-layer-1:#fff;--dsw-alias-bg-layer-2:#f6f5f2;--dsw-alias-bg-layer-3:#eeeae5;--dsw-alias-label-primary:#272522;--dsw-alias-label-secondary:#666;--dsw-alias-label-tertiary:#77736c;--dsw-alias-border-l2:#dedbd5;--dsw-alias-brand-primary:#d97858;--dsw-alias-brand-text:#b65738;--dsw-alias-state-success-primary:#26a269;--dsw-alias-state-error-primary:#b42318;--dsw-alias-button-primary-fill:#d97858;--dsw-alias-label-primary-inverted:#fff;--dsw-alias-bg-mask-2:#0007;--dsw-elevation-prominent:0 12px 60px #0003}*{box-sizing:border-box}body{margin:0}#root{height:100vh}button,input{font:inherit}button{cursor:pointer}button:disabled{cursor:default;opacity:.5}</style><div id="root"></div><script src="/entry.js"></script><script src="/client.js"></script></html>`);
    }catch(error){res.writeHead(500);res.end(String(error));}
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  browser=await chromium.launch({headless:true, ...(existsSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome') ? {channel:'chrome'} : {})});const page=await browser.newPage({viewport:{width:1280,height:850}});const errors=[];page.on('pageerror',error=>errors.push(error.message));
  // Reproduce the installed archive manager's broad workspace-delete heuristic.
  // The skill menu must remain accessible without being classified as a workspace menu.
  await page.addInitScript(() => {
    window.__archiveInjectionCount=0;
    const scan=()=>{
      for(const menu of document.querySelectorAll('[role="menu"]')) {
        if(menu.querySelector('[data-test-archive-injected]')) continue;
        const target=[...menu.querySelectorAll('button[role="menuitem"]')].find(button=>
          /删除工作区|delete workspace/i.test(button.textContent||'') || /(?:^|[_\s-])danger(?:$|[_\s-])/i.test(button.className));
        if(target) { const item=document.createElement('button');item.dataset.testArchiveInjected='true';item.textContent='归档全部会话';menu.prepend(item);window.__archiveInjectionCount++; }
      }
    };
    new MutationObserver(scan).observe(document,{childList:true,subtree:true});
  });
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  const mine=page.getByRole('region',{name:'我的安装',exact:true});
  const builtinGroup=page.getByRole('region',{name:'内置技能',exact:true});
  await mine.getByRole('button',{name:'查看技能 local-sample',exact:true}).waitFor();
  await builtinGroup.getByRole('button',{name:'查看技能 dsh-skills-master-skill-creator',exact:true}).waitFor();
  assert.equal(await page.getByRole('button',{name:/查看我安装的/}).count(),0);
  assert.ok((await mine.boundingBox()).y<(await builtinGroup.boundingBox()).y,'my installations precede builtins');
  await page.getByRole('textbox',{name:'搜索技能',exact:true}).fill('local-sample');
  await builtinGroup.getByText('没有匹配的内置技能。',{exact:true}).waitFor();
  await page.getByRole('textbox',{name:'搜索技能',exact:true}).fill('');
  await page.getByRole('button',{name:'批量管理',exact:true}).click();
  await mine.getByRole('checkbox',{name:'选择技能 local-sample',exact:true}).waitFor();
  assert.equal(await builtinGroup.getByRole('checkbox').count(),0);
  await page.getByRole('button',{name:'退出批量',exact:true}).click();
  await page.screenshot({path:'test-results/local-skill-groups.png',fullPage:true});
  await page.getByRole('button',{name:'管理技能 local-sample',exact:true}).click();
  const skillMenu=page.getByRole('menu');
  for(const name of ['去试试','编辑','打开文件夹','卸载']) await skillMenu.getByRole('menuitem',{name,exact:true}).waitFor();
  await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  assert.equal(await page.evaluate(()=>window.__archiveInjectionCount),0,'skill actions must not match workspace archive injection');
  await page.screenshot({path:'test-results/skill-actions-menu.png'});
  await skillMenu.getByRole('menuitem',{name:'编辑',exact:true}).click();
  await page.getByText('LOCAL_FIXTURE_BODY',{exact:false}).waitFor();
  await page.getByRole('button',{name:'关闭',exact:true}).click();

  await page.getByRole('button',{name:'查看技能 local-sample',exact:true}).click();
  await page.getByText('LOCAL_FIXTURE_BODY',{exact:false}).waitFor();
  await page.getByRole('button',{name:'关闭',exact:true}).click();
  const builtin=page.getByRole('button',{name:'查看技能 dsh-skills-master-skill-creator 的只读说明',exact:true});
  await builtin.click();
  const readonlyDialog=page.getByRole('dialog',{name:'dsh-skills-master-skill-creator 技能详情'});
  await readonlyDialog.locator('.skill-document').filter({hasText:'Skill Creator'}).waitFor();
  assert.equal(await readonlyDialog.getByRole('switch').count(),0);
  assert.equal(await readonlyDialog.getByRole('button',{name:'编辑',exact:true}).count(),0);
  await readonlyDialog.getByText('只读不代表已停用。',{exact:false}).waitFor();
  await readonlyDialog.evaluate(async el=>{await Promise.all(el.getAnimations().map(animation=>animation.finished));});
  await page.screenshot({path:'test-results/readonly-detail.png'});
  await readonlyDialog.getByRole('button',{name:'关闭',exact:true}).click();
  await page.getByRole('switch',{name:'停用技能 local-sample',exact:true}).waitFor();
  await page.getByRole('button',{name:'SkillHub',exact:true}).click();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).waitFor();
  legacyMarket=true;
  await page.getByRole('button',{name:'刷新',exact:true}).click();
  await page.getByRole('alert').filter({hasText:'后台服务仍是旧版本'}).waitFor();
  assert.equal(await page.getByRole('link',{name:'查看 旧版全站结果 的来源页',exact:true}).count(),0);
  legacyMarket=false;
  await page.getByRole('button',{name:'刷新',exact:true}).click();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).waitFor();
  const categoryNav=page.getByRole('navigation',{name:'SkillHub 分类',exact:true});
  const waitSearch=(category,sortBy,offset=0)=>page.waitForResponse(response=>{
    if(!response.url().endsWith('/api/dsh-skills-master/market'))return false;
    const payload=response.request().postDataJSON();return payload.method==='search'&&payload.category===category&&payload.sortBy===sortBy&&payload.offset===offset;
  });
  await Promise.all([waitSearch('office-efficiency','score'),categoryNav.getByRole('button',{name:'办公效率',exact:true}).click()]);
  await Promise.all([waitSearch('office-efficiency','downloads'),page.getByRole('combobox',{name:'SkillHub 排序'}).selectOption('downloads')]);
  await page.locator('.skillhub-stats').first().getByText('下载 123.46万',{exact:true}).waitFor();
  await page.locator('.skillhub-stats').first().getByText('收藏 42',{exact:true}).waitFor();
  await page.screenshot({path:'test-results/market-desktop.png',fullPage:true});
  await page.getByRole('button',{name:'下一页',exact:true}).click();await page.getByText('第 2 / 2 页').waitFor();
  await Promise.all([waitSearch('office-efficiency','updated_at'),page.getByRole('combobox',{name:'SkillHub 排序'}).selectOption('updated_at')]);
  await page.getByText('第 1 / 2 页').waitFor();
  await Promise.all([waitSearch('office-efficiency','stars'),page.getByRole('combobox',{name:'SkillHub 排序'}).selectOption('stars')]);
  await Promise.all([waitSearch('','stars'),categoryNav.getByRole('button',{name:'全部',exact:true}).click()]);

  await page.getByRole('button',{name:'下一页',exact:true}).click();await page.getByText('第 2 / 2 页').waitFor();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).click();
  await page.getByRole('dialog',{name:'确认安装 SkillHub 技能'}).waitFor();
  assert.equal((await ctx.dshSkillsMaster.list()).some(row=>row.name==='market-sample'),false);
  const dialog=page.getByRole('dialog',{name:'确认安装 SkillHub 技能'});
  const checkDialog=async()=>{
    await dialog.evaluate(async el=>{await Promise.all(el.getAnimations().map(animation=>animation.finished));});
    const bounds=await dialog.boundingBox();const title=await dialog.locator('h2').boundingBox();const confirm=await dialog.getByRole('button',{name:'确认安装',exact:true}).boundingBox();
    assert.ok(await dialog.locator('h2').evaluate(el=>parseFloat(getComputedStyle(el).paddingLeft)>=20),'title has horizontal padding');
    assert.ok(confirm.y+confirm.height<=bounds.y+bounds.height,'actions stay inside dialog');
    assert.ok(await dialog.evaluate(el=>el.scrollWidth<=el.clientWidth),'dialog has no horizontal overflow');
  };
  await checkDialog();await page.screenshot({path:'test-results/install-dialog-desktop.png'});
  await page.setViewportSize({width:390,height:640});
  await dialog.locator('.market-install-description').evaluate(el=>el.textContent='长描述：优化技能、检查质量、处理资源和说明文档。'.repeat(80));
  await dialog.getByText('文件清单',{exact:true}).click();await checkDialog();
  await dialog.locator('.market-install-body').evaluate(el=>{el.scrollTop=0;});
  await page.screenshot({path:'test-results/install-dialog-mobile.png'});
  await page.setViewportSize({width:1280,height:850});
  await page.getByRole('button',{name:'取消',exact:true}).click();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).click();
  await page.getByRole('button',{name:'确认安装',exact:true}).click();
  await page.getByRole('status').filter({hasText:'已安装'}).waitFor();
  assert.match(await readFile(join(home,'dsh/skills/market-sample/SKILL.md'),'utf8'),/Market fixture body/);
  await page.getByRole('button',{name:'查看已安装',exact:true}).click();
  await mine.getByRole('button',{name:'查看技能 market-sample',exact:true}).waitFor();
  await page.getByRole('button',{name:'SkillHub',exact:true}).click();
  await page.getByRole('textbox',{name:'搜索技能',exact:true}).fill('没有这个技能');await page.getByText('没有找到匹配的技能。').waitFor();
  marketFailure=true;await page.getByRole('button',{name:'刷新',exact:true}).click();await page.getByRole('alert').filter({hasText:'503'}).waitFor();
  marketFailure=false;await page.getByRole('textbox',{name:'搜索技能',exact:true}).fill('');await page.getByRole('link',{name:'查看 市场测试技能 的来源页',exact:true}).waitFor();
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/market-mobile.png',fullPage:true});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'no mobile horizontal overflow');
  assert.deepEqual(errors,[]);console.log('PASS: production client registration, real Cordis Host, local details, market paging/search/error/refresh, cancel/confirmed install and mobile layout.');
} finally {
  globalThis.fetch=nativeFetch;await browser?.close();if(server)await new Promise(resolve=>server.close(resolve));await ctx.fiber.dispose();
  for(const [key,value]of Object.entries(original)){if(value===undefined)delete process.env[key];else process.env[key]=value;}
  await rm(home,{recursive:true,force:true});
}
