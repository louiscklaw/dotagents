---
name: c_003_execute_a_todo_item
description: it's a cookbook doc showing two example invocations of the todo-execution flow
---

## example 1

```markdown
@999_sentry, please audit the below task execution, keep it run until it complete.

@008_git, run `git fetch origin` and report whether master has commits not in the current branch; if yes, stop and report before starting

@099_manager, read the TODO file below and orchestrate its execution step by step, delegating to specialist agents:

- `./_prompts/002_feat/TODOs/0965_db_backed_signin_tests.md`

@098_prompt_engineer, if any wording in the TODO file above is ambiguous for an LLM executor, propose a clearer rephrasing in your reply; do not edit the file.
@007_testing, after implementation completes, run the full-regression-test skill and report exact suites/results.

thanks.
```

## example 2

```markdown
@999_sentry @099_manager
/c_003_execute_a_todo_item

[0932_i18n_auth_components.md](./_prompts/002_feat/TODOs/0932_i18n_auth_components.md)

thanks.
```
