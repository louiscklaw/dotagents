---
title: codebuddy_instructions
---

# codebuddy instruction examples

```markdown
@999_sentry, please audit tasks below and ensure a TODOs ticket created. thanks.

@099_manager, please parse the `md` files `_prompts/004_misc/0006_e2e_base_url_dotenv.md`

c_001_make_a_plan_from_ticket_worktree

you may find the below folder for `md` files for example:

- `./_prompts/002_feat/TODOs`
- `./_prompts/003_fix/TODOs`
- `./_prompts/004_misc/TODOs`

@098_prompt_engineer, c_901_optimize_ticket , you will optimize the planned ticket.

## FAQ

Q: For the ticket workflow, which order should I run?
A: Plan then optimize
```

---

@003_client, pleaes iterate files from the folder `./master/003_source/app/src/components/dashboard/settings`. Put the file found to the todo-list.

Then iterate the components and add `data-test-id` to the ui components for easy testing and bug locating.

i did one example `data-test-id={"account_save_changes_button"}` (in `account-details.js`) and please carry on the remaining.

@007_testing, plesae run regression test after your code-work.

@008_git, please commit the change (`./master/003_source/app/src/components/dashboard/settings`) with comment thanks.

thanks.

---

099_manager

@008_git, please use worktree to manage the below task.

@003_client, pleaes iterate files from the folder `./master/003_source/app/src/components/dashboard/invoices`. Put the file found to the todo-list.

Then iterate the components and add `data-test-id` to the ui components for easy testing and bug locating.

i did one example `data-test-id="invoices_filters_id_popover"` (in `invoices-filters.js`) and please carry on the remaining.

you can also find the `js` files in folder, they are there for example
`./master/003_source/app/src/components/dashboard/product`
`./master/003_source/app/src/components/dashboard/customer`
`./master/003_source/app/src/components/dashboard/order`

@007_testing, plesae run regression test after your code-work.

@008_git, please commit the change (`./master/003_source/app/src/components/dashboard/invoices`) with comment thanks.

thanks.

---

@999_sentry, please audit the whole process and make it complete.

@007_testing, plesae run regression test after your code-work. (`run_regression.sh`)

@008_git, please use worktree to manage the below task.

please inspect the log generated `./master/007_testing/regression.log`

@008_git, please commit the change with comment thanks.

thanks.

---

008_git
please commit the current staged files with comment thanks.

---

@003_client, pleaes iterate files from the folder `master/003_source/app/src/components/dashboard/layout/user-popover`. put the file found to the todo-list.

Then iterate the components and add `data-test-id` to the ui components for easy testing and bug locating.

i did one example `data-test-id={"account_save_changes_button"}` (in `master/003_source/app/src/components/dashboard/settings/account-details.js`) please get the idea and carry on the remaining.

@007_testing, plesae run regression test after your code-work.

@008_git, please commit the change (`./master/003_source/app/src/components/dashboard/layout/user-popover`) with comment thanks.

thanks.

---

```markdown
099_manager, please monitor and implement below feat

008_git, please resolve conflicts to let implement and merge proceed.

`git branch --no-merged master`

999_sentry, please audit the whole process and make it complete. thanks.
```

```markdown
c_003_execute_a_todo_item

@099_manager, please monitor and implement below feat

`./_prompts/004_misc/TODOs/0006_e2e_base_url_dotenv.md`

@008_git, please resolve conflicts to let implement and merge proceed.

@007_testing, run a regression test to validate there is no regression. thanks

@999_sentry, please audit the whole process and make it complete. thanks.
```

```markdown
@099_manager, please perform fact check of ticket listed in below markdown file:
`./_prompts/outstanding_ticket.md`

@999_sentry, please audit the whole process and make it complete. thanks.
```
