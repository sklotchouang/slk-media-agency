// The three packages on /pricing and everything that describes them: the
// three cards, the terms line, the full comparison table and the Optional
// Add-ons. Samuel approved the two original packages on 16 October 2026 and
// added Done For You Plus ($1,897, Done For You plus 4 long-form episode edits
// a month) on 19 October 2026. Every card carries the same 20 clips.
//
// No state, so these are server components and the page is complete without
// JavaScript. The calculator is components/PricingCalculator.js. The page
// places each export where it belongs (cards, then proof, then the table).

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

// One row per deliverable. dwy / dfy / plus: true = included, false = not
// included, a string = shown as text. Column order matches the cards.
const ROWS = [
  { label: 'Clips per month', dwy: '20', dfy: '20', plus: '20' },
  { label: 'A custom thumbnail for every clip', dwy: false, dfy: true, plus: true },
  { label: 'Captions, hashtags and calls to action', dwy: false, dfy: true, plus: true },
  { label: 'Posting on every platform', dwy: false, dfy: true, plus: true },
  { label: 'A dedicated project manager', dwy: false, dfy: true, plus: true },
  { label: 'A weekly call', dwy: false, dfy: true, plus: true },
  { label: 'Weekly reporting', dwy: false, dfy: true, plus: true },
  { label: 'A strategy document before the first clip', dwy: false, dfy: true, plus: true },
  { label: 'Long-form episode edits', dwy: false, dfy: false, plus: '4 a month' },
];

const ADDONS = [
  {
    name: 'Extra Clips',
    icon: 'fa-clapperboard',
    tone: 'pp-tone-a',
    price: '$75',
    unit: 'per clip',
    note: 'On Done For You and Done For You Plus. $50 per clip on Done With You.',
  },
  {
    name: 'Long-form Episode Edit',
    icon: 'fa-film',
    tone: 'pp-tone-b',
    price: '$150',
    unit: 'per episode',
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

// The Done For You deliverables, shared word for word by Done For You Plus.
const DFY_FEATURES = [
  '20 short clips a month, edited and ready to post',
  'A custom thumbnail for every clip',
  'Captions, hashtags and calls to action written for every clip',
  'Every clip posted for you on every platform',
  'A dedicated project manager',
  'A weekly call',
  'Weekly reporting',
  'A strategy document before the first clip',
];

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

export function PlanCards() {
  return (
    <>
      <div className="pp-trio">
        <article className="pp-card" aria-labelledby="pp-dwy-name">
          <span className="pp-tag pp-tag-ghost" aria-hidden="true">&nbsp;</span>
          <div>
            <h2 className="pp-name" id="pp-dwy-name">Done With You</h2>
            <p className="pp-sub">Clips Only</p>
          </div>
          <p className="pp-price">
            <b>$997</b>
            <span>/month</span>
          </p>
          <p className="pp-who">We make the clips. You post them.</p>
          <ul className="pp-feat">
            <Yes>20 short clips a month, edited and ready to post</Yes>
            <No>Thumbnails</No>
            <No>Captions, hashtags and calls to action</No>
            <No>Posting</No>
            <No>Project manager and weekly call</No>
            <No>Weekly reporting</No>
            <No>Strategy document</No>
            <No>Long-form episode edits</No>
          </ul>
          <a href={BOOK_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Book a Strategy Call</a>
        </article>

        <div className="pp-col">
          <article className="pp-card pp-card-dfy" aria-labelledby="pp-dfy-name">
            <span className="pp-tag">Most Popular</span>
            <div>
              <h2 className="pp-name" id="pp-dfy-name">Done For You</h2>
              <p className="pp-sub">Content Engine</p>
            </div>
            <p className="pp-price">
              <b>$1,597</b>
              <span>/month</span>
            </p>
            <p className="pp-who">We make the clips and run your short-form content for you.</p>
            <ul className="pp-feat">
              {DFY_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <No>Long-form episode edits</No>
            </ul>
            <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 20 clips a month, the posting schedule and a weekly report.</p>
        </div>

        <div className="pp-col">
          <article className="pp-card" aria-labelledby="pp-plus-name">
            <span className="pp-tag pp-tag-ghost" aria-hidden="true">&nbsp;</span>
            <div>
              <h2 className="pp-name" id="pp-plus-name">Done For You Plus</h2>
              <p className="pp-sub">Content Accelerator</p>
            </div>
            <p className="pp-price">
              <b>$1,897</b>
              <span>/month</span>
            </p>
            <p className="pp-who">We run your short-form content and edit your full episodes.</p>
            <ul className="pp-feat">
              {DFY_FEATURES.map((f) => (
                <Yes key={f}>{f}</Yes>
              ))}
              <Yes>4 long-form episode edits a month</Yes>
            </ul>
            <a href={BOOK_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Book a Strategy Call</a>
          </article>
          <p className="pp-commit"><strong>What we commit to:</strong> 20 clips and 4 episode edits a month, the posting schedule and a weekly report.</p>
        </div>
      </div>

      <p className="pp-terms">
        <span>Month to month</span>
        <span>Pause up to 60 days</span>
        <span>You own every clip</span>
      </p>
    </>
  );
}

export function CompareTable() {
  return (
    <section className="pp-compare" aria-labelledby="pp-compare-title">
      <p className="pp-eyebrow">Side by side</p>
      <h2 id="pp-compare-title">Everything in each package</h2>
      <div className="pp-tablebox" role="region" aria-labelledby="pp-compare-title" tabIndex={0}>
        <table className="pp-table">
          <thead>
            <tr>
              <th scope="col">What you get</th>
              <th scope="col">Done With You</th>
              <th scope="col" className="pp-us">Done For You</th>
              <th scope="col">Done For You Plus</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <Cell value={row.dwy} />
                <Cell value={row.dfy} us />
                <Cell value={row.plus} />
              </tr>
            ))}
            <tr className="pp-tot">
              <th scope="row">Monthly price</th>
              <td>$997</td>
              <td className="pp-us">$1,597</td>
              <td>$1,897</td>
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
      <p className="pp-lead">Add-ons work with any package.</p>
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
