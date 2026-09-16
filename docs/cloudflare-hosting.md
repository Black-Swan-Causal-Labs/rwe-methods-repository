# Private pilot hosting

- Site: https://rwe-methods-repository.pages.dev
- Private source repository: https://github.com/Black-Swan-Causal-Labs/rwe-methods-repository
- Cloudflare Pages project: `rwe-methods-repository` in the Black Swan Causal Labs account.
- Production branch: `main`.
- Deployment method: direct upload with Wrangler. Pushing GitHub changes does not automatically deploy.

## Access

The browser presents a username/password prompt, following the Duke-Margolis registry dashboard pattern. A shared pilot login is stored in Cloudflare secrets `PROTOTYPE_USERNAME` and `PROTOTYPE_PASSWORD` for production and preview. No credentials belong in Git or the client-side code.

Root Pages middleware checks all requests. `public/_routes.json` includes every route with no exclusions, protecting the dataset, JavaScript, images, and skill downloads as well as the HTML. Missing secrets return 503; missing or invalid credentials return 401. Authenticated responses use private/no-store caching and noindex headers. Cloudflare production and preview settings both have `fail_open: false`.

The shared login is pilot access control, not individual learner accounts. Browser Basic Authentication usually remains cached until the browser session ends. Use a private browser window when testing another login. Local Vite preview bypasses Pages authentication and remains bound to localhost.

## Build, test, deploy

From `outputs/prototype`:

```sh
npm ci
node --test tests/auth.test.mjs
npm run build
npx wrangler@4.120.1 pages deploy dist --project-name rwe-methods-repository --branch main
```

Also run `node work/validate-pilot.mjs` from the repository root. Deploy from the prototype directory so Wrangler includes `functions/_middleware.js`. Do not upload static assets alone through a workflow that omits the function.

To rotate credentials, update both Cloudflare Pages production and preview secret values, then redeploy. Confirm the settings still fail closed. Test unauthenticated and incorrect credentials against the home page, dataset, and skill downloads, and verify correct credentials succeed. Existing immutable deployment URLs should be considered separately when revoking an old password; remove superseded deployments if required.

## References

- https://developers.cloudflare.com/pages/functions/middleware/
- https://developers.cloudflare.com/pages/functions/routing/
- https://developers.cloudflare.com/pages/functions/bindings/
