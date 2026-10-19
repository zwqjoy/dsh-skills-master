# dsh-skills-master

独立的 DeepSeek Harness 技能管理与 SkillHub 市场插件。基于 [WorkDSH](https://github.com/techflag/workdsh) 的技能模块提取适配，不需要安装 WorkDSH 工作台或额外的 SkillHub 插件。

## 功能

宿主或插件提供的技能显示「内置 · 只读」，点击标识或技能名称可查看说明正文；只读技能不显示启停开关，也不开放编辑和卸载。只读不表示已停用。

- **本地技能**：搜索、查看完整 SKILL.md 和资源、编辑文本、启用/停用、批量管理。
- **技能市场**：浏览 SkillHub、关键词搜索、分页、查看来源及版本。
- **分类与排序**：12 个中文分类，可与搜索组合；支持综合评分、下载量、最近更新、收藏量，均由 SkillHub 对全目录筛选排序。分类栏可横向滚动，切换条件回到第一页。
- **技能数据**：卡片展示来源返回的下载量、收藏数及更新时间，大数显示为“万”；缺失数据标为未提供，不伪造统计值。默认按综合评分排序。
- **确认安装**：下载后先预检并展示文件清单，再由用户确认安装；拒绝同名覆盖。
- **导入**：上传 `.zip` 或 `.md`，校验目录越界、体积、文件数和技能元数据。
- **可恢复卸载**：卸载进入插件回收站，可恢复。
- **创建技能**：内置 `dsh-skills-master-skill-creator`，通过原生会话创建与优化技能；创建入口只填入草稿，不自动发送。

保留 Harness 官方技能发现与执行机制，市场技能不在安装时执行脚本。市场内容由 SkillHub 提供，具体依赖和许可证以来源页为准。

## 安装到 Harness App

当前适配基线：**Harness `0.2.1-rc.2`、Cordis `4.0.5`、Node.js `22.19+`**。其他版本尚未验证。

### 本地目录

1. 克隆本仓库。仓库已包含 `dist/`，安装使用不需要先构建。
2. 在 Harness App 中打开 **插件 → 添加插件 → 安装第三方插件**。
3. 输入本仓库目录的绝对路径（包含 `package.json` 的目录），安装并启用，按 App 提示重启。
4. 在侧栏打开 **技能市场**，切换“本地技能 / SkillHub”。

本地目录安装后请保留该目录。Electron 管理的 `desktop` Profile 应通过 App 安装，不通过 CLI 修改。

如果此前安装了 `@michengai/dsh-skills-manager`，可先保留它；本插件使用独立入口及 API。为避免两个管理页面同时修改技能，建议确认本插件可用后再停用旧管理器。不会自动卸载或停用其他插件。

### 独立 Web Profile

```sh
dsh plugin --profile <你的WebProfile> add /absolute/path/dsh-skills-master-0.2.1.tgz
```

也可以在支持 GitHub 来源安装的插件管理器填写：

```text
github:zwqjoy/dsh-skills-master
```

GitHub 安装路径尚未在用户的 Desktop App 内验收；本地目录及 tgz 是本轮提供的安装产物。

## 更新后分类或排序没变化

如果能看到新控件，但分类仍返回全站数据、统计全部为空，可能是 Client 已刷新而 Host 仍保留旧模块。请先完成当前运行任务，然后 **完全退出 Harness App，再重新打开**；仅刷新页面不会重启 Host。v0.2.1 会校验市场接口版本及筛选参数，不再把旧响应误显示为成功结果。

## 数据位置

遵循当前运行 Host 的 `DSH_HOME`、`DSH_AGENTS_HOME`。未指定时分别使用 `~/.dsh`、`$DSH_HOME/agents`。

- 市场安装：`$DSH_HOME/skills/<SKILL.md中的name>/`。
- 上传技能：可选当前 Profile 或 Agents 共享范围。
- 共享技能：`$DSH_AGENTS_HOME/skills/`。
- 停用、回收、草稿、导入记录：`$DSH_AGENTS_HOME/.dsh-skills-master-{disabled,trash,state}/skills/`。

“当前 Profile”沿用上游安装范围命名，实际隔离取决于 Host 配置的 `DSH_HOME`。官方 Skill provider 决定会话是否发现这些目录；插件不另造执行目录，也不保证停用后已运行任务立即卸载其上下文。

卸载本插件保留技能和管理数据；卸载某个技能才会把它移入可恢复回收站。

## 开发和打包

```sh
npm ci --legacy-peer-deps
npm run build
npm run typecheck
npm test
npx playwright install chromium
npm run test:browser
npm run test:package
npm pack
```

浏览器验证使用实际构建的 Client、原生 React 控件和真实 Cordis/Skills/Tools/文件系统服务；提供测试连接承载及可重复的市场数据，不启动用户的 Desktop Profile。截图生成到 `test-results/`。

真实 SkillHub 联网探测另见：

```sh
npm run test:live
```

它只写临时隔离目录，验证真实目录、下载、确认安装和卸载恢复，不会更改你的技能。

## 来源与范围

提取自 WorkDSH 固定提交，详见 [UPSTREAM.json](UPSTREAM.json) 和 [第三方声明](THIRD_PARTY_NOTICES.md)。保留上游 MIT 版权、内置创建技能的 Apache-2.0 许可证及说明。

本插件只提供技能管理，不附带 WorkDSH 专家、连接器、Office、企业账号或工作台。桌面 App 内安装、重启与持久化验收需要单独完成；自动化浏览器通过不能替代 Desktop 验收。
