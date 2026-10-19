import { fileURLToPath } from 'node:url';
import type { Context } from '@deepseek-ai/cordis';
import type {} from '@deepseek-ai/dsh-skill';
import type {} from '@deepseek-ai/dsh-client-connection';
import type {} from '@deepseek-ai/dsh-tools';
import { skillCreatorContent, skillCreatorMeta } from './authoring/professional.js';
import { SkillManager, type SkillManagerOptions } from './services/manager.js';
import { registerSkillManagementConnection } from './services/connection-api.js';
import { registerMarketConnection } from './services/market.js';
import { registerSkillLifecycleTools } from './services/lifecycle-tools.js';

export * from './services/manager.js';
export * from './shared.js';
export { registerSkillManagementConnection } from './services/connection-api.js';
export { registerSkillLifecycleTools } from './services/lifecycle-tools.js';

export const name = 'dsh-skills-master';
export const inject = ['skills', 'connection', 'tools'];

export { skillCreatorContent } from './authoring/professional.js';

export function applySkillsHost(ctx: Context, options: SkillManagerOptions = {}): void {
  new SkillManager(ctx, options);
  registerSkillManagementConnection(ctx);
  registerMarketConnection(ctx);
  registerSkillLifecycleTools(ctx);
  ctx.effect(() => ctx.skills.register({
    ...skillCreatorMeta,
    source: 'bundled',
    content: skillCreatorContent,
    resourceBase: { kind: 'directory', path: fileURLToPath(new URL('../resources/skills/dsh-skills-master-skill-creator', import.meta.url)) },
  }));
}

export const apply = applySkillsHost;
