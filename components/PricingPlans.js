// The two packages on /pricing and everything that describes them: the two
// cards, the full comparison table and the Optional Add-ons. Samuel approved
// every price and line here on 16 October 2026. Both cards carry the same 20
// clips, so the only difference is who does the rest.
//
// No state, so this is a server component and the page is complete without
// JavaScript. The calculator under it is components/PricingCalculator.js.

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

// One row per deliverable. dfy / dwy: true = included, false = not included,
// a string = shown as text.
const ROWS = [
  { label: 'Clips per month', dfy: '20', dwy: '20' },
  { label: 'A custom thumbnail for every clip', dfy: true, dwy: false },
  { label: 'Captions, hashtags and calls to action', dfy: true, dwy: false },
  { label: 'Posting on every platform', dfy: true, dwy: false },
  { label: 'A dedicated project manager', dfy: true, dwy: false },
  { label: 'A weekly call', dfy: true, dwy: false },
  { label: 'Weekly reporting', dfy: true, dwy: false },
  { label: 'A strategy document before the first clip', dfy: true, dwy: false },
];

const ADDONS = [
  {
    name: 'Extra Clips',
    icon: 'fa-clapperboard',
    tone: 'pp-tone-a',
    price: '$75',
    unit: 'per clip',
    note: 'On Done For You. $50 per clip on Done With You.',
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

export default function PricingPlans() {
  return (
    <>
      <div className="pp-pair">
        <article className="pp-card pp-card-dfy" aria-labelledby="pp-dfy-name">
          <span className="pp-tag">Flagship</span>
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
            <Yes>20 short clips a month, edited and ready to post</Yes>
            <Yes>A custom thumbnail for every clip</Yes>
            <Yes>Captions, hashtags and calls to action written for every clip</Yes>
            <Yes>Every clip posted for you on every platform</Yes>
            <Yes>A dedicated project manager</Yes>
            <Yes>A weekly call</Yes>
            <Yes>Weekly reporting</Yes>
            <Yes>A strategy document before the first clip</Yes>
          </ul>
          <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
        </article>

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
          </ul>
          <a href={BOOK_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Book a Strategy Call</a>
        </article>
      </div>

      <section className="pp-compare" aria-labelledby="pp-compare-title">
        <p className="pp-eyebrow">Side by side</p>
        <h2 id="pp-compare-title">Everything in each package</h2>
        <div className="pp-tablebox" role="region" aria-labelledby="pp-compare-title" tabIndex={0}>
          <table className="pp-table">
            <thead>
              <tr>
                <th scope="col">What you get</th>
                <th scope="col" className="pp-us">Done For You</th>
                <th scope="col">Done With You</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <Cell value={row.dfy} us />
                  <Cell value={row.dwy} />
                </tr>
              ))}
              <tr className="pp-tot">
                <th scope="row">Monthly price</th>
                <td className="pp-us">$1,597</td>
                <td>$997</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="pp-addons" id="add-ons" aria-labelledby="pp-addons-title">
        <h2 id="pp-addons-title">Optional Add-ons</h2>
        <p className="pp-lead">Add-ons work with either package.</p>
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
    </>
  );
}
