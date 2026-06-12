# keithmcdonnell.net

Static site for an independent AI-engineering assessment practice. Two hand-written HTML files, no build step.

## Files

- `index.html` — landing page
- `report.html` — sample/illustrative report
- `README.md` — this file

CSS is inline in each file. Fonts load from Google Fonts via `<link>`. No framework, no JS, no build.

## Before going live

Find and replace the placeholder:

- `TODO_DOMAIN` — the email/domain (e.g. `keithmcdonnell.com` or `.net`). Currently appears once, in the landing-page CTA `mailto:`. Search the repo to confirm:

  ```bash
  grep -rn TODO_DOMAIN .
  ```

## Deploy — Cloudflare Pages

1. **Push this repo to GitHub** (private or public, either works).
2. Go to <https://dash.cloudflare.com/> → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Authorize Cloudflare for GitHub if prompted, then **select this repository**.
4. On the build configuration screen:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`  *(repo root)*
   - **Root directory:** *(leave empty)*
5. Click **Save and Deploy**. First deploy takes ~30 seconds. You'll get a `*.pages.dev` preview URL.
6. Every push to `main` now redeploys automatically.

### Custom domain

1. In the project → **Custom domains** → **Set up a custom domain**.
2. Enter the apex domain (e.g. `keithmcdonnell.net`) and follow the DNS instructions Cloudflare shows.
   - If the domain's nameservers are already at Cloudflare, the records are added for you.
   - Otherwise, add the `CNAME` (or `A`/`AAAA`) records shown at your DNS provider.
3. Cloudflare issues the TLS certificate automatically once DNS resolves. Usually live within minutes.

## Editing

Open the `.html` file, edit, commit, push. Cloudflare Pages redeploys on push.
