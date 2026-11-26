# AGENTS

Guidance for working in the `dotagents` repository: a collection of AI agent, command, and skill definitions authored once and compiled into multiple tool-specific formats.

## Build commands

- `node build_agents.cjs` — generate agent files for every tool into `009_build/`, then run prettier over the output.
- `node build_commands.cjs` — generate command files for every tool into `009_build/`, then run prettier over the output.
- `./build.sh` — copy `003_source/skills` into each tool's build directory with `rsync` (script uses `set -ex`).
- `node get_frontmatter.cjs` — bootstrap helper that copies the leading `---` frontmatter block of each source agent into `008_tools_customize/<tool>/agents/frontmatter/`. It targets `.codebuddy`, `.copilot`, and `.opencode` only (not `.qoder`).
- `npx prettier --write ./009_build` — formatting step invoked automatically at the end of both node build scripts.

Notes:

- The `package.json` scripts `build_agents` / `build_commands` / `build_skills` run the scripts under `npx nodemon` (watch mode). `build_skills` references a missing `build_skills.cjs`; use `./build.sh` for skills instead.
- `npm test` is a placeholder that always exits non-zero — there is no test suite.
- Requires a modern Node with `fs.globSync` (Node 22+) and access to prettier via npx. No `node_modules` is committed.

## Architecture

Single-source-of-truth, compiled-output layout:

- `003_source/` — canonical definitions (edit these).
  - `agents/` — roughly 79 agent `.md` files, each a YAML frontmatter block (`name`, `description`) followed by a prompt body.
  - `commands/` — roughly 21 command `.md` files; bodies use `$ARGUMENTS` and frontmatter is optional.
  - `skills/` — 6 skills, each a directory containing `SKILL.md` (some also include shell scripts).
  - `memory/` — memory templates (`.gitkeep`, `helloworld.md`).
- `008_tools_customize/` — per-tool frontmatter overlays only, at `<tool>/{agents,commands}/frontmatter/<name>.md`. Source and overlay frontmatter stay separate on disk and are merged only into the generated output. Example: the CodeBuddy overlays set `permissionMode: acceptEdits`.
- `009_build/` — generated, checked-in output laid out as `<tool>/{agents,commands,skills,instructions}/`. Each generated file carries a two-line "managed code / do not modify directly" HTML comment header.

Target tools are hardcoded as `TOOLS_NAME` in each build script: `.codebuddy`, `.qoder`, `.copilot`, `.opencode`. Note that `get_frontmatter.cjs` excludes `.qoder`.

## Conventions

- Never edit `009_build/` directly; edit `003_source/` plus the matching `008_tools_customize/` overlay, then regenerate.
- Keep `name` / `description` frontmatter in the source file; put tool-specific settings in the overlay frontmatter files (they are merged in order: source first, overlay second).
- Run all three build steps (`build_agents.cjs`, `build_commands.cjs`, `build.sh`) so outputs stay in sync across tools.
- `*.del` files are archived old build scripts and are gitignored; do not use them as a reference.
