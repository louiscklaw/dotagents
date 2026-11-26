---
name: get-new-feat-ticket-number
description: Computes the next feature ticket number (NNNN, zero-padded) by scanning _prompts/002_feat/. Use before creating a new feature ticket.
---

# Get new feature ticket number

## Overview

Computes the next feature ticket number by scanning ticket specs directly inside `_prompts/002_feat/` and returning the highest numeric prefix plus one, zero-padded to at least four digits. Other ticket categories, TODO copies, archived tickets, and other prompt files are excluded.

## Behavior

When invoked, run this script from the project root:

```bash
./.agents/skills/get-new-feat-ticket-number/_get_new_ticket_number.sh
```

The script prints only the next feature ticket number (for example, `0964`). Reply to the user with that number.

## Edge cases

- No numbered feature tickets found → prints `0001`.
- Filenames without a leading numeric prefix are ignored.
- If the next number exceeds 9999, it is printed as-is (e.g. `10000`) — no wrap-around.
