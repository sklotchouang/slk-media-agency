// The three per-episode plans on /pricing and everything that describes them:
// the three cards, the episode rules, what happens after you pay, the terms
// line, the calculator prompt, the comparison table and the add-ons.
//
// Per-episode pricing, approved by Samuel on 25 November 2026 for NEW
// prospects (existing clients keep their plans): Monthly Show ($597, 1 episode,
// 5 clips), Biweekly Show ($997, 2 episodes, 10 clips, most popular) and Weekly
// Show ($1,597, 4 episodes, 20 clips). Monthly and Biweekly are bought directly
// by checkout; Weekly is sold on a call. Done For You Starter, Done For You and
// Done For You Plus are retired (see git history and docs/pricing-promotion-spec.md).
//
// Checkout links live in lib/checkout.js. While a link is empty, the buy button
// goes to the strategy call and the copy around it says so.
//
// No state, so these are server components and the page is complete without
// JavaScript. The calculator is components/PricingCalculator.js.

import { BOOK_URL, buyLink } from '../lib/checkout';

// What every plan includes, word for word on all three cards.
const SHARED = [
  'A custom thumbnail for every clip',
  'Captions, hashtags and calls to action for every clip',
  'Every clip posted for you on every platform',
  'A dedicated project manager',
];

const STRATEGY = 'A strategy document before the first clip';

const PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Show',
    episodes: '1 episode a month',
    price: '$597',
    who: 'For shows that release one episode a month.',
    clips: '5 clips a month from your episode',
    cadence: 'A monthly call and a monthly report',
    commit: '5 clips a month, the posting schedule and a monthly report.',
    buy: 'monthly',
  },
  {
    id: 'biweekly',
    name: 'Biweekly Show',
    episodes: '2 episodes a month',
    price: '$997',
    who: 'For shows that release an episode every two weeks.',
    clips: '10 clips a month, 5 from each episode',
    cadence: 'A monthly call and a monthly report',
    commit: '10 clips a month, the posting schedule and a monthly report.',
    buy: 'biweekly',
    featured: true,
  },
  {
    id: 'weekly',
    name: 'Weekly Show',
    episodes: '4 episodes a month',
    price: '$1,597',
    who: 'For shows that release an episode every week.',
    clips: '20 clips a month, 5 from each episode',
    cadence: 'A weekly call and a weekly report',
    commit: '20 clips a month, the posting schedule and a weekly report.',
    buy: null,
  },
];

// One row per deliverable. A string is shown as text, true as a tick.
const ROWS = [
  { label: 'Episodes a month', monthly: '1', biweekly: '2', weekly: '4' },
  { label: 'Clips a month', monthly: '5', biweekly: '10', weekly: '20' },
  { label: 'A custom thumbnail for every clip', monthly: true, biweekly: true, weekly: true },
  { label: 'Captions, hashtags and calls to action', monthly: true, biweekly: true, weekly: true },
  { label: 'Posting on every platform', monthly: true, biweekly: true, weekly: true },
  { label: 'A dedicated project manager', monthly: true, biweekly: true, weekly: true },
  { label: 'A strategy call', monthly: 'Monthly', biweekly: 'Monthly', weekly: 'Weekly' },
  { label: 'Reporting', monthly: 'Monthly', biweekly: 'Monthly', weekly: 'Weekly' },
  { label: 'A strategy document before the first clip', monthly: true, biweekly: true, weekly: true },
  { label: 'How you start', monthly: 'Buy online', biweekly: 'Buy online', weekly: 'A 30-minute call' },
];

const ADDONS = [
  {
    name: 'Extra Clips',
    icon: 'fa-clapperboard',
    tone: 'pp-tone-a',
    price: '$60',
    unit: 'each',
    note: 'Added to any plan, every month.',
  },
  {
    name: 'Full-Episode Edit',
    icon: 'fa-film',
    tone: 'pp-tone-b',
    price: '$150',
    unit: 'per episode',
    note: 'We edit your whole long-form episode.',
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

function Yes({ children }) {
  return (
    <li className="pp-yes">
      <span className="pp-ic" aria-hidden="true">&#10003;</span>
      <span>{children}</span>
    </li>
  );
}

// The card footer. Monthly and Biweekly: the checkout button (or, while the
// checkout link is not set yet, a call button that says so). Weekly: the call.
function CardActions({ plan }) {
  if (!plan.buy) {
    return (
      <div className="pp-actions">
        <a href={BOOK_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Book a call to start</a>
        <p className="pp-howbuy">Weekly Show starts with a 30-minute call, where we agree your posting schedule. There is no online checkout for this plan.</p>
      </div>
    );
  }
  const link = buyLink(plan.buy);
  if (link.checkout) {
    return (
      <div className="pp-actions">
        <a href={link.href} className={plan.featured ? 'primary-cta pp-cta' : 'primary-cta pp-cta pp-cta-quiet'} target="_blank" rel="noopener">
          Buy {plan.name}, {plan.price} a month
        </a>
        <p className="pp-howbuy">Pay online, no call needed. Right after you pay, you get the next steps on screen.</p>
        <a href={BOOK_URL} className="pp-pay" target="_blank" rel="noopener">Questions first? Book a call</a>
      </div>
    );
  }
  return (
    <div className="pp-actions">
      <a href={BOOK_URL} className={plan.featured ? 'primary-cta pp-cta' : 'primary-cta pp-cta pp-cta-quiet'} target="_blank" rel="noopener">
        Book a call to start {plan.name}
      </a>
      <p className="pp-howbuy">Online checkout for {plan.name} opens soon. Until then, start with a 30-minute call.</p>
    </div>
  );
}

export function PlanCards() {
  return (
    <>
      <div className="pp-trio">
        {PLANS.map((plan) => (
          <div className={plan.featured ? 'pp-col pp-col-dfy' : 'pp-col'} key={plan.id}>
            <article className={plan.featured ? 'pp-card pp-card-dfy' : 'pp-card'} aria-labelledby={`pp-${plan.id}-name`}>
              {plan.featured ? <span className="pp-tag">Most popular</span> : null}
              <div>
                <h2 className="pp-name" id={`pp-${plan.id}-name`}>{plan.name}</h2>
                <p className="pp-sub">{plan.episodes}</p>
              </div>
              <p className="pp-price">
                <b>{plan.price}</b>
                <span>/month</span>
              </p>
              <p className="pp-who">{plan.who}</p>
              <ul className="pp-feat">
                <Yes>{plan.clips}</Yes>
                {SHARED.map((f) => (
                  <Yes key={f}>{f}</Yes>
                ))}
                <Yes>{plan.cadence}</Yes>
                <Yes>{STRATEGY}</Yes>
              </ul>
              <CardActions plan={plan} />
            </article>
            <p className="pp-commit"><strong>What we commit to:</strong> {plan.commit}</p>
          </div>
        ))}
      </div>

      <p className="pp-terms">
        <span>Month to month, billed monthly</span>
        <span>Pause up to 60 days</span>
        <span>You own every clip</span>
      </p>

      <EpisodeRules />
      <AfterYouPay />
      <CalcPrompt />
    </>
  );
}

// The three episode rules (Samuel, 25 Nov 2026), right under the cards.
export function EpisodeRules() {
  return (
    <section className="pp-rules" aria-labelledby="pp-rules-title">
      <h2 id="pp-rules-title">How episodes and clips work</h2>
      <ul className="pp-rules-list">
        <li>
          <span className="pp-rules-ic" aria-hidden="true"><i className="fas fa-scissors"></i></span>
          <p><strong>Every episode gets 5 clips.</strong> One episode a month is 5 clips, two is 10, four is 20.</p>
        </li>
        <li>
          <span className="pp-rules-ic" aria-hidden="true"><i className="fas fa-box-archive"></i></span>
          <p><strong>No new episode this month?</strong> We cut your clips from your back catalogue, so your feed keeps going.</p>
        </li>
        <li>
          <span className="pp-rules-ic" aria-hidden="true"><i className="fas fa-hand-pointer"></i></span>
          <p><strong>More episodes than your plan covers?</strong> You pick which episode we clip.</p>
        </li>
      </ul>
    </section>
  );
}

// What happens after a direct purchase. A real sequence, so it is numbered.
// Every timing here is approved copy: "a strategy document before the first
// clip" and "first clips within 3 to 5 business days after onboarding".
export function AfterYouPay() {
  return (
    <section className="pp-next" aria-labelledby="pp-next-title">
      <h2 id="pp-next-title">What happens after you pay</h2>
      <ol className="pp-next-list">
        <li><strong>You fill in your onboarding form.</strong> It tells us about your show, your audience and your brand.</li>
        <li><strong>You share your episodes.</strong> We set up your project board, where you upload files and talk to your project manager.</li>
        <li><strong>You get your strategy document.</strong> It arrives before the first clip, so every clip has a plan behind it.</li>
        <li><strong>Your first clips arrive.</strong> Within 3 to 5 business days after onboarding, then on the schedule we agree.</li>
      </ol>
    </section>
  );
}

// The prompt under the cards that sends anyone who did not find a fit to the
// calculator.
export function CalcPrompt() {
  return (
    <a href="#build" className="pp-calcpush">
      <span className="pp-calcpush-ic" aria-hidden="true"><i className="fas fa-sliders"></i></span>
      <span className="pp-calcpush-text">
        <strong>Release 3, 5 or more episodes a month?</strong>
        <span>Build your own plan: pick your episodes, add extra clips or full-episode edits. Your price shows as you go.</span>
      </span>
      <span className="pp-calcpush-btn">Open the pricing calculator <i className="fas fa-arrow-down" aria-hidden="true"></i></span>
    </a>
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

export function CompareTable() {
  return (
    <section className="pp-compare" aria-labelledby="pp-compare-title">
      <p className="pp-eyebrow">Side by side</p>
      <h2 id="pp-compare-title">Everything in each plan</h2>
      <div className="pp-tablebox" role="region" aria-labelledby="pp-compare-title" tabIndex={0}>
        <table className="pp-table">
          <thead>
            <tr>
              <th scope="col">What you get</th>
              <th scope="col">Monthly Show</th>
              <th scope="col" className="pp-us">Biweekly Show</th>
              <th scope="col">Weekly Show</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <Cell value={row.monthly} />
                <Cell value={row.biweekly} us />
                <Cell value={row.weekly} />
              </tr>
            ))}
            <tr className="pp-tot">
              <th scope="row">Monthly price</th>
              <td>$597</td>
              <td className="pp-us">$997</td>
              <td>$1,597</td>
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
      <p className="pp-lead">Add-ons work with any plan. Add them on your call, or tell your project manager.</p>
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
