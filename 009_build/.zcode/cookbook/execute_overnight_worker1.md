---
name: execute_overnight_worker1
---

## execute_overnight_worker1.md

```markdown
@999_sentry @099_manager

please parse the `md` files in `./_prompts/001_tasks/overnight-worker1-plan.md`

list the task need to do to the todo-list. Then execute it one by one.

you will update the ticket status on every ticket done.

finally, you will write a report describe what you've done and you will it as the last step of your todo list.

- loc: `_prompts/001_tasks/_logs/2026-12-22`
- reference: `_prompts/001_tasks/_logs/2026-12-21`
- file: `overnight-worker1.log.md`
- file: `overnight-worker1-report.md`

## FAQ

This FAQ defines decisions for authoring `overnight-worker#.md` task files and for autonomous implementation sessions.

**Q: May the agent run Git operations such as commit or merge without asking the user?**
**A: Yes.** The agent should:

- Complete the requested implementation.
- Run the full regression tests and make a best effort to ensure they pass.
- Commit the code changes with a clear, meaningful commit message.
- Leave the worktree available for the user to collect or review the next day.
- Do not ask the user for confirmation before performing Git operations such as commits or merges.
- Leave rebasing and final branch integration to the user unless the task explicitly requires the agent to perform those operations.

**Q: If i in doubt, should i ask the user?**
**A: No. you should not** You can carry on to the next ticket and alert user the outstanding ticket in the final report.

**Q: Do i need to jod the log task by task?**
**A: Yes** you will jod the log and save it to the directory same as report. one `md` file per ticket.
```
