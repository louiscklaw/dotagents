#!/usr/bin/env bash

set -ex

find ../master -mindepth 0 -maxdepth 5 \
    -type d \( -name "node_modules" -o -name ".next" \) \
    -prune -o -mindepth 0 -maxdepth 5 -type d -print \
    | grep -v volumes \
    | grep -v .docker-config \
    | grep -v node_modules \
    | grep -v 007_testing \
    | grep -v .swc \
    | grep -v .next \
    | grep -v .env \
    | grep -v .git 
