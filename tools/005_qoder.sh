#!/usr/bin/env bash

set -ex

qoder update

qoder \
    --permission-mode auto \
    # --resume cf03a217-6548-40f2-8f43-2eed510e2229

# bypassPermissions
