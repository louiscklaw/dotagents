#!/usr/bin/env bash

set -ex

codebuddy update

# codebuddy --permission-mode auto -c
codebuddy \
    --permission-mode auto \
    --resume=01a2210b-3b92-7304-8a96-e014e709bd3d

# bypassPermissions
