---
name: full-regression-test
description: Run the verification workflow, including Docker prerequisites, format, lint, Jest, API regression, and Playwright E2E tests.
---

# Full Regression Test

Run the complete local verification workflow for a change in Project.

## Scope and Rules

- Identify the target checkout: `master/` or a registered feature worktree.
- Treat the workspace wrapper as an out-of-scope directory for test commands.
- Run app and Jest commands from `master/003_source/app/` or the target worktree's `003_source/app/`.
- Run Docker commands from `master/002_docker/` or the target worktree's `002_docker/`.
- Run API and Playwright commands from their corresponding `007_testing/` directories.
- Preserve unrelated local changes. Do not reset, clean, delete, or discard files to make a test pass.
- Do not claim a pass unless every required phase ran and returned successfully.

## 1. Prepare the Target

1. Read the target checkout's `AGENTS.md` and the relevant `007_testing/` instructions.
2. Determine whether the target is `master` or a worktree.
3. If the target is `master`, start the shared Docker stack:

   ```bash
   cd master/002_docker
   ./dc_up.sh
   ```

4. If the target is a feature worktree, start only that worktree's ticket stack:

   ```bash
   cd <worktree>/002_docker
   ./ticket_up.sh <NNN>
   ```

5. Never run bare `dc_up.sh` inside a feature worktree.
6. Read the worktree's generated `.env/.env.testing` and record its `APP_PORT` and `DB_PORT`.
7. Confirm the Docker stack and live app are available before running API or browser tests.

   ```bash
   docker ps
   curl -I --fail http://localhost:<APP_PORT>
   ```

Use `http://localhost:3000` for the master stack. Use the worktree's `APP_PORT` for a feature stack.

## 2. Run the Verification Sequence

Run the phases in order. Stop at the first blocking failure unless an unavailable service makes a later live-server phase impossible.

### Phase 1: Format

From `003_source/app/`, run:

```bash
npm run format:write
```

### Phase 2: Lint

From `003_source/app/`, run:

```bash
npm run lint
```

### Phase 3: Jest Gate

From `003_source/app/`, run:

```bash
npm run test:ci
```

Use `npm run test:ci`. Do not use `CI=true npm run test`; it remains in watch mode and is not a one-shot gate.

### Phase 4: API Regression

From `007_testing/api/`, run:

```bash
./api_regression.sh
```

Before running a worktree stack, inspect `api_regression.sh` and its selected suite. Set `API_BASE` to the suite's correct endpoint on the worktree's `APP_PORT`. Do not assume the runner includes every API suite.

### Phase 5: Playwright E2E

Inspect `007_testing/e2e/playwright.config.js` before the run.

From `007_testing/e2e/`, use the canonical runner when the task requires the project's canonical Chromium smoke check:

```bash
./run.sh
```

Use the complete suite command when full Playwright coverage is required:

```bash
npx playwright test --workers=1 --project=chromium --reporter=list
```

Treat `run.sh` as a canonical single-spec runner, not as the complete suite. It currently targets `tests/sanity/app/dashboard/index.spec.js`. Use the complete suite command for all discovered specs.

## 3. Worktree Target Verification

For a feature worktree, verify all live-server checks use the same target:

- App: `http://localhost:<APP_PORT>`
- MariaDB: the worktree's `DB_PORT`
- API suites: `API_BASE=http://localhost:<APP_PORT><suite-base-path>`
- Playwright: the worktree app URL expected by the suite configuration
- Docker: the worktree's `devias-t<NNN>` containers

Do not reuse the master's shared containers or ports for a worktree run.

## 4. Report Results

Return an explicit pass/fail report containing:

1. Target checkout or worktree.
2. Docker project and app/DB target.
3. Status of Format, Lint, Jest, API, and Playwright phases.
4. The exact failing command for every failure.
5. A concise failure summary and relevant log location.
6. Whether the failure appears change-related or service/environment-related.
7. Whether the run was canonical smoke coverage or the complete Playwright suite.

Do not report `PASS` for a skipped phase or an omitted suite.
