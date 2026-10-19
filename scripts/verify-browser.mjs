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
let marketFailure = false;
globalThis.fetch = async (url, options) => {
  if (!String(url).startsWith('https://api.skillhub.cn/')) return nativeFetch(url,options);
  if (marketFailure) return new Response('',{status:503});
  if (String(url).includes('/download?')) return new Response(bytes);
  const u = new URL(String(url)); const keyword=u.searchParams.get('keyword');
  const items=keyword==='没有这个技能'?[]:Array.from({length:24},(_,i)=>({slug:i===0?'market-sample':`sample-${i}`,name:i===0?'市场测试技能':`技能示例 ${i}`,description:'清晰的技能说明，可查看来源后确认安装。',version:'1.0.0',category:'productivity'}));
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
        res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));return;
      }
      res.setHeader('Content-Type','text/html');res.end(`<!doctype html><html lang="zh"><meta charset="utf-8"><link rel="stylesheet" href="/entry.css"><style>:root{--dsw-alias-bg-base:#faf9f6;--dsw-alias-bg-layer-1:#fff;--dsw-alias-bg-layer-2:#f6f5f2;--dsw-alias-bg-layer-3:#eeeae5;--dsw-alias-label-primary:#272522;--dsw-alias-label-secondary:#666;--dsw-alias-label-tertiary:#77736c;--dsw-alias-border-l2:#dedbd5;--dsw-alias-brand-primary:#d97858;--dsw-alias-brand-text:#b65738;--dsw-alias-state-success-primary:#26a269;--dsw-alias-state-error-primary:#b42318;--dsw-alias-button-primary-fill:#d97858;--dsw-alias-label-primary-inverted:#fff;--dsw-alias-bg-mask-2:#0007;--dsw-elevation-prominent:0 12px 60px #0003}*{box-sizing:border-box}body{margin:0}#root{height:100vh}button,input{font:inherit}button{cursor:pointer}button:disabled{cursor:default;opacity:.5}</style><div id="root"></div><script src="/entry.js"></script><script src="/client.js"></script></html>`);
    }catch(error){res.writeHead(500);res.end(String(error));}
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  browser=await chromium.launch({headless:true, ...(existsSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome') ? {channel:'chrome'} : {})});const page=await browser.newPage({viewport:{width:1280,height:850}});const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  await page.getByRole('button',{name:'查看技能 local-sample',exact:true}).click();
  await page.getByText('LOCAL_FIXTURE_BODY',{exact:false}).waitFor();
  await page.getByRole('button',{name:'关闭',exact:true}).click();
  await page.getByRole('button',{name:'SkillHub',exact:true}).click();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).waitFor();
  await page.screenshot({path:'test-results/market-desktop.png',fullPage:true});
  await page.getByRole('button',{name:'下一页',exact:true}).click();await page.getByText('第 2 / 2 页').waitFor();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).click();
  await page.getByRole('dialog',{name:'确认安装 SkillHub 技能'}).waitFor();
  assert.equal((await ctx.dshSkillsMaster.list()).some(row=>row.name==='market-sample'),false);
  await page.getByRole('button',{name:'取消',exact:true}).click();
  await page.getByRole('button',{name:'安装 市场测试技能',exact:true}).click();
  await page.getByRole('button',{name:'确认安装',exact:true}).click();
  await page.getByRole('status').filter({hasText:'已安装'}).waitFor();
  assert.match(await readFile(join(home,'dsh/skills/market-sample/SKILL.md'),'utf8'),/Market fixture body/);
  await page.getByRole('button',{name:'查看已安装',exact:true}).click();
  await page.getByRole('button',{name:'查看技能 market-sample',exact:true}).waitFor();
  await page.getByRole('button',{name:'返回全部技能',exact:true}).click();
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
