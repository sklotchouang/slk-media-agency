// Set this to false by hand once all 4 promotion creators have signed up. The
// banner, the middle card and the FAQ then say the promotion is full.
export const PROMO_OPEN = true;

// How many creators the promotion takes in total. This is part of the copy
// ("only 4 new creators"). The page never shows how many spots are left
// (Samuel, 21 Oct 2026: a count that never moves would look untrue).
export const PROMO_SPOTS_TOTAL = 4;

// The temporary promotion on /pricing/promotion (built 21 October 2026 from
// Samuel's brief). A copy of components/PricingPlans.js with the promotion
// prices: Done For You Starter $697 (normally $997), Done For You $997
// (normally $1,597), Done For You Plus $1,597 (normally $1,897). The normal
// prices are what /pricing charges today for the same plan.
//
// /pricing itself still uses components/PricingPlans.js, which this file does
// not touch.
//
// No state, so these are server components. The page reads PROMO_OPEN for its
// FAQ, so the banner, the middle card and the FAQ always agree.

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

// Myfundbox promotion checkouts, given by Samuel on 21 Oct 2026. Each was
// opened that day: the plan name (marked "Promo") and the USD monthly price
// match the card. These are NOT the /pricing checkouts.
const PAY_URL = {
  starter: 'https://pay.myfundbox.com/OVP/?token=SIoJ8jmLealcbfdLHdTGGw', // Done For You Starter, $697
  dfy: 'https://pay.myfundbox.com/OVP/?token=yvTAp4UksMbLKpwqkAbLtg', // Done For You (Promo), $997
  plus: 'https://pay.myfundbox.com/OVP/?token=ap4vMqLYmIo6jPOsQ5RLzA', // Done For You Plus (Promo), $1,597
};

export const promoIsFull = !PROMO_OPEN;

// One row per deliverable. starter / dfy / plus: true = included, false = not
// included, a string = shown as text. Column order matches the cards.
const ROWS = [
  { label: 'Clips per month', starter: '10', dfy: '20', plus: '20' },
  { label: 'A custom thumbnail for every clip', starter: true, dfy: true, plus: true },
  { label: 'Captions, hashtags and calls to action', starter: true, dfy: true, plus: true },
  { label: 'Posting on every platform', starter: true, dfy: true, plus: true },
  { label: 'A dedicated project manager', starter: true, dfy: true, plus: true },
  { label: 'A strategy call', starter: 'Monthly', dfy: 'Weekly', plus: 'Weekly' },
  { label: 'Reporting', starter: 'Monthly', dfy: 'Weekly', plus: 'Weekly' },
  { label: 'A strategy document before the first clip', starter: true, dfy: true, plus: true },
  { label: 'Long-form episode edits', starter: false, dfy: false, plus: '4 a month' },
];

const ADDONS = [
  {
    name: 'Extra Clips',
    icon: 'fa-clapperboard',
    tone: 'pp-tone-a',
    price: '$50',
    unit: 'per clip',
    note: 'On Done For You and Done For You Plus. $30 per clip on Starter, $25 on Done With You.',
  },
  {
    name: 'Long-form Episode Edit',
    icon: 'fa-film',
    tone: 'pp-tone-b',
    price: '$150',
    unit: 'per episode',
  },
  {
    name: 'Show Notes',
    icon: 'fa-file-lines',
    tone: 'pp-tone-c',
    price: '$50',
    unit: 'per episode',
  },
  {
    name: 'SEO Show Notes',
    icon: 'fa-magnifying-glass',
    tone: 'pp-tone-d',
    price: '$100',
    unit: 'per episode',
  },
];

// The Done For You deliverables, shared word for word by Done For You Plus.
const DFY_FEATURES = [
  '20 short clips a month, edited and ready to post',
  'A custom thumbnail for every clip',
  'Captions, hashtags and calls to action written for every clip',
  'Every clip posted for you on every platform',
  'A dedicated project manager',
  'A weekly call',
  'Weekly reporting',
  'A strategy document before the first clip',
];

// Starter (since 27 Oct 2026): 10 clips, and a monthly call and report instead
// of weekly ones. Everything else matches Done For You word for word.
const STARTER_FEATURES = [
  '10 short clips a month, edited and ready to post',
  ...DFY_FEATURES.slice(1, 5),
  'A monthly call',
  'Monthly reporting',
  'A strategy document before the first clip',
];

function Yes({ children }) {
  return (
    <li className="pp-yes">
      <span className="pp-ic" aria-hidden="true">&#10003;</span>
      <span>{children}</span>
    </li>
  );
}

function No({ children }) {
  return (
    <li className="pp-no">
      <span className="pp-ic" aria-hidden="true">&#10005;</span>
      <span>{children}</span>
    </li>
  );
}

// The normal price struck through, then the promotion price. The hidden words
// make screen readers say "Normally $997, now $697".
export function WasNow({ was, now, big = true }) {
  return (
    <>
      <s className="pp-was"><span className="pp-sr">Normally </span>{was}</s>
      {big ? <b><span className="pp-sr">now </span>{now}</b> : <span className="pp-now"><span className="pp-sr">now </span>{now}</span>}
    </>
  );
}

// The card footer: the call button, named after the plan, and the promotion
// checkout link under it (same pattern as /pricing). Once the promotion is
// full the checkout links disappear, so nobody can pay a closed price.
function CardActions({ label, pay, quiet }) {
  return (
    <div className="pp-actions">
      <a href={BOOK_URL} className={quiet ? 'primary-cta pp-cta pp-cta-quiet' : 'primary-cta pp-cta'} target="_blank" rel="noopener">{label}</a>
      {promoIsFull ? null : (
        <a href={pay} className="pp-pay" target="_blank" rel="noopener">Ready now? Skip the call and pay</a>
      )}
    </div>
  );
}

// The saving on each card, in the promotion colour.
function Save({ amount }) {
  return <p className="pp-save"><i className="fas fa-tag" aria-hidden="true"></i> Save {amount} a month</p>;
}

function Cell({ value, us }) {
  const cls = us ? 'pp-us' : undefined;
  if (typeof value === 'string') return <td className={cls}>{value}</td>;
  return (
    <td className={cls}>
      <span className={value ? 'pp-cell pp-yes' : 'pp-cell pp-no'}>
        <span className="pp-ic" aria-hidden="true">{value ? '✓' : '✕'}</span>
        <span className="pp-sr">{value ? 'Included' : 'Not included'}</span>
      </span>
    </td>
  );
}

// The banner above the cards, in the promotion colour. No spots count.
export function PromoBanner() {
  if (promoIsFull) {
    return (
      <div className="pp-promo-banner is-full" role="note">
        <p className="pp-promo-text">This promotion is full. Book a call to join the waiting list for the next one.</p>
      </div>
    );
  }
  return (
    <div className="pp-promo-banner" role="note">
      <span className="pp-promo-pill"><i className="fas fa-bolt" aria-hidden="true"></i> Flash promotion</span>
      <p className="pp-promo-head">Save up to $600 a month</p>
      <p className="pp-promo-text">
        Done For You is <strong>$997 a month instead of $1,597</strong>. We are taking only {PROMO_SPOTS_TOTAL} new creators at these prices, and the promotion ends as soon as all {PROMO_SPOTS_TOTAL} are on board.
      </p>
    </div>
  );
}

export function PlanCards() {
  return (
    <>
      <PromoBanner />

      <div className="pp-trio">
        <div className="pp-col">
          <article className="pp-card" aria-labelledby="pp-starter-name">
            <div>
              <h2 className="pp-name" id="pp-starter-name">Done For You Starter</h2>
              <p className="pp-sub">Content Starter</p>
            </div>
            <p className="pp-price">
              <WasNow was="$997" now="$697" />
              <span>/month</span>
            </p>
            <Save amount="$300" />
            <p className="pp-who">The full service at a smaller volume, with a monthly check-in.</p>
            <ul className="pp-feat">
              {STARTER_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <No>Long-form episode edits</No>
            </ul>
            <CardActions label="Start with Starter" pay={PAY_URL.starter} quiet />
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 10 clips a month, the posting schedule and a monthly report.</p>
        </div>

        <div className="pp-col pp-col-dfy">
          <article className="pp-card pp-card-dfy" aria-labelledby="pp-dfy-name">
            <span className="pp-tag">{promoIsFull ? 'Promotion full' : 'Flash promotion'}</span>
            <div>
              <h2 className="pp-name" id="pp-dfy-name">Done For You</h2>
              <p className="pp-sub">Content Engine</p>
            </div>
            <div className="pp-price-wrap">
              <p className="pp-price">
                <WasNow was="$1,597" now="$997" />
                <span>/month</span>
              </p>
              <Save amount="$600" />
              {promoIsFull ? null : (
                <p className="pp-promo-spots">Ends once {PROMO_SPOTS_TOTAL} new creators are on board</p>
              )}
            </div>
            <p className="pp-who">We make the clips and run your short-form content for you.</p>
            <ul className="pp-feat">
              {DFY_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <No>Long-form episode edits</No>
            </ul>
            <CardActions label="Start Done For You" pay={PAY_URL.dfy} />
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 20 clips a month, the posting schedule and a weekly report.</p>
        </div>

        <div className="pp-col">
          <article className="pp-card" aria-labelledby="pp-plus-name">
            <div>
              <h2 className="pp-name" id="pp-plus-name">Done For You Plus</h2>
              <p className="pp-sub">Content Accelerator</p>
            </div>
            <p className="pp-price">
              <WasNow was="$1,897" now="$1,597" />
              <span>/month</span>
            </p>
            <Save amount="$300" />
            <p className="pp-who">We run your short-form content and edit your full episodes.</p>
            <ul className="pp-feat">
              {DFY_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <Yes>4 long-form episode edits a month</Yes>
            </ul>
            <CardActions label="Start Done For You Plus" pay={PAY_URL.plus} quiet />
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 20 clips and 4 episode edits a month, the posting schedule and a weekly report.</p>
        </div>
      </div>

      <p className="pp-terms">
        <span>Month to month</span>
        <span>Pause up to 60 days</span>
        <span>You own every clip</span>
      </p>
    </>
  );
}

// Why SLK Media Agency, under the cards. Copied word for word from
// components/PricingPlans.js.
const WHY = [
  {
    icon: 'fa-users',
    title: 'Part of your team',
    text: 'We work like part of your team, not a vendor you have to manage.',
  },
  {
    icon: 'fa-bullseye',
    title: 'A plan behind every clip',
    text: 'Each one picked for the people you want to reach.',
  },
  {
    icon: 'fa-arrows-rotate',
    title: 'Not happy after week 2?',
    text: 'We assign a different team who better matches your style.',
  },
];

export function WhyUs() {
  return (
    <section className="pp-why" aria-labelledby="pp-why-title">
      <h2 id="pp-why-title">Why SLK Media Agency</h2>
      <ul className="pp-why-grid">
        {WHY.map((w) => (
          <li key={w.title}>
            <span className="pp-why-ic" aria-hidden="true"><i className={`fas ${w.icon}`}></i></span>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CompareTable() {
  return (
    <section className="pp-compare" aria-labelledby="pp-compare-title">
      <p className="pp-eyebrow">Side by side</p>
      <h2 id="pp-compare-title">Everything in each package</h2>
      <div className="pp-tablebox" role="region" aria-labelledby="pp-compare-title" tabIndex={0}>
        <table className="pp-table">
          <thead>
            <tr>
              <th scope="col">What you get</th>
              <th scope="col">Starter</th>
              <th scope="col" className="pp-us">Done For You</th>
              <th scope="col">Done For You Plus</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <Cell value={row.starter} />
                <Cell value={row.dfy} us />
                <Cell value={row.plus} />
              </tr>
            ))}
            <tr className="pp-tot">
              <th scope="row">Monthly price</th>
              <td><WasNow was="$997" now="$697" big={false} /></td>
              <td className="pp-us"><WasNow was="$1,597" now="$997" big={false} /></td>
              <td><WasNow was="$1,897" now="$1,597" big={false} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function AddOns() {
  return (
    <section className="pp-addons" id="add-ons" aria-labelledby="pp-addons-title">
      <h2 id="pp-addons-title">Optional Add-ons</h2>
      <p className="pp-lead">Add-ons work with any package.</p>
      <ul className="pp-addon-grid">
        {ADDONS.map((a) => (
          <li className="pp-addon" key={a.name}>
            <span className={`pp-addon-ic ${a.tone}`} aria-hidden="true">
              <i className={`fas ${a.icon}`}></i>
            </span>
            <h3>{a.name}</h3>
            <p className="pp-addon-price">
              <b>{a.price}</b>
              <span>{a.unit}</span>
            </p>
            {a.note ? <p className="pp-addon-note">{a.note}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
