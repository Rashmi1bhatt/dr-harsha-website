# Dr. Harsha Narayanamurthy — Cloudflare static deployment

This is the Cloudflare-ready static-export variant of the approved V18 site.

## Cloudflare build settings
- Framework: Next.js (Static HTML Export)
- Build command: `npx next build`
- Build output directory: `out`
- Production branch: `main`

The site uses Next.js static export and unoptimized `next/image`, so it can be hosted as static files.

The `public/_headers` file keeps temporary Cloudflare Pages deployments out of search engines. Remove or adjust it when the production custom domain is connected and ready for indexing.
