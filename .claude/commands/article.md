Write or continue an article for the library.

If given a slug, work on `articles/$slug.md`. If given a title, derive a slug and create the file.

Steps:
1. Check CLAUDE.md for the frontmatter schema and allowed category/stage values
2. Check the Outline Public Surface doc for editorial doctrine (decision-side only, production wall)
3. Write the body in markdown — first-person, British English, short sentences
4. Run `npm run lint` and fix all errors before finishing
5. Do NOT set `status: live` — leave that for the user to confirm

The article must answer a buying-decision question. It must not print reference bands, scoring thresholds, archetype logic, or any parameter that lets the buyer self-serve the verdict.
