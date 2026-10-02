# ChrisRubinCreativ

The chrisrubincreativ.com site: Next.js (App Router), TypeScript, Tailwind CSS v4 and MDX. It is a
rebuild of the approved static site in `../CRC_handover_2026-09-30/site/`, with the same design,
copy and URLs. Every page is statically generated at build time.

## Commands

Requires Node 20.9 or later.

| Command                 | What it does                                                    |
| ----------------------- | --------------------------------------------------------------- |
| `npm install`           | Install dependencies                                            |
| `npm run dev`           | Local dev server at http://localhost:3000                       |
| `npm run build`         | Production build                                                |
| `npm run start`         | Serve the production build                                      |
| `npm run typecheck`     | TypeScript                                                      |
| `npm run lint`          | ESLint                                                          |
| `npm run format`        | Prettier (`format:check` to check only)                         |
| `npm run images`        | Regenerate `src/content/imageManifest.json` after adding images |
| `npm run verify:routes` | Check every URL, redirect, 410 and SEO file against a server    |
| `npm run test:visual`   | Playwright: overflow, interaction, a11y checks and screenshots  |

`verify:routes` and `test:visual` run against `BASE_URL` (default `http://localhost:3000`), so start
a server first. Point them at a Vercel preview to check a deployment:

```bash
BASE_URL=https://<preview>.vercel.app npm run verify:routes
```

`test:visual` writes screenshots to `test-results/visual/`. Set `ORIGINAL_URL` to a server running
the old static site (for example `npx serve ../CRC_handover_2026-09-30/site`) to capture matching
screenshots of the original for side-by-side comparison.

## Where things live

```
src/
  app/                    Routes. One folder per URL; [slug] is articles and legal pages at the root.
    work/[slug]/          Case studies
    gone/                 410 page for retired WordPress URLs
    sitemap.ts robots.ts llms.txt/   Generated from content, nothing to edit
  content/                All copy. Edit here; components only render it.
    site.ts               Site URL, contact email, Diagnostic booking link and UTMs, nav
    work.ts               Work cards (home and /work/), eras, image galleries
    cases/<slug>.ts       One file per case study; cases/index.ts sets the order
    articles/meta.ts      Article titles, descriptions, bylines and dates
    articles/<slug>.mdx   Article bodies
    writing.ts            The writing list (home and /writing/)
    pages/*.mdx           About, contact FAQ and Pitchcraft bodies
    legal/*.mdx           Terms, privacy and refund policy
    logos.ts quotes.ts timeline.ts
    redirects.ts          Every retired URL: 301 redirects and 410s
    longform.ts           Maps root-level slugs to their MDX bodies
  components/             UI, grouped by area (layout, sections, case-study, adventure, mdx, ui...)
  lib/adventure/          The homepage text adventure: rooms and text (data.ts), rules (engine.ts)
public/assets/            Images and video, at the same paths as the old site
```

Copy in `.ts` files is plain text unless the field is marked `Inline`, which allows `<i>`, `<b>`
and `<a>`. Headings, ledes and card copy tie their last two words together automatically
(when they are short), so lines don't end on a single orphaned word.

## Adding a case study

1. Put images in `public/assets/img/work/<slug>/` and run `npm run images`. Add a 1200×630 share
   image at `public/assets/img/og/<slug>.png`.
2. Copy an existing file in `src/content/cases/` to `<slug>.ts` and edit it. `ledger.ts` has a
   hero loop, quote and launch films; `google-project-rebrief.ts` has brand marks and an award.
   The `CaseStudy` type in `src/types/content.ts` documents each field.
   An ambient loop goes in `public/assets/video/<slug>/<name>.mp4`, with a `<name>-poster.jpg`.
3. Add it to the list in `src/content/cases/index.ts`, and update the `next` link of the study
   before it.
4. Add or update its card in `src/content/work.ts` with `slug` and `hasPage: true`.

The page, sitemap entry, `llms.txt` entry and structured data are generated from these files.

## Adding an article

1. Write the body as `src/content/articles/<slug>.mdx`. Markdown, tables and the components in
   `src/components/mdx/blocks.tsx` (`Lede`, `Note`, `Takeaway`, `Pullquote`, `Facts`, `Still`,
   `References` and others) are available without importing.
2. Add its metadata to `src/content/articles/meta.ts`.
3. Add a line for it to `src/content/longform.ts`.
4. Add it to `src/content/writing.ts` so it appears on /writing/ and the homepage.

The slug is the URL (`/<slug>/`), so don't rename an existing one. If a URL has to change, add a
301 in `src/content/redirects.ts`.

## Environment variables

Copy `.env.example` to `.env.local` for local work, and set the same variables in Vercel.

| Variable             | Purpose                                                                                                                 |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container. Empty means GTM isn't loaded. GA4 and all marketing tags are set up inside GTM, not here. |

Consent Mode v2 defaults load before GTM (denied in the EEA, UK and Switzerland; Global Privacy
Control is honored), and the cookie banner updates them. The site pushes named `dataLayer` events,
listed in `src/lib/analytics.ts`, for GTM to turn into GA4 events. Vercel Web Analytics loads only
on Vercel.

## Deploying on Vercel

1. Import the repository in Vercel. The site is the repository root, so leave **Root Directory**
   empty. The framework preset (Next.js) and build settings are detected; leave them as they are.
2. Add `NEXT_PUBLIC_GTM_ID` under Environment Variables (it can stay empty for previews).
3. Deploy. Each branch gets a preview URL; run `verify:routes` against it before promoting.
4. At launch, add `chrisrubincreativ.com` as the production domain. `www.chrisrubincreativ.com`,
   `chrisrubin.com` and `www.chrisrubin.com` can be added to the same project: `next.config.ts`
   redirects them to the apex in one 301 hop.

Redirects, 410s, security headers, asset caching and the `noindex` header on /pitchcraft/ are all
in `next.config.ts`, driven by `src/content/redirects.ts`. There is no `vercel.json`.
