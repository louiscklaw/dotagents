#!/usr/bin/env zsh

ls -l **/feat/**/{node_modules,.next,.swc}/**
# ls -l **/feat/**/*.log

rm -rf **/feat/**/{node_modules,.next,.swc}/**

echo "done"