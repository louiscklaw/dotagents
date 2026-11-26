---
name: e2e-regression-test
description: Run the project Playwright E2E smoke, targeted-spec, or complete Chromium regression workflow and report its results.
---

# E2E Regression Test

Run the requested Playwright E2E verification against the intended checkout and live app. Report exactly what ran and whether it passed.

## Scope and Safety

- Identify the target checkout before running commands: master or a registered feature worktree.
- Run Docker commands from that checkout's `002_docker/` directory.
- Run app commands from that checkout's `003_source/app/` directory.
- Run Playwright commands from that checkout's `007_testing/e2e/` directory.
- Preserve unrelated changes and files.

## STRICT_FORBIDDEN

- Never run bare `./dc_up.sh` from a feature worktree. Use that worktree's `./ticket_up.sh <NNN>`.
- Never run `git reset`, `git clean`, or file-discard or deletion operations.
- Never claim the smoke runner covers the complete suite.
- Never claim a worktree was tested unless the selected spec actually targets that worktree's app.
- Never report PASS if setup failed, no tests ran, or the relevant requested coverage was skipped.

## 1. Identify and Prepare the Target

1. Read the target checkout's `AGENTS.md`, `007_testing/e2e/AGENTS.md`, `007_testing/e2e/playwright.config.js`, and the selected spec.
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

4. Confirm Docker is running and identify the app URL used by the selected spec. Check reachability at that URL:

   ```bash
   docker ps
   curl -I --fail <app-url>
   ```

5. Do not assume a worktree's `APP_PORT` is automatically used by Playwright. Inspect the selected spec and configuration. If they do not let the test target the worktree app, report that limitation instead of claiming worktree coverage.

If a separate app command is required, run it from the target checkout's `003_source/app/` directory. Do not start or build the app from the E2E directory.

## 2. Select the Requested Coverage

Inspect `007_testing/e2e/playwright.config.js`, `007_testing/e2e/run.sh`, and the requested spec or suite before execution.

- **Canonical smoke coverage:** Run the project's smoke runner from the E2E directory:

  ```bash
  cd <target-checkout>/007_testing/e2e
  ./run.sh
  ```

  This runner executes `tests/sanity/app/dashboard/index.spec.js`. It is focused smoke coverage, not the complete Playwright suite.

- **One requested spec:** Run only that spec from the E2E directory:

  ```bash
  cd <target-checkout>/007_testing/e2e
  npx playwright test --workers=1 --project=chromium --reporter=list <spec-path>
  ```

- **Complete Chromium suite:** Run all Playwright-discovered specs in the Chromium project:

  ```bash
  cd <target-checkout>/007_testing/e2e
  npx playwright test --workers=1 --project=chromium --reporter=list
  ```

  This runs the discovered suite on Chromium. It does not run the Firefox or WebKit projects.

Do not substitute the smoke runner for a requested spec or complete-suite run.

## 3. Diagnose the Result

If execution fails:

1. Record the exact command, spec, and target app URL.
2. Check whether Docker, the app, or the target port was unavailable.
3. Inspect the Playwright error output and any relevant report or trace.
4. Classify the result as an assertion failure, navigation/setup failure, or environment failure.
5. Rerun only the failing spec when confirmation is needed. Report the rerun separately from the original run.

## 4. Report the Outcome

Report:

- Target checkout or worktree and app URL.
- Coverage mode: canonical smoke, targeted spec, or complete Chromium suite.
- Passed, failed, and skipped test counts, as reported by Playwright.
- Exact command and exit status.
- Relevant failure output and artifact, if any.
- Whether the failure appears application-related or environment-related.

Use **PASS** only when the requested tests ran and passed. Use **FAIL** when a test failed. Use **BLOCKED** when setup prevented the requested tests from running. Do not label smoke-only results as complete-suite results.
