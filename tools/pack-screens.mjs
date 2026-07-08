// One-off: compress the curated before/after screenshot set into docs/screens
// as ~900px WebP so the handoff set can live in the repo without bloat.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const picks = [
  ['shots/before/home.png', 'before-home.webp'],
  ['shots/before/pm.png', 'before-podcast-multiplier.webp'],
  ['shots/before/pt.png', 'before-podcast-toolkits.webp'],
  ['shots/before/pf.png', 'before-portfolio.webp'],
  ['shots/after/home-desktop-top.png', 'after-home.webp'],
  ['shots/after/home-mobile-top.png', 'after-home-mobile.webp'],
  ['shots/after/pm-desktop-top.png', 'after-podcast-multiplier.webp'],
  ['shots/after/pm-d-9000.png', 'after-podcast-multiplier-comparison.webp'],
  ['shots/after/pt-hero2.png', 'after-podcast-toolkits.webp'],
  ['shots/after/pt-m-top.png', 'after-podcast-toolkits-mobile.webp'],
  ['shots/after/pf-desktop-top.png', 'after-portfolio.webp'],
  ['shots/after/pf-bottom.png', 'after-portfolio-cta.webp'],
  ['shots/after/cs-desktop-top.png', 'after-case-study.webp'],
  ['shots/after/cs-index.png', 'after-case-studies-index.webp'],
  ['shots/after/ts-desktop-top.png', 'after-testimonials.webp'],
  ['shots/after/legal-desktop-top.png', 'after-terms.webp'],
  ['shots/after/privacy.png', 'after-privacy.webp'],
  ['shots/after/precall.png', 'after-pre-call.webp'],
  ['shots/after/thankyou.png', 'after-thank-you.webp'],
  ['shots/after/404.png', 'after-404.webp'],
  ['shots/after/home-rm-top.png', 'after-home-reduced-motion.webp'],
];

const outDir = path.join(process.cwd(), 'docs', 'screens');
await fs.mkdir(outDir, { recursive: true });
for (const [src, name] of picks) {
  try {
    await sharp(src).resize({ width: 900 }).webp({ quality: 72 }).toFile(path.join(outDir, name));
    console.log(`ok ${name}`);
  } catch (err) {
    console.log(`skip ${name}: ${err.message}`);
  }
}
