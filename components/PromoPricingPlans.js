// Update this number by hand each time a promotion client signs up. It is the only place the number lives.
export const PROMO_SPOTS_LEFT = 4;

// How many creators the promotion takes in total. This is part of the copy
// ("only 4 new creators"), not the live count above.
export const PROMO_SPOTS_TOTAL = 4;

// The temporary promotion on /pricing/promotion (built 21 October 2026 from
// Samuel's brief). A copy of components/PricingPlans.js with the promotion
// prices: Done For You Starter $697 (normally $997), Done For You $997
// (normally $1,597), Done For You Plus $1,597 (normally $1,897). The normal
// prices are what /pricing charges today for the same plan.
//
// /pricing itself still uses components/PricingPlans.js, which this file does
// not touch. No "Ready now? Skip the call and pay" links here: the Myfundbox
// checkouts charge the normal prices. Samuel will send promotion checkouts.
//
// No state, so these are server components. The page reads PROMO_SPOTS_LEFT
// for its FAQ, so the banner, the middle card and the FAQ always agree.

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

export const promoIsFull = PROMO_SPOTS_LEFT <= 0;

// One row per deliverable. starter / dfy / plus: true = included, false = not
// included, a string = shown as text. Column order matches the cards.
const ROWS = [
  { label: 'Clips per month', starter: '12', dfy: '20', plus: '20' },
  { label: 'A custom thumbnail for every clip', starter: true, dfy: true, plus: true },
  { label: 'Captions, hashtags and calls to action', starter: true, dfy: true, plus: true },
  { label: 'Posting on every platform', starter: true, dfy: true, plus: true },
  { label: 'A dedicated project manager', starter: true, dfy: true, plus: true },
  { label: 'A weekly call', starter: true, dfy: true, plus: true },
  { label: 'Weekly reporting', starter: true, dfy: true, plus: true },
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
    note: 'On Done For You plans. $25 per clip on Done With You.',
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

// Starter: the same list at 12 clips.
const STARTER_FEATURES = ['12 short clips a month, edited and ready to post', ...DFY_FEATURES.slice(1)];

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

// The card footer: the call button only (no checkout link on this page).
function CardActions({ label, quiet }) {
  return (
    <div className="pp-actions">
      <a href={BOOK_URL} className={quiet ? 'primary-cta pp-cta pp-cta-quiet' : 'primary-cta pp-cta'} target="_blank" rel="noopener">{label}</a>
    </div>
  );
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

// The banner above the cards. Its count comes from PROMO_SPOTS_LEFT.
export function PromoBanner() {
  return (
    <div className={promoIsFull ? 'pp-promo-banner is-full' : 'pp-promo-banner'} role="note">
      {promoIsFull ? (
        <p><i className="fas fa-bolt" aria-hidden="true"></i>This promotion is full. Book a call to join the waiting list for the next one.</p>
      ) : (
        <p>
          <i className="fas fa-bolt" aria-hidden="true"></i>Temporary promotion: Done For You is $997 a month instead of $1,597. We are taking only {PROMO_SPOTS_TOTAL} new creators at this price.{' '}
          <strong>{PROMO_SPOTS_LEFT} of {PROMO_SPOTS_TOTAL} spots left.</strong>
        </p>
      )}
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
            <p className="pp-who">Everything we do, at a smaller volume.</p>
            <ul className="pp-feat">
              {STARTER_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <No>Long-form episode edits</No>
            </ul>
            <CardActions label="Start with Starter" quiet />
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 12 clips a month, the posting schedule and a weekly report.</p>
        </div>

        <div className="pp-col pp-col-dfy">
          <article className="pp-card pp-card-dfy" aria-labelledby="pp-dfy-name">
            <span className="pp-tag">{promoIsFull ? 'Promotion full' : 'Temporary promotion'}</span>
            <div>
              <h2 className="pp-name" id="pp-dfy-name">Done For You</h2>
              <p className="pp-sub">Content Engine</p>
            </div>
            <div className="pp-price-wrap">
              <p className="pp-price">
                <WasNow was="$1,597" now="$997" />
                <span>/month</span>
              </p>
              {promoIsFull ? null : (
                <p className="pp-promo-spots">Only {PROMO_SPOTS_LEFT} of {PROMO_SPOTS_TOTAL} spots left at this price</p>
              )}
            </div>
            <p className="pp-who">We make the clips and run your short-form content for you.</p>
            <ul className="pp-feat">
              {DFY_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <No>Long-form episode edits</No>
            </ul>
            <CardActions label="Start Done For You" />
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
            <p className="pp-who">We run your short-form content and edit your full episodes.</p>
            <ul className="pp-feat">
              {DFY_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <Yes>4 long-form episode edits a month</Yes>
            </ul>
            <CardActions label="Start Done For You Plus" quiet />
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 20 clips and 4 episode edits a month, the posting schedule and a weekly report.</p>
        </div>
      </div>

      <p className="pp-terms">
        <span>Month to month</span>
        <span>Pause up to 60 days</span>
        <span>You own every clip</span>
      </p>

      <WhyUs />
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

function WhyUs() {
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
