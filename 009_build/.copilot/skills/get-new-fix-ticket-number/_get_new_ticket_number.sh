#!/usr/bin/env bash
# Print the next globally available ticket number across active ticket specs.
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
prompts_dir="$(cd "$script_dir/../../.." && pwd)/_prompts"

max=0
for f in "$prompts_dir/003_fix"/*_*.md; do
  [ -f "$f" ] || continue
  n="${f##*/}"
  n="${n%%_*}"
  case "$n" in
    ''|*[!0-9]*) continue ;;
  esac
  n=$((10#$n))
  if [ "$n" -gt "$max" ]; then max="$n"; fi
done

printf '%04d\n' "$((max + 1))"
