# Cloudflare pilot hosting

- Site: https://rwe-methods-repository.pages.dev
- Private source repository: https://github.com/Black-Swan-Causal-Labs/rwe-methods-repository
- Cloudflare Pages project: `rwe-methods-repository` in the Black Swan Causal Labs account.
- Production branch: `main`.
- Deployment method: direct upload with Wrangler. Pushing GitHub changes does not automatically deploy.

## Access

The hosted site, dataset, assets, and skill downloads are publicly accessible without a username or password. The GitHub repository remains private. Basic Authentication was removed at the project owner's request to support in-app browser access.

Root Pages middleware adds no-store, noindex, nosniff, and no-referrer headers; it does not authenticate requests. Noindex is a search-engine instruction, not access control. Historical deployment URLs may still run the previous authentication middleware; use the main site URL above.

## Build, test, deploy

From `outputs/prototype`:

```sh
npm ci
node --test tests/access.test.mjs
npm run build
npx wrangler@4.120.1 pages deploy dist --project-name rwe-methods-repository --branch main
```

Also run `node work/validate-pilot.mjs` from the repository root. Deploy from the prototype directory so Wrangler includes the response-header middleware. Verify that the home page, dataset, and skill downloads succeed without credentials.

## References

- https://developers.cloudflare.com/pages/functions/middleware/
- https://developers.cloudflare.com/pages/functions/routing/
