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
