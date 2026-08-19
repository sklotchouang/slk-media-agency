# OVERVIEW.md - SLK Media Agency website

Read this first. It is the single onboarding document for anyone new to this codebase. By the end you will know what the site is, how it is built, where every piece lives, how to run and ship it, and how to make the changes people usually ask for. Two companion documents go deeper on specific areas: `README.md` (quick start) and `DESIGN.md` (the premium visual and motion redesign spec). This file links to both where relevant.

Keep this file current. Every time the website changes, update this document in the same session. See "Maintaining this document" at the end.

---

## 1. What this is

This is the public marketing website for SLK Media Agency, served at https://slkmediaagency.com. SLK Media Agency helps podcasters grow through short-form clips and distribution. The website is a lead-generation site: its job is to send qualified visitors to book a strategy call, and to sell two paid entry-level products directly (a paid strategy report and a paid 10-Day Trial).

The site began as a hand-written static HTML site. It was converted to a Next.js App Router application (same copy, same design intent, cleaner URLs and app-like navigation), then given a site-wide premium visual and motion re-skin. The original static site is kept locally as `legacy-site/` for reference only and is not part of the repo (git-ignored, not deployed).

Every visitor path ends at one of four actions:

- Book a strategy call: `https://link.slkmediaagency.com/strmeet` (the primary CTA, labelled "Book Strategy Call" or similar, on almost every page).
- Buy the paid strategy report: Stripe checkout `https://buy.stripe.com/eVqaEWbB2eM0f2d1x318c08` (on `/podcast-toolkits` only).
- Buy the paid 10-Day Trial: Myfundbox checkout `https://subscription.myfundbox.com/OVP.jsf?orgid=3337&projectId=2530&projProdId=38954` (in the pricing section on `/` and `/podcast-multiplier`). Note this is Myfundbox, not Stripe. The $597 **excludes** the processing fee, which is added at checkout and brings the real total to **$617**, so the trial card carries a `.pricing-fee-note` disclosure exactly like the one `/podcast-toolkits` shows for the $100 report. If the fee or the price ever changes, that figure has to change with it in both page files, otherwise the card and the checkout disagree and buyers bounce. The URL sits on a `subscription.` host and carries query parameters, so copy it whole; do not hand-trim it. Despite that hostname the product is configured in Myfundbox as a **one-time** charge, confirmed by Samuel on 2026-08-03. The trial card and the FAQ both state "One-time payment, no subscription", and that copy is correct: do not "fix" it to match the hostname.
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

`premium.css` also carries the 9:16 rung of the aspect-ratio scale. The legacy `styles.css` defines `.ar-169` (16:9), `.ar-45` (4:5) and `.ar-11` (1:1) for the testimonial and clip cards. Preston Hurd's testimonial is a vertical reel, so `.ar-916` lives in a block at the end of `premium.css` together with the two width caps it needs (`.t-feature-media.ar-916` and `.client-video.ar-916`). That same block turns the home page's "See What Our Clients Say" row from a hard-coded four-column grid into a centred flex row: the row now holds five videos, and five is prime, so every grid column count below five strands an orphan against the left edge. `/podcast-toolkits` does not use these classes at all. It sets `aspect-ratio` inline from its own `testimonials` array, so a vertical entry there carries `vertical: true` and gets capped by `.pt-vtest-video.is-vertical` in `app/(multiplier)/podcast-toolkits/podcast-toolkits.css`, which keeps a 9:16 clip from filling the 411px video column and standing over 700px tall.

The `PRICING` block was written when the pricing section held a single centred card, but `.pricing-grid` is `repeat(auto-fit, minmax(300px, 1fr))` inside a 1200px cap, so it absorbed the move to three tiers with no CSS change at all: three columns of roughly 367px on desktop, stacking to one column below the breakpoint. `.pricing-tier.compact` keeps its `max-width: 720px`, which is simply a no-op inside a grid cell narrower than that. If a fourth tier is ever added, check this block again rather than assuming it still holds.

Because `.pricing-tier` is a column flex container with `.pricing-content { flex-grow: 1 }`, the outcome line and CTA of every tier pin to the bottom and stay aligned across the row even though the tiers have different numbers of bullets. The `.pricing-cost-anchor` blocks do not align with each other, because their text lengths genuinely differ; that is accepted, not a bug to chase.

Mind the cascade when you edit that block. `premium.css` loads after `podcast-multiplier-styles.css`, so at equal specificity anything declared in the `PRICING` block wins on `/podcast-multiplier` too, and it is easy to change that page by accident. The trap that already bit once: `.pricing-tier.featured` (the accent glow) and `.pricing-tier:hover` have the same specificity, so declaring `box-shadow` on the hover rule silently erases the featured glow. That is why the hover rule sets only `transform`, and the shadow lives on `.pricing-tier:not(.featured):hover`.

`premium.css` also carries the `/pre-call` re-skin, in the section 16 block at the end of the file. That page is the one every booked prospect is sent to before a call, but the original premium pass deliberately scoped it to "typography, spacing, nav and footer only" (`DESIGN.md` section 5), so its own classes in `styles.css` still hardcoded `#3ba7e7` and a 24px `h1` and never inherited the refined palette. It was brought up to the rest of the site on 2026-08-19: hero display type, accent kicker pills on each step, a thread connecting the steps, a framed 16:9 video, and the two links rendered as CTA cards that lift on hover.

Two things to know before editing that block. First, every rule is scoped under `.pre-call-page` purely to outrank the legacy selectors on specificity (`.main-heading`, `.sub-heading`, `.instruction-step`, `.video-wrapper`, `.pre-call-button`, `.button-main-text`, `.button-sub-text` are all single-class rules in the minified `styles.css`), so dropping that scope silently hands the page back to the 2024 styling. Second, the step headings are split into a `.pc-step-kicker` span and a `.pc-step-title` span so "Step 1:" can be styled as a pill without changing a text node; the concatenated string is still exactly the frozen copy, and the uppercase is `text-transform`, not different text.

The video frame is `aspect-ratio: 16 / 9` with `object-fit: cover`. The MP4 is exactly 16:9 so nothing is cropped off it, but the poster (`thumbnail.webp`) is 1280x648, a 2:1 crop of a frame, and `cover` fills the frame with it instead of letterboxing it. If the poster is ever regenerated at a true 16:9, `cover` and `contain` become interchangeable there.

One page also has a page-scoped stylesheet imported directly in its component: `app/(multiplier)/podcast-toolkits/podcast-toolkits.css`.

Fonts: the whole site runs on Inter, self-hosted through `next/font` (`components/fonts.js`). The font CSS variable is applied via a class on `<html>` in each layout. There is no render-blocking Google Fonts request.

Design tokens, the palette, the type scale, spacing, and the motion system are documented in full in `DESIGN.md` (sections 3 to 5). Read that before making a design change.

---

## 7. Routes and pages

### 7.1 App routes (real Next.js pages, the re-skin surface)

| Route | File | Purpose | CTA(s) |
|---|---|---|---|
| `/` | `app/(main)/page.js` | Home, long-form sales | Book Strategy Call (strmeet) + 10-Day Trial checkout (Myfundbox) in the pricing section |
| `/portfolio` | `app/(main)/portfolio/page.js` | Clip showreel grid | strmeet |
| `/testimonials` | `app/(main)/testimonials/page.js` | Testimonial grid + videos | strmeet |
| `/success/case-studies` | `app/(main)/success/case-studies/page.js` | Case study index | strmeet |
| `/success/conjure-queen` | `app/(main)/success/conjure-queen/page.js` | Case study | strmeet |
| `/success/brian-burton` | `app/(main)/success/brian-burton/page.js` | Case study | strmeet |
| `/success/steve-garrett` | `app/(main)/success/steve-garrett/page.js` | Case study | strmeet |
| `/success/rws-group` | `app/(main)/success/rws-group/page.js` | Case study | strmeet |
| `/success/sales-fix` | `app/(main)/success/sales-fix/page.js` | Case study | strmeet |
| `/success/alpine-institute` | `app/(main)/success/alpine-institute/page.js` | Case study | strmeet |
| `/pre-call` | `app/(main)/pre-call/page.js` | Instructions before a booked call (video + portfolio + testimonials) | mailto |
| `/privacy-policy` | `app/(main)/privacy-policy/page.js` | Legal | none |
| `/terms-and-conditions` | `app/(main)/terms-and-conditions/page.js` | Legal | none |
| 404 | `app/(main)/not-found.js` (+ `[...rest]/page.js` catch-all) | Not-found | internal links |
| `/podcast-multiplier` | `app/(multiplier)/podcast-multiplier/page.js` | Long-form sales page | strmeet + 10-Day Trial checkout (Myfundbox) + a gamma.app case study link |
| `/podcast-toolkits` | `app/(multiplier)/podcast-toolkits/page.js` | Paid strategy report offer | Stripe checkout + survey link |
| `/podcast-toolkits/thank-you` | `app/(multiplier)/podcast-toolkits/thank-you/page.js` | Purchase confirmation | internal / email |

The six case study pages all render the shared `components/CaseStudy.js` template and pass in their own data object. One edit to the template reaches all six.

Three pages show a price. `/` and `/podcast-multiplier` each have a `pricing-section` (id `pricing`) carrying the same three tiers, and `/podcast-toolkits` has one for the $100 strategy report. The three tiers, in the order they render (ascending, with the anchor tier last):

1. **10-Day Trial**, $597 one-time, 5 clips delivered within 10 days. Its CTA is the Myfundbox checkout, not the booking link.
2. **Content Engine Lite**, $997/month, 10 clips/month. Identical deliverables to the Content Engine apart from clip volume.
3. **Content Engine**, $1,597/month, 20 clips/month. Carries `.featured` (the accent border and glow) and is the anchor tier.

They are not a shared component: the markup is inlined per page, so any change to a tier means editing both `app/(main)/page.js` and `app/(multiplier)/podcast-multiplier/page.js`. The two files must stay identical in this section. The `/podcast-toolkits` section is a different product (a one-time report, Stripe checkout, its own fee disclosure) and is deliberately not kept in sync with the other two. See the pricing rules in section 9.

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
| `components/SiteBehaviors.js` | client | Recreates the original `script.js` behaviors for the app: mobile menu, navbar shadow on scroll, video play/pause overlays, autoplay preview clips paused offscreen (IntersectionObserver), testimonial carousel, FAQ accordion, in-page anchor smooth scroll, sticky CTA bar. Re-runs after each navigation and cleans up after itself. Mounted in both layouts. The anchor handler also moves keyboard focus to the target: it calls `preventDefault()`, which suppresses the browser's native anchor focus behavior, so it applies `tabindex="-1"` to the target and focuses it. Without that step the "Skip to content" link is inert (see section 11). |
| `components/MotionLayer.js` | client | Site-wide motion primitives applied to the server-rendered DOM so page copy never has to become client-side: Lenis smooth scroll, staggered scroll-in reveals (auto-annotated per section, grid items glide in from alternating sides), `.stat-number` count-ups, magnetic CTAs, spring FAQ, card hover lift, a scroll progress hairline, a `--sy` scroll variable that drives the home hero card parallax, plus injected decorative visuals: glowing equalizer-bar dividers at the top of major text sections site-wide, and a platform-icon marquee under the hero on `/` and `/podcast-multiplier`. The marquee glides with `translateX(-50%)`, so it travels exactly one half of its track: `MotionLayer` therefore measures one icon set and repeats it until a half is at least as wide as the screen, otherwise the icons run off the left and leave dead space on the right. Do not hard-code the number of icon sets. All injected elements are aria-hidden, exist only while motion is on, and are removed on cleanup. All gated behind `prefers-reduced-motion`. Mounted in both layouts. |
| `components/HeroAtmosphere.js` | client | The home hero's living background: canvas waveform field + pointer spotlight. Code-split, mounts after idle, pauses offscreen, never mounts under reduced motion. Home page only. |
| `components/heroWaveform.js` | module | The actual canvas 2D drawing code, imported dynamically by `HeroAtmosphere` so it never ships in the shared bundle. |
| `components/StrategySampleGallery.js` | client | Carousel + lightbox for the 16 strategy-report sample images on `/podcast-toolkits`. Lazy-loads offscreen slides; keyboard controls in the lightbox. |
| `components/CaseStudy.js` | server | Shared template for all six case study pages (nav, hero, before/after columns, footer). Each page passes a data object. |
| `components/fonts.js` | module | Sets up self-hosted Inter via `next/font` and exports the class name applied in the layouts. |

---

## 8. Assets: portfolio clips, generated atmosphere art, screenshot tooling

### Portfolio clip encoding convention

Read this before you encode a replacement clip, because the older files on disk do not follow it and copying them would be a mistake.

Both surfaces that show these clips render them in a **9:16 box with `object-fit: cover`**: `.portfolio-video` and `.social-proof .client-video`, set in the scoped block near the end of `public/styles.css`. Whatever you hand the browser gets cropped to 9:16 and centred.

The legacy files (`Clip-8`, `Clip-9`, `Clip-11`, `Clip-12`, plus `Brian-Before-After` and `Steve-Before-After`) are **720x406 landscape with the real 9:16 composition pillarboxed in the middle**, so the CSS crops the black bars back off and only about 228x406 of each file is ever visible. They also carry a roughly 96 kbps AAC track that can never be heard: the markup hard-codes `muted` and `SiteBehaviors.js` only ever toggles play/pause, it never unmutes. Two thirds of the frame and the whole audio track are wasted.

`Clip-1` through `Clip-7` and `Clip-10` are native and are the pattern to follow: **540x960 (native 9:16), H.264 High, level 4.0, no audio track, faststart**. `Clip-1` through `Clip-6` were re-encoded on 2026-08-04; `Clip-7` (Global Dispatch) and `Clip-10` (Sunflower Podcast) on 2026-08-06. At 540 wide they serve a 2x display for the ~267px card the grid gives them. The recipe:

```
ffmpeg -i <source>.mp4 -vf "scale=540:960:flags=lanczos" \
  -c:v libx264 -profile:v high -level 4.0 -preset veryslow -crf 32 \
  -maxrate 850k -bufsize 1700k -pix_fmt yuv420p -g 60 -an \
  -movflags +faststart public/portfolio/Clip-<n>.mp4
```

The poster must match the video's shape, so grab it from the encoded file rather than reusing a 16:9 still:

```
ffmpeg -ss <seconds> -i public/portfolio/Clip-<n>.mp4 -frames:v 1 -q:v 4 \
  public/portfolio/thumbnails/Clip-<n>.jpg
```

CRF 32 was chosen by comparing frames: it keeps the fine detail in these compositions (the editing-timeline strip and the logo strapline) legible while holding a 40 to 50 second clip near 1.5 MB. A 60 to 70 second clip lands near 2.1 to 2.6 MB. Source masters are 1080x1920 or larger (the Sunflower Podcast master was 2160x3840, and the single lanczos downscale to 540 wide handled it fine). If you raise the resolution or lower the CRF, remember `/portfolio` autoplays twelve of these at once and the home page pulls three of them.

Note that the recipe carries no `-r` flag, so the **source frame rate passes straight through**. Most masters are 30fps, which is where the "30fps" in the profile above comes from, but `Clip-7` is 23.976fps because its master was. That is intentional: forcing 23.976 up to 30 duplicates every fifth frame unevenly and adds judder for no benefit on a silent looping clip. Do not add `-r 30` to "fix" a clip that probes below 30fps. The `-g 60` keyframe interval simply becomes a 2.5 second GOP instead of 2 seconds, which is immaterial here.

### Generated atmosphere art and screenshot tooling

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
- Pricing is never presented as a bare number. Every tier in the two pricing sections (`/` and `/podcast-multiplier`, both `<section className="pricing-section" id="pricing">`) pairs its price with two required elements: a `.pricing-cost-anchor` block and a single `.pricing-outcome` line tying the spend to what actually ships. The Content Engine's anchor (the $50,000 to $80,000 a year in-house editor comparison) and its outcome line are the originals and are frozen.
- The pricing sections now carry two CTA destinations, not one: the booking link (`strmeet`) on both monthly tiers, and the Myfundbox checkout on the 10-Day Trial, which is a direct purchase. This replaces the former "exactly one CTA per pricing section" rule, which was correct only while the section held a single tier.
- No free-work language anywhere in a pricing section: no free trial, free audit, free sample, demo, money-back, or guarantee wording. SLK Media Agency does not offer free work. (The separate `guarantee-section` on `/podcast-multiplier` is pre-existing and untouched; do not extend that language into pricing.) The 10-Day Trial is not an exception: it is a paid $597 product, and the word "trial" must never appear without its price beside it.

### Size-gating copy, revised 2026-08-03

The audience-qualification copy was deliberately unfrozen once and rewritten, at Samuel's explicit request. The qualification filter was kept, but its axis moved from **show size** to **fit**: publishing consistency, seriousness about growth, and ability to fund the engagement. What changed:

- Every "established podcasters / established shows" instance was replaced across both long-form pages, their metadata (title, description, OpenGraph, Twitter, JSON-LD), `public/favicon/site.webmanifest`, and the `/resources/the-podcast-scaling-roadmap` lead magnet.
- Both hard download thresholds were deleted outright: "5,000+ downloads/month" from the green list and "under 5,000 downloads" from the red list. The lists now run three items each. **No replacement download number was invented, and none should be.**
- The `$1,000+` marketing-budget qualifier was dropped rather than renumbered. It had contradicted the $1,597/month price stated in the same section.
- "$10K+/month in podcast-driven revenue" softened to a revenue-channel goal, and the two "Ready to Scale Your Podcast to $10K+/Month?" headings lost the figure.
- Proof now uses the real client range (1.82K to over 100K subscribers, both verifiable in the case studies) instead of a "$50K+/month" claim.

What was deliberately **kept**, because it filters on the approved axis rather than on size: publishing cadence and tenure ("2+ episodes/month for 6+ months", "minimum 15 episodes live", "we work best with shows publishing 2-4 episodes/month"), the hobby and side-project exclusion, the "exploring options" exclusion, and the "if we don't think we can deliver 3X ROI, we'll tell you to wait" line. The Descript and OpusClip recommendation was kept too, but re-anchored from a download threshold to budget readiness.

If you are asked to touch this copy again, keep the filter and keep it on that axis.

### Invented statistics removed, 2026-08-19

Samuel's call: the aggregate agency statistics were fabricated and read as fabricated to visitors, so they were deleted rather than renumbered. **No replacement figure was invented, and none should be.** Removed:

- The four `.stats-band` blocks: the home page's `results-band` section (12.4M / 10k+ / 12k+ / 100K+, the whole section, since it existed only to hold them), and the hero bands on `/testimonials` (12.4M / 10k+ / 12k+ / 87%) and `/success/case-studies` (12.4M / 5-20+ / 1k+ / 12k+). The home and case-studies bands contradicted each other on clips created (10k+ against 1k+), which is part of why they did not survive scrutiny.
- The `.results-stats` block on `/podcast-multiplier` ("Average Client Results (90-Day Benchmark)": 2.3X / $4.2-8.5K / 40-60% / 180-320%), including its introducing `<h3>`.
- The same numbers restated in prose in the FAQs on `/` and `/podcast-multiplier`: the "What our average client sees" paragraph, "Our average client generates $4,200/month in new sponsor revenue", "Our average client sees 2-3X increase in sponsor inquiries by month 3", the "Week 3-4: 20-40% increase. Week 5-8: 2-3X increase" ladder, and "95% of clips are approved on first submission" (softened to "most"). The home page's "Our retention rate is 87% after 6 months" was rewritten without a figure.

What was deliberately **kept**, because it is real and verifiable rather than an agency-wide average: the per-case-study `heroStats` and `profileStats` passed into `components/CaseStudy.js` (Conjure Queen's 100K+ subscribers and Silver Play Button, Brian Burton's 1.82K subscribers and 8-12 clips per episode, and so on), the `.t-result-chip` line on each testimonial, and the "1.82K to over 100K subscribers" proof line. `.stats-band` and `.stat-number` still exist in the CSS and in `MotionLayer`'s count-up because the case study template still uses them.

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
- Add a video testimonial: encode to the folder convention (720px wide, 30fps, H.264 High profile, AAC around 96kbps, `+faststart`) and export a matching `poster-<name>.webp` at the same pixel dimensions, then put both in `public/video-testimonials/` as `testimonial-<name>.mp4` and `poster-<name>.webp`. The testimonial then has to be added in three places, because they do not share a component: the feature block in `app/(main)/testimonials/page.js`, the row in `app/(main)/page.js`, and the `testimonials` array in `app/(multiplier)/podcast-toolkits/page.js`. Pick the aspect-ratio class that matches the source (`.ar-169`, `.ar-45`, `.ar-11`, `.ar-916`) rather than cropping the video into a shape the layout already has.
  - Order on `/testimonials` is deliberate, set 2026-08-19: **podcast clients first, then everyone else**, because podcasters are the audience the page is selling to. Currently Shatavia Green, Brian Burton, Steve Garrett and Preston Hurd, then David Hetling (RWS Group), Kelly Bellaria (Alpine Institute) and Julien Recoussine (SalesFix). Add a new podcast testimonial to the end of the podcast run, not to the end of the page. The left/right alternation is `.t-feature:nth-child(2n)` and re-flows on its own, so it needs no attention when the order changes.
- Replace a portfolio clip: overwrite `public/portfolio/Clip-<n>.mp4` and its poster `public/portfolio/thumbnails/Clip-<n>.jpg`. No markup changes are needed, because both surfaces build the paths from the clip number. Mind which slots you touch: `/portfolio` renders `Clip-1` through `Clip-12` in order, and the home page social-proof row reuses `Clip-1`, `Clip-2` and `Clip-3`, so replacing any of those three changes the home page too. `/podcast-multiplier` separately uses `Clip-8`. The encode convention is in section 8.
- Adjust interactive behavior (menu, carousel, accordion, sticky bar, autoplay clips): `components/SiteBehaviors.js`. Adjust motion/reveals: `components/MotionLayer.js`.
- After any visual change, verify with `tools/shot.js` at 1440x900 and 390x844, including a reduced-motion pass, and confirm `npm run build` passes with zero console errors.

---

## 11. Known constraints and gotchas

- The Stop hook auto-commits and pushes every session. Assume edits go live. See section 4.
- Two route groups, two base stylesheets, two layouts. Keep the layouts in sync unless a difference is intentional. `premium.css` is shared by both.
- Nav and footer are inlined per page, not a shared component (except case studies). Global chrome changes touch many files.
- `public/script.js` and `public/podcast-multiplier-script.js` are legacy and are not used by the app. Do not wire new behavior into them; use the React components.
- The `/resources/*` and `/toolkits/*` pages are standalone legacy HTML, outside the design system. Do not expect shared styles to reach them.
- Open bug on `/testimonials`: the `.t-feature` blocks do not collapse to one column on phones. `styles.css` stacks them under `@media (max-width:880px)`, but a later unscoped `.t-feature{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}` in the same file overrides it at equal specificity (a media query adds none), so each block renders as two roughly 139px columns at 390px wide. Only the vertical block opts out, through `.t-feature.t-feature-vertical` in `premium.css`, because a 9:16 reel is unreadable at that size. The other six are knowingly left as they are. To fix them all, drop `.t-feature-vertical` from that rule.
- Fixed 2026-08-03: the "Skip to content" link was inert on all seven pages that carry it. Two causes, one symptom. The global anchor handler in `SiteBehaviors.js` intercepts every `a[href^="#"]` click and calls `preventDefault()`, which suppresses the browser's native behavior of moving focus to the target; and `<main id="main">` sits at absolute offset 0 (the navbar is out of flow), so the handler's `target.top - 80` scroll resolved to a negative number, clamped to 0, which is where the reader already was. Nothing moved and nothing focused. The handler now applies `tabindex="-1"` to the target and focuses it, with `[tabindex="-1"]:focus { outline: none }` in `premium.css` to suppress the ring on the container. If you ever add a new page, the skip link works automatically; do not reintroduce a per-page workaround.
- The portfolio grid is mixed quality as of 2026-08-06. `Clip-1` through `Clip-7` and `Clip-10` are native 9:16 at 540x960; `Clip-8`, `Clip-9`, `Clip-11` and `Clip-12` are still the legacy 720x406 pillarboxed files, whose visible area is only about 228x406 and therefore renders visibly soft next to the new ones. This is cosmetic, not broken, and it clears itself as the rest are replaced. See section 8 for the convention.
- No TypeScript, no test suite. Verification is visual (build + screenshots + console-error check).
- Secrets live only in `.env.local` (git-ignored). Never commit a key, never log it, never put it in client code.

---

## 12. Maintaining this document (standing rule)

This file is the handoff contract. It must stay accurate so a junior developer can pick up the project without asking questions.

Whenever you change the website, update `OVERVIEW.md` in the same change so the two never drift. That includes: adding, removing, or renaming a route or page; adding or changing a component; changing the styling architecture, tokens, or fonts; changing redirects or rewrites; changing build, deploy, or the auto-commit hook; changing an external CTA, price, or link; or adding tooling or assets. For a small copy tweak that changes nothing structural, no update is needed. When in doubt, add a one-line note in the relevant section.

This standing rule is also recorded in the project `CLAUDE.md` so it is loaded automatically at the start of every session.

---

Last verified against the codebase: 2026-08-06.
