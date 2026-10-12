'use client';

import { useState } from 'react';

// The 12 / 20 switch on /pricing and everything it drives: the two plan cards,
// the chip between them, and the "what the difference replaces" table.
// Prices and plan names approved by Samuel on 12 October 2026. The server
// renders the 12-clip view, so the page is complete without JavaScript.

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

const PLANS = {
  12: {
    clips: 12,
    coName: 'Clips Only 12',
    coPrice: '$597',
    dfyName: 'Content Engine Lite',
    dfyPrice: '$997',
    gap: '$400',
    thumbs: '$360/mo',
    hireTotal: '$1,060/mo',
  },
  20: {
    clips: 20,
    coName: 'Clips Only 20',
    coPrice: '$997',
    dfyName: 'Content Engine',
    dfyPrice: '$1,597',
    gap: '$600',
    thumbs: '$600/mo',
    hireTotal: '$1,300/mo',
  },
};

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

export default function PricingPlans() {
  const [volume, setVolume] = useState(12);
  const plan = PLANS[volume];

  return (
    <>
      <div className="pp-switch" role="group" aria-label="Clips per month">
        <button
          type="button"
          aria-pressed={volume === 12}
          onClick={() => setVolume(12)}
        >
          12 clips a month
        </button>
        <button
          type="button"
          aria-pressed={volume === 20}
          onClick={() => setVolume(20)}
        >
          20 clips a month
        </button>
      </div>

      <div className="pp-pair">
        <article className="pp-card">
          <span className="pp-tag">You do the rest</span>
          <div>
            <h2 className="pp-name">{plan.coName}</h2>
            <p className="pp-who">The clips, ready for you to post.</p>
          </div>
          <p className="pp-price">
            <b>{plan.coPrice}</b>
            <span>/month</span>
          </p>
          <ul className="pp-feat">
            <Yes>{plan.clips} clips a month, cut from your episodes</Yes>
            <No>No thumbnails</No>
            <No>No captions, hashtags or posting</No>
            <No>No project manager or weekly calls</No>
            <No>No strategy or reporting</No>
          </ul>
          <a href={BOOK_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Book Your Strategy Call</a>
        </article>

        <div className="pp-gap">
          <span className="pp-gap-line" aria-hidden="true"></span>
          <div className="pp-chip">
            <b>+{plan.gap}</b>
            <small>a month, and we do all of it</small>
          </div>
          <span className="pp-gap-line" aria-hidden="true"></span>
        </div>

        <article className="pp-card pp-card-dfy">
          <span className="pp-tag">We do the rest</span>
          <div>
            <h2 className="pp-name">{plan.dfyName}</h2>
            <p className="pp-who">You record once. We handle everything after.</p>
          </div>
          <p className="pp-price">
            <b>{plan.dfyPrice}</b>
            <span>/month</span>
          </p>
          <ul className="pp-feat">
            <Yes>{plan.clips} clips a month, cut from your episodes</Yes>
            <Yes>A custom thumbnail for every clip</Yes>
            <Yes>Captions, hashtags and CTAs written, then posted on every platform</Yes>
            <Yes>A dedicated project manager and a weekly call</Yes>
            <Yes>Weekly reporting</Yes>
            <Yes>A strategy document when you start</Yes>
          </ul>
          <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book Your Strategy Call</a>
        </article>
      </div>

      <section className="pp-replaces" aria-labelledby="pp-replaces-title">
        <div className="container">
          <p className="pp-eyebrow">What the difference covers</p>
          <h2 id="pp-replaces-title">What {plan.gap} a month replaces</h2>
          <p className="pp-lead">
            This is the work that still has to happen after the clips are cut. Here is what it costs to hire it out, at the low end of what people charge.
          </p>
          <div className="pp-tablebox">
            <table className="pp-table">
              <thead>
                <tr>
                  <th scope="col">The work</th>
                  <th scope="col">Hire it out</th>
                  <th scope="col" className="pp-us">{plan.dfyName}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Captions, hashtags, CTAs, posting and reporting<small>A freelance social media manager</small></td>
                  <td>from $500/mo</td>
                  <td className="pp-us">Included</td>
                </tr>
                <tr>
                  <td>A custom thumbnail for every clip<small>{plan.clips} thumbnails at $30 each</small></td>
                  <td>{plan.thumbs}</td>
                  <td className="pp-us">Included</td>
                </tr>
                <tr>
                  <td>A dedicated project manager<small>One 1 hour call a week, 4 hours a month at $50 an hour</small></td>
                  <td>$200/mo</td>
                  <td className="pp-us">Included</td>
                </tr>
                <tr>
                  <td>Strategy document and audience research<small>Done once, when you start</small></td>
                  <td>about $350 once</td>
                  <td className="pp-us">Included</td>
                </tr>
                <tr className="pp-tot">
                  <td>Each month</td>
                  <td>{plan.hireTotal}</td>
                  <td className="pp-us">+{plan.gap}/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="pp-src">
            Low-end market rates checked 12 October 2026: freelance social media managers $300 to $1,500 a month (Ad Snipper, SocialBu guides); custom thumbnails $30 to $50 mid-tier, $100 to $300 premium (Ad Snipper, Vidpros via ManyPixels); freelance project managers $50 to $120 an hour (Jobbers 2026 rate guide, Upwork rate guide), counted at our real 4 hours a month; a podcast strategy package listed at $350 (Payhip).
          </p>
        </div>
      </section>
    </>
  );
}
