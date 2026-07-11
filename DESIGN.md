# DESIGN.md - Premium Redesign of slkmediaagency.com

Branch: `premium-redesign`. This document is the single source of truth for the site-wide premium re-skin and motion layer. Copy, CTAs, links, pricing, disclosures, and legal identifiers are frozen: this is a visual and motion upgrade only.

## 1. Route inventory (enumerated from `app/`, confirmed against `next.config.mjs`)

### App routes (the redesign surface)

| Route | File | Type | CTA(s) on page (frozen) |
|---|---|---|---|
| `/` | `app/(main)/page.js` | Long-form sales (home) | strmeet (Book Strategy Call) |
| `/portfolio` | `app/(main)/portfolio/page.js` | Clip grid | strmeet |
| `/testimonials` | `app/(main)/testimonials/page.js` | Testimonial grid + videos | strmeet |
| `/success/case-studies` | `app/(main)/success/case-studies/page.js` | Case study index | strmeet |
| `/success/conjure-queen` | `app/(main)/success/conjure-queen/page.js` | Case study (shared `CaseStudy` template) | strmeet |
| `/success/brian-burton` | `app/(main)/success/brian-burton/page.js` | Case study | strmeet |
| `/success/steve-garrett` | `app/(main)/success/steve-garrett/page.js` | Case study | strmeet |
| `/success/rws-group` | `app/(main)/success/rws-group/page.js` | Case study | strmeet |
| `/success/sales-fix` | `app/(main)/success/sales-fix/page.js` | Case study | strmeet |
| `/success/alpine-institute` | `app/(main)/success/alpine-institute/page.js` | Case study | strmeet |
| `/terms-and-conditions` | `app/(main)/terms-and-conditions/page.js` | Legal | none |
| `/privacy-policy` | `app/(main)/privacy-policy/page.js` | Legal | none |
| `/pre-call` | `app/(main)/pre-call/page.js` | Utility (booked-call instructions, video) | mailto |
| 404 (`not-found` + `[...rest]` catch-all) | `app/(main)/not-found.js` | Utility | internal links |
| `/podcast-multiplier` | `app/(multiplier)/podcast-multiplier/page.js` | Long-form sales | strmeet + gamma.app case study link |
| `/podcast-toolkits` | `app/(multiplier)/podcast-toolkits/page.js` | Offer page ($100 report) | Stripe checkout `buy.stripe.com/eVqaEWbB2eM0f2d1x318c08` + survey `survey.slkmediaagency.com/0kdj1o` |
| `/podcast-toolkits/thank-you` | `app/(multiplier)/podcast-toolkits/thank-you/page.js` | Utility (purchase confirmation) | internal/email |

Notes on the user-provided route list: `/success/brian-burton`, `/success/steve-garrett`, `/success/conjure-queen`, `/success/case-studies` confirmed; the codebase adds three more case studies (`rws-group`, `sales-fix`, `alpine-institute`) plus `/pre-call` and `/podcast-toolkits/thank-you`. All are included in the redesign.

### Static HTML served from `public/` via rewrites (NOT part of the app re-skin)

`/resources/*` (14 lead-magnet documents) and `/toolkits/podcast-strategy-report` are standalone HTML files in `public/`, served by `next.config.mjs` rewrites. They are self-contained deliverable-style documents with their own inline design, no shared nav/footer, and no shared stylesheet. They are enumerated here for completeness but excluded from the re-skin: restyling them means editing 15 independent legacy HTML files with no shared layer, which is a separate project. Nothing in the app links into them from the redesigned pages, and their URLs keep working unchanged.

## 2. Current state (before)

- **Framework**: Next.js 16.2.9 (App Router), React 19, plain JavaScript, no TypeScript, no Tailwind.
- **Route groups**: `(main)` and `(multiplier)`, each with its own root `layout.js` (no shared root layout). Both layouts are nearly identical: favicon set, `themeColor #0a0a0a`, and `<link>` tags to global CSS in `/public`.
- **Styling**: two large minified global stylesheets served statically: `public/styles.css` (71KB, main group) and `public/podcast-multiplier-styles.css` (58KB, multiplier group). Both share the same `:root` token block (accent `#3ba7e7` blue, base `#0a0a0a`, purple/red dark gradients, `Inter` only). Plus `app/(multiplier)/podcast-toolkits/podcast-toolkits.css` (page-scoped, imported).
- **Fonts**: Inter from Google Fonts CDN (render-blocking `<link>`, FOUT risk), Font Awesome 6.4 from cdnjs for icons.
- **Interactivity**: one shared client component `components/SiteBehaviors.js` (mobile menu, navbar shadow, video play/pause overlays, `data-autoplay` clips paused offscreen via IntersectionObserver, testimonial carousel, FAQ accordion, smooth anchor scrolling, sticky CTA bar). `components/StrategySampleGallery.js` is already a lazy carousel + lightbox for the 16 toolkit samples. `components/CaseStudy.js` is a shared template all six case studies pass data into.
- **Media**: MP4 clips + JPG/WebP posters in `/public/portfolio`, `/public/video-testimonials`; sample pages as PNG.
- **No motion design**: no scroll reveals, no easing system, browser-default everything. Sections read as a wall of text on the long pages.
- **Inconsistencies found**: `/portfolio` viewport `themeColor` is `#ffffff` while the page is dark (all other pages use `#0a0a0a`); emoji-based indicators; inline styles scattered in JSX.

## 3. Design direction (the constitution)

**One sentence**: precision-dark editorial - a near-black studio atmosphere where light behaves like sound: one warm accent, hairline structure, and motion that always resolves toward the CTA.

### Palette (all combinations contrast-checked at >= 4.5:1 for text)

| Token | Value | Role |
|---|---|---|
| `--bg-base` | `#0a0a0b` | Page base (kept near the existing #0a0a0a; theme-color stays in sync) |
| `--bg-raised` | `#111114` | Cards, raised surfaces |
| `--bg-overlay` | `#17171c` | Popovers, sticky bars, lightbox chrome |
| `--text-primary` | `#f5f6f8` | Headings, key copy (15.9:1 on base) |
| `--text-secondary` | `#b6bac3` | Body copy (8.6:1) |
| `--text-muted` | `#8b8f99` | Captions, labels (5.1:1) |
| `--hairline` | `rgba(255,255,255,0.08)` | 1px borders |
| `--hairline-strong` | `rgba(255,255,255,0.14)` | Emphasized borders, table rules |
| `--accent` | `#4cb2f0` | THE accent: CTAs, links, focus rings, live moments (kept in the brand's blue family, tuned for 4.9:1 on base) |
| `--accent-strong` | `#7cc6f5` | Hover/active text on dark (7:1) |

Legacy variables (`--primary-color`, `--bg-color`, gradients...) are re-mapped to these so the entire existing CSS inherits the refined palette without a rewrite.

### Typography

- **One face: Inter** via `next/font/google` (self-hosted, `display: swap`, no CLS, CDN removed). Samuel's call on 2026-07-09: keep the original page's text format. Headings are bold Inter (800 display / 700 sections) with the original flat accent highlight, exactly the original voice; the premium feel comes from the palette, rhythm, atmosphere, and motion instead. (Fraunces was tried and reverted.)
- **Scale** (fluid, clamp-based): display `clamp(2.6rem, 5.5vw, 4.4rem)`, h2 `clamp(1.9rem, 3.4vw, 2.75rem)`, h3 `1.25rem`, body `1.0625rem`, small `0.875rem`, overline `0.75rem` tracked +0.14em.
- Headings: `text-wrap: balance` (no orphans), `hyphens: none` (no mid-word breaks), tight leading 1.08 for display, 1.15 for h2.

### Spacing and layout

- Section rhythm: `--space-section: clamp(88px, 12vh, 140px)` between major sections on long pages; content max-widths: prose 68ch, standard 1200px, wide 1320px.
- 8px base spacing scale (4/8/12/16/24/32/48/64/96).
- Legal pages: 720px column, 1.75 line-height, clear h2 hierarchy.

### Depth and texture

- Hairline 1px borders + very soft ambient shadows (never harsh drop shadows).
- Generated atmosphere assets (Step 4 below): hero sound-field behind the home hero, gradient mesh behind alternating sections at low opacity, film grain overlay at ~3% opacity site-wide, ribbon-accent for CTA bands.
- Glass/blur used exactly twice: the scrolled navbar and the sticky CTA bar.

## 4. Atmosphere assets (KIE.ai GPT Image 2)

`scripts/generate-assets.mjs` (run once, local): hero-soundfield (3:2), hero-soundfield-tall (2:3), section-mesh (3:2), grain (1:1), ribbon-accent (3:2). Output optimized with sharp to AVIF + WebP at <= 1920px, committed under `public/generated/`. Key read from `process.env.KIE_API_KEY` (`.env.local`, gitignored via `.env*`). Never in client code, never logged. STATUS: generated 2026-07-09 and wired site-wide via CSS `image-set()` pseudo-element layers: soundfield behind every hero (slow 40s ambient drift), mesh behind alternating content sections, ribbon across the CTA bands (26s drift). All drift animation is inside `prefers-reduced-motion: no-preference`.

## 5. Motion layer

Stack decision: **Lenis (smooth scroll) + custom DOM-driven motion primitives on IntersectionObserver + WAAPI/CSS transforms**, no Framer Motion or GSAP. Reasoning: every page is a server component rendering plain HTML; Framer Motion would force converting content sections into client components (high risk to frozen copy, larger bundle). A DOM-driven layer delivers the same visual result with ~4KB of JS, keeps content server-rendered, and animates only `transform`/`opacity`. This deviates from the suggested stack deliberately; documented here.

Shared primitives (`components/MotionLayer.js`, mounted in both layouts):
- Lenis smooth scroll with custom easing (skipped entirely under reduced motion).
- Scroll-in reveals: sections' direct children get staggered rise+fade via auto-annotation (no per-page copy edits), custom cubic-bezier(0.22, 1, 0.36, 1). Liveliness pass 2026-07-11: reveals now include a slight scale and blur settle (30px rise, blur(5px) to sharp, 0.85s).
- Scroll progress hairline: a 2px accent bar fixed at the top of the viewport, injected by MotionLayer and driven by a `--scroll-progress` variable.
- Parallax: MotionLayer sets a `--sy` scroll variable on `<html>`; the home hero floating cards ride it slightly slower than the page.
- Animated link underlines and nav states (CSS).
- Magnetic/spring primary CTAs (pointer-fine devices only).
- Count-up on `.stat-number` when in view.
- Spring-feel FAQ accordion (grid-rows transition with overshoot easing).
- Subtle card hover lift + hairline glow.
- Always-on ambient life (liveliness pass 2026-07-11, all inside the reduced-motion gate): accent shimmer sweeping through `.highlight` spans, a quiet pulse ring plus periodic sheen sweep on primary CTAs, breathing hero glow, drifting section mesh, faster ribbon drift (18s, wider travel), and a stronger page-wide soundfield breathe (34s scale plus drift).
- Injected motion visuals (round 2 of the liveliness pass, same day): two large aurora orbs drifting behind every page (CSS only, `html::before/::after`), glowing 7-bar equalizer dividers injected at the top of the major text sections (decorative, aria-hidden, motion-on only), an infinite platform-icon marquee gliding under the hero on `/` and `/podcast-multiplier` (Font Awesome brand icons, two duplicated sets for a seamless -50% loop), and alternating side-glide reveals for grid items (`--rv-x` set per item by MotionLayer). The home hero canvas waveform was amplified to feature level: roughly double amplitude, much higher stroke alpha, thicker two-tone lines, faster phase.
- All gated behind `prefers-reduced-motion: reduce` -> clean static render.

Page-specific:
- **Home**: living hero: layered soundfield asset + lazy-mounted canvas 2D waveform reacting subtly to cursor + pointer-following spotlight + gentle parallax + stat count-ups. Canvas code-split via `next/dynamic`, mounted only on `/`, paused offscreen, tuned down on mobile.
- **/podcast-multiplier**: consistent hero treatment, section reveals to pace the long copy, polished comparison table/pricing card/FAQ/founder photo.
- **/podcast-toolkits**: gallery polish (already carousel+lightbox; refine), tasteful price-anchor reveal ($500 struck to $100), Stripe CTA and survey link untouched.
- **/portfolio**: premium clip grid, autoplay muted in view (existing behavior kept), hover scale + shadow.
- **Case studies**: editorial rhythm via the shared `CaseStudy` template - one edit reaches all six.
- **Testimonials**: premium grid, videos unchanged.
- **Legal + pre-call + thank-you + 404**: typography/spacing/nav/footer only, gentle fade at most, no heavy bundles.

## 6. Verification plan

- `tools/shot.js` (Puppeteer): URL -> screenshots at 1440x900 and 390x844 at top/mid/bottom + console errors + doc height; reduced-motion emulation pass per page.
- >= 3 critique passes: `/`, `/podcast-multiplier`, `/podcast-toolkits`, `/portfolio`. >= 1 thorough pass: every case study, `/testimonials`, legal pages, `/pre-call`, thank-you, 404.
- Final checks: build passes, zero console errors, CTAs/copy diff-verified unchanged, videos play, 360-1920px, reduced motion clean, no key in repo or bundle.

## 7. Per-route change log

Shared across every route (from the one design layer, no per-page forks): refined palette remapped onto the legacy tokens, Fraunces display + Inter body via next/font (Google Fonts CDN removed), fluid type scale with balanced headings, hairline surfaces and soft elevation, glass navbar and sticky bar, film-grain overlay, animated link underlines, staggered scroll reveals, stat count-ups, magnetic CTAs, Lenis smooth scroll, and a clean static path under prefers-reduced-motion. Copy, CTAs, links, prices, disclosures, KVK/BTW identifiers: unchanged (verified via `git diff main -- app/`, which contains no text-node or href changes).

| Route | What changed (visual/motion only) | Screens |
|---|---|---|
| `/` | Living hero: canvas waveform reacting to cursor + pointer spotlight (code-split, idle-mounted, paused offscreen), gradient display headline, muted mockup cards, count-up stats band, hardcoded purple problem-section wash removed, CTA band treatment | [before](docs/screens/before-home.webp) / [after](docs/screens/after-home.webp), [mobile](docs/screens/after-home-mobile.webp), [reduced-motion](docs/screens/after-home-reduced-motion.webp) |
| `/podcast-multiplier` | Editorial hero, refined comparison table (featured column, semantic cell tints), pricing card glow, founder sections, FAQ list polish, section reveals pacing the long copy | [before](docs/screens/before-podcast-multiplier.webp) / [after](docs/screens/after-podcast-multiplier.webp), [comparison](docs/screens/after-podcast-multiplier-comparison.webp) |
| `/podcast-toolkits` | Price anchor reveal ($500 strike draws, $100 lands on spring), polished sample carousel + lightbox (kept lazy), deliverable cards, testimonial features; Stripe CTA, survey link, and fee disclosure untouched; hamburger reset fixed | [before](docs/screens/before-podcast-toolkits.webp) / [after](docs/screens/after-podcast-toolkits.webp), [mobile](docs/screens/after-podcast-toolkits-mobile.webp) |
| `/podcast-toolkits/thank-you` | Shared system typography/surfaces, quiet motion | [after](docs/screens/after-thank-you.webp) |
| `/portfolio` | Premium clip grid with hover lift + shadow (autoplay-in-view kept), CTA panel, theme-color fixed from #ffffff to the site base | [before](docs/screens/before-portfolio.webp) / [after](docs/screens/after-portfolio.webp), [CTA](docs/screens/after-portfolio-cta.webp) |
| `/testimonials` | Editorial pull-quote features (Fraunces), badge chips, stats count-up, video grid unchanged functionally | [after](docs/screens/after-testimonials.webp) |
| `/success/case-studies` | Consistent case cards with hover lift | [after](docs/screens/after-case-studies-index.webp) |
| `/success/*` (6 studies) | One edit through the shared `CaseStudy` template: editorial hero with display stats, badge system, before/after columns, section rhythm | [after](docs/screens/after-case-study.webp) |
| `/terms-and-conditions`, `/privacy-policy` | 720px reading column, 1.75 line-height, Fraunces section heads, hairline separators, motion minimal | [terms](docs/screens/after-terms.webp), [privacy](docs/screens/after-privacy.webp) |
| `/pre-call` | System typography and surfaces, video container polish | [after](docs/screens/after-pre-call.webp) |
| 404 | Display-face gradient numerals, system buttons | [after](docs/screens/after-404.webp) |

## 8. Handoff notes

- Branch `premium-redesign`, clean commits, not pushed. Review via Vercel preview after pushing.
- `npm run build` passes; all 18 routes prerender.
- Console: zero errors across routes at 1440x900 and 390x844 (the only console entry anywhere is the expected HTTP 404 status on the 404 route itself).
- KIE_API_KEY was not present in `.env.local` during the build, so the four atmosphere assets are not yet generated. The design stands complete without them (CSS radial light + SVG grain deliver the atmosphere). When the key lands: `node scripts/generate-assets.mjs`, then wire `public/generated/*.avif|webp` into the hero and section backdrops (one small CSS/commit step). The script is confirmed against the current KIE docs (`resolution` parameter, not `quality`).
- Deviation from the suggested motion stack, on purpose: no Framer Motion/GSAP. Pages stay server-rendered; a 4KB DOM-driven layer (Lenis + IntersectionObserver + WAAPI-style transitions) delivers the same result with a smaller bundle and zero risk to frozen copy.
- tools/shot.js: `node tools/shot.js <url> <out.png> [WxH] [settleMs] [scrollY|mid|bottom] [--reduced-motion]` - prints `{"out","docHeight","scrollY","errors":[]}`.
