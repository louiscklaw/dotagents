#!/usr/bin/env bash

set -ex

# node ./build_agents.cjs
# node ./build_commands.cjs

rsync -avh 003_source/skills 009_build/.codebuddy
rsync -avh 003_source/skills 009_build/.copilot
rsync -avh 003_source/skills 009_build/.opencode
rsync -avh 003_source/skills 009_build/.qoder

echo "done"
