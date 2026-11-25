'use client';

import { useState } from 'react';
import { BOOK_URL, buyLink } from '../lib/checkout';

// "Build your own plan" on /pricing. Per-episode pricing, approved by Samuel on
// 25 November 2026. Change nothing here without his yes, and re-check the
// reference prices in OVERVIEW.md section 7.1 and docs/pricing-promotion-spec.md
// after any change.
//
// - Episodes a month: 1 to 8. 1 = $597, 2 = $997, then +$300 for every episode
//   above 2 (3 = $1,297, 4 = $1,597, 5 = $1,897, 8 = $2,797).
// - Every episode gets 5 clips. Extra clips are $60 each.
// - Full-episode (long-form) edits are $150 per episode, up to the number of
//   episodes. Show notes $50 and SEO show notes $100 per episode.
// - 1 or 2 episodes: monthly call and report. 3 or more: weekly call and
//   report, and the plan starts with a call.
// - The direct checkout shows only for a plain 1 or 2 episode plan with nothing
//   added, because each Myfundbox checkout charges one fixed amount (a website
//   choice, flagged to Samuel). Everything else goes to the strategy call.
// - "Clips only" (the client posts) and the 10-day trial are retired for new
//   prospects (Samuel, 25 Nov 2026). Keep both out.
//
// The server renders the default (2 episodes, nothing added), so the page is
// complete without JavaScript.

const PRICE = {
  minEpisodes: 1,
  maxEpisodes: 8,
  oneEpisode: 597,
  twoEpisodes: 997,
  perEpisodeAbove2: 300,
  clipsPerEpisode: 5,
  extraClip: 60,
  fullEdit: 150,
  showNotes: 50,
  seoShowNotes: 100,
  maxExtraClips: 40,
};

// The plan price for a number of episodes (1 to 8).
export function episodePrice(episodes) {
  if (episodes <= 1) return PRICE.oneEpisode;
  return PRICE.twoEpisodes + (episodes - 2) * PRICE.perEpisodeAbove2;
}

function planName(episodes) {
  if (episodes === 1) return '1-Episode Plan';
  if (episodes === 2) return '2-Episode Plan';
  if (episodes === 4) return '4-Episode Plan';
  return `Your ${episodes}-episode plan`;
}

function money(n) {
  return '$' + n.toLocaleString('en-US');
}

function plural(n, one, many) {
  return n === 1 ? one : many;
}

function clamp(n, min, max) {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.floor(n)));
}

// A slider with minus and plus buttons and the current number beside it.
function Stepper({ id, label, value, min, max, onChange, unit, hint }) {
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
          aria-valuetext={`${value} ${unit}`}
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
        <output className="pp-count" htmlFor={id} aria-live="off">{value}</output>
      </div>
      {hint ? <p className="pp-epi-hint">{hint}</p> : null}
    </div>
  );
}

export default function PricingCalculator() {
  const [episodes, setEpisodesRaw] = useState(2);
  const [extraClips, setExtraClips] = useState(0);
  const [edits, setEdits] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [seoNotes, setSeoNotes] = useState(false);

  // Full-episode edits can never be more than the episodes.
  function setEpisodes(n) {
    setEpisodesRaw(n);
    if (edits > n) setEdits(n);
  }

  const base = episodePrice(episodes);
  const name = planName(episodes);
  const clips = episodes * PRICE.clipsPerEpisode + extraClips;
  const weekly = episodes >= 3;

  const addons = [];
  if (extraClips > 0) {
    addons.push({ label: `${extraClips} extra ${plural(extraClips, 'clip', 'clips')}`, amount: extraClips * PRICE.extraClip });
  }
  if (edits > 0) {
    addons.push({ label: `${edits} full-episode ${plural(edits, 'edit', 'edits')}`, amount: edits * PRICE.fullEdit });
  }
  if (showNotes) {
    addons.push({ label: `Show notes for ${episodes} ${plural(episodes, 'episode', 'episodes')}`, amount: episodes * PRICE.showNotes });
  }
  if (seoNotes) {
    addons.push({ label: `SEO show notes for ${episodes} ${plural(episodes, 'episode', 'episodes')}`, amount: episodes * PRICE.seoShowNotes });
  }
  const total = base + addons.reduce((sum, a) => sum + a.amount, 0);

  // A plain Monthly Show or Biweekly Show can be bought online; anything else
  // starts with a call.
  const plain = addons.length === 0;
  const direct = !weekly && plain ? buyLink(episodes === 1 ? 'monthly' : 'biweekly') : null;

  let action;
  if (direct && direct.checkout) {
    action = (
      <>
        <a href={direct.href} className="primary-cta pp-cta" target="_blank" rel="noopener" id="pp-calc-cta">Buy {name}, {money(total)} a month</a>
        <p className="pp-hint" id="pp-calc-how">Pay online, no call needed. Right after you pay, you get the next steps on screen.</p>
      </>
    );
  } else if (direct) {
    action = (
      <>
        <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener" id="pp-calc-cta">Book a call to start</a>
        <p className="pp-hint" id="pp-calc-how">Online checkout for {name} is not live yet. For now, start with a 30-minute call.</p>
      </>
    );
  } else {
    action = (
      <>
        <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener" id="pp-calc-cta">Book a call to start</a>
        <p className="pp-hint" id="pp-calc-how">
          {weekly
            ? 'Plans with 3 or more episodes start with a 30-minute call, where we agree your schedule.'
            : buyLink(episodes === 1 ? 'monthly' : 'biweekly').checkout
              ? `Plans with add-ons start with a 30-minute call. Without add-ons, ${name} can be bought online.`
              : 'Plans with add-ons start with a 30-minute call.'}
        </p>
      </>
    );
  }

  return (
    <div className="pp-calc">
      <div className="pp-panel">
        <Stepper
          id="pp-episodes"
          label="How many episodes do you release a month?"
          value={episodes}
          min={PRICE.minEpisodes}
          max={PRICE.maxEpisodes}
          onChange={setEpisodes}
          unit="episodes"
          hint="Every episode gets 5 clips."
        />

        <Stepper
          id="pp-extra"
          label="Extra clips a month"
          value={extraClips}
          min={0}
          max={PRICE.maxExtraClips}
          onChange={setExtraClips}
          unit="extra clips"
          hint="$60 each."
        />

        <fieldset className="pp-group">
          <legend className="pp-sr">Episode add-ons</legend>
          <Stepper
            id="pp-edits"
            label="Full episodes to edit each month"
            value={edits}
            min={0}
            max={episodes}
            onChange={setEdits}
            unit="full-episode edits"
            hint="We edit the whole long-form episode. $150 per episode."
          />
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
        <p className="pp-plan" id="pp-calc-plan">{name}</p>
        <ul className="pp-calc-facts" id="pp-calc-facts">
          <li><i className="fas fa-clapperboard" aria-hidden="true"></i> <span id="pp-calc-clips">{clips} clips a month</span></li>
          <li><i className="fas fa-phone" aria-hidden="true"></i> <span id="pp-calc-cadence">{weekly ? 'Weekly consultation call and weekly reporting' : 'Monthly consultation call and monthly reporting'}</span></li>
        </ul>
        <p className="pp-big" id="pp-calc-price">
          {money(total)}
          <span> /month</span>
        </p>
        <ul className="pp-breakdown" id="pp-calc-breakdown">
          <li>
            <span>{episodes} {plural(episodes, 'episode', 'episodes')}, {episodes * PRICE.clipsPerEpisode} clips</span>
            <span>{money(base)}</span>
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
        {action}
      </div>
    </div>
  );
}
