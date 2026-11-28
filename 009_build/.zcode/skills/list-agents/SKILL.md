---
name: list-agents
description: list the agents available
---

# Agents

please find the agents available as below

| agent                        | glance                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 001_docs.md                  | Maintains documentation in 001_documentation; validates every MDX edit with tests and playwright.               |
| 002_docker.md                | Manages docker-compose.yml, Dockerfiles and volumes under 002_docker with one-by-one container lifecycle rules. |
| 003_client.md                | Frontend React/TypeScript engineer in 003_source/<app>; enforces strict types and the test-lint-tidy gate.      |
| 004_mysql.md                 | Schemas in <workspace>/004_database; RethinkDB query tuning for message logging and retrieval.                  |
| 005_review.md                | Read-only architecture review: code quality, TS strictness, async races, RethinkDB efficiency.                  |
| 006_server.md                | Backend engineer for 003_source/server; server logic, fixes and package.json updates.                           |
| 007_testing.md               | Client/server/e2e tests in 007_testing via ./test.sh at three resolutions.                                      |
| 008_git.md                   | Reviews staged changes, drafts commit messages in project style, commits and applies branch naming rules.       |
| 009_QA.md                    | Adversarial QA: spec validation, edge cases, regressions, APPROVED/REJECTED sign-offs.                          |
| 010_ticket_manager.md        | Backlog architect: triage, MoSCoW tickets with acceptance criteria, routing to specialists.                     |
| 011_POC.md                   | Rapid prototyping and feasibility; minimal implementation under ./005_POC/.                                     |
| 012_git_worktree_manager.md  | Git worktree/branch lifecycle with feat/[purpose]/trunk and fix/[purpose]/trunk rules.                          |
| 097_setup_project.md         | Creates the necessary project files.                                                                            |
| 098_prompt_engineer.md       | Re-engineers agent prompts: attention efficiency, constraint hardening, intent-drift audits.                    |
| 099_manager.md               | Technical PM/orchestrator: decomposes requests, delegates to specialists, tracks multi-phase execution.         |
| 100_ai-engineer.md           | LLM apps, RAG, prompt pipelines, vector search, agent orchestration and AI API integrations.                    |
| 101_api-documenter.md        | OpenAPI/Swagger specs, SDKs and developer docs with versioning and examples.                                    |
| 102_architect-review.md      | Enforces SOLID, dependency direction and layering; reviews structural changes and boundaries.                   |
| 103_backend-architect.md     | REST APIs, service boundaries and DB schemas with scaling, caching and security built in.                       |
| 104_business-analyst.md      | KPI reports, revenue models, CAC/LTV, cohort retention and growth projections.                                  |
| 105_c-pro.md                 | Production C: memory management, pointer discipline, POSIX error handling, valgrind/gdb.                        |
| 106_cloud-architect.md       | Terraform IaC, auto-scaling, serverless patterns, least-privilege security and cost optimization.               |
| 107_code-reviewer.md         | Reviews code/config changes that can cause outages: pools, timeouts, limits, security settings.                 |
| 108_content-marketer.md      | SEO blog posts, social content and newsletters with CTAs and distribution plans.                                |
| 109_context-manager.md       | Cross-agent context: captures decisions, briefs agents and prunes stale state.                                  |
| 110_cpp-pro.md               | Modern C++: RAII, smart pointers, STL, templates, move semantics and performance.                               |
| 111_customer-support.md      | Support tickets, FAQ responses, customer emails, help docs and troubleshooting guides.                          |
| 112_data-engineer.md         | ETL pipelines, data warehouses and streaming (Spark, Airflow, Kafka).                                           |
| 113_data-scientist.md        | Data analysis with SQL queries, BigQuery operations and data insights.                                          |
| 114_database-admin.md        | DB operations: backups, replication, monitoring, permissions and disaster recovery.                             |
| 115_database-optimizer.md    | SQL/index optimization, migrations, N+1 and slow-query fixes, caching.                                          |
| 116_debugger.md              | Debugging errors, test failures and unexpected behavior.                                                        |
| 117_deployment-engineer.md   | CI/CD, Docker and cloud deployments with GitHub Actions and Kubernetes.                                         |
| 118_devops-troubleshooter.md | Production incidents via ELK/Datadog correlation, kubectl debugging and root-cause analysis.                    |
| 119_dx-optimizer.md          | Faster setup (<5 min), automation and reduced build/test friction.                                              |
| 120_error-detective.md       | Log/code error patterns, stack traces and cross-system correlation to isolate root causes.                      |
| 121_frontend-developer.md    | React components, hooks, responsive styling, WCAG accessibility and sub-3s performance.                         |
| 122_golang-pro.md            | Idiomatic Go: goroutines, channels, interfaces, explicit errors and pprof optimization.                         |
| 123_graphql-architect.md     | GraphQL schemas, resolvers, federation, subscriptions, DataLoader and rate limiting.                            |
| 124_helloworld_agents.md     | Read-only smoke-test agent replying with the fixed phrase `helloworld agent`.                                   |
| 125_incident-responder.md    | Incident triage (P0-P3), rollback-first stabilization, status updates and post-mortems.                         |
| 126_ios-developer.md         | Native iOS with Swift/SwiftUI, UIKit, Core Data, CloudKit and URLSession.                                       |
| 127_java-pro.md              | Modern Java: streams, records, virtual threads, JVM tuning, Spring Boot and Reactor.                            |
| 128_javascript-pro.md        | Modern JavaScript: ES6+, async patterns, event loop and Node/browser compatibility.                             |
| 129_legacy-modernizer.md     | Incremental modernization: strangler fig, dependency updates and API versioning.                                |
| 130_legal-advisor.md         | Privacy policies, ToS, DPAs and cookie policies (GDPR, CCPA/CPRA, LGPD, COPPA).                                 |
| 131_ml-engineer.md           | Production ML: model serving, feature pipelines, A/B testing and drift monitoring.                              |
| 132_mlops-engineer.md        | ML pipelines, MLflow/Kubeflow, model registries and data versioning across clouds.                              |
| 133_mobile-developer.md      | React Native/Flutter apps, native modules, offline sync, push and release builds.                               |
| 134_network-engineer.md      | Connectivity, load balancers, traffic, DNS, SSL/TLS, CDN and network security.                                  |
| 135_opencode-agent.md        | Opencode ecosystem orchestrator: configs, agent/skill lifecycle and multi-agent workflows.                      |
| 136_payment-integration.md   | Stripe/PayPal integrations: checkout, subscriptions, webhooks and PCI compliance.                               |
| 137_performance-engineer.md  | Profiling, bottleneck optimization, caching, load testing and CDN setup.                                        |
| 138_php-pro.md               | Idiomatic PHP: generators, iterators, SPL and modern OOP for high-performance apps.                             |
| 139_prompt-engineer.md       | Prompt optimization for LLMs, agent performance and system prompts.                                             |
| 140_python-pro.md            | Idiomatic Python: decorators, generators, async/await, performance and testing.                                 |
| 141_quant-analyst.md         | Financial models, backtesting, market data, risk metrics and portfolio optimization.                            |
| 142_review.md                | Static read-only reviews of code/PRs/diffs: quality, bugs, performance and security.                            |
| 143_risk-manager.md          | Portfolio risk: R-multiples, VaR, position limits, hedging and stop-loss.                                       |
| 144_rust-pro.md              | Idiomatic Rust: ownership, lifetimes, traits, async Tokio and clippy-clean code.                                |
| 145_sales-automator.md       | Cold email sequences, follow-ups, proposals and objection-handling scripts.                                     |
| 146_search-specialist.md     | Deep web research, query formulation, domain filters and multi-source fact verification.                        |
| 147_security-auditor.md      | OWASP Top 10 audits, secure auth (JWT/OAuth2/SAML), CORS, CSP and encryption.                                   |
| 148_sql-pro.md               | Complex SQL (CTEs, window functions), EXPLAIN ANALYZE and normalized schema design.                             |
| 149_terraform-specialist.md  | Reusable Terraform modules, remote state, plan-before-apply and drift detection.                                |
| 150_test-automator.md        | Unit/integration/e2e suites, mocks, test data factories and CI test pipelines.                                  |
| 151_typescript-pro.md        | Advanced TS: generics, conditional/mapped types, strict config and enterprise patterns.                         |
| 152_ui-ux-designer.md        | Interface designs, wireframes and design systems grounded in research and accessibility.                        |
| 200_ticket_handler.md        | Turns ideas into implementation tickets and ordered TODO steps; writes tickets only.                            |
| 301_mysql_radxa.md           | MySQL on radxa (192.168.10.1) via the radxa MCP tool only.                                                      |
| 302_mysql_61.md              | MySQL on mariadb-61.lan via the _61 MCP tool only.                                                              |
| 303_mysql_21.md              | MySQL on mariadb-21.lan via the _21 MCP tool only.                                                              |
| 501_review_ticket.md         | Validates ticket files under 007_tickets for full-path-from-root notation.                                      |
| 502_review_todo_item.md      | Reviews pending TODO files in ./_prompts/TODOs/ for path validity and readiness.                                |
| 700_blogger.md               | Technical writing: blog posts, docs and feature announcements accurate to the codebase.                         |
| 800_programmer.md            | Frontend engineer for 003_source/client with the test → lint → tidy gate.                                       |
| 999_sentry.md                | Read-only auditor: verifies completed tasks against the Sentry Standard, PASS/FAIL/WARN verdicts.               |
| helloworld-agent.md          | Smoke-test agent that greets the user; verifies agent routing and delegation wiring.                            |
| helloworld.md                | Placeholder smoke-test file (no frontmatter; content "helloworod content.").                                    |
| helloworld1.md               | Placeholder smoke-test file (no frontmatter; content "helloworod1 content.").                                   |
