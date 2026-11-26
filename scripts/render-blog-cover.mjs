// Blog cover images in the SLK Media Agency house style (Samuel, 26 Nov 2026). Free, local, no AI.
//
// Why this style: AI stock-style photos were rejected twice. We studied 13 podcast company blogs
// (reports/blog-cover-research-2026-11-26 in slk-content-workflow). A blind design review scored
// the Castos cover highest (8 of 10): one brand-colour background, a short headline, and one
// product-style card that shows a real, specific fact from the post. Icon illustrations (Acast)
// and our own icon drafts scored 3 to 6. So every cover is: SLK blue gradient, the logo, the
// headline with its accent words, and a white card with 3 or 4 real rows from the post.
//
// Data: content/blog/posts/<slug>.json "art" (already written for every post):
//   { "kicker", "headline", "accent", "cardTitle", "rows": [[label, "yes"|"no"|"note", value], ...] }
// Optional "cover" in the same file overrides any of those fields for the cover only.
// Writes public/blog/<slug>/header.webp (1680x720) and card.webp (1280x720).
//
//   node scripts/render-blog-cover.mjs <slug> [--spec file.json] [--out dir] [--png dir]

import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const arg = (k) => (process.argv.includes(k) ? process.argv[process.argv.indexOf(k) + 1] : null);
const slug = process.argv[2];
if (!slug || slug.startsWith('--')) { console.error('usage: node scripts/render-blog-cover.mjs <slug> [--spec f] [--out d] [--png d]'); process.exit(1); }
const root = process.cwd();
const postFile = path.join(root, 'content/blog/posts', `${slug}.json`);
const post = fs.existsSync(postFile) ? JSON.parse(fs.readFileSync(postFile, 'utf8')) : {};
const spec = arg('--spec') ? JSON.parse(fs.readFileSync(arg('--spec'), 'utf8')) : {};
const d = { ...(post.art || {}), ...(post.cover || {}), ...spec };
if (!d.headline || !Array.isArray(d.rows) || d.rows.length < 2) { console.error('needs art.headline and at least 2 art.rows'); process.exit(1); }
const allRows = d.rows;   // the cover shows 3 (the blind review found 4 unreadable at thumbnail size), 2 if 3 do not fit

// Three backgrounds from the SLK blue family, so a row of covers does not read as one ad.
// The post picks one with "cover": { "palette": 0 | 1 | 2 }; otherwise it follows from the slug.
const PALETTES = [
  { base: 'linear-gradient(118deg,#0a2a6e 0%,#1747c4 46%,#2a86e0 100%)', glowA: 'rgba(140,210,255,.55)', glowB: 'rgba(76,178,240,.55)', ac: '#8fd3ff', kick: '#bfe3ff' },
  { base: 'linear-gradient(125deg,#061226 0%,#0c2f5c 50%,#0f6fa8 100%)', glowA: 'rgba(76,178,240,.45)', glowB: 'rgba(56,214,220,.40)', ac: '#5fe0e6', kick: '#a6e9ff' },
  { base: 'linear-gradient(120deg,#0b2547 0%,#1f5fbf 50%,#49b6f2 100%)', glowA: 'rgba(160,220,255,.50)', glowB: 'rgba(73,182,242,.50)', ac: '#a9e4ff', kick: '#cdeeff' },
];
const hash = [...slug].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
// No palette set: take the one after the newest other post's, so neighbours on the blog differ.
function pickPalette() {
  if (Number.isInteger(d.palette)) return d.palette % 3;
  const dir = path.join(root, 'content/blog/posts');
  const others = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== `${slug}.json`)
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')))
    .filter(o => o.cover && Number.isInteger(o.cover.palette))
    .sort((a, b) => String(a.publishedAt || '').localeCompare(String(b.publishedAt || '')));
  return others.length ? (others[others.length - 1].cover.palette + 1) % 3 : hash % 3;
}
const PALETTE = pickPalette();
const PAL = PALETTES[PALETTE];
const FONT = `data:font/woff2;base64,${fs.readFileSync(path.join(root, 'scripts/fonts/inter-latin.woff2')).toString('base64')}`;  // the site's own Inter

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/[–—]/g, ', ');
const headline = (() => {
  const h = esc(d.headline), a = d.accent ? esc(d.accent) : '';
  return a && h.includes(a) ? h.replace(a, `<span class="ac">${a}</span>`) : h;
})();
const logoFile = path.join(root, 'public', 'images', 'SLK Media Agency LOGO. 500x500 - CROPPED.png');
const logo = fs.existsSync(logoFile) ? `data:image/png;base64,${fs.readFileSync(logoFile).toString('base64')}` : '';
const MARK = {
  yes: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  no: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M7 7l10 10M17 7L7 17"/></svg>',
};

function page(W, H, fit = 0) {
  const shrink = [1, 0.9, 0.8, 0.72][fit];
  const rows = allRows.slice(0, fit >= 2 ? 2 : 3);
  const S = H / 720;                       // everything scales with height
  const wide = W / H > 2;                  // header (2.33) vs card (1.78)
  const textW = wide ? 720 * S : 540 * S;
  const cardW = wide ? 700 * S : 560 * S;
  const hSize = (d.headline.length > 40 ? 62 : 70) * S * (wide ? 1 : 0.86) * shrink;
  const rowHtml = rows.map(([label, kind, value]) => {
    const pill = kind === 'yes' || kind === 'no'
      ? `<span class="pill ${kind}"><i>${MARK[kind]}</i>${esc(value)}</span>`
      : `<span class="pill note">${esc(value)}</span>`;
    return `<div class="row"><span class="lb">${esc(label)}</span>${pill}</div>`;
  }).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face{font-family:"SLK Inter";src:url(${FONT}) format("woff2");font-weight:100 900;font-style:normal}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${W}px;height:${H}px;overflow:hidden;font-family:"SLK Inter",sans-serif}
  body{position:relative;background:
     radial-gradient(${520 * S}px ${520 * S}px at ${W * 0.9}px ${-60 * S}px,${PAL.glowA},transparent 70%),
     radial-gradient(${700 * S}px ${600 * S}px at ${W * 0.72}px ${H + 120 * S}px,${PAL.glowB},transparent 70%),
     radial-gradient(${600 * S}px ${600 * S}px at ${-100 * S}px ${H * 0.2}px,rgba(10,30,80,.9),transparent 70%),
     ${PAL.base}}
  .orb{position:absolute;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,.22),rgba(255,255,255,0) 70%)}
  .brand{position:absolute;left:${76 * S}px;top:${64 * S}px;display:flex;align-items:center;gap:${14 * S}px;color:#fff;font-weight:700;font-size:${22 * S}px;letter-spacing:.01em}
  .brand .dot{width:${14 * S}px;height:${14 * S}px;border-radius:50%;background:${PAL.ac};box-shadow:0 0 ${14 * S}px ${PAL.ac}}
  .brand img{width:${50 * S}px;height:${50 * S}px;object-fit:contain}
  .txt{position:absolute;left:${76 * S}px;top:50%;transform:translateY(-44%);width:${textW}px}
  .kick{font-size:${17 * S}px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${PAL.kick};margin-bottom:${20 * S}px}
  h1{font-size:${hSize}px;line-height:1.04;font-weight:800;letter-spacing:-.025em;color:#fff}
  .ac{color:${PAL.ac}}
  .stack{position:absolute;right:${(wide ? 96 : 56) * S}px;top:50%;transform:translateY(-50%);width:${cardW}px}
  .back{position:absolute;inset:0;z-index:0;transform:translate(${30 * S}px,${-28 * S}px) rotate(4deg);border-radius:${26 * S}px;background:rgba(255,255,255,.22);border:${1.5 * S}px solid rgba(255,255,255,.35)}
  .card{position:relative;z-index:1;border-radius:${26 * S}px;background:#fff;padding:${34 * S}px ${34 * S}px ${26 * S}px;box-shadow:0 ${40 * S}px ${90 * S}px rgba(4,18,60,.45),0 ${6 * S}px ${18 * S}px rgba(4,18,60,.2)}
  .ct{font-size:${15 * S}px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#1747c4;margin-bottom:${6 * S}px}
  .cs{font-size:${30 * S}px;font-weight:800;color:#0b1730;line-height:1.2;margin-bottom:${18 * S}px}
  .row{display:flex;align-items:center;justify-content:space-between;gap:${16 * S}px;padding:${18 * S}px 0;border-top:${1.5 * S}px solid #e8edf5}
  .lb{font-size:${25 * S}px;font-weight:600;color:#1d2a44;line-height:1.25}
  .pill{flex:none;max-width:58%;display:inline-flex;align-items:center;gap:${8 * S}px;font-size:${22 * S}px;font-weight:800;line-height:1.2;border-radius:${14 * S}px;padding:${10 * S}px ${14 * S}px;text-align:left}
  .pill.note{background:#e8f3fe;color:#0f5fc0}
  .pill.yes{background:#e4f8ee;color:#0e7a47}.pill.no{background:#fdeceb;color:#b8352b}
  .pill i{flex:none;width:${28 * S}px;height:${28 * S}px;border-radius:50%;display:grid;place-items:center}
  .pill.yes i{background:#1aa463}.pill.no i{background:#e0554a}
  .pill i svg{width:${17 * S}px;height:${17 * S}px}
  </style></head><body>
  <div class="orb" style="width:${300 * S}px;height:${300 * S}px;left:${W * 0.52}px;top:${-90 * S}px"></div>
  <div class="orb" style="width:${180 * S}px;height:${180 * S}px;left:${W * 0.46}px;top:${H - 150 * S}px"></div>
  <div class="orb" style="width:${120 * S}px;height:${120 * S}px;left:${W * 0.94}px;top:${H * 0.45}px"></div>
  <div class="brand"><span class="dot"></span>SLK Media Agency</div>
  <div class="txt"><div class="kick">${esc(d.kicker || 'SLK Media Agency blog')}</div><h1>${headline}</h1></div>
  <div class="stack"><div class="back"></div><div class="card">
    <div class="cs">${esc(d.cardTitle || '')}</div>${rowHtml}
  </div></div>
  </body></html>`;
}

const out = arg('--out') || path.join(root, 'public/blog', slug);
const pngDir = arg('--png');
fs.mkdirSync(out, { recursive: true });
// 'shell' runs chrome-headless-shell, which never creates a window. With 'new' (Chrome 150 on
// Windows) every launch flashes a blank 764x572 box at the top-left of the main screen (26 Nov 2026).
const browser = await puppeteer.launch({ headless: 'shell' });
try {
  for (const [name, W, H, q] of [['header', 1680, 720, 86], ['card', 1280, 720, 86]]) {
    const p = await browser.newPage();
    await p.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
    // Fit: try full size, then smaller headline, then 2 rows. Fail only if nothing fits.
    let fitted = -1;
    for (let fit = 0; fit < 4 && fitted < 0; fit++) {
      await p.setContent(page(W, H, fit), { waitUntil: 'load' });
      await p.evaluate(() => document.fonts.ready);
      const ok = await p.evaluate(() => {
        if (!document.fonts.check('800 60px "SLK Inter"')) return 'font';
        const t = document.querySelector('.txt').getBoundingClientRect(), c = document.querySelector('.stack').getBoundingClientRect();
        return !(t.bottom > innerHeight - 20 || t.top < 120 || t.right > c.left - 10 || c.top < 10 || c.bottom > innerHeight - 10);
      });
      if (ok === 'font') throw new Error('the Inter font did not load');
      if (ok) fitted = fit;
    }
    if (fitted < 0) throw new Error(`${name}: text does not fit even at the smallest size (shorten the headline or the card rows)`);
    const png = await p.screenshot({ type: 'png' });
    await sharp(png).webp({ quality: q }).toFile(path.join(out, `${name}.webp`));
    if (pngDir) { fs.mkdirSync(pngDir, { recursive: true }); fs.writeFileSync(path.join(pngDir, `${slug}-${name}.png`), png); }
    await p.close();
  }
  console.log(JSON.stringify({ ok: ['header.webp', 'card.webp'], palette: PALETTE }));
} finally { await browser.close(); }
