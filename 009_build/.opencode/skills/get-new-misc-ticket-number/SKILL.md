---
name: get-new-ticket-number
description: Computes the next available ticket number (NNNN, zero-padded) by scanning the project's _prompts/ ticket folder. Use whenever a new ticket number is needed, e.g. before creating a new <NNNN>_<name>.md ticket file.
---

# Get new ticket number

## Overview

Computes the next free ticket number by scanning `_prompts/` (ticket files are named `<NNNN>_<name>.md`) and returning (highest NNNN) + 1, zero-padded to 4 digits.

## Behavior

When invoked, run this from the PROJECT ROOT (not from the skill directory):

```bash
./skills/get_new_ticket_number/_get_new_ticket_number.sh
```

1. The script prints a single line: the next ticket number (e.g. `1234`).
2. Reply to the user with that ticket number.

## Edge cases

- Empty `_prompts/` (no tickets yet) → prints `0001`.
- Filenames without a leading numeric prefix are ignored.
- If the next number exceeds 9999, it is printed as-is (e.g. `10000`) — no wrap-around.

## example / use case

> what is the ticket number if i want to generate ticket ?

Thinking
│ The user reloaded skills and asks: "what is the ticket number if i want to
│ generate ticket?"
│ This matches the `get_new_ticket_number` skill — the user wants the next ticket
│ number. I should invoke the skill via the Skill tool.
▪ Skill "get\*new_ticket_number"
└ Skill get_new_ticket_number activated.

Thinking
│ The skill is loaded. Per the skill instructions, run the script from the project
│ root.
▪ Bash(./.qoder/skills/get_new_ticket_number/\_get_new_ticket_number.sh)
└ 0915

▪ Your next ticket number is 0915 — the new ticket file would be
\_prompts/0915\*<name>.md.
