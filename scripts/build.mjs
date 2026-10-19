import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
const content = await readFile('resources/skills/dsh-skills-master-skill-creator/SKILL.md', 'utf8');
await writeFile('src/authoring/professional.ts', `// Generated from resources; do not edit by hand.\nexport const skillCreatorMeta = { name: 'dsh-skills-master-skill-creator', description: '创建、编辑和管理 Harness 技能' };\nexport const skillCreatorContent = ${JSON.stringify(content)};\n`);
await build({ entryPoints: ['src/index.ts'], outfile: 'dist/index.js', bundle: true, format: 'esm', platform: 'node', target: 'node22', external: ['@deepseek-ai/*'], banner: { js: "import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);" } });
const client = await build({ entryPoints: ['src/client.tsx'], bundle: true, write: false, format: 'cjs', platform: 'browser', target: 'es2022', external: ['react', 'react/jsx-runtime', '@deepseek-ai/dsh-client-ui-primitives'] });
await writeFile('dist/client.browser.js', `window.__ModuleLoader__.load({id: 'dsh-skills-master', factory: function(require) {\nconst module = {exports: {}};\n${client.outputFiles[0].text}\nreturn module.exports;\n}});\n`);
console.log('Built independent Host and Client bundles.');
