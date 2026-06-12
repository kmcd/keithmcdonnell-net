Deploy the site to Cloudflare Pages. Run these steps in order, stopping on any failure.

## 1. Lint

```bash
vale articles/
```

Fix any `error`-level findings before continuing. `suggestion`-level findings are advisory — do not block on them.

## 2. Build

```bash
node bin/build.js
```

Confirm the output shows all expected article counts and `Build complete → dist/`.

## 3. Deploy

```bash
npx wrangler@3 pages deploy dist --project-name keithmcdonnell-net --commit-dirty=true --branch=main
```

## 4. Verify

After deploy completes, confirm the live URL responds:

```bash
curl -s -o /dev/null -w "%{http_code}" https://keithmcdonnell.net
```

Report the HTTP status. If it's not 200, report the deployment URL from step 3 as the fallback.
