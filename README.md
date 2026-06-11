# SLK Media Agency website

The public marketing website for SLK Media Agency, built with Next.js (App Router).
It is a faithful conversion of the original static HTML site: same design, same
content, but with clean URLs (no .html) and app-like navigation.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build for production

```
npm run build
npm run start
```

## Project layout

- `app/(main)/` - the main pages (home, portfolio, testimonials, pre-call, privacy policy, terms) which share `public/styles.css`
- `app/(multiplier)/` - the Podcast Multiplier page, which uses its own stylesheet `public/podcast-multiplier-styles.css`
- `components/SiteBehaviors.js` - the menu, accordion, carousel, video and sticky bar behaviors from the original script.js, rewritten so they work with app navigation
- `public/` - every asset (images, videos, favicon, CSS) plus the case study pages under `success/` and the lead magnet pages under `resources/`, served exactly as they were
- `next.config.mjs` - the 301 redirects from every old .html address and the rewrites that give the static pages clean URLs
- `legacy-site/` - the untouched original static site, kept only as a local reference (not deployed, excluded by .gitignore)

## Deployment

The site deploys to Vercel and runs on https://slkmediaagency.com.
