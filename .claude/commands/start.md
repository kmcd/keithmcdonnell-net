Session start. Two modes:

- **`/start`** — no arg: orient, pick a direction
- **`/start <N>`** — load GitHub issue N and plan the work

---

## Mode A: `/start` (no arg)

### Step 1: Recent state

```bash
git log --oneline -10
git status
```

Note anything staged or modified — it may belong to prior work. Don't unstage it; pathspec scoping in `/commit` keeps it out of new commits.

### Step 2: Open issues

```bash
gh issue list --state open
```

### Step 3: Pick a direction

Based on the user's intent: pick an issue (`/start <N>`), take a direct request, or answer a question.

---

## Mode B: `/start <N>`

### Step 1: Load the issue

```bash
gh issue view <N> --json title,body,state,labels,comments
```

If `state` is `CLOSED`: stop and tell the user.

### Step 2: Classify the work

Determine which surface this touches:

| Surface | Files | Notes |
|---|---|---|
| Article | `articles/<slug>.md` | Governs by editorial doctrine (CLAUDE.md) |
| Template | `src/index.html`, `src/article.html` | Check build after any edit |
| Build tooling | `bin/build.js` | Test with `node bin/build.js` |
| Vale rules | `styles/Assay/*.yml` | Test with `vale articles/` |
| Site copy | `src/index.html` sections | No Vale, check visually |

### Step 3: For article work — load editorial context

Read `CLAUDE.md` — the scope rule, the production wall, and the register section. These are the acceptance criteria for any article.

Key constraints:
- Decision-side only: the article answers a buying-decision question, not a production one
- Production wall: no reference bands, thresholds, archetype logic, or parameters that let the buyer self-serve the verdict
- Register: first person, British English, short sentences, no hedging, no vendor language

For the article being written, check which `stage` and `category` it carries. The stage determines the job the piece does in the buyer arc (Reframe → Evaluate → Commit → Expand).

### Step 4: Baseline

```bash
node bin/build.js
```

Confirm the build is clean before starting. If it fails, fix the issue first.

### Step 5: Plan

For site/template/tooling work with more than one file: state the plan before editing. For single-article work: proceed directly.
