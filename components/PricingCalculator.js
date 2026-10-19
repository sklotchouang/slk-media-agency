'use client';

import { useState } from 'react';

// "Build your plan" on /pricing. Ticking any "handle it for me" box makes the
// plan Done For You; with none ticked it is Done With You. A Done For You plan
// that also asks for long-form edits of 4 or more episodes becomes Done For You
// Plus: the first 4 edits come inside the package price (the package discount),
// and only edits above 4 are charged at the $150 add-on rate. Done With You
// always pays the add-on rate. The server renders the defaults (20 clips,
// nothing ticked, 4 episodes), so the page is complete without JavaScript.

// Prices approved 16 Oct 2026 by Samuel; minimum raised to 20 clips on 18 Oct
// 2026 (no plan below $997 a month, $597 retired). Done For You Plus added 19
// Oct 2026 by Samuel at $1,897 with 4 long-form edits. Change nothing here without
// his yes, and re-run the reference values in OVERVIEW.md section 7.1 after any change.
const PRICE = {
  minClips: 20,
  maxClips: 40,
  dwyBase: 997, // Done With You at 20 clips
  dwyPerClip: 50, // each clip above 20 on Done With You
  dfyBase: 1597, // Done For You at 20 clips
  dfyPerClip: 75, // each clip above 20 on Done For You
  plusBase: 1897, // Done For You Plus at 20 clips, 4 long-form edits included
  plusEdits: 4, // long-form edits included in Done For You Plus
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

// Extra clips on Done For You Plus cost the same as on Done For You.
function plusPrice(clips) {
  return PRICE.plusBase + (clips - PRICE.minClips) * PRICE.dfyPerClip;
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
  const isPlus = isDfy && longForm && episodes >= PRICE.plusEdits;
  let planName = 'Done With You';
  let planPrice = dwyPrice(clips);
  if (isPlus) {
    planName = 'Done For You Plus';
    planPrice = plusPrice(clips);
  } else if (isDfy) {
    planName = 'Done For You';
    planPrice = dfyPrice(clips);
  }

  // Long-form edits charged at the add-on rate: all of them, except the 4
  // that Done For You Plus already includes.
  const paidEdits = isPlus ? episodes - PRICE.plusEdits : episodes;

  const addons = [];
  if (paidEdits > 0 && longForm) {
    addons.push({
      label: isPlus
        ? `${paidEdits} extra long-form ${plural(paidEdits, 'edit', 'edits')}`
        : `${paidEdits} long-form ${plural(paidEdits, 'edit', 'edits')}`,
      amount: paidEdits * PRICE.longForm,
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

  let why = 'We make the clips, you post them.';
  if (isPlus) {
    why = `You asked us to handle ${firstTicked.why} and to edit ${episodes} full episodes, so this is Done For You Plus. The first ${PRICE.plusEdits} episode edits are included in the package.`;
  } else if (isDfy) {
    why = `You asked us to handle ${firstTicked.why}, so this is Done For You.`;
  }

  // Done For You with 1 to 3 paid episode edits: point to Done For You Plus,
  // which includes 4 edits for a set price.
  const plusHint = isDfy && !isPlus && longForm && episodes > 0;

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
            <span>{isPlus ? `${clips} clips and ${PRICE.plusEdits} long-form edits` : `${clips} clips`}</span>
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
        {plusHint ? (
          <p className="pp-hint" id="pp-calc-plus-hint">
            Done For You Plus includes {PRICE.plusEdits} long-form episode edits a month for {money(plusPrice(clips))}/month at this volume.
          </p>
        ) : null}
        <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
      </div>
    </div>
  );
}
