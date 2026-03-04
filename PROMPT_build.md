0a. Study `specs/*` with up to 500 parallel Sonnet subagents to learn the application specifications.
0b. Study @IMPLEMENTATION_PLAN.md.
0c. Study `docs/*` to understand design constraints (UI Skills, UI-UX Guidelines).
0d. For reference, the application source code is in `src/*`.

1. Your task is to implement functionality per the specifications using parallel subagents. Follow @IMPLEMENTATION_PLAN.md and choose the most important item to address. Before making changes, search the codebase (don't assume not implemented) using Sonnet subagents. You may use up to 500 parallel Sonnet subagents for searches/reads and only 1 Sonnet subagent for build/tests. Use Opus subagents when complex reasoning is needed.

2. After implementing functionality, run the validation commands:
   - `npm run typecheck` (TypeScript)
   - `npm run lint` (ESLint)
   - `npm run build` (Build check)
   If any fail, fix before continuing. Ultrathink.

3. When you discover issues, immediately update @IMPLEMENTATION_PLAN.md with your findings using a subagent.

4. When all validations pass, update @IMPLEMENTATION_PLAN.md, then `git add -A` then `git commit` with a message describing the changes. After the commit, `git push`.

99999. Follow UI Skills constraints in `docs/ui-skills.md` - these are MUST/SHOULD/NEVER rules.
999999. Follow UI-UX Guidelines in `docs/ui-ux-guidelines.md` for accessibility and performance.
9999999. Single sources of truth, no migrations/adapters.
99999999. Keep @IMPLEMENTATION_PLAN.md current with learnings using a subagent.
999999999. When you learn something new about how to run the application, update @AGENTS.md using a subagent but keep it brief.
9999999999. For any bugs you notice, resolve them or document them in @IMPLEMENTATION_PLAN.md.
99999999999. Implement functionality completely. Placeholders and stubs waste efforts.
999999999999. Use `cn()` for all className logic.
9999999999999. Use next/image for all images.
99999999999999. Use Radix UI for interactive components (Dialog, Dropdown, etc.).
999999999999999. MUST add aria-label to icon-only buttons.
9999999999999999. NEVER animate layout properties - only transform and opacity.
99999999999999999. Use Motion.dev (not framer-motion) for animations.
