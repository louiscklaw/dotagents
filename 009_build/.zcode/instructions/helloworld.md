---
title: zcode_instructions
---

# zcode notes for overnight worker

## design / collect / summarize

```markdown
@099_manager @005_review

please parse below ticket and remember their status .
put the ticket without `done` status.
design the implementation flow and put them in `./_prompts/001_tasks/_implementation_flow.md`.
beware the Dependencies.

- `_prompts/002_feat`
- `_prompts/003_fix`
- `_prompts/004_misc`
```

## from implementation flow, draft work schedule

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

## pre-fright check

```markdown
@099_manager @005_review @098_prompt_engineer

please inspect `./_prompts/001_tasks/overnight-worker1-plan.md`.

I am expected to execute as stated in the `md` file.
given that the task executed one by one(sequencially order).
list me the chance(s) that will block the whole process(whole `md` file)

## FAQ

This FAQ defines decisions for authoring `overnight-worker#-plan.md` task files and for autonomous implementation sessions.

**Q: May the agent run Git operations such as commit or merge without asking the user?**
**A: Yes.** The agent should:

- Complete the requested implementation.
- Run the full regression tests and make a best effort to ensure they pass.
- Commit the code changes with a clear, meaningful commit message.
- Leave the worktree available for the user to collect or review the next day.
- Do not ask the user for confirmation before performing Git operations such as commits or merges.
- Leave rebasing and final branch integration to the user unless the task explicitly requires the agent to perform those operations.
```

## Ensure the TODOs file exist

```markdown
@099_manager
/c_001_make_a_plan_from_ticket_worktree

[0932_i18n_auth_components.md](./_prompts/002_feat/0932_i18n_auth_components.md)

@098_prompt_engineer
/c_901_optimize_ticket
```

## Execute, overnight-worker1

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

---

## reporting

```
please draft a report with ticket status to [overnight-worker1.log.md](./_prompts/001_tasks/overnight-worker1.log.md) thanks
```

@099_manager

please schedule the below according to their dependencies.

# Implementation Flow for 2026-11-20

- `002_feat/0932_i18n_auth_components.md`
- `002_feat/0933_order_create_submit_loading_fix.md`
- `002_feat/0934_products_button_pagination_fixes.md`
- `002_feat/0935_layout_config_i18n.md`
- `002_feat/0936_customer_detail_i18n.md`
- `002_feat/0937_add_shipping_address_button.md`
- `002_feat/0938_billing_details_edit_button.md`
- `002_feat/0939_customer_status_selector.md`
- `002_feat/0940_customers_delete_confirm_loading_fix.md`
- `002_feat/0941_customer_avatar_upload_display_fix.md`
- `002_feat/0942_customer_timezone_iana_options.md`
- `002_feat/0943_customer_language_options.md`
- `002_feat/0944_customer_currency_options.md`
- `002_feat/0945_customer_create_i18n.md`
- `002_feat/0946_customer_detail_delete_button.md`
- `003_fix/0009_e2e_testing_helloworld.md`
- `003_fix/0010_api_testing_helloworld.md`

please save your generated flow to `_prompts/001_tasks/_implementation_flow.md`

@098_prompt_engineer
/c_905

it is expected to run overnight alone. so please do not make block decisions occur(e.g. awake user for git merging.)

---

## review log

```markdown
@099_manager

plesae review log files `./_prompts/001_tasks/_logs/2026-12-21/overnight-worker1-report.md`
imagine there are two ROLES. they are AI, human.

please consider below matrix:

- role (AI, human)
- completed ticket
- outstanding ticket

plesae simplify list them with a table thanks
```

---

```markdown
@999_sentry please audit the whole process and make it complete. thanks.

@099_manager

plesae review log files `./_prompts/001_tasks/_logs/2026-12-21/overnight-worker1-report.md`

@007_testing, please check to see if the expected regression test were exist. dispatch `098_prompt_engineer` if didn't.

@098_prompt_engineer, plesae draft the ticket to create the regression test for features/bug-fix.

please show me the ticket created in a list with ticket number and titles

thanks.

## FAQ

Q: For the ticket workflow, which order should I run?
A: Plan then optimize
```

# /c_003_execute_a_todo_item

```markdown
@999_sentry please audit the below process and make it complete.

@008_git please fetch from master branch to see if updated before this ticket operation(s)

@099_manager please organize to implement below feat:

- `./_prompts/002_feat/TODOs/0932_i18n_auth_components.md`

@007_testing run full regression test to validate there is no regression from this code-work.

@098_prompt_engineer please re-phase if the task above for llm easier to understand.

thanks.
```

```markdown
@999_sentry @099_manager
/c_003_execute_a_todo_item

[0932_i18n_auth_components.md](./_prompts/002_feat/TODOs/0932_i18n_auth_components.md)

thanks.
```

````markdown
@099_manager

Hi, i want to

example, helloworld and POC:

- `http://localhost:3000/auth/custom/sign-in`
- `003_source/app/src/components/auth/custom/sign-in-form.js`

changing:

static text

```plain
"Don&apos;t have an account?"
```

becomes

```js
{
  t("auth:common.actions.signIn");
}
```

please apply the `i18n` to the below `js`:

- `master/003_source/app/src/components/dashboard/layout/user-popover`
- `master/003_source/app/src/components/dashboard/overview`
- `master/003_source/app/src/components/dashboard/academy`
- `master/003_source/app/src/components/dashboard/settings`
- `master/003_source/app/src/components/marketing/pricing`
- `master/003_source/app/src/components/dashboard/academy`
- `master/003_source/app/src/components/dashboard/analytics`
- `master/003_source/app/src/components/dashboard/blog`
- `master/003_source/app/src/components/dashboard/calendar`
- `master/003_source/app/src/components/dashboard/chat`
- `master/003_source/app/src/components/dashboard/crypto`
- `master/003_source/app/src/components/dashboard/customer`
- `master/003_source/app/src/components/dashboard/e-commerce`
- `master/003_source/app/src/components/dashboard/file-storage`
- `master/003_source/app/src/components/dashboard/invoice`
- `master/003_source/app/src/components/dashboard/jobs`
- `master/003_source/app/src/components/dashboard/layout`
- `master/003_source/app/src/components/dashboard/logistics`
- `master/003_source/app/src/components/dashboard/mail`
- `master/003_source/app/src/components/dashboard/order`
- `master/003_source/app/src/components/dashboard/overview`
- `master/003_source/app/src/components/dashboard/product`
- `master/003_source/app/src/components/dashboard/settings`
- `master/003_source/app/src/components/dashboard/social`
- `master/003_source/app/src/components/dashboard/tasks`

reuse ticket `_prompts/002_feat/0932_i18n_auth_components.md`

@007_testing
plesae run regression test after your code-work.

@008_git
please commit the change (`./master/003_source/app`) with comment thanks.

you create `TODOs` is good enough. no need to implement it at the moment.
````
