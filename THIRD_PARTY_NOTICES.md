# Third-party notices

## WorkDSH

This project derives the skills manager, client views, UI helpers, type contracts,
and adapted regression tests from https://github.com/techflag/workdsh at commit
`e58137020fb4f5f863f551d8ae4234e6c3d355ea`.

Copyright (c) 2026 Anywhere Labs. MIT License; retained in `LICENSE`.

Changes in dsh-skills-master: standalone package/build, independent service/API/UI
and storage namespaces, removal of unrelated workbench/Office features, direct
SkillHub transport, staged/confirmed market installation, and independent tests.
This is an independently adapted plugin, not an official WorkDSH release.

## Bundled skill creator

The skill-creator method and Python helpers originate in the WorkBuddy adaptation
retained by WorkDSH under Apache-2.0. The original license and provenance remain
in `resources/skills/dsh-skills-master-skill-creator/LICENSE.workbuddy.txt` and
`NOTICE.md`. WorkDSH made the original Harness adaptation; this project changes
its package namespace and retains that attribution.

## Bundled runtime libraries

- yaml 2.9.0, ISC License: `LICENSES/yaml.txt`.
- fflate 0.8.3, MIT License: `LICENSES/fflate.txt`.

React and official DeepSeek Harness services/controls are supplied by the host,
not embedded as another framework/runtime in this plugin.

## Market data

SkillHub API and content are provided by https://skillhub.cn/ and Tencent/skillhub.
Endpoint interoperability was checked against the public API and the published
`@cocofhu/skillhub@0.2.16` implementation. No code from that package is bundled.
Each market skill keeps its own author, license and dependency requirements.
