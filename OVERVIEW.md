# OVERVIEW.md - SLK Media Agency website

Read this first. It is the single onboarding document for anyone new to this codebase. By the end you will know what the site is, how it is built, where every piece lives, how to run and ship it, and how to make the changes people usually ask for. Two companion documents go deeper on specific areas: `README.md` (quick start) and `DESIGN.md` (the premium visual and motion redesign spec). This file links to both where relevant.

Keep this file current. Every time the website changes, update this document in the same session. See "Maintaining this document" at the end.

---

## 1. What this is

This is the public marketing website for SLK Media Agency, served at https://slkmediaagency.com. SLK Media Agency helps podcasters grow through short-form clips and distribution. The website is a lead-generation site: its job is to send qualified visitors to book a strategy call, and to sell paid entry-level products directly (a paid strategy report and the do-it-yourself guides on `/podcast-toolkits`). The paid 10-Day Trial was retired from the website on 16 October 2026.

The site began as a hand-written static HTML site. It was converted to a Next.js App Router application (same copy, same design intent, cleaner URLs and app-like navigation), then given a site-wide premium visual and motion re-skin. The original static site is kept locally as `legacy-site/` for reference only and is not part of the repo (git-ignored, not deployed).

Every visitor path ends at one of these actions:

- Book a strategy call: `https://link.slkmediaagency.com/strmeet` (the primary CTA, labelled "Book Strategy Call" or similar, on almost every page).
- Buy the paid strategy report: Stripe checkout `https://buy.stripe.com/eVqaEWbB2eM0f2d1x318c08` (on `/podcast-toolkits` only).
- Buy a package directly, without the call: three Myfundbox checkouts (on `/pricing` only, since 2026-10-20, the "Ready now? Skip the call and pay" link under each card). Done With You `https://pay.myfundbox.com/OVP/?token=nqEFAw0ZzvYeM2sHwa0ABw` ($997/month), Done For You `https://pay.myfundbox.com/OVP/?token=YqnycQ4nQ-hWYXg64XvGBg` ($1,597/month), Done For You Plus `https://pay.myfundbox.com/OVP/?token=xAlmD9YT1xUcuR5nBQPv_g` ($1,897/month). All three were opened on 2026-10-20 and show the right plan in USD. Two earlier links Samuel sent that day charged in euros and were replaced; never use tokens `7wkxbD2gLs208qmVxVdO2Q` or `dRfxupAaldYRdw3531vD-Q`. The URLs live in `PAY_URL` in `components/PricingPlans.js`.
- Retired: the paid 10-Day Trial. Its Myfundbox checkout `https://pay.myfundbox.com/OVP/?token=2vrB8voEVlNvxYLTc6S_5g` was retired from the website on 16 Oct 2026, kept here for reference. The checkout itself was not deleted. No page, component or chatbot file links to it any more. It was $497 one time (fee included, since 2026-10-06) for 5 edited clips within 10 days, and it lived only on `/pricing`. Do not bring it back without Samuel's instruction.
- Fill the survey after purchase: `https://survey.slkmediaagency.com/0kdj1o` (on `/podcast-toolkits`).
- Buy one of the 16 do-it-yourself PDF guides or the bundle of the first 10: Gumroad overlay checkout on the `samuellk.gumroad.com` store (on `/podcast-toolkits` only, since 2026-10-03). See "The `/podcast-toolkits` shop" in section 7.1.

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

There is a preview launch config at `.claude/launch.json` named `slk-website` (runs `npm run dev` on port 3000) for the in-editor preview tools. It sets `"autoPort": true` as of 2026-09-01, so if port 3000 is already taken the preview starts on a free port instead of failing. Nothing on this site depends on port 3000 specifically (no OAuth callbacks, no webhooks, no CORS allowlist), and `next dev` reads the assigned port from the `PORT` environment variable, so there is no hard-coded port flag to keep in sync.

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
      pricing/             /pricing (two packages, add-ons and a calculator since 2026-10-16; the link the SDR sends; not in any nav). /pricing/clips-only redirects here since 2026-10-12.
      pre-call/            /pre-call (instructions for a booked call)
      privacy-policy/      /privacy-policy (legal)
      terms-and-conditions/  /terms-and-conditions (legal)
      success/             Case studies. case-studies/ is the index; the rest use the CaseStudy template.
    (multiplier)/          Route group: the funnel pages. Uses podcast-multiplier-styles.css + premium.css.
      layout.js            Root layout for this group (near-identical to the main one, different base stylesheet)
      podcast-multiplier/  /podcast-multiplier (long-form sales page)
      podcast-toolkits/    /podcast-toolkits (shop: featured strategy report + 16 Gumroad PDF guides) + thank-you/ + a page-scoped css file + toolkits.json (generated guide data)
  components/              Shared React components (see section 7.4)
  public/                  All static assets, plus legacy static HTML served via rewrites (see section 7.3)
    generated/             KIE.ai-generated atmosphere art (AVIF + WebP). raw/ is git-ignored.
    favicon/  images/  portfolio/  thumbnails/  video-testimonials/  podcast-toolkits/  pre-call-instructions-video/
    podcast-toolkits/guides/  WebP covers and preview pages for the 16 guides + the bundle image (generated by scripts/sync-toolkits.mjs)
    resources/             14 standalone lead-magnet HTML documents (self-contained, not part of the app re-skin)
    toolkits/              A standalone strategy-report HTML document
    styles.css             Legacy global stylesheet for the (main) group
    podcast-multiplier-styles.css  Legacy global stylesheet for the (multiplier) group
    premium.css            The premium re-skin layer, loaded on top of both (the file you edit for most visual changes)
    script.js, podcast-multiplier-script.js  LEGACY. Not loaded by the app. Kept for the static HTML pages only.
    robots.txt, sitemap.xml, og-image.jpg  sitemap.xml is hand-maintained: add a <url> block when you add a route
  scripts/
    generate-assets.mjs    One-time generator for the atmosphere art via KIE.ai (needs KIE_API_KEY)
    sync-toolkits.mjs      Copies the guide data and images from the product-forge handoff folder (free, local, sharp only)
  tools/
    shot.js                Puppeteer screenshotter used for visual verification
    pack-screens.mjs       One-off: compresses before/after screenshots into docs/screens
  docs/
    screens/               Before/after WebP screenshots referenced by DESIGN.md
    chatbot/               Source of truth for the re:tune website chatbot (see section 12). Not shipped to the browser.
  slkwebsitechatbotknowledge.md  The verified fact-gather the chatbot content was built from (see section 12)
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

`premium.css` also carries the 9:16 rung of the aspect-ratio scale. The legacy `styles.css` defines `.ar-169` (16:9), `.ar-45` (4:5) and `.ar-11` (1:1) for the testimonial and clip cards. Preston Hurd's testimonial is a vertical reel, so `.ar-916` lives in a block at the end of `premium.css` together with the two width caps it needs (`.t-feature-media.ar-916` and `.client-video.ar-916`). That same block turns the home page's "See What Our Clients Say" row from a hard-coded four-column grid into a centred flex row: the row now holds five videos, and five is prime, so every grid column count below five strands an orphan against the left edge. The same block also gives that row a single 220px frame height above 768px, with `object-fit: contain` on the video. That was added on 2026-09-09, when the three non-podcast testimonials in the row were swapped for three 16:9 ones: at a 190px flex basis a 16:9 card is only 105px tall next to a 187px square and a 333px reel, and no equal-width layout fixes that when the sources are landscape. Letterboxing inside one frame keeps the row even without cropping, which matters because A.D. Edwards' clip is a two-person split screen and a portrait crop would remove a speaker. It is desktop-only, since below 768px each card goes full width one per row. `/podcast-toolkits` does not use these classes at all. It sets `aspect-ratio` inline from its own `testimonials` array, so a vertical entry there carries `vertical: true` and gets capped by `.pt-vtest-video.is-vertical` in `app/(multiplier)/podcast-toolkits/podcast-toolkits.css`, which keeps a 9:16 clip from filling the 411px video column and standing over 700px tall.

The `PRICING` block was written when the pricing section held a single centred card, but `.pricing-grid` is `repeat(auto-fit, minmax(300px, 1fr))` inside a 1200px cap, so it absorbed the move to three tiers with no CSS change at all: three columns of roughly 367px on desktop, stacking to one column below the breakpoint. `.pricing-tier.compact` keeps its `max-width: 720px`, which is simply a no-op inside a grid cell narrower than that. If a fourth tier is ever added, check this block again rather than assuming it still holds.

Because `.pricing-tier` is a column flex container with `.pricing-content { flex-grow: 1 }`, the outcome line and CTA of every tier pin to the bottom and stay aligned across the row even though the tiers have different numbers of bullets. The `.pricing-cost-anchor` blocks do not align with each other, because their text lengths genuinely differ; that is accepted, not a bug to chase.

Mind the cascade when you edit that block. `premium.css` loads after `podcast-multiplier-styles.css`, so at equal specificity anything declared in the `PRICING` block wins on `/podcast-multiplier` too. That cross-page risk is dormant since 2026-09-01, and since 2026-10-12 nothing in the app uses the `.pricing-*` tier classes at all: the unified `/pricing` page has its own `.pp-*` markup. The `PRICING` block is kept because `/podcast-multiplier`'s legacy stylesheet still defines the same classes and removing the override would change nothing visible but is untested. It is dormant, not gone: the rules are still unscoped and still reach both route groups, so if pricing markup is ever added back to another page the trap is live again. The trap that already bit once: `.pricing-tier.featured` (the accent glow) and `.pricing-tier:hover` have the same specificity, so declaring `box-shadow` on the hover rule silently erases the featured glow. That is why the hover rule sets only `transform`, and the shadow lives on `.pricing-tier:not(.featured):hover`.

`premium.css` also carries the `/pre-call` re-skin, in the section 16 block at the end of the file. That page is the one every booked prospect is sent to before a call, but the original premium pass deliberately scoped it to "typography, spacing, nav and footer only" (`DESIGN.md` section 5), so its own classes in `styles.css` still hardcoded `#3ba7e7` and a 24px `h1` and never inherited the refined palette. It was brought up to the rest of the site on 2026-08-19: hero display type, accent kicker pills on each step, a thread connecting the steps, a framed 16:9 video, and the two links rendered as CTA cards that lift on hover.

Two things to know before editing that block. First, every rule is scoped under `.pre-call-page` purely to outrank the legacy selectors on specificity (`.main-heading`, `.sub-heading`, `.instruction-step`, `.video-wrapper`, `.pre-call-button`, `.button-main-text`, `.button-sub-text` are all single-class rules in the minified `styles.css`), so dropping that scope silently hands the page back to the 2024 styling. Second, the step headings are split into a `.pc-step-kicker` span and a `.pc-step-title` span so "Step 1:" can be styled as a pill without changing a text node; the concatenated string is still exactly the frozen copy, and the uppercase is `text-transform`, not different text.

The video frame is `aspect-ratio: 16 / 9` with `object-fit: cover`. The MP4 is exactly 16:9 so nothing is cropped off it, but the poster (`thumbnail.webp`) is 1280x648, a 2:1 crop of a frame, and `cover` fills the frame with it instead of letterboxing it. If the poster is ever regenerated at a true 16:9, `cover` and `contain` become interchangeable there.

`premium.css` also carries the `/pricing` re-skin, in the section 17 block at the very end of the file. Like the `/pre-call` block, every rule is scoped under a page class (`.pricing-page`, set on `<main id="main">`), and that scope is load-bearing rather than tidy: `premium.css` loads after `podcast-multiplier-styles.css`, so an unscoped `.pricing-*` or bare `table` rule declared there would win at equal specificity on `/podcast-multiplier` and on `/` and silently restyle two live sales pages. Since 2026-10-16 the block styles the two-package page (`.pp-hero`, `.pp-pair` and `.pp-card`, `.pp-compare` and `.pp-table`, `.pp-addons`, `.pp-calc`, `.pp-close` and `.pp-strip`); the switch, chip, replaces-table and trial-strip rules were deleted with the markup that used them. It uses `.primary-cta` plus `.pp-cta` for every button (and `.pp-cta-quiet` for the outlined ones); no `.btn-primary` is left on the page.

### `.btn-primary` does not work in the `(main)` group outside `.pricing-footer`

Found on 2026-09-01 while building `/pricing`, and worth knowing before you put a button anywhere on a `(main)` page. `.btn-primary` has **no complete base rule** in `public/styles.css`, the base stylesheet the `(main)` group loads. All `styles.css` carries is a responsive fragment, `.btn-primary{padding:10px 20px;font-size:.9rem;width:90%;text-align:center}`, with no `display` and no baseline padding. The real base (`display:inline-block`, background, radius, border, shadow) lives only in `public/podcast-multiplier-styles.css`, which the `(main)` group never loads. `premium.css` then adds colour and radius but no `display`.

The net effect: a `.btn-primary` on a `(main)` page renders as an inline element with a stray `width:90%`, which reads as a thin misshapen pill with a grey bar beside it. It looks correct inside a pricing card purely because `premium.css` sets `display:flex` on `.pricing-footer .btn-primary` explicitly.

So on `(main)` pages use **`.primary-cta`**, which does have a full base rule in `styles.css` (this is what `/portfolio` and every other sub-page CTA uses). Reserve `.btn-primary` for inside `.pricing-footer`, where the copy-pasted tier markup requires it. This is the same class of latent trap as the pricing-grid one above: markup that works on `/podcast-multiplier` is not guaranteed to work on `/`.

One page also has a page-scoped stylesheet imported directly in its component: `app/(multiplier)/podcast-toolkits/podcast-toolkits.css`.

Fonts: the whole site runs on Inter, self-hosted through `next/font` (`components/fonts.js`). The font CSS variable is applied via a class on `<html>` in each layout. There is no render-blocking Google Fonts request.

Design tokens, the palette, the type scale, spacing, and the motion system are documented in full in `DESIGN.md` (sections 3 to 5). Read that before making a design change.

---

## 7. Routes and pages

### 7.1 App routes (real Next.js pages, the re-skin surface)

| Route | File | Purpose | CTA(s) |
|---|---|---|---|
| `/` | `app/(main)/page.js` | Home, long-form sales. Carried a pricing section until 2026-09-01, when every price was removed from it. | Book Strategy Call (strmeet) only |
| `/portfolio` | `app/(main)/portfolio/page.js` | Clip showreel grid | strmeet |
| `/testimonials` | `app/(main)/testimonials/page.js` | Testimonial grid + videos | strmeet |
| `/pricing` | `app/(main)/pricing/page.js` | The pricing page (rebuilt 2026-10-16, three packages since 2026-10-19) the SDR sends when a prospect asks for numbers: three packages (Done With You $997, Done For You $1,597, Done For You Plus $1,897, all 20 clips), a comparison line, client clips and quotes, a comparison table, Optional Add-ons, a Build your plan calculator and a pricing FAQ. Public and indexed, not in the site-wide nav; its own navbar has a "Pricing Calculator" link to `#build` (since 2026-10-20, Samuel). Send prospects `https://slkmediaagency.com/pricing#build` to land on the calculator: `SiteBehaviors.js` jumps to any `#hash` target below the navbar on load, and `.pp-build` has `scroll-margin-top: 90px`. | strmeet on the hero, every card button and the closing band; under each card a "Ready now? Skip the call and pay" link to that plan's Myfundbox checkout (since 2026-10-20). No trial checkout, no link to `/podcast-toolkits`. |
| `/pricing/clips-only` | redirect in `next.config.mjs` | Was the Clips Only page from 2026-09-22 to 2026-10-12. Now a permanent (308) redirect to `/pricing`, kept because the SDR and old emails still send the URL. | none |
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
| `/podcast-multiplier` | `app/(multiplier)/podcast-multiplier/page.js` | Long-form sales page. Carried a pricing section until 2026-09-01, when every price was removed from it. | strmeet + a gamma.app case study link |
| `/podcast-toolkits` | `app/(multiplier)/podcast-toolkits/page.js` | Shop in two separate blocks: the 16 do-it-yourself PDF guides and a bundle of the first 10 first (`#guides`), then the full social media strategy block (`#strategy`, starting with the $103.55 report) | Stripe checkout + survey link for the report, Gumroad overlay for the guides and bundle, strmeet in the agency line above the footer |
| `/podcast-toolkits/thank-you` | `app/(multiplier)/podcast-toolkits/thank-you/page.js` | Purchase confirmation | internal / email |

The six case study pages all render the shared `components/CaseStudy.js` template and pass in their own data object. One edit to the template reaches all six.

Two pages show a price: `/pricing` (every plan) and `/podcast-toolkits` (the $103.55 strategy report). `/` and `/podcast-multiplier` state no plan price (stripped 2026-09-01, see section 9). `/podcast-multiplier` still quotes comparison rates only (AI tools $30 to 100/mo, freelancers $200 to 800/mo, a $200/month Fiverr freelancer, $50 to 125/hour opportunity cost); none of those is a plan price.

### The `/pricing` page, rebuilt 2026-10-16, three packages since 2026-10-19

**20 October 2026 update (Samuel approved four fixes from an outside page audit that day; branch `pricing-audit-fixes`, merged and live the same day).** This block overrides anything older below it.

- **Direct checkout.** Every card now ends in `.pp-actions`: the call button (still strmeet) plus a small "Ready now? Skip the call and pay" link (`.pp-pay`) to that plan's Myfundbox checkout (section 1). The call stays the main button on purpose.
- **Plan-named buttons.** The card buttons read "Start with clips only", "Start Done For You" and "Start Done For You Plus". They still open the booking link. The hero and closing band keep "Book a Strategy Call". Samuel had a "30-minute call first" line under each button removed before it shipped.
- **Done For You stands out.** Its column is wider (grid `1fr 1.15fr 1fr`), lifted 20px above the others (`.pp-col-dfy` has `margin-top: -20px`), has a 2px border, a stronger tint, a 3.6rem price and the "Most Popular" badge centred on its top edge (absolute). The `.pp-tag-ghost` spacers are gone from the markup and CSS. Card bottoms stay level through a two-row grid: `.pp-trio` has rows `1fr auto` and `row-gap: 12px`, each `.pp-col` spans both rows with `grid-template-rows: subgrid`. Do not give `.pp-col` its own row-gap: a subgrid gap that differs from the parent's shifts the cards by half the difference. Below 1100px all of this resets to one column.
- **Why SLK Media Agency.** A strip (`WhyUs` in `PricingPlans.js`, `.pp-why`) under the terms line, three points reused from approved copy: "Part of your team" (home page), "A plan behind every clip" (home page FAQ), "Not happy after week 2?" (the `/podcast-multiplier` FAQ).
- The old grep rule "zero `myfundbox`" no longer holds. What must stay at zero is the retired trial token `2vrB8voEVlNvxYLTc6S_5g` and the two euro tokens above.

**20 October 2026 calculator update, third pass (Samuel, in writing that day): episodes are long-form edits.** This block overrides the reference values in the older blocks below it.

- Samuel's words: when someone selects the number of episodes, the amount per episode is added automatically, and the long-form episode edit option is removed. The "Long-form episode edit ($150 per episode)" checkbox and the `longForm` state are gone from `PricingCalculator.js`. Every episode counted is now a long-form edit at $150, so episodes always mean edits.
- Plus rule is now `isDfy && episodes >= 4` (Done For You with 4 or more episodes becomes Done For You Plus; the first 4 edits are included, edits above 4 are $150 each). Done With You pays $150 per episode. `plusHint` shows on Done For You with 1 to 3 episodes. Prices are unchanged.
- At 1 or more episodes the removed checkbox is replaced by one muted line (`.pp-epi-hint`): "Each episode is a full long-form edit, $150 per episode." Show notes and SEO show notes stay as optional boxes and still untick each other. The episodes label now reads "Long-form episodes to edit each month"; the 0-episode hint reads "Want full episodes edited too? Set how many episodes a month. Each one is a long-form edit at $150."
- Default state (20 clips, Done With You, 0 episodes) = $997.
- Reference values under the new rule (clips / plan / episodes / show notes = total): 20 / Done With You / 0 / none = $997; 20 / Done With You / 4 / none = $1,597 ($997 + 4 x $150; was $997 before, because the box was unticked); 20 / Done For You / 4 / none = $1,897 Done For You Plus (was $1,597 Done For You); 20 / Done For You / 3 / none = $2,047 Done For You (plus hint); 22 / Done For You / 6 / none = $2,347 Done For You Plus ($2,047 + 2 extra edits $300); 25 / Done For You / 4 / none = $2,272 Done For You Plus; 20 / Done For You / 6 / none = $2,197 Done For You Plus ($1,897 + 2 x $150); 6 / Done For You / 2 / none = $847 ($547 + $300); 10 / Done With You / 20 / none = $3,497; 6 / Done With You / 1 / none = $447. Where the older lists below say "long-form" ticked, read it as always on.

**20 October 2026 calculator update, second pass (Samuel, in writing that day): plan choice instead of four boxes, episodes from 0.**

- The four "What do you want us to handle?" checkboxes are gone. Any one of them used to switch the whole plan to Done For You, so one box and four boxes showed the same price. Samuel ruled out per-item prices (the page should not read like a shop), so the calculator now asks "Are you looking for Done With You or Done For You?" with two radio cards (`PLANS` constant; `.pp-plans`, `.pp-planopt`, `.is-on` in premium.css section 17; stacked below 600px). Done With You: "We make the clips, you post them." Done For You: "We also make a custom thumbnail for every clip, write the captions, hashtags and calls to action, and post on every platform." The project manager, weekly call and reporting are no longer named in the calculator: Samuel says they come with both plans. The Done With You card above it does not say so yet (frozen copy, not changed).
- Episodes default to 0 and can go to 0 (`PRICE.minEpisodes`). At 0 the episode add-ons are hidden and one hint line shows (`.pp-epi-hint`); they appear at 1 or more (the long-form box was removed in the third pass above). Prices and the Done For You Plus rule are unchanged.
- Reference values now read "handle" as the plan choice: "none" = Done With You, any named item = Done For You.

**20 October 2026 calculator update (Samuel, in writing that day): no caps, lower minimums.**

- Build your plan now takes clips from **6** up (6 is the fewest clips we make) and episodes from **1** up, with **no upper limit** on either. The slider still covers 6 to 40 clips and 1 to 8 episodes; the number next to it is an editable box (`input.pp-count`, type number) that takes any larger amount, and the slider stretches to reach it. The plus buttons never disable. Typing below the minimum snaps back to it when the box loses focus.
- Below 20 clips the price keeps the same per-clip rate (Samuel picked this option): each clip under 20 takes $50 off Done With You and $75 off Done For You and Done For You Plus. `PRICE.baseClips` (20) is the count the base prices are quoted at; `PRICE.minClips` (6) is only the floor. So 6 clips = $297 Done With You, $547 Done For You, $847 Done For You Plus; 10 clips = $497 / $847 / $1,147.
- Reference values added: 10 / none / 20 / long-form = $3,497 Done With You ($497 + 20 x $150); 6 / none / 1 / long-form = $447 Done With You. All 19 October reference values below still hold.
- NOT changed (copy is frozen, and these still say 20 clips is the smallest plan): the package cards, the meta description, the FAQ answer "Every package comes with 20 clips a month", the chatbot docs, the AI SDR prompts and the sales system price card. The calculator can now show a price under $997 that nothing else on the page or in the SDR quotes.

**19 October 2026 update (Samuel, in writing that day; branch `pricing-three-packages`, merged and live the same day).**

- Third package **Done For You Plus** (small line "Content Accelerator"), **$1,897/month**: every Done For You bullet word for word, plus "4 long-form episode edits a month". Card order is now Done With You, Done For You ("Most Popular", featured, in the middle), Done For You Plus. Both Done With You and Done For You carry a ✕ "Long-form episode edits" line. Under Done For You and Done For You Plus sits a "What we commit to" line (`.pp-commit`).
- Why $1,897 and not $2,197: 4 long-form edits bought as add-ons cost $600 on top of Done For You. Samuel prices them at $300 when taken inside the done-for-you package. Bought as an add-on, a long-form edit stays $150.
- Calculator logic (`PricingCalculator.js`): a Done For You plan (any "handle" box ticked) with "Long-form episode edit" ticked and 4 or more episodes becomes **Done For You Plus**: $1,897 + (clips minus 20) x $75, the first 4 edits included, only edits above 4 at $150 each. Done With You always pays $150 per edit. Done For You with 1 to 3 paid edits shows a hint pointing to Done For You Plus (`#pp-calc-plus-hint`).
- New sections, top to bottom: hero ("Three ways to work with us."); a comparison line (`.pp-anchor`: US film and video editor median $75,420 a year, BLS May 2025; full-service podcast agencies from $2,500 per episode, Caspian Studios published plans; both checked 19 Oct 2026, sources linked under it; never reuse the old "$80,000 editor" or "$4,000 per episode" figures); the three cards; a terms line (`.pp-terms`: "Month to month", "Pause up to 60 days", "You own every clip"; Samuel removed "no contract" and "no setup fee" from the page on 19 Oct 2026); "Clips we made for real shows" (Clip-1 to Clip-4 from `public/portfolio`, `preload="none"`, link to /portfolio); "What clients say" (three quotes verbatim from the home page carousel); then the comparison table (third column, a "Long-form episode edits" row, table min-width 640px), Optional Add-ons (Extra Clips note now names Done For You Plus), Build your plan, a **pricing FAQ** (`FAQ` constant in the page file, 12 questions, reuses the site `.accordion` markup and SiteBehaviors), and the closing band naming all three prices.
- `PricingPlans.js` now has three named exports: `PlanCards`, `CompareTable`, `AddOns` (no default export). CSS: `.pp-trio` (three columns, one column below 1100px, max-width 560px), `.pp-col`, `.pp-commit`, `.pp-terms`, `.pp-anchor*`, `.pp-proof*`, `.pp-clips`, `.pp-quotes`, `.pp-faq`, all in section 17 of `premium.css` under `.pricing-page`.
- Reference values since 19 Oct 2026 (clips / handle / episodes / add-ons = total): 20 / none / 4 / none = $997 Done With You; 20 / thumbnails / 4 / none = $1,597 Done For You; 20 / posting / 4 / long-form = $1,897 Done For You Plus; 20 / posting / 3 / long-form = $2,047 Done For You (plus hint); 22 / posting / 6 / long-form = $2,347 Done For You Plus ($2,047 + 2 extra edits $300); 20 / none / 4 / long-form = $1,597 Done With You ($997 + $600); 25 / project manager / 4 / long-form = $2,272 Done For You Plus (was $2,572 before 19 Oct). Re-run after any price change.
- Same day, outside `/pricing`: every "12 or 20 clips" on `/` and `/podcast-multiplier` now says 20 clips a month (more with extra clips); the home page turnaround FAQ now says first clips within 3 to 5 business days after onboarding (the "Standard", "Pro" and 24-hour rush wording is gone); `docs/chatbot/` (kb-01, kb-04, kb-05, 02-restrictions, README tests) and `slkwebsitechatbotknowledge.md` describe three packages, and `01-base-prompt.md` was rebuilt. The live re:tune bot only changes once `01-base-prompt.md` and `02-restrictions.md` are pasted into its dashboard (section 12).
- Same day, second pass (Samuel): the comparison became two large figures, then (third pass, Samuel: they read like prices) one subtle muted line `.pp-anchor-note` with an info icon (no source line on the page; sources stay in the code comment: BLS May 2025, Caspian Studios plans); "Clips we made for real shows" uses Clip-4, 6, 7 and 8 (`object-fit: cover`; Clip-8.mp4 is a 9:16 clip inside a 16:9 frame, so it gets its own 9:16 poster `public/portfolio/thumbnails/Clip-8-vertical.jpg`, cut from a frame of the video); "What clients say" is three large rows (`.pp-tcard`, video left, quote right) with the Brian Burton, Steve Garrett and Preston Hurd video testimonials, quotes and chips verbatim from /testimonials (Preston's 9:16 split screen gets the narrow `.pp-tcard-vertical` column so no speaker is cropped).
- Still open: the home page FAQ still says "10% off for 3+ month prepayment" while the chatbot and the SDR refuse every discount. Samuel decides.


Samuel approved every price and rule on 16 October 2026. Why: from 1 September the page listed five offers, a calculator and a $497 trial, and in that time 9 of 12 booked calls were cancelled and 0 of 3 held calls closed. The page now shows two packages with everything each one includes, so a prospect can decide before the call. Built on branch `pricing-two-packages` and merged into main and live on 16 October 2026 at Samuel's instruction, before the AI SDR was updated. Until the SDR is updated it may still quote the old plans and the trial.

| Package | Price | Included |
|---|---|---|
| Done For You (small line "Content Engine", "Most Popular" tag, was "Flagship" until 16 Oct 2026) | $1,597/month | 20 short clips a month edited and ready to post, a custom thumbnail for every clip, captions, hashtags and calls to action for every clip, every clip posted on every platform, a dedicated project manager, a weekly call, weekly reporting, a strategy document before the first clip. |
| Done With You (small line "Clips Only") | $997/month | 20 short clips a month edited and ready to post. The card shows openly what is NOT included: thumbnails; captions, hashtags and calls to action; posting; project manager and weekly call; weekly reporting; strategy document. |

Optional Add-ons (work with either package): Extra Clips $75 per clip on Done For You, $50 per clip on Done With You; Long-form Episode Edit $150 per episode; Show Notes $50 per episode; SEO Show Notes $100 per episode.

Page structure, top to bottom: plain sub-page nav; hero (eyebrow "Pricing", "Two ways to work with us.", "Same clips, same quality. Pick how much of the rest you want us to handle.", one button); the two package cards (flagship left, first on mobile); "Everything in each package" comparison table (one row per deliverable, check or cross per cell, monthly price row); Optional Add-ons (four cards, 2 x 2 below 1100px, one column below 600px); Build your plan (the calculator); closing band ("Not sure which one fits? We'll work it out with you on a 30-minute call."; the 30 minutes comes from "Book Your Strategy Call (30 Minutes)" on `/podcast-multiplier`); footer. Every button is "Book a Strategy Call" to strmeet (target _blank, rel noopener).

Ruled out by Samuel and not allowed on the page: any "who this is for" or "not a fit" section or exclusion list, a setup fee, a minimum term, and any guarantee, money-back, free work, sponsor promise or scarcity wording.

Retired on 16 October 2026 and not allowed anywhere on the page: the 12 / 20 switch, the "+$400" / "+$600" chip, the "What $400 a month replaces" table and its market-rate sources line, Content Engine Lite, Clips Only 12, the old calculator (clip $50, episode $150, thumbnail $10, posting $25, the round-to-$10-minus-$3 display and its plan hints), and the 10-Day Trial strip with its Myfundbox button. Earlier retirements (2026-10-12) still hold: Clips Only 10, $547, the +$100 scheduling add-on. After any edit, grep the built page `.next/server/app/pricing.html` for `Trial`, `$497`, `myfundbox`, `Lite`, `+$400`, `+$600`, `setup fee` and `Not a fit` (all must be zero, case-sensitive for `Lite` since "polite" contains it), and the whole built site (`.next/server`, `.next/static`, `public`) for `myfundbox` and `10-Day` (zero).

How it is built:

- `app/(main)/pricing/page.js` is a server component: metadata (description names both packages and prices), JSON-LD (a `Product` with two monthly `Offer`s, Done For You 1597 USD and Done With You 997 USD, each with a `UnitPriceSpecification` of unit MONTH), nav, hero, the calculator section, the closing band and the footer.
- `components/PricingPlans.js` is a **server** component since 2026-10-16 (no state any more): both cards, the comparison table (`ROWS` constant) and the add-on cards (`ADDONS` constant, Font Awesome icons in round tinted circles `.pp-tone-a` to `-d`, all from the existing palette).
- `components/PricingCalculator.js` (`"use client"`) is Build your plan. Inputs (since 2026-10-20, see the 20 October update above): clips 6 and up with no upper limit (default 20; slider 6 to 40 plus round step buttons plus a typeable number box), a Done With You / Done For You radio choice (default Done With You), episodes 0 and up with no upper limit (default 0; slider 0 to 8 plus the number box; labelled "Long-form episodes to edit each month", and every episode is a long-form edit at $150, added automatically; since the third pass of 2026-10-20 there is no long-form checkbox) and two optional episode add-ons shown at 1 or more episodes (show notes and SEO show notes, which untick each other). The `PRICE` constant carries the "approved 16 Oct 2026" comment. Math: Done With You = $597 + (clips minus 12) x $50; Done For You = $997 + (clips minus 12) x $75; episode charges = episodes x $150 long-form (always, except the 4 edits inside Done For You Plus) plus episodes x ($50 show notes or $100 SEO show notes, only when ticked); total = plan + add-ons, exact dollars, no rounding. The `aria-live="polite"` result box shows the plan name, a why line for that plan, the total, a breakdown and, on Done With You only, "Want us to post them too? Done For You at this volume is $X/month."
- Reference values since the 20-clip minimum of 2026-10-18 (clips / handle / episodes / add-ons = total): 20 / none / 4 / none = $997 Done With You; 20 / thumbnails / 4 / none = $1,597 Done For You; 30 / none / 0 / none = $1,497 Done With You; 30 / posting / 0 / none = $2,347 Done For You; 25 / project manager / 4 / long-form = $2,572 Done For You; 20 / none / 4 / SEO show notes = $1,397 Done With You; 20 / none / 2 / long-form and show notes = $1,397 Done With You; typing 12 clips clamps to 20. Re-run all seven after any price change.
- Styles are the section 17 block at the end of `premium.css`, every rule scoped under `.pricing-page`. Icons are the characters &#10003; and &#10005; inside `.pp-ic` spans (aria-hidden), never a dash glyph; table cells also carry "Included" / "Not included" in a screen-reader-only `.pp-sr` span. Below 860px the cards and the calculator stack into one column. The table scrolls inside `.pp-tablebox` (table min-width 520px). Gotcha found on 2026-10-16: `.pp-tablebox` must keep `position: relative`, otherwise the absolutely positioned `.pp-sr` spans escape the scroll box and push the page about 100px sideways at 375px wide (only visible with reduced motion, because otherwise the reveal transform happens to contain them).
- `/pricing/clips-only` is a `permanent: true` redirect to `/pricing` in `next.config.mjs` (308). Kept.

20 clips is the smallest plan since 2026-10-18 (Samuel, after a prospect was quoted "Plans start at $597 a month" by the AI SDR): the calculator minimum went from 12 to 20, its bases to $997 and $1,597, and nothing below $997 a month is quoted anywhere. The AI SDR (GetSales_Luna_v109, plusvibe_Luna_v105) and the sales system's price card were changed the same day. Price-sync hazards that remain: the live re:tune chatbot still runs the old text until `docs/chatbot/01-base-prompt.md` and `02-restrictions.md` are pasted in (see section 12); `slkwebsitechatbotknowledge.md` at the repo root is an older stale knowledge file that still describes the trial and old plans and was not updated. $997 now names two things on the page: Done With You at 20 clips and Done For You at 12 clips (calculator only), so read the plan name next to any `$997`.

### 7.2 Nav and footer

There is no single shared Nav or Footer component. Each top-level page inlines its own `<nav>` and `<footer>` markup (they are visually identical because they share CSS classes). The six case studies get their nav and footer from the `CaseStudy` template. Practical implication: a change to the global navbar or footer that is not driven purely by CSS means editing the markup in each page file plus `CaseStudy.js`. Grep for `<nav` and `<footer>` to find them all.

The nav items differ per page and are not meant to be identical. The home page nav is Portfolio, Process, Results, FAQ, Book Strategy Call: the three middle items are in-page anchors (`#process`, `#case-studies`, `#faq`) ordered to match the order those sections appear on the page. A Pricing item was added on 2026-08-25 and removed again on 2026-09-01 together with the pricing section it pointed at; `/podcast-multiplier` lost its Pricing item at the same time, for the same reason. Sub-pages (portfolio, testimonials, case studies) instead link Home, Portfolio, Case Studies, Testimonials and `/#faq`, because the anchor targets only exist on the home page.

`/pricing` uses the plain sub-page nav (its own `#pricing-faq` FAQ anchor went when the FAQ was removed on 2026-10-12). **No nav anywhere links to `/pricing`, and that is deliberate** (Samuel's call, 2026-09-01): the page is public and indexed so it can rank and be shared, but nothing on the site routes a visitor to it. The URL exists so the SDR can paste one clean link when a prospect asks about price. Combined with the price removal from the two sales pages, the practical effect is that a visitor browsing the site never sees a number unless they were sent the link or found the page through search. That is intended, so do not "fix" it by adding a nav entry or an inline link without asking.

### 7.3 Static HTML served from `public/` (not app pages)

These clean URLs are served from raw HTML files in `public/` via rewrites in `next.config.mjs`, not by React pages:

- `/resources/*`: 14 lead-magnet documents (checklists, playbooks, and similar). Each is a self-contained HTML file with its own inline design, no shared nav/footer, no shared stylesheet.
- `/toolkits/podcast-strategy-report`: a standalone strategy-report document.

They are outside the premium re-skin. Restyling them means editing each independent legacy HTML file by hand. Each lead magnet exists twice (a capitalised file name and a lowercase one); a copy change must be made in both. Their "Limited spots available" lines were removed on 2026-10-12. Nothing in the redesigned app links into them, and their URLs keep working. The legacy `public/script.js` and `public/podcast-multiplier-script.js` exist only for these static pages; the Next app does not load them.

### 7.4 Components

| File | Client/Server | What it does |
|---|---|---|
| `components/SiteBehaviors.js` | client | Recreates the original `script.js` behaviors for the app: mobile menu, navbar shadow on scroll, video play/pause overlays, autoplay preview clips paused offscreen (IntersectionObserver), testimonial carousel, FAQ accordion, in-page anchor smooth scroll, sticky CTA bar. Re-runs after each navigation and cleans up after itself. Mounted in both layouts. The anchor handler also moves keyboard focus to the target: it calls `preventDefault()`, which suppresses the browser's native anchor focus behavior, so it applies `tabindex="-1"` to the target and focuses it. Without that step the "Skip to content" link is inert (see section 11). |
| `components/MotionLayer.js` | client | Site-wide motion primitives applied to the server-rendered DOM so page copy never has to become client-side: Lenis smooth scroll, staggered scroll-in reveals (auto-annotated per section, grid items glide in from alternating sides), `.stat-number` count-ups, magnetic CTAs, spring FAQ, card hover lift, a scroll progress hairline, a `--sy` scroll variable that drives the home hero card parallax, plus injected decorative visuals: glowing equalizer-bar dividers at the top of major text sections site-wide, and a platform-icon marquee under the hero on `/` and `/podcast-multiplier`. The marquee glides with `translateX(-50%)`, so it travels exactly one half of its track: `MotionLayer` therefore measures one icon set and repeats it until a half is at least as wide as the screen, otherwise the icons run off the left and leave dead space on the right. Do not hard-code the number of icon sets. All injected elements are aria-hidden, exist only while motion is on, and are removed on cleanup. All gated behind `prefers-reduced-motion`. Mounted in both layouts. |
| `components/HeroAtmosphere.js` | client | The home hero's living background: canvas waveform field + pointer spotlight. Code-split, mounts after idle, pauses offscreen, never mounts under reduced motion. Home page only. |
| `components/heroWaveform.js` | module | The actual canvas 2D drawing code, imported dynamically by `HeroAtmosphere` so it never ships in the shared bundle. |
| `components/ToolkitShop.js` | client | The `/podcast-toolkits` shop: outreach-code banner, guide grid with filter chips, "See inside" lightbox (portalled to body), bundle banner. See section 7.1. |
| `components/StrategySampleGallery.js` | client | Carousel + lightbox for the 16 strategy-report sample images on `/podcast-toolkits`. Lazy-loads offscreen slides; keyboard controls in the lightbox. |
| `components/PricingPlans.js` | server | The two package cards, the comparison table (`ROWS`) and the add-on cards (`ADDONS`) on `/pricing`. See section 7.1. |
| `components/PricingCalculator.js` | client | Build your plan on `/pricing`. Prices in its `PRICE` constant (approved 16 Oct 2026), picks Done For You or Done With You, `aria-live` result. See section 7.1. |
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

Screenshot verification: `tools/shot.js` renders a URL in headless Chrome and reports the screenshot path, document height, scroll position, and any console errors, with an optional reduced-motion pass. Used to verify visual changes across breakpoints. Since 2026-10-16 it also takes `full` (whole-page capture), `--scheme=light|dark` (emulates `prefers-color-scheme`; the site has one dark theme, so both should match) and reports `overflowX` (true when the page can scroll sideways).

```
node tools/shot.js <url> <out.png> [WxH] [settleMs] [scrollY|mid|bottom|full] [--reduced-motion] [--scheme=light|dark]
```

`tools/pack-screens.mjs` is a one-off that compressed the curated before/after set into `docs/screens/` (referenced by `DESIGN.md`).

---

## 9. Content and copy rules (do not skip)

- Copy, CTAs, links, prices, disclosures, and legal identifiers (KVK/BTW) are frozen. This project has been a visual and motion upgrade, not a content rewrite. Do not change any text node or `href` unless Samuel asks for that specific change.
- The paid product on `/podcast-toolkits` shows a price anchor ($500 struck through to $103.55). Leave the Stripe link and the survey link exactly as they are.
- Report price, changed 2026-10-03: Samuel made **$103.55** the price (it was shown as "$100, plus a Stripe fee added at checkout"). The separate fee note was removed from every place it appeared, after a favors.dev roast flagged it as friction next to the button. Stripe checkout already shows $103.55 as one price, so page and checkout agree. Never show $100 for the report again. The "This price is temporary and will increase soon." line stays, by Samuel's call the same day.
- Report price block restyled 2026-10-16 at Samuel's request: a large struck-through `$500` next to a large `$103.55` (`.pt-anchor-big`), then an orange pill reading "Price returns to $500 soon" (`.pt-price-return`), both in `podcast-toolkits.css`. The pill replaced the old "This price is temporary and will increase soon." tagline under the intake link. This is the only scarcity line on the site; the 2026-10-12 offer pass removed scarcity lines from the plans, and Samuel asked for this one on the report specifically.
- Prices changed 2026-10-19, approved by Samuel in writing that day, built on branch `pricing-three-packages` and merged the same day: Done For You Plus added at $1,897 a month (Done For You plus 4 long-form episode edits); calculator prices it; comparison line, proof, terms line and pricing FAQ added to `/pricing`; "no contract" and "no setup fee" removed from the page. See "The `/pricing` page" in section 7.1.
- Prices changed 2026-10-16, approved by Samuel in writing that day, built on branch `pricing-two-packages`, merged into main and live the same day at Samuel's instruction: two packages, Done For You $1,597 and Done With You $997 (both 20 clips), calculator range 12 to 40 clips, add-ons (extra clips $75 / $50, long-form edit $150, show notes $50, SEO show notes $100 per episode). Content Engine Lite, Clips Only 12 and the 10-Day Trial are retired from the site. Changed in that pass: `/pricing` (page, metadata, JSON-LD), both pricing components, premium.css section 17, `tools/shot.js` (`full` and `--scheme`), every file in `docs/chatbot/`. NOT changed: `slkwebsitechatbotknowledge.md`, the live re:tune bot, the AI SDR.
- Prices changed 2026-10-12, approved by Samuel in writing that day, built on the `unified-pricing` branch and NOT merged until the AI SDR quotes the same numbers: Clips Only 10 ($547) became **Clips Only 12 at $597**, Content Engine Lite now has **12 clips** (was 10) at the same $997, Clips Only 20 stays $997, Content Engine stays $1,597, the 10-Day Trial stays $497, and the +$100 scheduling add-on is gone. Clips Only no longer includes a project manager or weekly calls. Changed in that pass: `/pricing` (page, metadata, JSON-LD), the two new components, premium.css section 17, `next.config.mjs` (redirect), `public/sitemap.xml`. NOT yet changed: `docs/chatbot/` and `slkwebsitechatbotknowledge.md`.
- Prices changed 2026-10-06, approved by Samuel in writing that day: 10-Day Trial $597 plus fee ($617 total) became **$497 with the fee included**, Clips Only 10 went from $697 to **$547**, Clips Only 20 from $1,097 to **$997**. Content Engine ($1,597), Lite ($997), the +$100 scheduling add-on and the $103.55 report did not change. The price floor is now $497, and only the $103.55 report sits below it. Changed in the same pass: `/pricing`, `/pricing/clips-only` (prices, metadata, JSON-LD, "The math" gaps), every file in `docs/chatbot/`, and `slkwebsitechatbotknowledge.md`.
- **The $997 collision (since 2026-10-06).** `$997` names two plans: Content Engine Lite (12 clips since 2026-10-12, done for you) and Clips Only 20 (20 clips, the client posts). A grep for `997` no longer tells you which plan you are looking at, so a future Lite or Clips Only price change is not a find-and-replace: decide each hit by the plan name or clip count beside it. A bare `$997` with no Clips Only wording is Lite. The chatbot restrictions now tell the bot never to say $997 without the plan name and clip count. Nothing in this repo maps a dollar figure to a plan in code; if anything outside it does (SDR prompts, regexes, n8n), it needs the same treatment.
- The `$103.55` strategy report price now appears only on `/podcast-toolkits` (the `/pricing` downsell band that restated it was removed on 2026-10-12). Grep `103.55` there and in `docs/chatbot/` if it changes.
- Since 2026-10-16 the package and add-on prices live in three places in this repo, and all three must change together: `components/PricingPlans.js` (cards, `ROWS`, `ADDONS`), `components/PricingCalculator.js` (`PRICE`, which also holds the 20-clip bases and per-clip rates) and `app/(main)/pricing/page.js` (metadata description and JSON-LD). Then `docs/chatbot/`.
- Pricing is never presented as a bare number. On `/pricing` (since 2026-10-16) that job is done by the included and not-included lists on each card and the comparison table, which put the price next to what it buys. (The 2026-10-12 chip and "What $400 a month replaces" table are retired.) The old `.pricing-cost-anchor` and `.pricing-outcome` elements, and the $50,000 to $80,000 in-house editor comparison, are no longer on the page.
- Since 2026-10-20 the page carries two kinds of CTA: the booking link (`strmeet`, the main button everywhere) and one Myfundbox checkout per package (the small link under each card). The Myfundbox trial checkout stays retired (see section 1). If a price changes, the matching checkout must change in Myfundbox too, or the card and the checkout disagree.
- No free-work language anywhere in a pricing section: no free trial, free audit, free sample, demo, money-back, or guarantee wording. SLK Media Agency does not offer free work. (Since 2026-10-12 there is no guarantee anywhere on the site: the old `guarantee-section` on `/podcast-multiplier` now states what SLK Media Agency commits to. See "Offer copy rewrite, 2026-10-12" below.) The 10-Day Trial (a paid $497 product) was retired from the whole site on 2026-10-16, so the word "trial" should not appear on any page as an offer.
  - Note the exact scope of that rule, because `/pricing` sits on the boundary. It bans the language inside a `pricing-section`, not on any page that discusses price. The FAQs on `/` and `/podcast-multiplier` mentioned a 14-day money-back guarantee until 2026-10-12, when Samuel ruled there is no guarantee and both were removed. On `/pricing`, whose whole subject is price, money-back and guarantee wording was left off the page **entirely** rather than reasoning about which section it sat in. The lock-in objection there is answered with the cancellation policy instead (month to month, pause up to 60 days, 14 days notice, you keep the content), which contains no free-work language at all. Keep it that way unless Samuel says otherwise.

### Offer copy rewrite, 2026-10-12 (branch `offer-copy-2026-10-12`)

Samuel's decisions of 12 October 2026 for the offer copy, built on branch `offer-copy-2026-10-12` and NOT merged until he reviews it. Frozen copy was deliberately unfrozen for this. `/pricing` and its components were not touched: they are the source of truth for prices.

- **No guarantee.** The home FAQ "14-day money-back guarantee (unsatisfied? Full refund)", the `/podcast-multiplier` "100% Risk-Free Guarantee" section ("we'll refund your first month"), its FAQ line "OR offer a full refund", and the "If we can't answer it on the call, your next month's on us" line on both pages are gone. Where a guarantee stood, the copy now states what SLK Media Agency commits to: the clip volume (12 or 20 a month, or a custom number), posting on the agreed schedule, and a weekly report. It never promises downloads, views or sponsors. The `guarantee-section` on `/podcast-multiplier` keeps its class name (CSS) but is now headed "What We Commit To". The `guarantee` class on the home mid-page CTA paragraph is also only a CSS hook now.
- **No sponsor promises.** Both sales pages, their metadata and the `/portfolio` meta description no longer sell "sponsor-ready clips", "sponsor moments", sponsor inquiries, sponsor signals, revenue attribution or a 60-90 day sponsor timeline. They are positioned on new listeners finding the show, future clients and authority for hosts who run a business, and the host's time back ("You record once. We handle everything after.", taken from `/pricing`). The "Do you help with sponsor outreach?" FAQ stays, answered No. The "8 times across multiple platforms" claim, the "3 sponsor inquiries" example and the "AI tools save you time. We make you money." line were removed.
- **No outcome promises.** The "if we don't think we can deliver 3X ROI on our fee, we'll tell you to wait" line (kept on 2026-08-03, see below) is replaced on both pages by "if we don't think we're the right fit for your show, we'll tell you." The "How long before I see results?" FAQ no longer gives engagement or revenue timelines.
- **Clip counts.** Every per-episode clip count in the offer copy (10-20, 10-15, 20-25, 20+, 5-10 per episode) now reads 12 or 20 clips a month, or a custom number on the build-your-own plan. Real client results stay as they are: Brian Burton's "8-12 clips per episode" in the case study, testimonials, toolkits chip and before/after card is a published result, not an offer.
- **No scarcity.** "Only 3 spots available per quarter" (home hero and mid-page CTA, `/podcast-multiplier` hero and sticky bar), "Only 2 spots remaining this quarter" (home sticky bar), the "We only onboard 3 podcasters per quarter" block, and the "Limited spots available" lines in the 14 lead-magnet HTML files in `public/resources/` (both the capitalised and the lowercase copies) are gone. Their slots said "Month to month. No contract." (or the cancellation terms, in the `/podcast-multiplier` `.limited-spots` box) until 2026-10-16, when Samuel had every "Month to month. No contract." line removed: the home hero tagline and closing CTA, the `/podcast-multiplier` hero tagline and the line under its "What we commit to" copy, the `/pricing` hero subline ("Every price on this page is the real price, month to month. No contract."), and the CTA line in all 14 `public/resources/` lead-magnet files. Those slots are now empty, not replaced. The "Check Availability" button labels were left unchanged.
- **No setup fee, month to month.** No page mentions a setup fee or a minimum term. "mid-contract" in the `/podcast-multiplier` pricing FAQ became "an existing client".
- `slkwebsitechatbotknowledge.md` was updated in the same pass (Lite 12 clips, Clips Only 12 at $597, no add-on, no setup fee, guarantee and scarcity gaps marked resolved). `docs/chatbot/` (the files that build the live re:tune prompt) was NOT updated and still quotes Clips Only 10 at $547, Lite with 10 clips, the +$100 add-on and sponsor wording.
- Still open, deliberately not invented: the home FAQ "What's your turnaround time?" still names "Standard" and "Pro" turnaround times and a rush add-on that match no current plan, and the "10% off for 3+ month prepayment" FAQ is unchanged.

### Size-gating copy, revised 2026-08-03

The audience-qualification copy was deliberately unfrozen once and rewritten, at Samuel's explicit request. The qualification filter was kept, but its axis moved from **show size** to **fit**: publishing consistency, seriousness about growth, and ability to fund the engagement. What changed:

- Every "established podcasters / established shows" instance was replaced across both long-form pages, their metadata (title, description, OpenGraph, Twitter, JSON-LD), `public/favicon/site.webmanifest`, and the `/resources/the-podcast-scaling-roadmap` lead magnet.
- Both hard download thresholds were deleted outright: "5,000+ downloads/month" from the green list and "under 5,000 downloads" from the red list. The lists now run three items each. **No replacement download number was invented, and none should be.**
- The `$1,000+` marketing-budget qualifier was dropped rather than renumbered. It had contradicted the $1,597/month price stated in the same section.
- "$10K+/month in podcast-driven revenue" softened to a revenue-channel goal, and the two "Ready to Scale Your Podcast to $10K+/Month?" headings lost the figure.
- Proof now uses the real client range (1.82K to over 100K subscribers, both verifiable in the case studies) instead of a "$50K+/month" claim.

What was deliberately **kept**, because it filters on the approved axis rather than on size: publishing cadence and tenure ("2+ episodes/month for 6+ months", "minimum 15 episodes live", "we work best with shows publishing 2-4 episodes/month"), the hobby and side-project exclusion, the "exploring options" exclusion, and the "if we don't think we can deliver 3X ROI, we'll tell you to wait" line (that last one was replaced on 2026-10-12 by "if we don't think we're the right fit for your show, we'll tell you", because Samuel ruled out outcome promises). The Descript and OpusClip recommendation was kept too, but re-anchored from a download threshold to budget readiness.

If you are asked to touch this copy again, keep the filter and keep it on that axis.

### All prices removed from `/` and `/podcast-multiplier`, 2026-09-01

Samuel's explicit instruction, given the day `/pricing` shipped: with a standalone pricing page in place, neither sales page should state a price. Frozen copy was deliberately unfrozen for this. What went, on both pages unless noted:

- The whole `pricing-section` (the three tier cards), and the `Pricing` nav item that pointed at its `#pricing` anchor.
- The `hero-pricing-peek` line on `/podcast-multiplier` ("Done-for-you content from $997/mo, or try us first for $597"), which showed prices in the hero and linked to the anchor.
- The footer "Note on Pricing Transparency" paragraph on both pages.
- On `/` only: the qualification disclaimer naming the 10-Day Trial at $597, the entire "Do you offer a trial or discounted first month?" FAQ item, the `$297` rush-delivery fee, and the prepayment dollar tiers ($4,312 / $8,624 / $17,248). The `10% off for 3+ month prepayment` line stayed, because a discount rate is not a price, and this also brought the item in line with the `/podcast-multiplier` version which never had the dollar tiers.
- The two-sided cost math in the "Why not just hire a freelancer on Fiverr" FAQ on both pages. This one could not simply be deleted: the answer compared a freelancer's $1,800 true cost against the Content Engine's $1,997, so cutting only the SLK half would have left copy arguing *for* the freelancer. It was replaced with the qualitative comparison `/podcast-multiplier` already carried, plus one new closing line ("a freelancer costs you management time on top of their fee, and still leaves you as the bottleneck").

What was deliberately **kept**, because these are not SLK Media Agency's prices:

- Opportunity-cost figures describing the reader's own time ("$2,000-$5,000 in opportunity cost", "$50-125/hour", podcasters at "$25K-$100K+/month"). The home page's sponsor deals worth "$5K-$10K/month" line was removed on 2026-10-12 with the other sponsor promises.
- What the alternatives cost, in the comparison-table headers ("AI Tools ($30-100/mo)", "Freelancers ($200-800/mo)") and in the FAQ question "Why not just hire a freelancer on Fiverr for $200/month?". The comparison table's own SLK column has never carried a price, so it needed no change.
- The Descript and OpusClip recommendation, though its `($30/month)` and `($50/month)` parentheticals were dropped from the `/` disclaimer as collateral of rewriting that sentence.

A consequence worth knowing: the rule in this section that "the word 'trial' must never appear without its price beside it" is now satisfied on both pages **by absence**. Neither page mentions the 10-Day Trial at all, because there is no price left to put beside it. If you reintroduce the words "10-Day Trial" to either page, you must reintroduce `$497` with it or delete the mention.

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
- Add a new page: create `app/(group)/<slug>/page.js`, inline the nav and footer from an existing page in the same group (they are not shared components), wrap the body in `<main id="main" className="<slug>-page">` so the skip link works and so any page-specific CSS has a scope hook, add a `<url>` block to `public/sitemap.xml`, and put page-specific styles in a scoped block at the end of `public/premium.css`. On a `(main)` page use `.primary-cta` for buttons, not `.btn-primary`, for the reason in section 6.
- Change a package or add-on price: edit the cards, `ROWS` and `ADDONS` in `components/PricingPlans.js`, the `PRICE` constant in `components/PricingCalculator.js`, and the metadata description and JSON-LD `Offer`s in `app/(main)/pricing/page.js`. Re-run the seven reference values in section 7.1. Then update `docs/chatbot/`, rebuild the prompt, and tell Samuel the SDR and the live re:tune bot need the same change.
- Add a redirect or serve a new static HTML page at a clean URL: edit `next.config.mjs` (`redirects()` for old-to-new, `rewrites()` for clean-URL-to-file).
- Change page metadata, favicon, theme color, or the CSS/font wiring: edit the relevant `app/(group)/layout.js`. Remember there are two layouts, one per route group, and they should usually stay in sync.
- Add a video testimonial: encode to the folder convention (720px wide, 30fps, H.264 High profile, AAC around 96kbps, `+faststart`) and export a matching `poster-<name>.webp` at the same pixel dimensions, then put both in `public/video-testimonials/` as `testimonial-<name>.mp4` and `poster-<name>.webp`. The testimonial then has to be added in three places, because they do not share a component: the feature block in `app/(main)/testimonials/page.js`, the row in `app/(main)/page.js`, and the `testimonials` array in `app/(multiplier)/podcast-toolkits/page.js`. Pick the aspect-ratio class that matches the source (`.ar-169`, `.ar-45`, `.ar-11`, `.ar-916`) rather than cropping the video into a shape the layout already has.
  - Order on `/testimonials` is deliberate, set 2026-08-19: **podcast clients first, then everyone else**, because podcasters are the audience the page is selling to. Currently Shatavia Green, Brian Burton, Steve Garrett, Preston Hurd and A.D. Edwards (Ingleside Reviews Podcast, added 2026-09-09), then David Hetling (RWS Group), Kelly Bellaria (Alpine Institute) and Julien Recoussine (SalesFix). Add a new podcast testimonial to the end of the podcast run, not to the end of the page. The left/right alternation is `.t-feature:nth-child(2n)` and re-flows on its own, so it needs no attention when the order changes.
- Replace a portfolio clip: overwrite `public/portfolio/Clip-<n>.mp4` and its poster `public/portfolio/thumbnails/Clip-<n>.jpg`. No markup changes are needed, because both surfaces build the paths from the clip number. Mind which slots you touch: `/portfolio` renders `Clip-1` through `Clip-12` in order, and the home page social-proof row reuses `Clip-1`, `Clip-2` and `Clip-3`, so replacing any of those three changes the home page too. `/podcast-multiplier` separately uses `Clip-8`. The encode convention is in section 8.
- Change a guide, its price, the bundle or the guide images: edit the product-forge handoff folder, run `node scripts/sync-toolkits.mjs`, then `npm run build`. Never hand-edit `toolkits.json`. See section 7.1.
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
- No TypeScript, no test suite. Verification is visual (build + screenshots + console-error check). For `/pricing` also drive the calculator through its seven reference values (section 7.1, 2026-10-16 set) and `curl -I /pricing/clips-only` for the 308.
- Secrets live only in `.env.local` (git-ignored). Never commit a key, never log it, never put it in client code.

---

## 12. The website chatbot (LIVE)

A public chatbot was built and published on 2026-09-01. The only thing in this repo is **one script tag in each of the two root layouts** (`app/(main)/layout.js` and `app/(multiplier)/layout.js`). Everything else, the prompt, the knowledge, the settings, lives in a third-party dashboard (re:tune), so there is no component, route or CSS to find here.

```html
<script src="https://retune.so/api/script/chat.js?id=11f1a60b-aefa-d040-a8a7-3b547bcdc15e" async></script>
```

It is a plain `async` tag (was `defer` until 2026-10-20) **on purpose, not `next/script`**: re:tune reads its own chat id from `document.currentScript.src`, which is `null` when a script is injected dynamically, so `next/script` with `afterInteractive` would break it. Deleting those two lines removes the chatbot from the site completely.

**It does not work on localhost, and that is correct.** re:tune enforces the domain allowlist with a `frame-ancestors` Content Security Policy header on the chat iframe. The launcher button mounts anywhere, but the chat panel only loads on an allowed origin, and the browser blocks the rest. On `localhost:3000` you get the button and a blank white panel plus this console error, which is expected, not a bug:

```
Framing 'https://retune.so/' violates the following Content Security Policy directive:
"frame-ancestors 'self' http://localhost:3005 retune.so https://slkmediaagency.com
 https://www.slkmediaagency.com https://*.slkmediaagency.com"
```

That is worth understanding: the allowlist is enforced by the browser, not by re:tune's server trusting a referrer, so copying this script tag onto another domain cannot work. Verify chatbot changes on the live site, not locally.

**Where it lives.** re:tune (https://retune.so), SLK Media Agency workspace, chatbot **"SLK Media Agency Assistant"**, chat id `11f1a60b-aefa-d040-a8a7-3b547bcdc15e`. The account is on the AppSumo Tier 4 lifetime plan, which covers unlimited published chatbots, unlimited messages, branding removal and a custom domain. The plan does **not** cover model tokens: re:tune is bring-your-own-key and bills nothing itself.

A second, older chatbot called **"Trish"** (`11eeb87c-6f82-7460-843b-f3d951e44453`) also exists in that workspace. It was trained in August 2025 on the pre-Next.js `.html` version of this site and its pricing is stale. It was deliberately left untouched as a rollback. Do not use it and do not embed it.

**No retrieval, and re:tune requires an OpenAI key anyway. Read this before assuming otherwise.**

The bot uses **no knowledge base and no vector search**. Every fact it knows sits directly in its Base Prompt, all 26,994 characters of it. Claude Haiku 4.5 has a 200,000 token context window and the whole corpus is about 6,700 tokens, so it fits roughly thirty times over. Retrieval buys nothing at this size, and stuffing the prompt is strictly more accurate: the model sees every fact on every message, so the right fact can never fail to be retrieved.

**But this does NOT make the setup Anthropic-only, and it was wrong to think it would.** Verified by testing on 2026-09-01: re:tune sends an embedding request to **OpenAI on every incoming visitor message**, to search the knowledge base and maintain conversation memory. That call fires even when the knowledge base holds zero documents. With no OpenAI credit the bot returns an **empty reply** and surfaces `[OpenAI] You have no credits remaining` in the dashboard. The visitor just sees silence.

Every escape route was checked and none exists:

- The Train tab's knowledge base dropdown offers only Connected, Available to connect, and Create new. There is **no None or Disconnect option**, and clicking the already-connected entry does not detach it. Every chatbot must have exactly one embedding store bound to it.
- The workspace-level Embedding section (`/embeddings`, `/embedding/{id}/data`) is a data browser only. **No provider selection, no model selection, no settings tab.**
- Workspace Settings holds keys for OpenAI, Anthropic, Gemini and Pinecone, but nothing selects which one does the embedding.

So OpenAI is hard-wired into re:tune. **The chat completions run on Claude Haiku 4.5 via the Anthropic key; the per-message embedding runs on OpenAI and cannot be turned off.** The embedding itself is trivially cheap (a ~20 token question on OpenAI's small embedding model is about $0.0000004), so a one-time $5 top-up covers millions of messages. The operational hazard is not the cost, it is the failure mode: if that balance ever reaches zero, the bot silently answers nothing.

**How the content is built.** Everything comes from `docs/chatbot/`, which is the editable source. The site is deliberately **not** scraped. The home page and `/podcast-multiplier` carried stale claims that contradicted `/pricing` (a 14-day money-back guarantee, "Standard"/"Pro" package names, per-episode clip counts). The guarantee and the clip counts were removed on 2026-10-12; the 10 percent prepayment discount and the "Standard"/"Pro" turnaround FAQ remain, so the site is still not a safe scraping source.

```
docs/chatbot/
  00-README.md                   Build state, config table, rebuild command, test list. Start here.
  _persona.md                    Identity, voice, length rules, the Done With You scope trap, no trial
  kb-01-offers-and-pricing.md    The two packages, other volumes, add-ons, the report, billing
  kb-02-delivery.md              Process, onboarding, platforms, niches, ownership
  kb-03-proof.md                 The six case studies, seven testimonials, quotable figures
  kb-04-common-questions.md      Objections and FAQs in approved wording
  kb-05-next-steps-and-contact.md  Every link, contact routes, company identifiers
  01-base-prompt.md              GENERATED: _persona.md + the five kb files -> re:tune "Base Prompt"
  02-restrictions.md             Price allow-list, prohibitions, DO NOT ANSWER list -> re:tune "Restrictions"
```

`01-base-prompt.md` is generated, never hand-edited. Edit a `kb-*.md` file, then rebuild:

```bash
cd "D:/CLAUDE CODE/slk-media-website" && node docs/chatbot/build-prompt.js
```

Then paste the result into re:tune by hand. `build-prompt.js` (added 2026-09-22) replaced a plain `cat`. It adds the "KNOWLEDGE BASE" divider banner and the blank lines between files that the live re:tune prompt has. Those had only ever been added by hand in re:tune, so the repo and the live prompt never matched byte for byte. `02-restrictions.md` was also brought in line with a live-only edit ("in your instructions above").

**Pending as of 2026-10-16, not live.** `docs/chatbot/` was rewritten on branch `pricing-two-packages` for the two packages (Done For You $1,597, Done With You $997), the add-on prices and no trial, and `01-base-prompt.md` was rebuilt (28,506 characters). The live re:tune bot was NOT changed: paste `01-base-prompt.md` and `02-restrictions.md` into re:tune by hand when the page goes live, not before, or the bot and the live page disagree.

**Live state as of 2026-10-06.** The 2026-10-06 price change (trial $497 fee included, Clips Only $547 and $997, the new Myfundbox link, the $997 two-plan rule) was applied in place to both live fields through Samuel's Chrome, then confirmed after a page reload: no $697, $1,097, $597, $617 or old checkout link left, lengths 29,922 and 5,901. The live layout still lacks the repo's `##` heading marks, which is why the Base Prompt is shorter than `01-base-prompt.md`. Two navigation facts: the editor is at `https://retune.so/chat/<chat id>/prompt` (`/app` and `/chats/<id>` are 404s), and the dashboard card is named **"SLK Website Assistant"**, not "SLK Media Agency Assistant".

**Live state as of 2026-10-03.** Compared word for word that day: the live Base Prompt and Restrictions match `docs/chatbot/` in wording. The only difference is layout (the live Base Prompt has most markdown `#` and list marks stripped), so a whole-file paste is not needed for a small change. The report price was changed in place in both fields ($100 plus fee became $103.55 flat) and confirmed after a page reload. The older note below is kept for history.

**Live state as of 2026-09-22, not finished.** A check that day found the live Base Prompt still carried the pre-fix kb-01 ("There are four things you can buy"), so the 2026-09-01 price-answer fix had only ever reached the Restrictions field. The new Restrictions text (with Clips Only) was pasted and given the keystroke, but was not verified after reload. The new Base Prompt was **not** pasted. Until it is, the bot may name Clips Only prices from Restrictions without knowing what the product includes. Paste `01-base-prompt.md`, give it the keystroke, reload, and confirm both fields match the repo (lengths 30,657 and 5,728). If you change a price, a link, or a claim on this site, **update the matching `kb-*.md`, rebuild, and re-paste**, or the bot and the site will disagree. This is the same drift risk as section 9 and it is not automated.

One editing gotcha: re:tune autosaves the prompt fields on a debounce that only fires on a real keystroke. After pasting, click into the field, press End, type a character, delete it, click outside, then reload the page and confirm it stuck.

**Configuration as set, all verified after reload.** Model Claude Haiku 4.5, temperature 0.3, input cap 12000 tokens (the prompt alone is about 8000, so this leaves room for history), output cap 400 tokens, 250 conversations per 30 days, 8 messages per conversation per day, embedding restricted to `slkmediaagency.com, *.slkmediaagency.com`, human handoff to `https://link.slkmediaagency.com/strmeet`, re:tune branding off, URL-hallucination guard on, response rating on.

Because the full prompt rides on every message, worst case per message is $0.014, which puts a **hard ceiling of $28 a month** on those caps. Realistic is $8 to $12. Dropping conversations from 250 to 170 pulls the ceiling under $20.

**Status as of 2026-09-01: the Anthropic key IS set** in re:tune workspace settings, and every prompt and setting is live and verified. The bot is **not** on the website and **does not yet work**, because of the OpenAI dependency above.

A trap worth knowing about that settings page: re:tune renders a saved key as `sk-xxxxxxxxxxxxxxx`, which is character-for-character identical to the placeholder shown for an empty field. Saved and unsaved look the same. The only reliable check is whether the input carries a `value` or merely a `placeholder`. A second consequence: because the field literally contains that mask string, pressing Save on the External API Keys block again without re-pasting real keys risks writing the mask in as the key and breaking both entries.

**To make it work, one of these two:**

1. Put a small credit on the OpenAI account (their minimum is around $5). Chat stays on Claude Haiku 4.5; OpenAI only does the per-message embedding. Effectively a one-time unlock, with the silent-failure risk noted above.
2. Drop re:tune and serve the bot from this repo instead: one API route calling Anthropic directly, no third-party script, genuinely one vendor. That means rebuilding the widget UI, the conversation inbox, lead capture, rate limiting and the domain lock that re:tune currently provides for free.

One cosmetic leftover: a dead document called `05 Next steps, links and contact.txt` is stuck in the Train tab showing the OpenAI credit error. It is inert (no embeddings, and nothing reads the knowledge base) and re:tune will not delete it.

**Dependency note.** This is the first third-party script on the site beyond the Font Awesome CDN. If re:tune is down the widget does not load. The tag was `defer` until 2026-10-20, when retune.so stopped answering (every request timed out): a deferred script holds back DOMContentLoaded, so every page hung half-loaded and `/pricing#build` never reached the calculator. It is `async` since then, which only holds back the browser's final load event (the tab spinner can still turn while re:tune is down). Removing the two lines is a complete revert.

**Verified behaviour on 2026-09-01**, ten test questions run against the live bot: correct prices, correct refusals on all eight DO NOT ANSWER topics, correct trial scope, admits to being a bot, and resists a prompt-extraction attempt. One failure was found and fixed: asked what it costs, it originally returned a bulleted menu of all four products including the trial. The cause was `kb-01` opening with "There are four things you can buy", which the model copied as a template. The fix is the FORMAT OVERRIDE block at the top of `02-restrictions.md`, which states that the knowledge base is reference material whose formatting must never be mirrored back.

---

## 13. Maintaining this document (standing rule)

This file is the handoff contract. It must stay accurate so a junior developer can pick up the project without asking questions.

Whenever you change the website, update `OVERVIEW.md` in the same change so the two never drift. That includes: adding, removing, or renaming a route or page; adding or changing a component; changing the styling architecture, tokens, or fonts; changing redirects or rewrites; changing build, deploy, or the auto-commit hook; changing an external CTA, price, or link; or adding tooling or assets. For a small copy tweak that changes nothing structural, no update is needed. When in doubt, add a one-line note in the relevant section.

This standing rule is also recorded in the project `CLAUDE.md` so it is loaded automatically at the start of every session.

---

Last verified against the codebase: 2026-10-16.
