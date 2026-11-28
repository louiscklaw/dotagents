#!/usr/bin/env bash

set -ex

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
export COPILOT_HOME="${WORKSPACE_DIR}/.github/memory"

mkdir -p "${COPILOT_HOME}"

copilot update

copilot --yolo \
    # --resume=df43a0c1-e278-4e18-83b8-d460649ccfb8
