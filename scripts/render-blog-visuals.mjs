// Renders a post's diagrams to images, locally and free (headless Chrome + sharp).
// Each file content/blog/visuals/<slug>/<name>.html becomes
// public/blog/<slug>/<name>.webp. The page sets its size with
//   <meta name="size" content="1600x900">
// and can link ../_base.css for the shared Studio Dark look.
//
//   node scripts/render-blog-visuals.mjs <slug> [name]
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const [slug, only] = process.argv.slice(2);
if (!slug) { console.error('usage: node scripts/render-blog-visuals.mjs <slug> [name]'); process.exit(1); }
const root = process.cwd();
const dir = path.join(root, 'content/blog/visuals', slug);
const out = path.join(root, 'public/blog', slug);
fs.mkdirSync(out, { recursive: true });
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html') && (!only || f === `${only}.html`));

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
for (const f of files) {
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  const [w, h] = (html.match(/<meta name="size" content="(\d+)x(\d+)"/) || [0, 1600, 900]).slice(1).map(Number);
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.join(dir, f)).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // Fail loudly if text overflows its box (clipped text in an image is a bug).
  const clipped = await page.evaluate(() => [...document.querySelectorAll('body *')]
    .filter((el) => el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflow === 'hidden').length);
  if (clipped) console.warn(`  warning: ${f} has ${clipped} clipped element(s)`);
  const png = await page.screenshot({ type: 'png' });
  const name = f.replace(/\.html$/, '.webp');
  const buf = await sharp(png).webp({ quality: 86 }).toBuffer();
  fs.writeFileSync(path.join(out, name), buf);
  console.log(`${name} ${w}x${h} ${(buf.length / 1024).toFixed(0)} KB`);
}
await browser.close();
