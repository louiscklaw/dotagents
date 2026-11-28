#!/usr/bin/env bash

set -ex

echo "# ticket and their status "

grep -ri "^status:" ./002_feat/*.md
grep -ri "^status:" ./003_fix/*.md


echo "done"
