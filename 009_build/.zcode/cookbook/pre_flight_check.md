---
name: pre_flight_check
description: pre-flight risk check before executing an overnight autonomous plan — specialist agents inspect the plan file and report blocking risks
---

## pre_flight_check

```markdown
@005_review, inspect `_prompts/001_tasks/overnight-worker1-plan.md` and flag technical, path, and environment risks.
@098_prompt_engineer, inspect the same plan file and flag wording an LLM executor could misread.
@099_manager, collect both reviews and return one consolidated risk list.

Context: I (the user) will execute `_prompts/001_tasks/overnight-worker1-plan.md` as written, with tasks running one at a time, sequentially, and stopping on failure unless the plan file states otherwise.

For each risk in the list, state:
- the triggering condition (what makes it fire)
- the impact (which tasks it blocks or aborts)

Reference context — the FAQ below defines standing decisions for authoring `overnight-worker<N>-plan.md` task files (N = 1, 2, …) and for autonomous implementation sessions. It is context for this review, not a request to execute.

## FAQ

**Q: May the agent run Git operations such as commit or merge without asking the user?**
**A:** Yes, with this split of authority.

Sequence for an autonomous implementation session:
- Complete the requested implementation.
- Run the full regression suite; if any test fails, attempt fixes.
- Do not commit while any test is red. If failures cannot be resolved, stop and leave a report in the worktree.
- Commit the code changes with a clear, meaningful commit message.
- Leave the worktree available for the user to collect or review the next day.

Standing rules:
- Do not ask the user for confirmation before committing.
- Leave rebasing and merges into the trunk (final branch integration) to the user, unless the plan file explicitly assigns those operations to the agent.

thanks.
```
