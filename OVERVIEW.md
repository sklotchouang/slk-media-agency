# OVERVIEW.md - SLK Media Agency website

Read this first. It is the single onboarding document for anyone new to this codebase. By the end you will know what the site is, how it is built, where every piece lives, how to run and ship it, and how to make the changes people usually ask for. Two companion documents go deeper on specific areas: `README.md` (quick start) and `DESIGN.md` (the premium visual and motion redesign spec). This file links to both where relevant.

Keep this file current. Every time the website changes, update this document in the same session. See "Maintaining this document" at the end.

---

## 1. What this is

This is the public marketing website for SLK Media Agency, served at https://slkmediaagency.com. SLK Media Agency helps podcasters grow through short-form clips and distribution. The website is a lead-generation site: its job is to send qualified visitors to book a strategy call, and to sell one paid entry-level product (a paid strategy report).

The site began as a hand-written static HTML site. It was converted to a Next.js App Router application (same copy, same design intent, cleaner URLs and app-like navigation), then given a site-wide premium visual and motion re-skin. The original static site is kept locally as `legacy-site/` for reference only and is not part of the repo (git-ignored, not deployed).

Every visitor path ends at one of three actions:

- Book a strategy call: `https://link.slkmediaagency.com/strmeet` (the primary CTA, labelled "Book Strategy Call" or similar, on almost every page).
- Buy the paid strategy report: Stripe checkout `https://buy.stripe.com/eVqaEWbB2eM0f2d1x318c08` (on `/podcast-toolkits` only).
- Fill the survey after purchase: `https://survey.slkmediaagency.com/0kdj1o` (on `/podcast-toolkits`).

These links, along with all copy, pricing, and legal identifiers, are treated as frozen. Do not change them without an explicit instruction. See "Content and copy rules" (section 9).

---

## 2. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | Server components by default. See `package.json`. |
| UI library | React 19 | |
| Language | Plain JavaScript | No TypeScript anywhere. Files are `.js` / `.mjs`. |
| Styling | Plain CSS files | No Tailwind, no CSS-in-JS. Three layers, see section 6. |
| Fonts | Inter via `next/font/google` | Self-hosted at build, no Google CDN request. See `components/fonts.js`. |
| Icons | Font Awesome 6.4 via CDN | Loaded in both layouts from cdnjs. |
| Smooth scroll | Lenis | The only runtime JS dependency beyond React/Next. |
| Motion | Custom DOM-driven layer | IntersectionObserver + CSS/WAAPI transforms. No Framer Motion, no GSAP. See `components/MotionLayer.js`. |
| Image tooling (dev only) | sharp | Optimizes generated art. Not shipped to the browser. |
| Screenshot tooling (dev only) | puppeteer | For the visual verification loop. See section 8. |
| Hosting | Vercel | Auto-deploys on push to `main`. See section 4. |

There is no database, no backend, no API routes, and no authentication. Everything is static marketing content plus a thin client-side interactivity and motion layer. Payments happen off-site on Stripe; call booking happens off-site on the `link.slkmediaagency.com` scheduler; the survey is off-site too.

---

## 3. Run it locally

```
npm install
npm run dev
```

Open http://localhost:3000.

Production build (what Vercel runs):

```
npm run build
npm run start
```

`npm run build` must pass before anything ships. All routes prerender at build time.

There is a preview launch config at `.claude/launch.json` named `slk-website` (runs `npm run dev` on port 3000) for the in-editor preview tools.

---

## 4. How it deploys (and the auto-commit hook, read this)

The site deploys to Vercel and serves https://slkmediaagency.com. Vercel redeploys automatically whenever commits land on the `main` branch of the GitHub remote (`origin`).

There is an automation you must be aware of: `.claude/hooks/auto-commit-push.ps1`, wired as a `Stop` hook in `.claude/settings.json`. Every time a Claude Code session finishes:

1. If any file changed, it runs `git add -A` and commits with the message `Site update (timestamp)`.
2. If an `origin` remote exists, it pushes to it, which triggers a Vercel redeploy in about two minutes.

Practical consequences:

- Changes made in a session are committed and (if a remote is set) pushed to production automatically. There is no separate "save" or "deploy" step. Treat every edit as potentially going live.
- You do not normally need to run git commands yourself. Do not fight the hook.
- If you want changes staged but not live, that requires either no `origin` remote or a deliberate branch, and a conversation with Samuel first.

---

## 5. Repository map

```
slk-media-agency/
  app/                     Next.js App Router pages (see section 7 for the full route table)
    (main)/                Route group: the core marketing pages. Uses styles.css + premium.css.
      layout.js            Root layout for this group (html/head/body, metadata, fonts, CSS links, mounts SiteBehaviors + MotionLayer)
      page.js              Home page (/)
      not-found.js         404 UI
      [...rest]/page.js    Catch-all that triggers the 404 for any unknown path
      portfolio/           /portfolio (clip grid)
      testimonials/        /testimonials
      pre-call/            /pre-call (instructions for a booked call)
      privacy-policy/      /privacy-policy (legal)
      terms-and-conditions/  /terms-and-conditions (legal)
      success/             Case studies. case-studies/ is the index; the rest use the CaseStudy template.
    (multiplier)/          Route group: the funnel pages. Uses podcast-multiplier-styles.css + premium.css.
      layout.js            Root layout for this group (near-identical to the main one, different base stylesheet)
      podcast-multiplier/  /podcast-multiplier (long-form sales page)
      podcast-toolkits/    /podcast-toolkits (paid strategy report offer) + thank-you/ + a page-scoped css file
  components/              Shared React components (see section 7.4)
  public/                  All static assets, plus legacy static HTML served via rewrites (see section 7.3)
    generated/             KIE.ai-generated atmosphere art (AVIF + WebP). raw/ is git-ignored.
    favicon/  images/  portfolio/  thumbnails/  video-testimonials/  podcast-toolkits/  pre-call-instructions-video/
    resources/             14 standalone lead-magnet HTML documents (self-contained, not part of the app re-skin)
    toolkits/              A standalone strategy-report HTML document
    styles.css             Legacy global stylesheet for the (main) group
    podcast-multiplier-styles.css  Legacy global stylesheet for the (multiplier) group
    premium.css            The premium re-skin layer, loaded on top of both (the file you edit for most visual changes)
    script.js, podcast-multiplier-script.js  LEGACY. Not loaded by the app. Kept for the static HTML pages only.
    robots.txt, sitemap.xml, og-image.jpg
  scripts/
    generate-assets.mjs    One-time generator for the atmosphere art via KIE.ai (needs KIE_API_KEY)
  tools/
    shot.js                Puppeteer screenshotter used for visual verification
    pack-screens.mjs       One-off: compresses before/after screenshots into docs/screens
  docs/
    screens/               Before/after WebP screenshots referenced by DESIGN.md
  next.config.mjs          301 redirects from old .html URLs + rewrites that serve the static HTML pages at clean URLs
  README.md                Short quick-start
  DESIGN.md                The premium redesign spec (design tokens, motion, per-route change log)
  OVERVIEW.md              This file
  .claude/                 Project automation: settings.json (Stop hook), hooks/, launch.json
  .env.local               Local secrets (git-ignored). Currently only KIE_API_KEY for asset generation.
```

Not in the repo (git-ignored): `node_modules/`, `.next/`, `/legacy-site` (original static site reference), `/shots` (working screenshots), `.env*`, `public/generated/raw`, `.claude/settings.local.json`.

---

## 6. Styling architecture (important)

Every page loads two stylesheets, in this order:

1. A legacy base stylesheet, one per route group:
   - `(main)` group loads `public/styles.css`.
   - `(multiplier)` group loads `public/podcast-multiplier-styles.css`.
   Both are large files carried over from the original static site. They define the base layout, the legacy design tokens, and most component classes.
2. `public/premium.css`, loaded on top of the base in both groups. This is the premium re-skin: it remaps the legacy design tokens to a refined dark palette and adds the hairline surfaces, glass navbar, motion styling, atmosphere layers, and per-page polish.

Because `premium.css` is loaded last and remaps the legacy tokens, most visual changes are made there, not in the two big legacy files. Editing a legacy token value flows through the whole site because the premium layer inherits from it.

`premium.css` also owns the base pricing layout (a `PRICING` block at the end of the file). This is worth knowing before you touch a pricing section: the base `.pricing-*` rules (`.pricing-grid`, `.pricing-tier`, `.pricing-header`, `.pricing-price`, `.pricing-period`, `.pricing-content`, `.pricing-footer`) originally lived only in `podcast-multiplier-styles.css`, which the `(main)` group does not load, so pricing markup on the home page would have rendered as an unstyled stack of text (the home page had no pricing section before, so nothing was ever broken in production). The layout was ported into `premium.css` (loaded by both groups) with values mirroring the multiplier stylesheet, so `/podcast-multiplier` renders as it did before and `/` now styles correctly. The card background, radius and the `.featured` accent glow still come from the shared card rules higher up in `premium.css`; the `PRICING` block adds only the `.featured` border width. The same block styles the two pricing sub-components, `.pricing-cost-anchor` and `.pricing-outcome`.

Mind the cascade when you edit that block. `premium.css` loads after `podcast-multiplier-styles.css`, so at equal specificity anything declared in the `PRICING` block wins on `/podcast-multiplier` too, and it is easy to change that page by accident. The trap that already bit once: `.pricing-tier.featured` (the accent glow) and `.pricing-tier:hover` have the same specificity, so declaring `box-shadow` on the hover rule silently erases the featured glow. That is why the hover rule sets only `transform`, and the shadow lives on `.pricing-tier:not(.featured):hover`.

One page also has a page-scoped stylesheet imported directly in its component: `app/(multiplier)/podcast-toolkits/podcast-toolkits.css`.

Fonts: the whole site runs on Inter, self-hosted through `next/font` (`components/fonts.js`). The font CSS variable is applied via a class on `<html>` in each layout. There is no render-blocking Google Fonts request.

Design tokens, the palette, the type scale, spacing, and the motion system are documented in full in `DESIGN.md` (sections 3 to 5). Read that before making a design change.

---

## 7. Routes and pages

### 7.1 App routes (real Next.js pages, the re-skin surface)

| Route | File | Purpose | CTA(s) |
|---|---|---|---|
| `/` | `app/(main)/page.js` | Home, long-form sales | Book Strategy Call (strmeet) |
| `/portfolio` | `app/(main)/portfolio/page.js` | Clip showreel grid | strmeet |
| `/testimonials` | `app/(main)/testimonials/page.js` | Testimonial grid + videos | strmeet |
| `/success/case-studies` | `app/(main)/success/case-studies/page.js` | Case study index | strmeet |
| `/success/conjure-queen` | `app/(main)/success/conjure-queen/page.js` | Case study | strmeet |
| `/success/brian-burton` | `app/(main)/success/brian-burton/page.js` | Case study | strmeet |
| `/success/steve-garrett` | `app/(main)/success/steve-garrett/page.js` | Case study | strmeet |
| `/success/rws-group` | `app/(main)/success/rws-group/page.js` | Case study | strmeet |
| `/success/sales-fix` | `app/(main)/success/sales-fix/page.js` | Case study | strmeet |
| `/success/alpine-institute` | `app/(main)/success/alpine-institute/page.js` | Case study | strmeet |
| `/pre-call` | `app/(main)/pre-call/page.js` | Instructions before a booked call | mailto |
| `/privacy-policy` | `app/(main)/privacy-policy/page.js` | Legal | none |
| `/terms-and-conditions` | `app/(main)/terms-and-conditions/page.js` | Legal | none |
| 404 | `app/(main)/not-found.js` (+ `[...rest]/page.js` catch-all) | Not-found | internal links |
| `/podcast-multiplier` | `app/(multiplier)/podcast-multiplier/page.js` | Long-form sales page | strmeet + a gamma.app case study link |
| `/podcast-toolkits` | `app/(multiplier)/podcast-toolkits/page.js` | Paid strategy report offer | Stripe checkout + survey link |
| `/podcast-toolkits/thank-you` | `app/(multiplier)/podcast-toolkits/thank-you/page.js` | Purchase confirmation | internal / email |

The six case study pages all render the shared `components/CaseStudy.js` template and pass in their own data object. One edit to the template reaches all six.

Three pages show a price. `/` and `/podcast-multiplier` each have a `pricing-section` (id `pricing`) for the $1,597/month Content Engine, and `/podcast-toolkits` has one for the $100 strategy report. They are not a shared component: the markup is inlined per page, so a change to the $1,597/month card means editing both `app/(main)/page.js` and `app/(multiplier)/podcast-multiplier/page.js`. The `/podcast-toolkits` section is a different product (a one-time report, Stripe checkout, its own fee disclosure) and is deliberately not kept in sync with the other two. See the pricing rules in section 9.

### 7.2 Nav and footer

There is no single shared Nav or Footer component. Each top-level page inlines its own `<nav>` and `<footer>` markup (they are visually identical because they share CSS classes). The six case studies get their nav and footer from the `CaseStudy` template. Practical implication: a change to the global navbar or footer that is not driven purely by CSS means editing the markup in each page file plus `CaseStudy.js`. Grep for `<nav` and `<footer>` to find them all.

### 7.3 Static HTML served from `public/` (not app pages)

These clean URLs are served from raw HTML files in `public/` via rewrites in `next.config.mjs`, not by React pages:

- `/resources/*`: 14 lead-magnet documents (checklists, playbooks, and similar). Each is a self-contained HTML file with its own inline design, no shared nav/footer, no shared stylesheet.
- `/toolkits/podcast-strategy-report`: a standalone strategy-report document.

They are outside the premium re-skin. Restyling them means editing each independent legacy HTML file by hand. Nothing in the redesigned app links into them, and their URLs keep working. The legacy `public/script.js` and `public/podcast-multiplier-script.js` exist only for these static pages; the Next app does not load them.

### 7.4 Components

| File | Client/Server | What it does |
|---|---|---|
| `components/SiteBehaviors.js` | client | Recreates the original `script.js` behaviors for the app: mobile menu, navbar shadow on scroll, video play/pause overlays, autoplay preview clips paused offscreen (IntersectionObserver), testimonial carousel, FAQ accordion, in-page anchor smooth scroll, sticky CTA bar. Re-runs after each navigation and cleans up after itself. Mounted in both layouts. |
| `components/MotionLayer.js` | client | Site-wide motion primitives applied to the server-rendered DOM so page copy never has to become client-side: Lenis smooth scroll, staggered scroll-in reveals (auto-annotated per section, grid items glide in from alternating sides), `.stat-number` count-ups, magnetic CTAs, spring FAQ, card hover lift, a scroll progress hairline, a `--sy` scroll variable that drives the home hero card parallax, plus injected decorative visuals: glowing equalizer-bar dividers at the top of major text sections site-wide, and a platform-icon marquee under the hero on `/` and `/podcast-multiplier`. All injected elements are aria-hidden, exist only while motion is on, and are removed on cleanup. All gated behind `prefers-reduced-motion`. Mounted in both layouts. |
| `components/HeroAtmosphere.js` | client | The home hero's living background: canvas waveform field + pointer spotlight. Code-split, mounts after idle, pauses offscreen, never mounts under reduced motion. Home page only. |
| `components/heroWaveform.js` | module | The actual canvas 2D drawing code, imported dynamically by `HeroAtmosphere` so it never ships in the shared bundle. |
| `components/StrategySampleGallery.js` | client | Carousel + lightbox for the 16 strategy-report sample images on `/podcast-toolkits`. Lazy-loads offscreen slides; keyboard controls in the lightbox. |
| `components/CaseStudy.js` | server | Shared template for all six case study pages (nav, hero, before/after columns, footer). Each page passes a data object. |
| `components/fonts.js` | module | Sets up self-hosted Inter via `next/font` and exports the class name applied in the layouts. |

---

## 8. Generated atmosphere art and screenshot tooling

Atmosphere art (`public/generated/`): hero soundfield (wide and tall), section mesh, film grain, ribbon accent for CTA bands, plus three generated podcast card images. Committed as optimized AVIF + WebP. They are produced by `scripts/generate-assets.mjs`, a one-time local script that calls KIE.ai GPT Image 2 and optimizes output with sharp. It reads `KIE_API_KEY` from `.env.local` (never committed, never logged, never in client code). You only re-run it if you want to regenerate the art:

```
node scripts/generate-assets.mjs
```

Screenshot verification: `tools/shot.js` renders a URL in headless Chrome and reports the screenshot path, document height, scroll position, and any console errors, with an optional reduced-motion pass. Used to verify visual changes across breakpoints.

```
node tools/shot.js <url> <out.png> [WxH] [settleMs] [scrollY|mid|bottom] [--reduced-motion]
```

`tools/pack-screens.mjs` is a one-off that compressed the curated before/after set into `docs/screens/` (referenced by `DESIGN.md`).

---

## 9. Content and copy rules (do not skip)

- Copy, CTAs, links, prices, disclosures, and legal identifiers (KVK/BTW) are frozen. This project has been a visual and motion upgrade, not a content rewrite. Do not change any text node or `href` unless Samuel asks for that specific change.
- The paid product on `/podcast-toolkits` shows a price anchor ($500 struck through to $100) and a processing-fee disclosure. Leave the Stripe link, the survey link, and the fee text exactly as they are.
- Pricing is never presented as a bare number. The two `$1,597/month` pricing sections (`/` and `/podcast-multiplier`, both `<section className="pricing-section" id="pricing">`) each pair the price with two required elements: a `.pricing-cost-anchor` block that anchors it against the $50,000 to $80,000 a year cost of a full-time in-house video editor, and a single `.pricing-outcome` line tying the spend to the clips delivered. Each section carries exactly one CTA, the booking link (`strmeet`). Keep it that way if you edit them.
- No free-work language anywhere in a pricing section: no free trial, free audit, free sample, demo, money-back, or guarantee wording. SLK Media Agency does not offer free work. (The separate `guarantee-section` on `/podcast-multiplier` is pre-existing and untouched; do not extend that language into pricing.)
- Company name is always written in full: "SLK Media Agency". Never "SLK" or "SLK Media".
- No em dashes and no en dashes anywhere in site copy or in this repo's docs. Use commas, colons, periods, and parentheses.
- Never assume Samuel personally records a podcast. The agency serves podcasters.
- When you do change copy at Samuel's request, verify the diff touches only what was asked (`git diff -- app/`).

---

## 10. How to make the common changes

- Change wording on a page: edit that page's `page.js` under `app/`. For a case study, edit the data object in the specific `success/<name>/page.js`. For copy shared by all case studies, edit `components/CaseStudy.js`.
- Restyle something site-wide: edit `public/premium.css` (the re-skin layer). Change a token value there or, if it is a legacy token, in the base stylesheet it remaps. Re-skin details and tokens are in `DESIGN.md`.
- Add a new case study: create `app/(main)/success/<slug>/page.js` that renders `CaseStudy` with a data object (copy an existing one), add the page to the index at `success/case-studies/page.js`, and add a 301 redirect for the old `.html` form in `next.config.mjs` if one existed.
- Add a redirect or serve a new static HTML page at a clean URL: edit `next.config.mjs` (`redirects()` for old-to-new, `rewrites()` for clean-URL-to-file).
- Change page metadata, favicon, theme color, or the CSS/font wiring: edit the relevant `app/(group)/layout.js`. Remember there are two layouts, one per route group, and they should usually stay in sync.
- Adjust interactive behavior (menu, carousel, accordion, sticky bar, autoplay clips): `components/SiteBehaviors.js`. Adjust motion/reveals: `components/MotionLayer.js`.
- After any visual change, verify with `tools/shot.js` at 1440x900 and 390x844, including a reduced-motion pass, and confirm `npm run build` passes with zero console errors.

---

## 11. Known constraints and gotchas

- The Stop hook auto-commits and pushes every session. Assume edits go live. See section 4.
- Two route groups, two base stylesheets, two layouts. Keep the layouts in sync unless a difference is intentional. `premium.css` is shared by both.
- Nav and footer are inlined per page, not a shared component (except case studies). Global chrome changes touch many files.
- `public/script.js` and `public/podcast-multiplier-script.js` are legacy and are not used by the app. Do not wire new behavior into them; use the React components.
- The `/resources/*` and `/toolkits/*` pages are standalone legacy HTML, outside the design system. Do not expect shared styles to reach them.
- No TypeScript, no test suite. Verification is visual (build + screenshots + console-error check).
- Secrets live only in `.env.local` (git-ignored). Never commit a key, never log it, never put it in client code.

---

## 12. Maintaining this document (standing rule)

This file is the handoff contract. It must stay accurate so a junior developer can pick up the project without asking questions.

Whenever you change the website, update `OVERVIEW.md` in the same change so the two never drift. That includes: adding, removing, or renaming a route or page; adding or changing a component; changing the styling architecture, tokens, or fonts; changing redirects or rewrites; changing build, deploy, or the auto-commit hook; changing an external CTA, price, or link; or adding tooling or assets. For a small copy tweak that changes nothing structural, no update is needed. When in doubt, add a one-line note in the relevant section.

This standing rule is also recorded in the project `CLAUDE.md` so it is loaded automatically at the start of every session.

---

Last verified against the codebase: 2026-07-14.
