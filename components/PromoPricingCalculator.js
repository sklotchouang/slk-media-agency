'use client';

import { useState } from 'react';

// "Build your plan" on /pricing/promotion. A copy of
// components/PricingCalculator.js (same look and behaviour) with the
// promotion prices from Samuel's brief of 21 October 2026. /pricing still
// uses PricingCalculator.js, which this file does not touch.
//
// The visitor picks Done With You or Done For You. Every episode counted is a
// long-form edit at $150. Done For You with 4 or more episodes becomes Done For
// You Plus: the first 4 edits come inside the package price, only edits above 4
// are charged at $150. Clips start at 6 and episodes at 0, with no upper limit.
//
// Promotion prices (Starter rule since 27 October 2026, see
// docs/adr/0001-starter-monthly-service-below-20-clips.md):
// - Below 20 clips, Done For You is sold as Done For You Starter (monthly call
//   and report): $697 at 10 clips, +$30 per clip from 11 to 19 (19 = $967),
//   -$37.50 per clip below 10, rounded to the nearest dollar (6 = $547). Every
//   episode is a $150 edit; Plus is not sold below 20 clips.
// - Done For You (weekly call and report): $997 at 20 clips, +$50 per extra clip.
// - Done For You Plus: $1,597 at 20 clips with 4 long-form edits included,
//   +$50 per extra clip. Only from 20 clips.
// - Done With You: $597 at 20 clips, $25 per clip up or down.
// On Done For You and Plus the result also shows, struck through, what /pricing
// charges for the same choice. Re-run the "Promotion prices" reference values
// in OVERVIEW.md section 7.1 after any change.
const PRICE = {
  baseClips: 20, // the clip count every base price below is quoted at
  minClips: 6, // the smallest number of clips we make
  minEpisodes: 0,
  dwyBase: 597, // Done With You at 20 clips
  dwyPerClip: 25, // each clip above or below 20 on Done With You
  dfyBase: 997, // Done For You at 20 clips
  dfyPerClipUp: 50, // each clip above 20 on Done For You and Plus
  starterBase: 697, // Done For You Starter at 10 clips (monthly call and report)
  starterClips: 10,
  starterPerClipUp: 30, // each clip from 11 to 19 on Starter
  starterPerClipDown: 37.5, // each clip below 10 on Starter
  starterSaving: 300, // Starter's normal price is $300 above the promotion
  plusBase: 1597, // Done For You Plus at 20 clips, 4 long-form edits included
  plusEdits: 4, // long-form edits included in Done For You Plus
  longForm: 150, // per episode
  showNotes: 50, // per episode
  seoShowNotes: 100, // per episode
};

// What /pricing charges today, used only for the struck-through price. These
// mirror the PRICE constant in components/PricingCalculator.js.
const NORMAL = {
  dfyBase: 1597,
  plusBase: 1897,
  dfyPerClip: 75,
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

// Done For You Starter, the only done-for-you plan below 20 clips.
function starterPrice(clips) {
  if (clips >= PRICE.starterClips) return PRICE.starterBase + (clips - PRICE.starterClips) * PRICE.starterPerClipUp;
  return Math.round(PRICE.starterBase - (PRICE.starterClips - clips) * PRICE.starterPerClipDown);
}

// Done For You and Plus start at 20 clips; each clip above 20 adds $50.
function dfyPrice(clips) {
  return PRICE.dfyBase + (Math.max(clips, PRICE.baseClips) - PRICE.baseClips) * PRICE.dfyPerClipUp;
}

function plusPrice(clips) {
  return PRICE.plusBase + (Math.max(clips, PRICE.baseClips) - PRICE.baseClips) * PRICE.dfyPerClipUp;
}

// What a visitor who wants us to post pays at this clip count.
function doneForYouAt(clips) {
  return clips < PRICE.baseClips ? starterPrice(clips) : dfyPrice(clips);
}

// The /pricing prices for the same clip count.
function normalDfyPrice(clips) {
  return NORMAL.dfyBase + (clips - PRICE.baseClips) * NORMAL.dfyPerClip;
}

function normalPlusPrice(clips) {
  return NORMAL.plusBase + (clips - PRICE.baseClips) * NORMAL.dfyPerClip;
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

export default function PromoPricingCalculator() {
  const [clips, setClips] = useState(20);
  const [plan, setPlan] = useState('dwy');
  const [episodes, setEpisodes] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [seoNotes, setSeoNotes] = useState(false);

  const isDfy = plan === 'dfy';
  const isStarter = isDfy && clips < PRICE.baseClips;
  const isPlus = isDfy && !isStarter && episodes >= PRICE.plusEdits;
  let planName = 'Done With You';
  let planPrice = dwyPrice(clips);
  let normalPlanPrice = null;
  if (isPlus) {
    planName = 'Done For You Plus';
    planPrice = plusPrice(clips);
    normalPlanPrice = normalPlusPrice(clips);
  } else if (isStarter) {
    planName = 'Done For You Starter';
    planPrice = starterPrice(clips);
    normalPlanPrice = planPrice + PRICE.starterSaving;
  } else if (isDfy) {
    planName = 'Done For You';
    planPrice = dfyPrice(clips);
    normalPlanPrice = normalDfyPrice(clips);
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
  const addonTotal = addons.reduce((sum, a) => sum + a.amount, 0);
  const total = planPrice + addonTotal;
  // The add-on prices are the same on /pricing, so only the plan price differs.
  // The struck price only shows when it is really higher. Safety net: with the
  // current steps /pricing is always higher, but if a promotion step changes
  // we never show a "normal" price that is lower than the promotion.
  const normalFull = normalPlanPrice === null ? null : normalPlanPrice + addonTotal;
  const normalTotal = normalFull !== null && normalFull > total ? normalFull : null;

  let why = 'We make the clips, you post them.';
  if (isPlus) {
    why = `We handle the clips, thumbnails, captions and posting, and edit ${episodes} full episodes. The first ${PRICE.plusEdits} episode edits are included in the package.`;
  } else if (isStarter) {
    why = 'We make the clips, the thumbnails and the captions, and post them for you, with a monthly call and a monthly report. At 20 clips you move up to Done For You, with a weekly call and report.';
  } else if (isDfy) {
    why = 'We make the clips, the thumbnails and the captions, and post them for you, with a weekly call and a weekly report.';
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
          <div className="pp-planpick">
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
          {normalTotal === null ? null : (
            <s className="pp-was" id="pp-calc-was"><span className="pp-sr">Normally </span>{money(normalTotal)}</s>
          )}
          {normalTotal === null ? null : <span className="pp-sr">now </span>}
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
            Want us to post them too? {clips < PRICE.baseClips ? 'Done For You Starter' : 'Done For You'} at this volume is {money(doneForYouAt(clips))}/month.
          </p>
        )}
        {plusHint ? (
          <p className="pp-hint" id="pp-calc-plus-hint">
            {isStarter
              ? `Done For You Plus starts at ${PRICE.baseClips} clips and includes ${PRICE.plusEdits} long-form episode edits a month for ${money(plusPrice(PRICE.baseClips))}/month.`
              : `Done For You Plus includes ${PRICE.plusEdits} long-form episode edits a month for ${money(plusPrice(clips))}/month at this volume.`}
          </p>
        ) : null}
        <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
      </div>
    </div>
  );
}
