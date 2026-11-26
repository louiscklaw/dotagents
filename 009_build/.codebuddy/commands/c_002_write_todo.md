---
# /home/logic/.agents/008_tools_customize/.codebuddy/commands/frontmatter/c_002_write_todo.md
description: /c_002_write_todo (NO_ARGUMENTS, will use 010_ticket_manager to handle)
agent: 010_ticket_manager
---

<!--  this code managed by git@github.com:louiscklaw/dotagents.git -->
<!-- do not modify this file directly, defined by /home/logic/.agents/003_source/commands/c_002_write_todo.md -->

# write todo

please parse the plan above. it contains the implementation plan for a software project.

pick a title (`###_topic`), it will be the filename of the TODO `md` file.

when you mention a file. put the full-path of the file. (e.g. `./<full_path>`)
please list the task (e.g. `T1`,`T2` ...) with status details and remarks(as a placeholder).

please save the plan above to `./_prompts/002_feat/TODOs/<###_topic>.md` for feature tickets, or `./_prompts/003_fix/TODOs/<###_topic>.md` for fix tickets, for the task(s) easy tracking across session(s).

# Reference/History

there are directories named `./_prompts/002_feat/TODOs/_history` and `./_prompts/003_fix/TODOs/_history` that contain the ticket issued in the past.
they may be a good reference.

thanks.

# how to use shown when user asked

show user `/c_002_write_todo`
