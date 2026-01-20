# Ralph Playbook - Autonomous AI Coding Loops

> Comprehensive guide to running autonomous AI coding loops using Geoffrey Huntley's Ralph methodology.
> "Me fail English? That's unpossible!" - Ralph Wiggum

**Source:** https://github.com/ClaytonFarr/ralph-playbook
**Original Creator:** Geoffrey Huntley
**Playbook Author:** Clayton Farr

---

## What is Ralph?

Ralph implements the "Ralph Wiggum technique" — autonomous task completion through continuous iteration. Named after the Simpsons character who eventually gets things done through sheer persistence.

> "The orchestrator is a thin coordination layer, not a platform. Ralph is smart; let Ralph do the work."

---

## The Ralph Tenets

1. **Fresh Context Is Reliability** — Each iteration clears context. Re-read specs, plan, code every cycle.
2. **Backpressure Over Prescription** — Don't prescribe how; create gates that reject bad work.
3. **The Plan Is Disposable** — Regeneration costs one planning loop. Cheap.
4. **Disk Is State, Git Is Memory** — Files are the handoff mechanism.
5. **Steer With Signals, Not Scripts** — Add signs, not scripts.
6. **Let Ralph Ralph** — Sit on the loop, not in it.

---

## Three Phases, Two Prompts, One Loop

Ralph isn't just "a loop that codes." It's a funnel:

### Phase 1: Define Requirements (LLM Conversation)

- Discuss project ideas → identify Jobs to Be Done (JTBD)
- Break individual JTBD into topic(s) of concern
- Use subagents to load info from URLs into context
- LLM understands JTBD topic: subagent writes `specs/FILENAME.md` for each topic

### Phase 2/3: Run Ralph Loop (Two Modes)

Same loop mechanism, different prompts for different objectives:

| Mode | When to Use | Prompt Focus |
|------|-------------|--------------|
| **PLANNING** | No plan exists, or plan is stale/wrong | Generate/update IMPLEMENTATION_PLAN.md only |
| **BUILDING** | Plan exists | Implement from plan, commit, update plan as side effect |

**Why use the loop for both modes?**
- BUILDING requires it: inherently iterative (many tasks × fresh context = isolation)
- PLANNING uses it for consistency: same execution model
- Flexibility: if plan needs refinement, loop allows multiple passes
- Simplicity: one mechanism for everything

---

## Key Concepts

### Jobs to Be Done (JTBD)

High-level user need or outcome.

### Topic of Concern

A distinct aspect/component within a JTBD.

**Topic Scope Test: "One Sentence Without 'And'"**
- ✓ "The color extraction system analyzes images to identify dominant colors"
- ✗ "The user system handles authentication, profiles, and billing" → 3 topics

### Relationships

```
1 JTBD → multiple topics of concern
1 topic of concern → 1 spec
1 spec → multiple tasks (specs are larger than tasks)
```

---

## Key Principles

### Context Is Everything

When 200K+ tokens advertised = ~176K truly usable
And 40-60% context utilization for "smart zone"
Tight tasks + 1 task per loop = 100% smart zone context utilization

This informs everything:
- Use the main agent/context as a scheduler
- Don't allocate expensive work to main context; spawn subagents
- Use subagents as memory extension (each gets ~156kb that's garbage collected)
- Simplicity and brevity win
- Prefer Markdown over JSON

### Steering Ralph: Patterns + Backpressure

**Steer Upstream:**
- Ensure deterministic setup (allocate first ~5,000 tokens for specs)
- Every loop's context is allocated with the same files
- Your existing code shapes what gets used and generated
- If Ralph generates wrong patterns, add/update utilities

**Steer Downstream:**
- Create backpressure via tests, typechecks, lints, builds
- AGENTS.md specifies actual commands (project-specific backpressure)

### Let Ralph Ralph

Ralph's effectiveness comes from trusting it to do the right thing (eventually).

- Lean into LLM's ability to self-identify, self-correct, self-improve
- Applies to implementation plan, task definition, prioritization
- Eventual consistency achieved through iteration

**Safety:** Run in isolated environments (Docker, Fly Sprites, E2B) with minimum viable access.

### Move Outside the Loop

Your job is to sit ON the loop, not IN it — engineer the setup and environment.

**Observe and course correct** — especially early on, watch where Ralph fails.

**Tune it like a guitar** — instead of prescribing upfront, observe and adjust reactively.

**Signs aren't just prompt text:**
- Prompt guardrails
- AGENTS.md operational learnings
- Utilities in your codebase
- Other discoverable inputs

**The plan is disposable:**
- If wrong, throw it out, start over
- Regeneration cost is one Planning loop; cheap
- Regenerate when Ralph goes off track, plan feels stale, too much clutter

---

## Loop Mechanics

### Task Selection (Outer Loop)

`loop.sh` acts as an 'outer loop' where each loop = a single task (separate sessions).

```bash
# Minimal form
while :; do cat PROMPT.md | claude ; done
```

**What controls task continuation?**

1. Bash loop runs → feeds PROMPT.md to claude
2. PROMPT.md instructs → "Study IMPLEMENTATION_PLAN.md and choose the most important thing..."
3. Agent completes one task → updates IMPLEMENTATION_PLAN.md on disk, commits, exits
4. Bash loop restarts immediately → fresh context window
5. Agent reads updated plan → picks next most important thing...

Key insight: IMPLEMENTATION_PLAN.md persists on disk between iterations as shared state.

### Task Execution (Inner Loop)

Each task is prompted to keep doing its work against backpressure until it passes.

This "inner loop" is internal self-correction within one long model response, powered by:
- Backpressure prompts
- Tool use
- Subagents

**Control relies on:**
- Scope discipline — PROMPT.md instructs "one task" and "commit when tests pass"
- Backpressure — tests/build failures force agent to fix before committing
- Natural completion — agent exits after successful commit

---

## Enhanced loop.sh

```bash
#!/bin/bash
# Usage: ./loop.sh [plan] [max_iterations]
# Examples:
#   ./loop.sh              # Build mode, unlimited tasks
#   ./loop.sh 20           # Build mode, max 20 tasks
#   ./loop.sh plan         # Plan mode, unlimited tasks
#   ./loop.sh plan 5       # Plan mode, max 5 tasks

# Parse arguments
if [ "$1" = "plan" ]; then
    MODE="plan"
    PROMPT_FILE="PROMPT_plan.md"
    MAX_ITERATIONS=${2:-0}
elif [[ "$1" =~ ^[0-9]+$ ]]; then
    MODE="build"
    PROMPT_FILE="PROMPT_build.md"
    MAX_ITERATIONS=$1
else
    MODE="build"
    PROMPT_FILE="PROMPT_build.md"
    MAX_ITERATIONS=0
fi

ITERATION=0
CURRENT_BRANCH=$(git branch --show-current)

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Mode:   $MODE"
echo "Prompt: $PROMPT_FILE"
echo "Branch: $CURRENT_BRANCH"
[ $MAX_ITERATIONS -gt 0 ] && echo "Max:    $MAX_ITERATIONS iterations"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ ! -f "$PROMPT_FILE" ]; then
    echo "Error: $PROMPT_FILE not found"
    exit 1
fi

while true; do
    if [ $MAX_ITERATIONS -gt 0 ] && [ $ITERATION -ge $MAX_ITERATIONS ]; then
        echo "Reached max iterations: $MAX_ITERATIONS"
        break
    fi

    cat "$PROMPT_FILE" | claude -p \
        --dangerously-skip-permissions \
        --output-format=stream-json \
        --model opus \
        --verbose

    git push origin "$CURRENT_BRANCH" || {
        echo "Failed to push. Creating remote branch..."
        git push -u origin "$CURRENT_BRANCH"
    }

    ITERATION=$((ITERATION + 1))
    echo -e "\n\n======================== LOOP $ITERATION ========================\n"
done
```

**CLI Flags:**
- `-p` (headless mode): Non-interactive, reads from stdin
- `--dangerously-skip-permissions`: Bypasses all permission prompts
- `--output-format=stream-json`: Structured output for logging
- `--model opus`: Primary agent uses Opus for complex reasoning
- `--verbose`: Detailed execution logging

---

## File Structure

```
project-root/
├── loop.sh                    # Ralph loop script
├── PROMPT_build.md            # Build mode instructions
├── PROMPT_plan.md             # Plan mode instructions
├── AGENTS.md                  # Operational guide (how to build/run)
├── IMPLEMENTATION_PLAN.md     # Prioritized task list (generated by Ralph)
├── specs/                     # Requirement specs (one per JTBD topic)
│   ├── [topic-a].md
│   └── [topic-b].md
├── src/                       # Application source code
└── src/lib/                   # Shared utilities & components
```

---

## PROMPT Templates

### Prompt Structure

| Section | Purpose |
|---------|---------|
| Phase 0 (0a, 0b, 0c) | Orient: study specs, source location, current plan |
| Phase 1-4 | Main instructions: task, validation, commit |
| 999... numbering | Guardrails/invariants (higher number = more critical) |

### Key Language Patterns (Geoff's phrasing)

- "study" (not "read" or "look at")
- "don't assume not implemented" (critical)
- "using parallel subagents" / "up to N subagents"
- "only 1 subagent for build/tests" (backpressure control)
- "Ultrathink"
- "capture the why"
- "keep it up to date"

### PROMPT_plan.md Template

```markdown
0a. Study `specs/*` with up to 250 parallel Sonnet subagents to learn the application specifications.
0b. Study @IMPLEMENTATION_PLAN.md (if present) to understand the plan so far.
0c. Study `src/lib/*` with up to 250 parallel Sonnet subagents to understand shared utilities & components.
0d. For reference, the application source code is in `src/*`.

1. Study @IMPLEMENTATION_PLAN.md (if present; it may be incorrect) and use up to 500 Sonnet subagents to study existing source code in `src/*` and compare it against `specs/*`. Use an Opus subagent to analyze findings, prioritize tasks, and create/update @IMPLEMENTATION_PLAN.md as a bullet point list sorted in priority of items yet to be implemented. Ultrathink. Consider searching for TODO, minimal implementations, placeholders, skipped/flaky tests, and inconsistent patterns.

IMPORTANT: Plan only. Do NOT implement anything. Do NOT assume functionality is missing; confirm with code search first.

ULTIMATE GOAL: We want to achieve [project-specific goal]. Consider missing elements and plan accordingly.
```

### PROMPT_build.md Template

```markdown
0a. Study `specs/*` with up to 500 parallel Sonnet subagents to learn the application specifications.
0b. Study @IMPLEMENTATION_PLAN.md.
0c. For reference, the application source code is in `src/*`.

1. Your task is to implement functionality per the specifications using parallel subagents. Follow @IMPLEMENTATION_PLAN.md and choose the most important item to address. Before making changes, search the codebase (don't assume not implemented) using Sonnet subagents. You may use up to 500 parallel Sonnet subagents for searches/reads and only 1 Sonnet subagent for build/tests. Use Opus subagents when complex reasoning is needed.
2. After implementing functionality, run the tests for that unit of code. If functionality is missing then it's your job to add it. Ultrathink.
3. When you discover issues, immediately update @IMPLEMENTATION_PLAN.md with your findings using a subagent.
4. When the tests pass, update @IMPLEMENTATION_PLAN.md, then `git add -A` then `git commit` with a message describing the changes. After the commit, `git push`.

99999. Important: When authoring documentation, capture the why — tests and implementation importance.
999999. Single sources of truth, no migrations/adapters.
9999999. As soon as there are no build or test errors create a git tag.
99999999. You may add extra logging if required to debug issues.
999999999. Keep @IMPLEMENTATION_PLAN.md current with learnings using a subagent.
9999999999. When you learn something new about how to run the application, update @AGENTS.md using a subagent but keep it brief.
99999999999. For any bugs you notice, resolve them or document them in @IMPLEMENTATION_PLAN.md.
999999999999. Implement functionality completely. Placeholders and stubs waste efforts.
9999999999999. When @IMPLEMENTATION_PLAN.md becomes large periodically clean out completed items.
99999999999999. If you find inconsistencies in the specs/* then use an Opus 4.5 subagent with 'ultrathink' to update the specs.
999999999999999. IMPORTANT: Keep @AGENTS.md operational only — status updates belong in IMPLEMENTATION_PLAN.md.
```

---

## AGENTS.md

Single, canonical "heart of the loop" — a concise, operational "how to run/build" guide.

- NOT a changelog or progress diary
- Describes how to build/run the project
- Captures operational learnings
- Keep brief (~60 lines)
- Status, progress, planning belong in IMPLEMENTATION_PLAN.md

### Example Structure

```markdown
## Build & Run

Succinct rules for how to BUILD the project:

## Validation

Run these after implementing to get immediate feedback:

- Tests: `[test command]`
- Typecheck: `[typecheck command]`
- Lint: `[lint command]`

## Operational Notes

Succinct learnings about how to RUN the project:

### Codebase Patterns

...
```

---

## IMPLEMENTATION_PLAN.md

Prioritized bullet-point list of tasks derived from gap analysis (specs vs code).

- Created via PLANNING mode
- Updated during BUILDING mode (mark complete, add discoveries, note bugs)
- Can be regenerated — Geoff: "I have deleted the TODO list multiple times"
- Self-correcting — BUILDING mode can even create new specs if missing

No pre-specified template — let Ralph/LLM dictate format.

---

## Enhancements

### 1. AskUserQuestion for Planning

During Phase 1, use Claude's AskUserQuestionTool to systematically explore JTBD, edge cases, and acceptance criteria before writing specs.

Invoke: "Interview me using AskUserQuestion to understand [JTBD/topic/acceptance criteria/...]"

### 2. Acceptance-Driven Backpressure

Connect acceptance criteria (in specs) directly to test requirements (in plan):

- Prevents "cheating" — can't claim done without required tests
- Enables TDD workflow — test requirements known before implementation
- Improves convergence — clear completion signal

**The Prescriptiveness Balance:**
- Acceptance criteria = Behavioral outcomes (WHAT success looks like)
- Test requirements = Verification points derived from acceptance criteria
- Implementation approach = Up to Ralph (HOW to achieve it)

### 3. Non-Deterministic Backpressure

For subjective criteria (creative quality, aesthetics, UX):

Use LLM-as-Judge tests with binary pass/fail:

```typescript
interface ReviewResult {
  pass: boolean;
  feedback?: string; // Only present when pass=false
}

function createReview(config: {
  criteria: string; // What to evaluate
  artifact: string; // Text content OR screenshot path
  intelligence?: 'fast' | 'smart';
}): Promise<ReviewResult>;
```

### 4. Ralph-Friendly Work Branches

**Critical Principle:** Scope at plan creation, not at task selection.

- ❌ Wrong: Create full plan, then ask Ralph to "filter" tasks at runtime
- ✓ Right: Create a scoped plan upfront for each work branch

```bash
# Create work branch
git checkout -b ralph/user-auth-oauth

# Create scoped plan
./loop.sh plan-work "user authentication system with OAuth"

# Build from scoped plan
./loop.sh
```

### 5. JTBD → Story Map → SLC Release

**Activities over Topics:**
- Topics: "color extraction", "layout engine" → capability-oriented
- Activities: "upload photo", "see extracted colors" → journey-oriented

**User Story Map:**

```
UPLOAD    →   EXTRACT    →   ARRANGE     →   SHARE

basic         auto           manual          export
bulk          palette        templates       collab
batch         AI themes      auto-layout     embed
```

**SLC Releases (Simple, Lovable, Complete):**
- **Simple** — Narrow scope you can ship fast
- **Complete** — Fully accomplishes a job within that scope
- **Lovable** — People actually want to use it

Horizontal slices through the map become releases:

```
Palette Picker:   basic → auto → export
Mood Board:       palette → manual
Design Studio:    batch → AI themes → templates → embed
```

---

## Compatibility Summary

| Principle | Description |
|-----------|-------------|
| Monolithic operation | One agent, one task, one loop at a time |
| Fresh context | Each iteration starts clean |
| Backpressure critical | Tests/gates reject bad work |
| Deterministic setup | Same files loaded every iteration |
| Let Ralph Ralph | Ralph prioritizes, chooses approach |
| Plan is disposable | Regenerate when wrong |
| Disk Is State | Files are handoff mechanism |
| Git Is Memory | Commits preserve progress |

---

## Related

- [[Agent Skills - Vercel Skills for AI Coding Agents]]
- [[UI Skills - Constraints for Building Better Interfaces]]
- [[RAMS - Design Engineer for Coding Agents]]

---

*"I'm learnding!" - Ralph Wiggum*
