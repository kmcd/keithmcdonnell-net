# keithmcdonnell.net

Static site for an independent AI-engineering assessment practice. IBM Plex Sans, warm paper `#FAF8F2`, no framework, no JS.

## Commands

```bash
npm install          # first time only (installs marked)
npm run build        # compile src/ + articles/ → dist/
npm run lint         # Vale prose check on articles/
npm run deploy       # build + wrangler pages deploy dist/
```

Deploy requires wrangler auth: `npx wrangler@3 login`

## File structure

```
src/
  index.html          home page template (library grid is injected at build time)
  article.html        article page template
  report.html         specimen report (copied as-is)
articles/
  slug.md             article source files (markdown + YAML frontmatter)
styles/Assay/         Vale rules
bin/
  build.js            build script
dist/                 build output (gitignored) — what wrangler deploys
```

## Adding an article

1. Create `articles/slug.md` with frontmatter (see schema below)
2. Write the body in markdown below the `---` closing line
3. Run `npm run lint` — fix all errors before setting `status: live`
4. Set `status: live` when the article is ready to publish
5. Run `npm run deploy`

The build script automatically injects the article into the library grid on the home page.

## Article frontmatter schema

```yaml
---
title: "Full article title"
slug: url-slug-no-spaces
category: pricing | problems | comparisons | reviews | fit
stage: reframe | evaluate | commit | expand
status: draft | live
date: YYYY-MM-DD
description: "One sentence for meta description and library grid context."
---
```

**category** maps to library grid sections:
- `pricing` → Pricing
- `problems` → Problems
- `comparisons` → Comparisons
- `reviews` → Reviews & proof
- `fit` → Best / worst fit

**stage** maps to buyer-decision position (shown as a tag in the grid):
- `reframe` — does the Flip; changes how they think about the problem
- `evaluate` — pre-qualifies; runs the Enns qualifying conversation async
- `commit` — removes the last reason not to sign
- `expand` — re-read after engagement, referral, or due diligence

**status**:
- `draft` — appears in library grid as "soon"; no article page generated
- `live` — linked in grid; article page generated at `/articles/slug/`

## Editorial doctrine

Every article answers a **buying-decision question**, never a production one.

**Allowed (decision side):**
- Price, process, scope, fit questions
- Why a category of alternative is wrong for this buyer
- Who should not hire me and why
- What the assessment does and doesn't do
- The shape and rigour of the method — never the parameters

**Off-limits (production wall):**
- Reference bands and thresholds (any number that lets a buyer self-serve the read)
- Archetype/anti-type placement logic
- How signals resolve into a verdict
- Cross-tab judgment or weighting logic
- Any individual-developer metrics or rankings

**Borderline test:** does the piece make the reader *trust* the verdict, or could it let them *replace* it? First ships. Second stays out.

## Register and voice

- First person, named assessor: "I", never "we" or "the assessment"
- Findings stated as likelihoods and ranges — "high confidence that X", never point scores
- Plain declarative sentences. Read each sentence aloud. If you stumble, shorten it
- No hedging clusters: "may suggest", "could indicate", "appears to" — state the finding directly or give it a confidence label
- No vendor fad words: "unlock", "empower", "seamless", "transformative", "productivity gains"
- No meta-sentences: never announce what the article is going to say — say it
- British English spelling

## Vale

Vale checks prose register before deploy. Install once: `brew install vale`

Rules live in `styles/Assay/`. Key rules:
- `Hedging` — flag hedge clusters
- `VendorLanguage` — flag fad words and vendor-speak
- `PassiveVoice` — flag official-style passives
- `SentenceLength` — flag sentences over 40 words
- `BannedPhrases` — banned constructions
- `MetaSentence` — flag self-referential announcements
- `ProductionWall` — flag methodology internals that breach the production wall

Fix all `error`-level findings before setting `status: live`. `suggestion`-level findings are advisory.

## Doctrine reference

Full editorial doctrine is in Outline — Dancing Text workspace, Assay collection, **Public Surface** document.
- Content/article-library doctrine: Big-5 taxonomy, buyer-stage arc, scope rule, anti-funnel line
- Sales-page copywriting doctrine: Schwartz/Sugarman/Ogilvy synthesis
- Brand and visual identity: IBM Plex Sans, warm paper, personal-name brand
