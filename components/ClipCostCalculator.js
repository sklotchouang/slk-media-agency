'use client';

import { useState } from 'react';

/**
 * Home page "what does clipping cost you now" calculator. The visitor enters
 * their own hours and hourly value; nothing is claimed on their behalf. The
 * starting values are labelled as an example.
 */
export default function ClipCostCalculator() {
  const [hours, setHours] = useState('5');
  const [rate, setRate] = useState('100');
  const h = Math.max(0, parseFloat(hours) || 0);
  const r = Math.max(0, parseFloat(rate) || 0);
  const monthlyHours = Math.round((h * 52) / 12);
  const monthlyValue = Math.round((h * r * 52) / 12);

  return (
    <div className="hp-calc">
      <h3>What does clipping cost you now? Put in your own numbers.</h3>
      <div className="hp-calc-fields">
        <label htmlFor="hp-calc-hours">
          Hours a week on clips
          <input id="hp-calc-hours" type="number" min="0" max="80" step="0.5" inputMode="decimal" value={hours} onChange={(e) => setHours(e.target.value)} />
        </label>
        <label htmlFor="hp-calc-rate">
          What an hour of your time is worth ($)
          <input id="hp-calc-rate" type="number" min="0" max="2000" step="5" inputMode="decimal" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
      </div>
      <p className="hp-calc-out" aria-live="polite">
        That is about <strong>${monthlyValue.toLocaleString('en-US')}</strong> of your time every month, or {monthlyHours} hours.
      </p>
      <p className="hp-note">The starting numbers are an example. Change them to yours.</p>
    </div>
  );
}
