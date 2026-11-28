# dotagents

A personal collection of AI agent, command, and skill definitions — authored once, usable everywhere.

The guiding principle is to be **agent agnostic and LLM agnostic**. Definitions are plain Markdown, so the same agent prompt can be used with different AI coding tools and different models. Tool- or model-specific settings live in separate overlay files instead of being baked into the prompt.

The workflow is simple: keep **one canonical source** for every agent, slash command, and skill, then generate tool-specific output from it. No more copy-pasting the same prompt into five different config folders.

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/louiscklaw/dotagents.git
cd dotagents

# 2. Build the generated output (requires Node 22+ and npx prettier)
./build.sh
```

That's it. `build.sh` generates the agents, commands, and skills into `009_build/` and syncs them into the matching `~/.<tool>/` folders on your machine. If you prefer, you can also copy the folder for your tool from `009_build/` into your project manually — the files are ready to use as-is.

## What's inside

- **Agents** — specialized sub-agents (77 and counting), from docs and Docker to QA, Git workflows, prompt engineering, and language-specific experts.
- **Commands** — reusable slash commands for planning, ticketing, committing, auditing, and more.
- **Skills** — packaged workflows such as regression testing, git release, agent listing, and ticket-number helpers.

The usable output for the LLM lives in [`009_build/`](009_build/): `<tool>/{agents,commands,skills,instructions}/`.

## Repository layout

```
003_source/          # canonical definitions (plain Markdown) — edit these
   agents/           # agent .md files (frontmatter + prompt body)
   commands/         # command .md files
   skills/           # skill directories
   memory/           # memory templates

008_tools_customize/ # per-tool / per-model frontmatter overlays
   <tool>/agents/frontmatter/<name>.md
   <tool>/commands/frontmatter/<name>.md

009_build/           # generated, checked-in output — ready to use
   <tool>/{agents,commands,skills,instructions}/
```

Source frontmatter and tool-specific overlays are kept separate on disk and merged **only into the generated output** (source first, overlay second). That is what keeps the collection agent/LLM agnostic: the same agent can carry different settings — for example `permissionMode: acceptEdits` in CodeBuddy, or a different `model` in ZCode — without duplicating the prompt.

Generated files carry a two-line "managed code / do not modify directly" header. Always edit `003_source/` plus the matching overlay in `008_tools_customize/`, then rebuild.

## Supported tools

Output is generated for multiple tools, including:

- CodeBuddy (`.codebuddy`)
- GitHub Copilot (`.copilot`)
- OpenCode (`.opencode`)
- Qoder (`.qoder`)
- ZCode (`.zcode`)

## Building

Requirements: a modern Node.js with `fs.globSync` (Node 22+) and `prettier` available via `npx`.

```bash
./build.sh                  # full build: agents + commands + skills, then sync to ~/
node build_agents.cjs       # generate agent files for every tool
node build_commands.cjs     # generate command files for every tool
```

`build.sh` runs both Node build scripts, copies `003_source/skills` into each tool's build directory, and rsyncs the generated `009_build/<tool>/` output into the matching `~/.<tool>/` folder so the definitions are ready to use.

For watch mode during development, the `package.json` scripts (`build_agents`, `build_commands`) wrap the build scripts in `npx nodemon`.

> Note: `npm test` is currently a placeholder and always exits non-zero — there is no test suite yet.

## Conventions

- Never edit `009_build/` directly — edit `003_source/` and the matching `008_tools_customize/` overlay, then regenerate.
- Keep `name` / `description` frontmatter in the source file; put tool-specific settings (including model choices) in overlay frontmatter files.
- Run all three build steps (`build_agents.cjs`, `build_commands.cjs`, `build.sh`) so outputs stay in sync across tools.

## License

ISC
