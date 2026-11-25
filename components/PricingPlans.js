// The three per-episode plans on /pricing: the "Every plan includes" band with
// the Brian Burton sample clip, the three cards, the episode rules and the
// calculator prompt.
//
// Per-episode pricing, approved by Samuel on 25 November 2026 for NEW
// prospects (existing clients keep their plans): Monthly Show ($597, 1 episode,
// 5 clips), Biweekly Show ($997, 2 episodes, 10 clips, most popular) and Weekly
// Show ($1,597, 4 episodes, 20 clips). Monthly and Biweekly are bought directly
// by checkout; Weekly is sold on a call. Done For You Starter, Done For You and
// Done For You Plus are retired (see git history and docs/pricing-promotion-spec.md).
//
// Layout rebuilt 25 November 2026 (research report
// slk-research-crew/reports/2026-11-25-pricing-page-conversion-lessons.md):
// what every plan shares is said once, in the band above the cards, and each
// card shows only what differs. The price per episode is a smaller second line
// under the monthly price (Samuel, 25 Nov 2026). It is written out as text on
// purpose, copied from the spec, never computed. No guarantee of any kind
// (Samuel, 25 Nov 2026). The old comparison table and the add-ons block were
// removed: the cards carry the differences and the calculator carries the
// add-on prices.
//
// Checkout links live in lib/checkout.js. While a link is empty, the buy button
// goes to the strategy call and the copy around it says so.
//
// No state, so these are server components and the page is complete without
// JavaScript. The calculator is components/PricingCalculator.js.

import { BOOK_URL, buyLink } from '../lib/checkout';
import { SOUND_BUTTON } from './soundButton';

// What every plan includes (spec: "Every plan is full service").
const SHARED = [
  'A custom thumbnail for every clip',
  'Captions, hashtags and calls to action for every clip',
  'Every clip posted for you on every platform',
  'A dedicated project manager',
  'A strategy document before the first clip',
];

const PLANS = [
  {
    id: 'monthly',
    name: 'Monthly Show',
    price: '$597',
    perEpisode: '$597',
    who: 'For shows that release one episode a month.',
    episodes: '1 episode a month',
    clips: '5 clips a month',
    cadence: 'A monthly call and a monthly report',
    buy: 'monthly',
  },
  {
    id: 'biweekly',
    name: 'Biweekly Show',
    price: '$997',
    perEpisode: '$498.50',
    who: 'For shows that release an episode every two weeks.',
    episodes: '2 episodes a month',
    clips: '10 clips a month',
    cadence: 'A monthly call and a monthly report',
    buy: 'biweekly',
    featured: true,
  },
  {
    id: 'weekly',
    name: 'Weekly Show',
    price: '$1,597',
    perEpisode: '$399.25',
    who: 'For shows that release an episode every week.',
    episodes: '4 episodes a month',
    clips: '20 clips a month',
    cadence: 'A weekly call and a weekly report',
    buy: null,
  },
];

// The reassurance lines beside every button. Facts only, no guarantee. The
// 3 to 5 business days is the approved turnaround used across the site.
function Assure() {
  return (
    <ul className="pp-assure">
      <li>Month to month. Pause up to 60 days.</li>
      <li>You own every clip.</li>
      <li>First clips 3 to 5 business days after onboarding.</li>
    </ul>
  );
}

// The card footer. Monthly and Biweekly: the checkout button (or, while the
// checkout link is not set yet, a call button that says so). Weekly: the call.
function CardActions({ plan }) {
  if (!plan.buy) {
    return (
      <div className="pp-actions">
        <a href={BOOK_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Book a call to start</a>
        <p className="pp-howbuy">Weekly Show starts with a 30-minute call, where we agree your posting schedule. No online checkout for this plan.</p>
        <Assure />
      </div>
    );
  }
  const link = buyLink(plan.buy);
  if (link.checkout) {
    return (
      <div className="pp-actions">
        <a href={link.href} className={plan.featured ? 'primary-cta pp-cta' : 'primary-cta pp-cta pp-cta-quiet'} target="_blank" rel="noopener">
          Buy {plan.name}
        </a>
        <p className="pp-howbuy">Pay online, no call needed.</p>
        <Assure />
        <a href={BOOK_URL} className="pp-pay" target="_blank" rel="noopener">Questions first? Book a call</a>
      </div>
    );
  }
  return (
    <div className="pp-actions">
      <a href={BOOK_URL} className={plan.featured ? 'primary-cta pp-cta' : 'primary-cta pp-cta pp-cta-quiet'} target="_blank" rel="noopener">
        Book a call to start {plan.name}
      </a>
      <p className="pp-howbuy">Online checkout for {plan.name} is not live yet. For now, start with a 30-minute call.</p>
      <Assure />
    </div>
  );
}

// The band above the cards: the sample clip (Samuel chose the Brian Burton
// clip, Clip-6, on 25 Nov 2026) and the list every plan shares. The video
// markup matches the home page clips (muted, plays while on screen, sound
// button). It is raw HTML because React does not render the muted attribute
// on the server, and muted is what lets the clip autoplay.
function IncludesBand() {
  return (
    <div className="pp-band">
      <figure className="pp-sample">
        <div
          className="pp-sample-video"
          data-sound-card
          dangerouslySetInnerHTML={{
            __html: `<video muted loop playsinline preload="none" poster="/portfolio/thumbnails/Clip-6.jpg" data-autoplay aria-label="Sample clip: Brian Burton, Waste No Day Podcast"><source src="/portfolio/Clip-6.mp4" type="video/mp4"></video>${SOUND_BUTTON}`,
          }}
        />
        <figcaption>Real client work: a clip we made for Brian Burton, Waste No Day Podcast.</figcaption>
      </figure>
      <div className="pp-includes">
        <p className="pp-eyebrow">Every plan includes</p>
        <h2 id="pp-plans-title">You record. We make the clips and post them.</h2>
        <ul className="pp-includes-list">
          {SHARED.map((f) => (
            <li key={f}>
              <span className="pp-ic" aria-hidden="true">&#10003;</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PlanCards() {
  return (
    <>
      <IncludesBand />

      <div className="pp-trio">
        {PLANS.map((plan) => (
          <article className={plan.featured ? 'pp-card pp-card-dfy' : 'pp-card'} key={plan.id} aria-labelledby={`pp-${plan.id}-name`}>
            {plan.featured ? <span className="pp-tag">Most popular</span> : null}
            <div>
              <h3 className="pp-name" id={`pp-${plan.id}-name`}>{plan.name}</h3>
              <p className="pp-who">{plan.who}</p>
            </div>
            <div>
              <p className="pp-price">
                <b>{plan.price}</b>
                <span>a month</span>
              </p>
              <p className="pp-per">{plan.perEpisode} per episode</p>
            </div>
            <ul className="pp-diff">
              <li><strong>{plan.episodes}</strong></li>
              <li><strong>{plan.clips}</strong></li>
              <li>{plan.cadence}</li>
            </ul>
            <CardActions plan={plan} />
          </article>
        ))}
      </div>

      <EpisodeRules />
      <CalcPrompt />
    </>
  );
}

// The three episode rules (Samuel, 25 Nov 2026), as a short note under the cards.
export function EpisodeRules() {
  return (
    <div className="pp-rulenote">
      <p className="pp-rulenote-title">How episodes work</p>
      <ul>
        <li><strong>Every episode gets 5 clips.</strong></li>
        <li><strong>No new episode this month?</strong> We cut your clips from your back catalogue.</li>
        <li><strong>More episodes than your plan covers?</strong> You pick which episode we clip.</li>
      </ul>
    </div>
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
