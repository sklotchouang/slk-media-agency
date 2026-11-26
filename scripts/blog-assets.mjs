// Blog post assets made by the content app's blog runner (added 2026-11-26). Free, local.
//
//   node scripts/blog-assets.mjs photo <slug> <photo-file>
//     Turns a header photo (the kie.ai image) into public/blog/<slug>/header.webp (1680x720)
//     and card.webp (1280x720), cropped from the centre. The raw photo stays outside public/.
//
//   node scripts/blog-assets.mjs shots <slug>
//     Reads content/blog/visuals/<slug>/shots.json, a list of
//       { "url": "https://...", "name": "libsyn-rates", "width": 1280, "height": 800, "scroll": 0, "find": "1.11" }
//     "find" (optional) scrolls to the first heading, paragraph or list item holding that text,
//     so the shot shows the passage the post quotes; "scroll" is used when it is not found.
//     and saves each page as public/blog/<slug>/<name>.webp (800 px wide, quality 82).
//     Prints one JSON line: { "ok": [names], "failed": [{ name, error }] }. A failed page is
//     left out; the runner removes figures whose image is missing.
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const [cmd, slug, file] = process.argv.slice(2);
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+){0,15}$/;
if (!['photo', 'shots'].includes(cmd) || !SLUG_RE.test(slug || '')) {
  console.error('usage: node scripts/blog-assets.mjs photo <slug> <photo-file> | shots <slug>');
  process.exit(1);
}
const root = process.cwd();
const out = path.join(root, 'public/blog', slug);
fs.mkdirSync(out, { recursive: true });

if (cmd === 'photo') {
  if (!file || !fs.existsSync(file)) { console.error('photo file missing'); process.exit(1); }
  await sharp(file).resize(1680, 720, { fit: 'cover', position: 'centre' }).webp({ quality: 82 }).toFile(path.join(out, 'header.webp'));
  await sharp(file).resize(1280, 720, { fit: 'cover', position: 'centre' }).webp({ quality: 80 }).toFile(path.join(out, 'card.webp'));
  console.log(JSON.stringify({ ok: ['header.webp', 'card.webp'] }));
  process.exit(0);
}

const listFile = path.join(root, 'content/blog/visuals', slug, 'shots.json');
const list = fs.existsSync(listFile) ? JSON.parse(fs.readFileSync(listFile, 'utf8')) : [];
const result = { ok: [], failed: [] };
const browser = await puppeteer.launch({ headless: 'shell' }); // 'shell': no window. 'new' flashes a blank box on Windows (26 Nov 2026)
try {
  for (const s of list) {
    const name = String(s.name || '');
    if (!/^[a-z0-9-]{2,60}$/.test(name) || !/^https?:\/\//.test(String(s.url || ''))) { result.failed.push({ name, error: 'bad name or url' }); continue; }
    // Public pages only: never this PC, the local network or a bare IP address.
    let host = '';
    try { host = new URL(s.url).hostname.toLowerCase(); } catch { /* bad url */ }
    if (!host || host === 'localhost' || host.endsWith('.local') || host.endsWith('.localhost') || /^[\d.]+$/.test(host) || host.includes(':')) { result.failed.push({ name, error: 'not a public address' }); continue; }
    const page = await browser.newPage();
    try {
      await page.setViewport({ width: Math.min(Math.max(Number(s.width) || 1280, 600), 1920), height: Math.min(Math.max(Number(s.height) || 800, 400), 2000) });
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36');
      const res = await page.goto(s.url, { waitUntil: 'networkidle2', timeout: 45000 });
      if (res && res.status() >= 400) throw new Error(`HTTP ${res.status()}`);
      await new Promise((r) => setTimeout(r, 2500));
      // Cookie banners: click a plain accept or reject button when one shows.
      await page.evaluate(() => {
        const words = /^(reject all|decline|accept all|accept|i agree|got it|ok)$/i;
        for (const b of document.querySelectorAll('button, a[role="button"]')) { if (words.test((b.textContent || '').trim())) { b.click(); break; } }
      }).catch(() => {});
      let found = false;
      if (s.find) {
        found = await page.evaluate((t) => {
          const want = String(t).toLowerCase();
          for (const el of document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,th,dt,dd,blockquote')) {
            if ((el.textContent || '').toLowerCase().includes(want)) { const y = el.getBoundingClientRect().top + window.scrollY - 120; window.scrollTo(0, Math.max(0, y)); return true; }
          }
          return false;
        }, String(s.find).slice(0, 120)).catch(() => false);
      }
      if (!found && s.scroll) await page.evaluate((y) => window.scrollTo(0, y), Number(s.scroll));
      await new Promise((r) => setTimeout(r, 1200));
      const png = await page.screenshot({ type: 'png' });
      await sharp(png).resize(800).webp({ quality: 82 }).toFile(path.join(out, `${name}.webp`));
      result.ok.push(s.find && !found ? `${name} (text not found, top of page)` : name);
    } catch (e) {
      result.failed.push({ name, error: String(e.message).slice(0, 160) });
    } finally {
      await page.close().catch(() => {});
    }
  }
} finally {
  await browser.close();
}
console.log(JSON.stringify(result));
