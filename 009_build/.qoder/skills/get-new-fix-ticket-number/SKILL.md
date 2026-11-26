---
name: get-new-fix-ticket-number
description: Computes the next globally available ticket number (NNNN, zero-padded) across active feature, fix, and misc tickets. Use before creating a new fix ticket.
---

# Get new fix ticket number

## Overview

This skill scans active fix ticket specs directly inside `_prompts/003_fix/` and returns the highest number plus one, zero-padded to at least four digits. Feature and misc tickets, TODO copies, archived tickets, and other prompt files are excluded.

## Behavior

When invoked, run this script from the project root:

```bash
./.agents/skills/get-new-fix-ticket-number/_get_new_ticket_number.sh
```

The script prints only the next ticket number (for example, `0965`). Reply to the user with that number.

## Edge cases

- No numbered fix tickets found → prints `0001`.
- Filenames without a leading numeric prefix are ignored.
- If the next number exceeds 9999, it is printed as-is (e.g. `10000`) — no wrap-around.
