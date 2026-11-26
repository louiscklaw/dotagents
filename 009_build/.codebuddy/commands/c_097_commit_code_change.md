---
# /home/logic/_wsl_workspace/001_github_ws/dotagents/008_tools_customize/.codebuddy/commands/frontmatter/c_097_commit_code_change.md
description: git commit code change
subtask: true
agent: 008_git
---

<!--  this code managed by git@github.com:louiscklaw/dotagents.git -->
<!-- do not modify this file directly, defined by /home/logic/_wsl_workspace/001_github_ws/dotagents/003_source/commands/c_097_commit_code_change.md -->

@008_git

please commit your code change with comments thanks.

- **Commit Style**: Commits follow a structured prefix convention:
  - `feat:` New features
  - `fix:` Bug fixes
  - `chore:` Routine maintenance
  - `config:` Configuration changes
  - `docs:` Documentation updates
  - `infra:` Infrastructure/Docker changes
  - `docs:`
  - `tui:`
  - `core:`
  - `ci:`
  - `ignore:`
  - `wip:`

For anything in the packages/web use the docs: prefix.

For anything in the packages/app use the ignore: prefix.

prefer to explain WHY something was done from an end user perspective instead of
WHAT was done.

do not do generic messages like "improved agent experience" be very specific
about what user facing changes were made

if there are changes do a git pull --rebase
if there are conflicts DO NOT FIX THEM. notify me and I will fix them
