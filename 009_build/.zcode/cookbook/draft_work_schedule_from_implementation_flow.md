---
name: draft_work_schedule_from_implementation_flow
---

## draft_work_schedule_from_implementation_flow.md

```markdown
@099_manager @005_review

please parse `./_prompts/001_tasks/_implementation_flow.md`.
list the ticket one by one with path and status.
with reference to the `_prompts/_template/OVERNIGHT-WORKER-PLAN.md`.
design the implementation flow and put them in `./_prompts/001_tasks/overnight-worker1-plan.md`.

@098_prompt_engineer /c_901_optimize_ticket

## FAQ

This FAQ defines decisions for authoring `overnight-worker#_plan.md` task files and for autonomous implementation sessions.

**Q: May the agent run Git operations such as commit or merge without asking the user?**
**A: Yes.** The agent should:

- Complete the requested implementation.
- Run the full regression tests and make a best effort to ensure they pass.
- Commit the code changes with a clear, meaningful commit message.
- Leave the worktree available for the user to collect or review the next day.
- Do not ask the user for confirmation before performing Git operations such as commits or merges.
- Leave rebasing and final branch integration to the user unless the task explicitly requires the agent to perform those operations.
```
