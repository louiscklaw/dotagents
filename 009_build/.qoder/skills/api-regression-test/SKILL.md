---
name: api-regression-test
description: Run the project live-server API regression workflow and report the exact suites and results.
---

# API Regression Test

Run the requested API regression coverage against the intended checkout's live app and database. Report the suites that actually ran and their outcome.

## Scope and Safety

- Identify the target checkout before running commands: master or a registered feature worktree.
- Run Docker commands from that checkout's `002_docker/` directory.
- Run app or Jest commands from that checkout's `003_source/app/` directory.
- Run the canonical API runner from that checkout's `007_testing/api/` directory.
- API suites require a live app; database-backed suites also require the target database.
- Preserve unrelated changes and files.

## STRICT_FORBIDDEN

- Never run bare `./dc_up.sh` from a feature worktree. Use that worktree's `./ticket_up.sh <NNN>`.
- Never run `git reset`, `git clean`, or file-discard or deletion operations.
- Never assume the API runner discovers every Jest suite.
- Never assume an externally supplied `API_BASE` overrides an assignment inside the runner.
- Never report PASS if no tests ran, a requested suite was skipped, or setup prevented execution.

## 1. Identify and Prepare the Target

1. Read the target checkout's `AGENTS.md`, `007_testing/api/AGENTS.md`, and `002_docker/AGENTS.md`.
2. For the master checkout, start the shared development stack from the master Docker directory:

   ```bash
   cd <master-checkout>/002_docker
   ./dc_up.sh
   ```

3. For a feature worktree, start its ticket stack from that worktree's Docker directory:

   ```bash
   cd <worktree>/002_docker
   ./ticket_up.sh <NNN>
   ```

4. Confirm the app API is reachable at the intended target URL:

   ```bash
   curl -I --fail <app-url>/api/helloworld
   ```

5. Ensure the app and, where needed, the database are running before starting Jest. If a separate app command is required, run it from the target checkout's `003_source/app/` directory.

## 2. Inspect the Canonical Runner and Select Scope

Before execution, inspect `<target-checkout>/007_testing/api/api_regression.sh`.

Record the runner's:

- Active suite or suites.
- Exact `testPathPattern` values.
- `API_BASE` value for each active suite.
- Target app and whether the base URL is the origin root or an endpoint-specific path.

The canonical runner explicitly selects the suites enabled in its script. Do not treat it as Jest-wide discovery or as full API-suite coverage.

Check that each active `API_BASE` points to the intended app. A runner that assigns `API_BASE` within a command may ignore an environment value supplied when invoking the script. Do not claim that such a run tested a different target.

## 3. Run the Requested API Tests

- **Canonical API regression runner:** Run the exact project runner from the API directory:

  ```bash
  cd <target-checkout>/007_testing/api
  ./api_regression.sh
  ```

- **One selected suite:** Run its exact pattern from the target checkout's app directory, using the suite's required base URL:

  ```bash
  cd <target-checkout>/003_source/app
  API_BASE=<suite-api-base> npx jest --ci --runInBand --testPathPattern "<exact-testPathPattern>"
  ```

Use the exact pattern and `API_BASE` identified from the runner or suite. Use an origin-root base or endpoint-specific base as required by that suite.

For a feature worktree, use its `APP_PORT` in `API_BASE` and its `DB_PORT` for database-backed suites. If the canonical runner's active URL points elsewhere, do not claim it tested the worktree; use the exact-suite command against the worktree or report the target limitation. Do not edit the canonical runner as part of running tests.

Run `npm run test:ci` only when the full Jest gate is explicitly requested; it runs more than the API regression runner. Do not use `CI=true npm run test` as a one-shot gate because `npm run test` uses Jest watch mode.

## 4. Diagnose the Result

If execution fails:

1. Record the exact suite, `API_BASE`, command, and Jest exit status.
2. Check app reachability and the relevant Docker/container health.
3. Inspect the failed assertion, HTTP response, or server error.
4. Classify the failure as an assertion failure, app/database/service failure, timeout, or setup failure.
5. Rerun the exact suite pattern only when confirmation is needed. Report the rerun separately from the original run.

## 5. Report the Outcome

Report:

- Target checkout or worktree, app URL, and database target when applicable.
- Whether you ran the canonical runner or a single suite.
- Active suite names and exact patterns; include `API_BASE` for each.
- Passed, failed, and skipped test counts, as reported by Jest.
- Exact command and exit status.
- Relevant assertion or server error, if any.
- Whether the failure appears change-related or service/environment-related.

Use **PASS** only when the requested suites ran and passed. Use **FAIL** when a test failed. Use **BLOCKED** when setup prevented the requested suites from running. Do not report discovery of inactive suites as API coverage.
