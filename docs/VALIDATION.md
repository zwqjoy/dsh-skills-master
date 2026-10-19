# Validation — 2026-10-19

Baseline: Node 22.23.1; official Harness services 0.2.1-rc.2; Cordis 4.0.5.

- Build and TypeScript: passed.
- 18 regression tests: passed. Includes local editing/conflicts, unsafe path and symlink refusal, official skill watcher behavior, import/restart persistence, dependency-aware recoverable uninstall, Host activation/removal/recovery and route cleanup.
- Browser integration: passed using the distributed Client registration bundle, official React controls, actual Cordis/Skills/Tools/filesystem services, and a test Connection carrier. Checked local details, market search/pagination/error/retry, cancel before installation, confirmed installation to disk, installed listing, and 390px layout. Market results and downloads in this browser suite are fixtures.
- Live SkillHub: passed with `find-skills-enhanced@1.3.0`, 3 files. Queried the real public API, downloaded its real archive, verified preflight did not install, confirmed installation, then uninstalled and restored it in a temporary isolated Home. The temporary directory was removed.
- Packed artifact: passed. Extracted the tgz, loaded its Host with shared official peer modules, activated all four routes, read the packaged skill-creator resource and disposed the routes cleanly. No source workspace package is required at runtime.
- No existing user Profile or skill files were changed.
- User's installed Harness Desktop: installation, restart, real sidebar loading, and persistence across App restarts remain unverified. Browser/Host checks do not substitute for this layer.

Reproduce with the commands in README. CI runs deterministic checks; live network verification is a separate explicit command.

## 0.1.1 dialog layout fix

Confirmed market-install title/body padding, right-aligned fixed action area, long-description scrolling and file-list expansion at 390 x 640. Production Client/browser regression and archive activation checks pass. User Desktop screenshot supplied the defect evidence; post-update Desktop verification remains pending.

## 0.1.2 readonly skills

Readonly cards and details show an explicit builtin/readonly badge instead of a disabled switch. Clicking the badge opens the actual instructions returned by the official skill registry. Browser verification checks the builtin creator body, absence of switches/edit controls, and the continued availability of the local skill toggle. The Host regression also checks that readonly content is exposed while mutations remain rejected. All 18 tests and browser/package checks passed. Desktop App update verification remains pending.
