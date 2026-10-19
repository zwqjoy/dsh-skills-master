import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Input } from '@deepseek-ai/dsh-client-ui-primitives';
const primitives = { Button, Input };
const modules: Record<string, unknown> = { react: React, '@deepseek-ai/dsh-client-ui-primitives': primitives };
const entries: any[] = [];
const ctx = {
  effect: (setup: Function) => setup(),
  slots: { inject: (_name: string, setup: Function) => setup(), register: (options: any, component: any) => { entries.push({options,component}); return () => {}; }, entriesOfSlot: (name: string) => entries.filter(entry => entry.options.name === name) },
  layout: { toggleSidebar() {}, selectPanel() {} },
  sessions: { list: { getSnapshot: () => ({byId:{}}) }, create: async () => 'test-session', scope: () => undefined },
  workspaces: { list: { getSnapshot: () => ({items:[{workspaceId:'fixture',path:'/tmp/fixture',sessionIds:[]}]}) } },
  remote: { session: { openWorkspacePath: async () => ({ok:true}) } }, uiWorkspace: {openSession() {}},
};
(window as any).__ModuleLoader__ = { load({id, factory}: any) {
  if (id !== 'dsh-skills-master') throw new Error('Wrong module identity');
  const client = factory((name: string) => { if (!(name in modules)) throw new Error(`Unexpected external: ${name}`); return modules[name]; });
  client.apply(ctx);
  const main = entries.find(entry=>entry.options.name==='main');
  createRoot(document.getElementById('root')!).render(React.createElement(main.component, main.options.inject()));
} };
