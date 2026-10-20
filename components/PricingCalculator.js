'use client';

import { useState } from 'react';

// "Build your plan" on /pricing. The visitor picks Done With You or Done For
// You directly (20 Oct 2026, Samuel: no per-item prices, so the page does not
// read like a shop; the old four "handle it for me" boxes are gone). Every
// episode counted is a long-form edit at $150 (20 Oct 2026, Samuel: choosing
// the number of episodes adds the per-episode price by itself; the separate
// "Long-form episode edit" checkbox is gone). A Done For You plan with 4 or more
// episodes becomes Done For You Plus: the first 4 edits come inside the package
// price (the package discount), and only edits above 4 are charged at the $150
// rate. Done With You always pays the $150 rate. The server renders the defaults (20 clips,
// Done With You, 0 episodes), so the page is complete without JavaScript.
// Clips start at 6 and episodes at 0, with no upper limit: the slider covers
// the usual range and the number box next to it takes any larger amount. The
// show notes boxes only show once episodes is 1 or more.

// Prices approved 16 Oct 2026 by Samuel; minimum raised to 20 clips on 18 Oct
// 2026 (no plan below $997 a month, $597 retired). Done For You Plus added 19
// Oct 2026 by Samuel at $1,897 with 4 long-form edits. Change nothing here without
// his yes, and re-run the reference values in OVERVIEW.md section 7.1 after any change.
// 20 Oct 2026, Samuel: clips go down to 6 and episodes down to 1, nothing capped
// at the top; below 20 clips each clip takes $50 / $75 off the 20-clip price.
const PRICE = {
  baseClips: 20, // the clip count every base price below is quoted at
  minClips: 6, // the smallest number of clips we make
  minEpisodes: 0,
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

// The two plans the visitor chooses between.
const PLANS = [
  { id: 'dwy', name: 'Done With You', blurb: 'We make the clips, you post them.' },
  {
    id: 'dfy',
    name: 'Done For You',
    blurb: 'We also make a custom thumbnail for every clip, write the captions, hashtags and calls to action, and post on every platform.',
  },
];

function money(n) {
  return '$' + n.toLocaleString('en-US');
}

// No upper limit; anything not a whole number at or above `min` becomes `min`.
function atLeast(n, min) {
  return Number.isFinite(n) ? Math.max(min, Math.floor(n)) : min;
}

function plural(n, one, many) {
  return n === 1 ? one : many;
}

function dwyPrice(clips) {
  return PRICE.dwyBase + (clips - PRICE.baseClips) * PRICE.dwyPerClip;
}

function dfyPrice(clips) {
  return PRICE.dfyBase + (clips - PRICE.baseClips) * PRICE.dfyPerClip;
}

// Extra clips on Done For You Plus cost the same as on Done For You.
function plusPrice(clips) {
  return PRICE.plusBase + (clips - PRICE.baseClips) * PRICE.dfyPerClip;
}

// The slider covers min to `sliderMax`; the number box takes any amount from
// `min` up, and the slider stretches to reach a larger typed number.
function Stepper({ id, label, value, min, sliderMax, onChange, unit }) {
  const [draft, setDraft] = useState(null);
  const top = Math.max(sliderMax, value);
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
          onClick={() => onChange(atLeast(value - 1, min))}
        >
          <i className="fas fa-minus" aria-hidden="true"></i>
        </button>
        <input
          type="range"
          id={id}
          min={min}
          max={top}
          step="1"
          value={value}
          onChange={(e) => onChange(atLeast(Number(e.target.value), min))}
        />
        <button
          type="button"
          className="pp-step"
          aria-label={`More ${unit}`}
          aria-controls={id}
          onClick={() => onChange(value + 1)}
        >
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
        <input
          type="number"
          className="pp-count"
          aria-label={`Number of ${unit}`}
          inputMode="numeric"
          min={min}
          step="1"
          value={draft ?? value}
          onChange={(e) => {
            setDraft(e.target.value);
            const n = Number(e.target.value);
            if (e.target.value !== '' && Number.isFinite(n) && n >= min) onChange(Math.floor(n));
          }}
          onBlur={() => {
            if (draft !== null) onChange(atLeast(Number(draft), min));
            setDraft(null);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') e.currentTarget.blur();
          }}
        />
      </div>
    </div>
  );
}

export default function PricingCalculator() {
  const [clips, setClips] = useState(20);
  const [plan, setPlan] = useState('dwy');
  const [episodes, setEpisodes] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [seoNotes, setSeoNotes] = useState(false);

  const isDfy = plan === 'dfy';
  const isPlus = isDfy && episodes >= PRICE.plusEdits;
  let planName = 'Done With You';
  let planPrice = dwyPrice(clips);
  if (isPlus) {
    planName = 'Done For You Plus';
    planPrice = plusPrice(clips);
  } else if (isDfy) {
    planName = 'Done For You';
    planPrice = dfyPrice(clips);
  }

  // Every episode is a long-form edit. Edits charged at the $150 rate: all of
  // them, except the 4 that Done For You Plus already includes. The show notes
  // boxes only count while episodes is 1 or more (they are hidden at 0).
  const paidEdits = isPlus ? episodes - PRICE.plusEdits : episodes;

  const addons = [];
  if (paidEdits > 0) {
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
    why = `We handle the clips, thumbnails, captions and posting, and edit ${episodes} full episodes. The first ${PRICE.plusEdits} episode edits are included in the package.`;
  } else if (isDfy) {
    why = 'We make the clips, the thumbnails and the captions, and post them for you.';
  }

  // Done For You with 1 to 3 paid episode edits: point to Done For You Plus,
  // which includes 4 edits for a set price.
  const plusHint = isDfy && !isPlus && episodes > 0;

  return (
    <div className="pp-calc">
      <div className="pp-panel">
        <Stepper
          id="pp-clips"
          label="How many clips a month?"
          value={clips}
          min={PRICE.minClips}
          sliderMax={40}
          onChange={setClips}
          unit="clips"
        />

        <fieldset className="pp-group">
          <legend>Are you looking for Done With You or Done For You?</legend>
          <div className="pp-plans">
            {PLANS.map((p) => (
              <label className={`pp-planopt${plan === p.id ? ' is-on' : ''}`} htmlFor={`pp-p-${p.id}`} key={p.id}>
                <input
                  type="radio"
                  name="pp-plan"
                  id={`pp-p-${p.id}`}
                  value={p.id}
                  checked={plan === p.id}
                  onChange={() => setPlan(p.id)}
                />
                <span className="pp-planopt-name">{p.name}</span>
                <span className="pp-planopt-blurb">{p.blurb}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pp-group">
          <legend className="pp-sr">Episode add-ons</legend>
          <Stepper
            id="pp-episodes"
            label="Long-form episodes to edit each month"
            value={episodes}
            min={PRICE.minEpisodes}
            sliderMax={8}
            onChange={setEpisodes}
            unit="episodes"
          />
          {episodes > 0 ? (
            <>
              <p className="pp-epi-hint">Each episode is a full long-form edit, $150 per episode.</p>
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
            </>
          ) : (
            <p className="pp-epi-hint">Want full episodes edited too? Set how many episodes a month. Each one is a long-form edit at $150.</p>
          )}
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
