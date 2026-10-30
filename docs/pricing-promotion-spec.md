# Current client-facing pricing: the promotion (source of truth for every agent)

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
| Done For You Starter ("Content Starter") | $697/month | $997 | 10 short clips a month, a custom thumbnail for every clip, captions, hashtags and calls to action for every clip, every clip posted on every platform, a dedicated project manager, a strategy document before the first clip, a monthly call and a monthly report. No long-form episode edits. (Until 27 Oct 2026 it was 12 clips with a weekly call and weekly reporting.) |
| Done For You ("Content Engine"), the featured one | $997/month | $1,597 | 20 short clips a month, a custom thumbnail for every clip, captions, hashtags and calls to action for every clip, every clip posted on every platform, a dedicated project manager, a weekly call, weekly reporting, a strategy document before the first clip. No long-form episode edits. |
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
