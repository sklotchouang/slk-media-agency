# Client-facing pricing: the promotion ENDED on 2 November 2026 (source of truth for every agent)

**The pricing promotion that started on 21 October 2026 ENDED on 2 November 2026** (Samuel, in writing, 2 November 2026). From that date every prospect and client is shown the normal pricing page and its prices. Everything under "HISTORY" further down is kept only as a record of what the promotion was; none of it may be quoted to a new asker.

**Package change, 2 November 2026 (Samuel, in writing, later the same day):** the Done With You card ($997, 20 clips, client posts) is gone from /pricing. In its place is **Done For You Starter at $997 a month for 10 clips**, with a monthly call and a monthly report. Done With You still exists only as the "Clips only" choice inside the calculator; agents never offer it as a package, and only mention it if a prospect says they want to post the clips themselves. Existing Done With You clients keep their plan.

## The link to send

- Pricing page: https://slkmediaagency.com/pricing
- Straight to the calculator: https://slkmediaagency.com/pricing#build
- Never send https://slkmediaagency.com/pricing/promotion again. Since 2 November 2026 it shows a "This promotion has ended" page with a "See current pricing" button to /pricing, so anyone opening an old link in a sent email or LinkedIn message is told plainly that it ended. It names no promotion price. The promotion page and its two components were deleted (they stay in git history and in the tag `pricing-backup-2026-10-21`).
- Strategy call (unchanged): https://link.slkmediaagency.com/strmeet

## Current packages (the normal /pricing page; all monthly, month to month, pause up to 60 days, the client owns every clip)

| Package | Price | What it includes |
|---|---|---|
| Done For You Starter ("Content Starter") | $997/month | 10 short clips a month, a custom thumbnail for every clip, captions, hashtags and calls to action for every clip, every clip posted on every platform, a dedicated project manager, a monthly call, monthly reporting, a strategy document before the first clip. Long-form episode edits are not included: they are $150 per episode, and we also edit full episodes on their own. |
| Done For You ("Content Engine"), most popular | $1,597/month | 20 short clips a month, a custom thumbnail for every clip, captions, hashtags and calls to action, every clip posted on every platform, a dedicated project manager, a weekly call, weekly reporting, a strategy document before the first clip. Long-form episode edits are not included: they are $150 per episode, and we also edit full episodes on their own. |
| Done For You Plus ("Content Accelerator") | $1,897/month | Everything in Done For You plus 4 long-form episode edits a month. |

The difference between Starter and Done For You: Starter has 10 clips with one call and one report a month; Done For You has 20 clips with a weekly call and a weekly report. Both have thumbnails, captions, posting, a dedicated project manager and a strategy document. There is no $697 price for new askers (that was the promotion).

Which to suggest (from the page FAQ): Starter for 1 or 2 episodes a month. Done For You for 2 to 4. Done For You Plus if they also want full episodes edited. A prospect who wants to post the clips themselves: point them to the "Clips only" choice in the calculator (https://slkmediaagency.com/pricing#build).

Calculator (`components/PricingCalculator.js`), minimum 6 clips, default Done For You at 20 clips:
- Done For You below 20 clips is Starter: $997 at 10 clips, $60 per clip up or down (6 clips = $757, 12 = $1,117, 19 = $1,537). Every episode edit on Starter is $150 (Done For You Plus needs 20 clips).
- Done For You at 20 clips and up: $1,597 at 20, +$75 per clip above 20.
- Done For You Plus (Done For You at 20+ clips with 4 or more episodes): $1,897 at 20 clips with 4 edits included, +$75 per clip above 20, edits above 4 at $150 each.
- Clips only (Done With You, calculator only): $997 at 20 clips, $50 per clip up or down (10 clips = $497).
- Long-form editing on its own (Samuel, 4 November 2026): we edit full episodes with or without a package, $150 per episode. Someone who only wants full episodes edited is quoted episodes a month x $150 (4 episodes = $600 a month). Never tell a prospect we do not do long-form.
- Add-ons: long-form edit $150 per episode, show notes $50 per episode, SEO show notes $100 per episode. Extra clips: $60 on Starter, $75 on Done For You and Done For You Plus. If `PricingPlans.js` / `PricingCalculator.js` and this sheet ever disagree, the files win and this sheet is out of date.

## Pay without a call (normal Myfundbox checkouts, on /pricing under each card)

- Done For You Starter, $997/month: https://pay.myfundbox.com/OVP/?token=nqEFAw0ZzvYeM2sHwa0ABw (Samuel, 2 Nov 2026: this is the old Done With You checkout, reused because the amount is right; the checkout page still shows the plan name "Done With You". Tell the prospect that if they ask.)
- Done For You, $1,597/month: https://pay.myfundbox.com/OVP/?token=YqnycQ4nQ-hWYXg64XvGBg
- Done For You Plus, $1,897/month: https://pay.myfundbox.com/OVP/?token=xAlmD9YT1xUcuR5nBQPv_g

## Honor rule for leads already quoted a promotion price (until 30 November 2026)

- Anyone who was ALREADY shown or quoted a promotion price before 2 November 2026 can still buy at that promotion price until 30 November 2026 (inclusive). New askers get the normal prices only. After 30 November 2026 nobody gets a promotion price.
- "Shown or quoted" includes being SENT the promotion page (https://slkmediaagency.com/pricing/promotion) by any message of ours before 2 November 2026, even if no price was written in the message itself (Samuel, 11 November 2026). The reply agents' facts sheet already reads it this way.
- Never advertise it and never raise it first. Only when an honored lead asks to buy at the price they were quoted.
- The promotion checkouts are reserved for those honored leads, sent only when that lead asks to buy at the quoted price, until 30 November 2026: Done For You Starter $697 https://pay.myfundbox.com/OVP/?token=SIoJ8jmLealcbfdLHdTGGw ; Done For You (promo) $997 https://pay.myfundbox.com/OVP/?token=yvTAp4UksMbLKpwqkAbLtg ; Done For You Plus (promo) $1,597 https://pay.myfundbox.com/OVP/?token=ap4vMqLYmIo6jPOsQ5RLzA
- The website chatbot never names a promotion price and never shares these checkouts: if a visitor says they were quoted one before 2 November, it says the quoted price stands until 30 November and points to the strategy call.
- A creator who already joined at a promotion price keeps it for as long as they stay (unchanged).

## Prepay discount (Samuel, 27 October 2026, unchanged)

- 10% off for 3 months or more prepaid, on the normal prices: Done For You $1,437.30, Done For You Plus $1,707.30 a month. There is no prepay discount on Done For You Starter. (Samuel, 2 November 2026: Starter stays $997 a month whatever the term.)
- Arranged on the strategy call (no checkout link). Mentioned only when a prospect asks about discounts, paying upfront or a longer commitment. Never combined with a promotion price.

## Not changed

The trial ($497) is never offered by an agent unless the prospect asks for a trial or test in their own words (the website and its chatbot say there is no trial). The Custom Social Media Strategy Report is $103.55. No free work, no guarantees of views, downloads or sponsors. Never say "spots left" and never mention the promotion to new askers.

---

# HISTORY: the promotion as it ran from 21 October to 2 November 2026 (no longer current)

Set by Samuel on 21 October 2026. Starter scope and the calculator below 20 clips changed by Samuel on 27 October 2026 (decision record: `docs/adr/0001-starter-monthly-service-below-20-clips.md`). From this date the promotion page is the pricing shown to every prospect and client, for a trial period of 2 to 3 months (review by Samuel between 21 December 2026 and 21 January 2027, then he decides whether to keep it). Until he decides otherwise, every agent, prompt, price card and knowledge file quotes these prices and sends this page.

The page lives in the website repo: `app/(main)/pricing/promotion/page.js`, `components/PromoPricingPlans.js`, `components/PromoPricingCalculator.js`. If those files and this sheet ever disagree, the files win, and this sheet is out of date.

## The link to send

- Pricing page: https://slkmediaagency.com/pricing/promotion
- Straight to the calculator: https://slkmediaagency.com/pricing/promotion#build
- Do NOT send https://slkmediaagency.com/pricing any more. It still exists at the normal prices, but it is no longer the page we show.
- Strategy call (unchanged): https://link.slkmediaagency.com/strmeet

## The promotion

- Temporary promotion for 4 new creators only. It ends once 4 new creators are on board.
- Spots left: only 2 of the 4 (Samuel, 30 October 2026, to add scarcity). Every agent may say "only 2 of the 4 promotion spots are left". Never state any other number, never invent a deadline or countdown. Until 30 October 2026 the rule was to never state a number. The website reads this from `PROMO_SPOTS_LEFT` in `components/PromoPricingPlans.js`.
- A creator who joins during the promotion keeps the promotion price for as long as they stay, even after the promotion ends.

## Packages (all monthly, month to month, pause up to 60 days, the client owns every clip)

| Package | Promotion price | Normal price | What it includes |
|---|---|---|---|
| Done For You Starter ("Content Starter") | $697/month | $997 | 10 short clips a month, a custom thumbnail for every clip, captions, hashtags and calls to action for every clip, every clip posted on every platform, a dedicated project manager, a strategy document before the first clip, a monthly call and a monthly report. Long-form episode edits are not included: they are $150 per episode, and we also edit full episodes on their own. (Until 27 Oct 2026 it was 12 clips with a weekly call and weekly reporting.) |
| Done For You ("Content Engine"), the featured one | $997/month | $1,597 | 20 short clips a month, a custom thumbnail for every clip, captions, hashtags and calls to action for every clip, every clip posted on every platform, a dedicated project manager, a weekly call, weekly reporting, a strategy document before the first clip. Long-form episode edits are not included: they are $150 per episode, and we also edit full episodes on their own. |
| Done For You Plus ("Content Accelerator") | $1,597/month | $1,897 | Everything in Done For You plus 4 long-form episode edits a month. |
| Done With You (calculator only, not a card) | $597/month at 20 clips | $997 | 20 short clips a month, edited and ready to post. The client posts them. No thumbnails, captions, posting, reporting. $25 per clip up or down. |

The difference between Starter and Done For You: Starter has one call and one report a month, Done For You has a weekly call and a weekly report. Both have a dedicated project manager.

Which to suggest (from the page FAQ): Starter for 1 or 2 episodes a month. Done For You for 2 to 4. Done For You Plus if they also want full episodes edited. Done With You if they want to post the clips themselves.

## Add-ons

- Extra clips: $30 each on Done For You Starter (11 to 19 clips; at 20 clips it becomes Done For You at $997), $50 each above 20 on Done For You and Done For You Plus, $25 each on Done With You.
- Long-form episode edit: $150 per episode.
- Show notes: $50 per episode. SEO show notes: $100 per episode.

## Calculator rules (only if an agent computes a custom price)

- Below 20 clips, the done-for-you choice is the Starter service (monthly call and report): $697 at 10 clips; each clip from 11 to 19 adds $30 (12 clips = $757, 19 clips = $967); each clip below 10 takes $37.50 off, rounded to the nearest dollar (8 clips = $622, 6 clips = $547). Every episode edit is $150.
- Done For You (weekly call and report): $997 at 20 clips; above 20 each clip adds $50. Not sold below 20 clips.
- Done For You Plus (Done For You with 4 or more episodes): $1,597 at 20 clips with 4 edits included; above 20 each clip adds $50; edits above 4 are $150 each. Not sold below 20 clips.
- Done With You: $597 at 20 clips, $25 per clip up or down; every episode edit $150.
- Minimum 6 clips.

## Pay without a call (Myfundbox, promotion checkouts, each opened and checked on 21 Oct 2026)

- Done For You Starter, $697/month: https://pay.myfundbox.com/OVP/?token=SIoJ8jmLealcbfdLHdTGGw
- Done For You (Promo), $997/month: https://pay.myfundbox.com/OVP/?token=yvTAp4UksMbLKpwqkAbLtg
- Done For You Plus (Promo), $1,597/month: https://pay.myfundbox.com/OVP/?token=ap4vMqLYmIo6jPOsQ5RLzA
- The old /pricing checkouts (tokens nqEFAw0ZzvYeM2sHwa0ABw, YqnycQ4nQ-hWYXg64XvGBg, xAlmD9YT1xUcuR5nBQPv_g) charge the normal prices and must not be sent to prospects during the promotion. There is no promotion checkout for Done With You.

## Prepay discount (set by Samuel in writing on 27 October 2026)

- 10% off the monthly price when a client prepays 3 months or more.
- It applies to the normal prices only: Done For You Starter normal $997 becomes $897.30/month prepaid, Done For You normal $1,597 becomes $1,437.30, Done For You Plus normal $1,897 becomes $1,707.30, Done With You normal $997 becomes $897.30.
- It does not combine with the current promotion prices ($697 / $997 / $1,597). Never present it as a cut to a promotion price.
- There is no prepay checkout link. Prepaid deals are arranged on the strategy call: https://link.slkmediaagency.com/strmeet
- Agents mention it only when a prospect asks about discounts, longer commitments or paying upfront, never unprompted.

## Not changed

No free work, no free trial, no discount beyond these published promotion prices except the prepay discount above, no guarantees of views, downloads or sponsors. Turnaround: first clips 3 to 5 business days after onboarding. The paid Custom Social Media Strategy Report and the toolkits are unchanged.
