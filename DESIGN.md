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

- **Display**: Fraunces (variable, optical sizing) via `next/font/google`, self-hosted at build, `display: swap`, no CLS. Justification: Fraunces' high-contrast editorial voice reads "premium studio", the opposite of the AI-default grotesk-on-dark, and pairs with audio-industry warmth.
- **Body/UI**: Inter (already the site's body face) via `next/font/google`, keeping body rhythm familiar while removing the CDN request.
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

`scripts/generate-assets.mjs` (run once, local): hero-soundfield (3:2), section-mesh (3:2), grain (1:1), ribbon-accent (3:2). Output optimized with sharp to AVIF + WebP at <= 1920px, committed under `public/generated/`, referenced via `next/image` or CSS `image-set()`. Key read from `process.env.KIE_API_KEY` (`.env.local`, gitignored via `.env*`). Never in client code, never logged. STATUS: `.env.local` not present at build start; script is ready and the design layers assets as progressive enhancement (pages are complete without them, richer with them).

## 5. Motion layer

Stack decision: **Lenis (smooth scroll) + custom DOM-driven motion primitives on IntersectionObserver + WAAPI/CSS transforms**, no Framer Motion or GSAP. Reasoning: every page is a server component rendering plain HTML; Framer Motion would force converting content sections into client components (high risk to frozen copy, larger bundle). A DOM-driven layer delivers the same visual result with ~4KB of JS, keeps content server-rendered, and animates only `transform`/`opacity`. This deviates from the suggested stack deliberately; documented here.

Shared primitives (`components/MotionLayer.js`, mounted in both layouts):
- Lenis smooth scroll with custom easing (skipped entirely under reduced motion).
- Scroll-in reveals: sections' direct children get staggered rise+fade via auto-annotation (no per-page copy edits), custom cubic-bezier(0.22, 1, 0.36, 1).
- Animated link underlines and nav states (CSS).
- Magnetic/spring primary CTAs (pointer-fine devices only).
- Count-up on `.stat-number` when in view.
- Spring-feel FAQ accordion (grid-rows transition with overshoot easing).
- Subtle card hover lift + hairline glow.
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

## 7. Per-route change log (filled in during the work)

(updated at handoff)
