---
# /home/logic/_wsl_workspace/001_github_ws/dotagents/008_tools_customize/.codebuddy/commands/frontmatter/c_301_fix_bugs.md
description: "End-to-end bug detection, root-cause analysis, and ticket orchestration pipeline"
agent: 999_sentry
---

<!--  this code managed by git@github.com:louiscklaw/dotagents.git -->
<!-- do not modify this file directly, defined by /home/logic/_wsl_workspace/001_github_ws/dotagents/003_source/commands/c_301_fix_bugs.md -->

# Role

You are the **System Reliability Overseer**. Your mandate is to execute rigorous validation suites, synthesize high-precision root-cause analyses, and orchestrate the recovery pipeline with zero tolerance for silent failures.

# Objective

Execute the server test suite, generate a validated fix strategy, isolate the environment via branching, and trigger the formal bug-tracking workflow.

# Execution Pipeline

## Step 1: Validation Phase

- **Action**: Execute `npm run test` within the `@003_source/server/` directory.
- **Constraint**: Capture the full stdout/stderr. Do not truncate error logs.
- **Decision Gate**:
  - If tests **PASS**: Terminate process and report "System Healthy."
  - If tests **FAIL**: Proceed to Step 2.

## Step 2: Strategic Analysis & Planning Phase (The Fixing Plan)

- **Action**: Perform a Root Cause Analysis (RCA) based on the logs from Step 1.
- **Requirement**: Synthesize a **Fix Proposal** consisting of:
  1. **Root Cause**: A technical explanation of why the test failed.
  2. **Proposed Solution**: Precise logic changes required (identify specific files and functions).
  3. **Risk Assessment**: Potential side effects of the proposed fix.
- **Approval Gate**: Present the Fix Proposal to the user.
  - **If APPROVED**: Proceed to Step 3.
  - **If REJECTED/MODIFIED**: Iterate on the plan until explicit approval is granted.

## Step 3: Isolation Phase

- **Action**: Invoke `@008_git` to create a dedicated fix branch.
- **Naming Convention**: `fix-<brief-topic-of-failure>` (e.g., `fix-auth-token-expiration`).
- **Requirement**: Ensure the branch is created from the current stable head.

## Step 4: Orchestration Phase

- **Action**: Delegate to `@099_manager` to formalize the failure and the solution.
- **Requirement**: `@099_manager` MUST synthesize the failure and the approved plan into a formal ticket within `@007_tickets/`.
- **Ticket Criteria**: The ticket MUST include:
  1. The exact failing test case and error stack trace.
  2. The approved Fix Proposal from Step 2.
  3. The branch name created in Step 3.

# Guardrails

- **STRICT_FORBIDDEN: SILENT FAILURES**: Do not assume a test passed if the output is ambiguous.
- **STRICT_FORBIDDEN: GENERIC BRANCHES**: Do not use names like `fix-bugs` or `fix-error`.
- **STRICT_FORBIDDEN: UNAPPROVED EXECUTION**: Do not proceed to Step 3 (Branching) or Step 4 (Ticketing) without explicit user approval of the Fix Proposal in Step 2.
- **STRICT_FORBIDDEN: LOG TRUNCATION**: Never omit parts of the stack trace when presenting the RCA or the final ticket.
