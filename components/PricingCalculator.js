'use client';

import { useState } from 'react';

// "Build your plan" on /pricing. Ticking any "handle it for me" box makes the
// plan Done For You; with none ticked it is Done With You. The server renders
// the defaults (20 clips, nothing ticked, 4 episodes), so the page is complete
// without JavaScript.

// Prices approved 16 Oct 2026 by Samuel. Change nothing here without his yes,
// and re-run the reference values in OVERVIEW.md section 7.1 after any change.
const PRICE = {
  minClips: 12,
  maxClips: 40,
  dwyBase: 597, // Done With You at 12 clips
  dwyPerClip: 50, // each clip above 12 on Done With You
  dfyBase: 997, // Done For You at 12 clips
  dfyPerClip: 75, // each clip above 12 on Done For You
  longForm: 150, // per episode
  showNotes: 50, // per episode
  seoShowNotes: 100, // per episode
};

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

// The four things that turn the plan into Done For You. `why` is the wording
// used in "You asked us to handle ..., so this is Done For You."
const HANDLE = [
  { id: 'thumbs', label: 'A custom thumbnail for every clip', why: 'thumbnails' },
  { id: 'captions', label: 'Captions, hashtags and calls to action written for me', why: 'captions, hashtags and calls to action' },
  { id: 'posting', label: 'Posting on every platform for me', why: 'posting' },
  { id: 'pm', label: 'A project manager, a weekly call and weekly reporting', why: 'a project manager, weekly calls and reporting' },
];

function money(n) {
  return '$' + n.toLocaleString('en-US');
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function plural(n, one, many) {
  return n === 1 ? one : many;
}

function dwyPrice(clips) {
  return PRICE.dwyBase + (clips - PRICE.minClips) * PRICE.dwyPerClip;
}

function dfyPrice(clips) {
  return PRICE.dfyBase + (clips - PRICE.minClips) * PRICE.dfyPerClip;
}

function Stepper({ id, label, value, min, max, onChange, unit }) {
  return (
    <div className="pp-field">
      <label htmlFor={id}>{label}</label>
      <div className="pp-slider">
        <button
          type="button"
          className="pp-step"
          aria-label={`Fewer ${unit}`}
          aria-controls={id}
          disabled={value <= min}
          onClick={() => onChange(clamp(value - 1, min, max))}
        >
          <i className="fas fa-minus" aria-hidden="true"></i>
        </button>
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          step="1"
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value), min, max))}
        />
        <button
          type="button"
          className="pp-step"
          aria-label={`More ${unit}`}
          aria-controls={id}
          disabled={value >= max}
          onClick={() => onChange(clamp(value + 1, min, max))}
        >
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
        <output className="pp-count" htmlFor={id}>{value}</output>
      </div>
    </div>
  );
}

export default function PricingCalculator() {
  const [clips, setClips] = useState(20);
  const [handle, setHandle] = useState({ thumbs: false, captions: false, posting: false, pm: false });
  const [episodes, setEpisodes] = useState(4);
  const [longForm, setLongForm] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [seoNotes, setSeoNotes] = useState(false);

  const firstTicked = HANDLE.find((h) => handle[h.id]);
  const isDfy = Boolean(firstTicked);
  const planName = isDfy ? 'Done For You' : 'Done With You';
  const planPrice = isDfy ? dfyPrice(clips) : dwyPrice(clips);

  const addons = [];
  if (episodes > 0 && longForm) {
    addons.push({
      label: `${episodes} long-form ${plural(episodes, 'edit', 'edits')}`,
      amount: episodes * PRICE.longForm,
    });
  }
  if (episodes > 0 && showNotes) {
    addons.push({
      label: `Show notes for ${episodes} ${plural(episodes, 'episode', 'episodes')}`,
      amount: episodes * PRICE.showNotes,
    });
  }
  if (episodes > 0 && seoNotes) {
    addons.push({
      label: `SEO show notes for ${episodes} ${plural(episodes, 'episode', 'episodes')}`,
      amount: episodes * PRICE.seoShowNotes,
    });
  }
  const total = planPrice + addons.reduce((sum, a) => sum + a.amount, 0);

  const why = isDfy
    ? `You asked us to handle ${firstTicked.why}, so this is Done For You.`
    : 'We make the clips, you post them.';

  return (
    <div className="pp-calc">
      <div className="pp-panel">
        <Stepper
          id="pp-clips"
          label="How many clips a month?"
          value={clips}
          min={PRICE.minClips}
          max={PRICE.maxClips}
          onChange={setClips}
          unit="clips"
        />

        <fieldset className="pp-group">
          <legend>What do you want us to handle?</legend>
          {HANDLE.map((h) => (
            <label className="pp-opt" htmlFor={`pp-h-${h.id}`} key={h.id}>
              <input
                type="checkbox"
                id={`pp-h-${h.id}`}
                checked={handle[h.id]}
                onChange={(e) => setHandle({ ...handle, [h.id]: e.target.checked })}
              />
              <span>{h.label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="pp-group">
          <legend className="pp-sr">Episode add-ons</legend>
          <Stepper
            id="pp-episodes"
            label="Episodes a month"
            value={episodes}
            min={0}
            max={8}
            onChange={setEpisodes}
            unit="episodes"
          />
          <label className="pp-opt" htmlFor="pp-a-long">
            <input type="checkbox" id="pp-a-long" checked={longForm} onChange={(e) => setLongForm(e.target.checked)} />
            <span>Long-form episode edit ($150 per episode)</span>
          </label>
          <label className="pp-opt" htmlFor="pp-a-notes">
            <input
              type="checkbox"
              id="pp-a-notes"
              checked={showNotes}
              onChange={(e) => {
                setShowNotes(e.target.checked);
                if (e.target.checked) setSeoNotes(false);
              }}
            />
            <span>Show notes ($50 per episode)</span>
          </label>
          <label className="pp-opt" htmlFor="pp-a-seo">
            <input
              type="checkbox"
              id="pp-a-seo"
              checked={seoNotes}
              onChange={(e) => {
                setSeoNotes(e.target.checked);
                if (e.target.checked) setShowNotes(false);
              }}
            />
            <span>SEO show notes ($100 per episode)</span>
          </label>
        </fieldset>
      </div>

      <div className="pp-result" aria-live="polite">
        <p className="pp-eyebrow">Your plan</p>
        <p className="pp-plan" id="pp-calc-plan">{planName}</p>
        <p id="pp-calc-why">{why}</p>
        <p className="pp-big" id="pp-calc-price">
          {money(total)}
          <span> /month</span>
        </p>
        <ul className="pp-breakdown" id="pp-calc-breakdown">
          <li>
            <span>{clips} clips</span>
            <span>{money(planPrice)}</span>
          </li>
          {addons.map((a) => (
            <li key={a.label}>
              <span>{a.label}</span>
              <span>{money(a.amount)}</span>
            </li>
          ))}
          <li className="pp-breakdown-tot">
            <span>Total</span>
            <span>{money(total)}</span>
          </li>
        </ul>
        {isDfy ? null : (
          <p className="pp-hint" id="pp-calc-hint">
            Want us to post them too? Done For You at this volume is {money(dfyPrice(clips))}/month.
          </p>
        )}
        <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
      </div>
    </div>
  );
}
