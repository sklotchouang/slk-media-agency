// Renders a blog post's header images locally (free: headless Chrome + sharp,
// no image API). Reads content/blog/posts/<slug>.json, field "art":
//   { "kicker": "...", "headline": "...", "accent": "words to colour",
//     "rows": [["label", "yes" | "no" | "note", "value"], ...] }
// Writes public/blog/<slug>/og.jpg (1200x630), the share image. With --all it
// also writes header.webp (1680x720) and card.webp (1280x720); leave that off
// when the post uses a photo header (kie.ai), or the photo is overwritten.
//
//   node scripts/render-blog-header.mjs <slug> [--all]

import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const slug = process.argv[2];
if (!slug) { console.error('usage: node scripts/render-blog-header.mjs <slug>'); process.exit(1); }
const root = process.cwd();
const post = JSON.parse(fs.readFileSync(path.join(root, 'content/blog/posts', `${slug}.json`), 'utf8'));
const art = post.art;
if (!art) { console.error('post has no "art" field'); process.exit(1); }

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const headline = esc(art.headline).replace(esc(art.accent), `<span class="ac">${esc(art.accent)}</span>`);
const mark = { yes: '&#10003;', no: '&#10005;', note: '&#9679;' };
const rows = art.rows.map(([label, kind, value]) => `
  <div class="row"><span class="ic ${kind}">${mark[kind]}</span><span class="lb">${esc(label)}</span><span class="vl">${esc(value)}</span></div>`).join('');
const bars = Array.from({ length: 28 }, (_, i) => {
  const h = 18 + Math.round(70 * Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37)));
  return `<i style="height:${h}%"></i>`;
}).join('');

function html(w, h, compact) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{width:${w}px;height:${h}px;background:#0a0a0b;font-family:Inter,"Segoe UI",system-ui,sans-serif;color:#f5f6f8;overflow:hidden}
  .bg{position:absolute;inset:0;background:
     radial-gradient(60% 80% at 82% 30%,rgba(76,178,240,.22),transparent 60%),
     radial-gradient(50% 70% at 10% 100%,rgba(76,178,240,.10),transparent 60%),
     linear-gradient(135deg,#0f2a3d 0%,#0a0a0b 55%,#111114 100%)}
  .grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:48px 48px;mask-image:linear-gradient(90deg,transparent,#000 40%,#000)}
  .wrap{position:relative;height:100%;display:flex;align-items:center;gap:${compact ? 36 : 64}px;padding:0 ${compact ? 56 : 88}px}
  .copy{flex:1.15;min-width:0}
  .kick{font-size:${compact ? 15 : 17}px;letter-spacing:.14em;text-transform:uppercase;color:#7cc6f5;font-weight:600;margin-bottom:22px}
  h1{font-size:${compact ? 50 : 64}px;line-height:1.06;font-weight:800;letter-spacing:-.02em}
  .ac{color:#4cb2f0}
  .brand{margin-top:28px;font-size:${compact ? 16 : 18}px;color:#8b8f99;font-weight:600}
  .vis{flex:1;display:flex;align-items:center;gap:${compact ? 22 : 30}px;justify-content:flex-end}
  .phone{flex:none;width:${compact ? 170 : 210}px;aspect-ratio:9/16;border-radius:28px;border:2px solid rgba(255,255,255,.16);background:linear-gradient(180deg,#17171c,#0f2233);position:relative;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5),0 0 0 8px rgba(255,255,255,.03)}
  .phone .wave{position:absolute;left:14px;right:14px;top:34%;height:22%;display:flex;align-items:center;gap:3px}
  .phone .wave i{flex:1;background:#4cb2f0;border-radius:3px;opacity:.85}
  .phone .cap{position:absolute;left:16px;right:16px;bottom:22%;height:12px;border-radius:6px;background:rgba(255,255,255,.85)}
  .phone .cap2{position:absolute;left:30px;right:42px;bottom:calc(22% - 20px);height:12px;border-radius:6px;background:rgba(255,255,255,.55)}
  .phone .play{position:absolute;left:50%;top:14%;transform:translateX(-50%);width:46px;height:46px;border-radius:50%;background:rgba(76,178,240,.18);border:1.5px solid rgba(76,178,240,.6);display:grid;place-items:center}
  .phone .play:after{content:"";margin-left:4px;border-left:13px solid #f5f6f8;border-top:8px solid transparent;border-bottom:8px solid transparent}
  .card{flex:1;max-width:${compact ? 400 : 470}px;background:rgba(17,17,20,.88);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:${compact ? 18 : 22}px ${compact ? 20 : 24}px;backdrop-filter:blur(6px)}
  .card .t{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#8b8f99;font-weight:600;margin-bottom:10px}
  .row{display:grid;grid-template-columns:28px 1fr;column-gap:12px;padding:${compact ? 9 : 11}px 0;border-top:1px solid rgba(255,255,255,.08)}
  .row:first-of-type{border-top:0}
  .ic{grid-row:span 2;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-size:14px;font-weight:700}
  .ic.yes{background:rgba(95,212,154,.16);color:#5fd49a}.ic.no{background:rgba(240,110,110,.16);color:#f07a7a}.ic.note{background:rgba(76,178,240,.16);color:#4cb2f0;font-size:10px}
  .lb{font-size:${compact ? 15 : 17}px;font-weight:600;color:#f5f6f8}
  .vl{font-size:${compact ? 13 : 14}px;color:#b6bac3;margin-top:2px}
  </style></head><body><div class="bg"></div><div class="grid"></div>
  <div class="wrap">
    <div class="copy"><div class="kick">${esc(art.kicker)}</div><h1>${headline}</h1><div class="brand">SLK Media Agency Blog</div></div>
    <div class="vis"><div class="phone"><div class="play"></div><div class="wave">${bars}</div><div class="cap"></div><div class="cap2"></div></div>
      <div class="card"><div class="t">${esc(art.cardTitle || 'At a glance')}</div>${rows}</div></div>
  </div></body></html>`;
}

const outDir = path.join(root, 'public/blog', slug);
fs.mkdirSync(outDir, { recursive: true });
const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
const all = process.argv.includes('--all');
const jobs = [
  { name: 'header.webp', w: 1680, h: 720, compact: false, fmt: 'webp' },
  { name: 'card.webp', w: 1280, h: 720, compact: true, fmt: 'webp' },
  { name: 'og.jpg', w: 1200, h: 630, compact: true, fmt: 'jpg' },
].filter((j) => all || j.name === 'og.jpg');
for (const j of jobs) {
  await page.setViewport({ width: j.w, height: j.h, deviceScaleFactor: 1 });
  await page.setContent(html(j.w, j.h, j.compact), { waitUntil: 'load' });
  const png = await page.screenshot({ type: 'png' });
  const img = sharp(png);
  const buf = j.fmt === 'webp' ? await img.webp({ quality: 82 }).toBuffer() : await img.jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  fs.writeFileSync(path.join(outDir, j.name), buf);
  console.log(`${j.name} ${j.w}x${j.h} ${(buf.length / 1024).toFixed(0)} KB`);
}
await browser.close();
