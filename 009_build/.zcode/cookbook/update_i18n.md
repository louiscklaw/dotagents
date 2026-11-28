---
name: update_i18n
---

## update_i18n.md

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
