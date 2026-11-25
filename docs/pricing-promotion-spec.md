# Client-facing pricing: per-episode plans from 25 November 2026 (source of truth for every agent)

**From 25 November 2026 every NEW prospect is shown per-episode pricing** (Samuel, in writing, 25 November 2026: deals were being lost on price). It went live as soon as it was built. Existing clients keep their current plans. Never push the new plans to an existing client.

If `components/PricingPlans.js`, `components/PricingCalculator.js` or `lib/checkout.js` and this sheet ever disagree, tell Samuel: one of them is out of date.

## The links to send

- Pricing page: https://slkmediaagency.com/pricing
- Straight to the calculator: https://slkmediaagency.com/pricing#build
- Strategy call (unchanged): https://link.slkmediaagency.com/strmeet
- After-payment page: https://slkmediaagency.com/thank-you. Myfundbox sends the new client there only once Samuel sets it as the redirect inside each checkout (not set yet).
- Never send https://slkmediaagency.com/pricing/promotion. It shows a "This promotion has ended" page that points to /pricing.

## The three plans (new prospects only)

| Plan | Episodes a month | Clips a month | Price | Call and report | How to buy |
|---|---|---|---|---|---|
| Monthly Show | 1 | 5 | $597 a month | A monthly call and a monthly report | Direct checkout, no call needed |
| Biweekly Show (badge: Most popular) | 2 | 10 | $997 a month | A monthly call and a monthly report | Direct checkout, no call needed |
| Weekly Show | 4 | 20 | $1,597 a month | A weekly call and a weekly report | Book a call. No direct checkout |

Every plan is full service:
- a custom thumbnail for every clip,
- captions, hashtags and calls to action for every clip,
- posting on every platform,
- a dedicated project manager,
- a strategy document before the first clip.

## The episode rules

- Every episode gets 5 clips.
- In a month with no new episode, we cut the clips from the back catalogue.
- If the client releases more episodes than the plan covers, the client picks which episode gets clipped.

## Calculator (`components/PricingCalculator.js`, on /pricing#build)

- Episodes a month: 1 to 8. 1 episode = $597, 2 episodes = $997, then +$300 for every episode above 2.
- Reference prices: 1 = $597, 2 = $997, 3 = $1,297, 4 = $1,597, 5 = $1,897, 6 = $2,197, 7 = $2,497, 8 = $2,797.
- Clips: 5 for every episode, plus any extra clips.
- Extra clips: $60 each.
- 1 or 2 episodes: a monthly call and a monthly report. 3 or more episodes: a weekly call and a weekly report, and the plan is started by booking a call.
- Website behaviour (a build choice, not part of Samuel's spec; flagged to him): the calculator shows the direct checkout only for a plain Monthly Show (1 episode) or Biweekly Show (2 episodes) with nothing added, because each checkout charges one fixed amount. Anything with extras or add-ons, and anything at 3 or more episodes, goes to the strategy call.
- "Clips only" (the client posts the clips) is RETIRED for new prospects (Samuel, 25 November 2026). It is not in the calculator and is never offered.

## Add-ons (per episode, any plan)

- Full-episode (long-form) edit: $150 per episode.
- Show notes: $50 per episode.
- SEO show notes: $100 per episode.
- Extra clips: $60 each.

## Terms

- Month to month, billed upfront every month.
- No prepay discount on any plan. The old 10% prepay discount is gone.
- The client owns every clip.
- Pause up to 60 days: not discussed on 25 November 2026, so it stays as it was (on the page and in the FAQ). Flagged to Samuel.

## Checkouts (Myfundbox)

All checkout links live in ONE place: `lib/checkout.js` in the website repo.

- Monthly Show, $597 a month: https://pay.myfundbox.com/OVP/?token=1DDrjflsY6e2JMpnU6jKzA (Samuel, 25 November 2026).
- Biweekly Show, $997 a month: https://pay.myfundbox.com/OVP/?token=IXcC8MsKeFTU-UGVJfv9ig (Samuel, 25 November 2026).
- An older $997 checkout exists (https://pay.myfundbox.com/OVP/?token=nqEFAw0ZzvYeM2sHwa0ABw). It charges the right amount, but its page reads "Done With You". It is NOT wired in. It may only be used for Biweekly Show if Samuel says yes.
- Weekly Show has no checkout. It is sold on the strategy call.
- Failed payments go to https://slkmediaagency.com/payment-failed (Failure Page URL in the Myfundbox Checkout Customizer).
- Every new checkout should send the buyer to https://slkmediaagency.com/thank-you after payment (Samuel sets this inside Myfundbox).
- Both new checkouts must charge every month (recurring). The old products were described in the wiki as a one-time charge.

## Retired for new prospects (25 November 2026)

- Done For You Starter ($997, 10 clips), Done For You ($1,597, 20 clips) and Done For You Plus ($1,897, dropped entirely).
- Their checkouts (tokens nqEFAw0ZzvYeM2sHwa0ABw, YqnycQ4nQ-hWYXg64XvGBg, xAlmD9YT1xUcuR5nBQPv_g) are off the website and are never sent to a new prospect.
- Existing clients on these plans keep them.
- The 10-day trial ($497) and "Clips only" (the client posts the clips) are also retired for new prospects (Samuel, 25 November 2026). If someone asks for a trial: Monthly Show is month to month, so the first month is the low-risk way to start.

## Honor rule for leads already quoted a promotion price (until 30 November 2026, unchanged)

- Anyone who was ALREADY shown or quoted a promotion price before 2 November 2026 can still buy at that promotion price until 30 November 2026 (inclusive). Being SENT the promotion page by any message of ours before 2 November 2026 counts (Samuel, 11 November 2026). After 30 November 2026 nobody gets a promotion price.
- Never advertise it and never raise it first. Only when an honored lead asks to buy at the price they were quoted.
- The promotion checkouts are reserved for those honored leads, sent by hand only: Done For You Starter $697 https://pay.myfundbox.com/OVP/?token=SIoJ8jmLealcbfdLHdTGGw ; Done For You (promo) $997 https://pay.myfundbox.com/OVP/?token=yvTAp4UksMbLKpwqkAbLtg ; Done For You Plus (promo) $1,597 https://pay.myfundbox.com/OVP/?token=ap4vMqLYmIo6jPOsQ5RLzA
- The website chatbot never names a promotion price and never shares these checkouts. If a visitor says they were quoted one before 2 November, it says the quoted price stands until 30 November and points to the strategy call.
- A creator who already joined at a promotion price keeps it for as long as they stay.

## Not changed

- The 10-day trial ($497) is RETIRED for new prospects (Samuel, 25 November 2026). Never offer it, even when asked. If someone asks for a trial, the answer is: There is no trial. Monthly Show is month to month, so the first month is the low-risk way to start.
- The Custom Social Media Strategy Report is $103.55.
- No free work. No guarantees of views, downloads or sponsors. Never say "spots left".
- Never say or imply that AI makes the clips.
- Say "a month", not "per clip", when quoting a plan.

## History

The promotion (21 October to 2 November 2026) and the Done For You line-up (2 to 25 November 2026) are in git history of this file and in the tag `pricing-backup-2026-10-21`. None of it may be quoted to a new prospect.
