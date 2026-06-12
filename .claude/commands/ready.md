# Completion gate

Run after finishing work, before declaring done. Do not skip steps. Do not summarise results until every step passes.

## Step 1: Vale lint

```bash
vale articles/
```

Fix all `error`-level findings. `suggestion`-level findings are advisory — review but don't block on them.

If Vale is not installed: `brew install vale`.

## Step 2: Build

```bash
node bin/build.js
```

Confirm output shows correct article counts and `Build complete → dist/`. If the build fails, fix before continuing.

## Step 3: Self-review

Review the diff against these criteria:

**For article changes:**
- Frontmatter complete: `title`, `slug`, `category`, `stage`, `status`, `date`, `description` all present and valid
- `category` is one of: `pricing`, `problems`, `comparisons`, `reviews`, `fit`
- `stage` is one of: `reframe`, `evaluate`, `commit`, `expand`
- `status` is `draft` (never set `live` without user confirmation)
- Production wall: no reference bands, scoring thresholds, archetype logic, or methodology parameters
- Scope rule: the piece answers a buying-decision question, not a production one
- Register: first person, no hedging clusters, no vendor fad words, British English, short sentences

**For template/CSS changes:**
- No inline `font-family` overrides that break the single-font rule (IBM Plex Sans only)
- `<!-- BUILD:LIBRARY_GRID -->` marker still present in `src/index.html`
- Article template `{{title}}`, `{{stage}}`, `{{category}}`, `{{content}}`, `{{date}}` placeholders intact in `src/article.html`

**For build script changes:**
- Run `node bin/build.js` with a draft article in place — confirm the grid generates correctly
- Run `node bin/build.js` with a `status: live` article — confirm the article page is generated in `dist/articles/slug/`

## Step 4: Scope sweep

Compare the work against the originating issue or request:

- **Asked** — re-read the issue body or user message. Enumerate every concrete item.
- **Done** — what the diff actually changed.
- **Deferred** — anything in Asked but not Done. Name it explicitly.

If Deferred is non-empty, either fix it now or note it in the handoff message.

## Step 5: Done

Tell the user the gate passed and wait for `/commit`.
