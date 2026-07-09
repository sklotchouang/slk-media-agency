# SLK Media Agency website - project instructions

This is the public marketing website for SLK Media Agency (Next.js App Router, React 19, plain JavaScript, deploys to Vercel).

## Read OVERVIEW.md first

`OVERVIEW.md` is the full handoff document for this website: what it is, the stack, the repository map, every route, the styling architecture, deployment, and how to make common changes. Read it before working in this repo. `DESIGN.md` holds the design tokens and motion spec; `README.md` is the quick start.

## Standing rule: keep OVERVIEW.md current

Whenever you change the website, update `OVERVIEW.md` in the same change so the two never drift. This applies to: adding, removing, or renaming a route or page; adding or changing a component; changing the styling architecture, design tokens, or fonts; changing redirects or rewrites in `next.config.mjs`; changing build, deploy, or the auto-commit hook; changing an external CTA, price, or link; or adding tooling or assets. A small copy tweak that changes nothing structural needs no update. When in doubt, add a one-line note in the relevant section. The goal is that a junior developer can always pick up this project from `OVERVIEW.md` alone.

## Guardrails specific to this site

- Copy, CTAs, links, prices, disclosures, and legal identifiers are frozen. Do not change any text node or `href` unless explicitly asked.
- Company name is always "SLK Media Agency" in full. Never "SLK" or "SLK Media".
- No em dashes and no en dashes anywhere. Use commas, colons, periods, and parentheses.
- A Stop hook (`.claude/hooks/auto-commit-push.ps1`) auto-commits and pushes every session, which redeploys the live site. Treat edits as going to production.
- Most visual changes go in `public/premium.css` (the re-skin layer loaded on top of the legacy stylesheets), not the large legacy CSS files.
- After a visual change, verify with `npm run build` and `tools/shot.js`, and confirm zero console errors.
