'use client';

import { useState } from 'react';

// "Build your own plan" on /pricing. Samuel approved these list prices on
// 12 October 2026. No project manager in here: he comes only with the fixed
// Content Engine plans. The server renders the 16-clip default, so the page
// is complete without JavaScript.
const PRICE = {
  clip: 50, // one short clip
  episode: 150, // one full episode edited
  thumb: 10, // per clip AND per episode when ticked
  post: 25, // captions, hashtags, CTAs and posting, per clip
};

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

// Round to the nearest $10, then take $3 off ($1,357 style). $0 stays $0.
function displayPrice(total) {
  if (total <= 0) return 0;
  return Math.max(7, Math.round(total / 10) * 10 - 3);
}

function money(n) {
  return '$' + n.toLocaleString('en-US');
}

function planHint(clips, episodes, thumbs, posting, price) {
  if (episodes !== 0) return null;
  const both = thumbs && posting;
  const neither = !thumbs && !posting;
  if (both && clips <= 12 && price > 997) {
    return { plan: 'Content Engine Lite', rest: ' gives you 12 clips with all of this, plus a dedicated project manager, for $997 a month.' };
  }
  if (both && clips > 12 && clips <= 20 && price > 1597) {
    return { plan: 'Content Engine', rest: ' gives you 20 clips with all of this, plus a dedicated project manager, for $1,597 a month.' };
  }
  if (neither && clips <= 12 && price > 597) {
    return { plan: 'Clips Only 12', rest: ' gives you 12 clips for $597 a month.' };
  }
  if (neither && clips > 12 && clips <= 20 && price > 997) {
    return { plan: 'Clips Only 20', rest: ' gives you 20 clips for $997 a month.' };
  }
  return null;
}

export default function PricingCalculator() {
  const [clips, setClips] = useState(16);
  const [episodes, setEpisodes] = useState(0);
  const [thumbs, setThumbs] = useState(true);
  const [posting, setPosting] = useState(true);

  const total =
    clips * PRICE.clip +
    episodes * PRICE.episode +
    (thumbs ? (clips + episodes) * PRICE.thumb : 0) +
    (posting ? clips * PRICE.post : 0);
  const price = displayPrice(total);

  const parts = [`${clips} clips`];
  if (episodes) parts.push(`${episodes} full ${episodes === 1 ? 'episode' : 'episodes'}`);
  if (thumbs) parts.push('thumbnails');
  if (posting) parts.push('captions and posting');
  const summary = parts.join(', ') + '.';

  const hint = planHint(clips, episodes, thumbs, posting, price);

  return (
    <div className="pp-calc">
      <div className="pp-panel">
        <div className="pp-field">
          <label htmlFor="pp-clips">Short clips per month</label>
          <div className="pp-slider">
            <input
              type="range"
              id="pp-clips"
              min="0"
              max="40"
              step="1"
              value={clips}
              onChange={(e) => setClips(Number(e.target.value))}
            />
            <output className="pp-count" htmlFor="pp-clips">{clips}</output>
          </div>
        </div>
        <div className="pp-field">
          <label htmlFor="pp-episodes">Full episodes edited per month</label>
          <div className="pp-slider">
            <input
              type="range"
              id="pp-episodes"
              min="0"
              max="8"
              step="1"
              value={episodes}
              onChange={(e) => setEpisodes(Number(e.target.value))}
            />
            <output className="pp-count" htmlFor="pp-episodes">{episodes}</output>
          </div>
        </div>
        <div>
          <label className="pp-opt" htmlFor="pp-thumbs">
            <input
              type="checkbox"
              id="pp-thumbs"
              checked={thumbs}
              onChange={(e) => setThumbs(e.target.checked)}
            />
            <span>A custom thumbnail for every clip and episode</span>
          </label>
          <label className="pp-opt" htmlFor="pp-posting">
            <input
              type="checkbox"
              id="pp-posting"
              checked={posting}
              onChange={(e) => setPosting(e.target.checked)}
            />
            <span>
              Captions, hashtags and CTAs, posted for you
              <small>Includes weekly reporting and a strategy document when you start</small>
            </span>
          </label>
        </div>
      </div>

      <div className="pp-result" aria-live="polite">
        <p className="pp-eyebrow">Your plan</p>
        <p className="pp-big" id="pp-calc-price">
          {money(price)}
          <span> /month</span>
        </p>
        <p id="pp-calc-summary">{summary}</p>
        {hint ? (
          <p className="pp-hint" id="pp-calc-hint">
            <strong>{hint.plan}</strong>
            {hint.rest}
          </p>
        ) : null}
        <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a call to start this plan</a>
      </div>
    </div>
  );
}
