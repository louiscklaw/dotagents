#!/usr/bin/env bash

set -ex

node ./build_agents.cjs
node ./build_commands.cjs

rsync -avh 003_source/skills 009_build/.codebuddy
rsync -avh 003_source/skills 009_build/.copilot
rsync -avh 003_source/skills 009_build/.opencode
rsync -avh 003_source/skills 009_build/.qoder
rsync -avh 003_source/skills 009_build/.zcode

rsync -avh 009_build/.codebuddy/ ~/.codebuddy
rsync -avh 009_build/.copilot/ ~/.copilot
rsync -avh 009_build/.opencode/ ~/.opencode
rsync -avh 009_build/.qoder/ ~/.qoder
rsync -avh 009_build/.zcode/ ~/.zcode

echo "done"
