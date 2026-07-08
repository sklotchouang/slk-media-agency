// scripts/generate-assets.mjs
// One-time generator for the site's shared atmosphere assets via KIE.ai
// GPT Image 2. Run locally: node scripts/generate-assets.mjs
// Requires KIE_API_KEY in .env.local (never committed, never logged).
//
// Confirmed against https://docs.kie.ai/market/gpt/gpt-image-2-text-to-image:
//  - model id: "gpt-image-2-text-to-image"
//  - input: { prompt, aspect_ratio, resolution } (resolution: "1K"|"2K"|"4K";
//    the docs use `resolution`, not `quality`)
//  - create: POST /api/v1/jobs/createTask -> data.taskId
//  - poll:   GET  /api/v1/jobs/recordInfo?taskId=... -> data.state
//    ("success" -> data.resultJson JSON with resultUrls, "fail" -> data.failMsg)
//
// Raw downloads land in public/generated/raw (gitignored). Optimized AVIF and
// WebP (max 1920px wide) land in public/generated and are the only committed
// versions.

import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// --- key loading: env first, then .env.local ------------------------------
async function loadKey() {
  if (process.env.KIE_API_KEY) return process.env.KIE_API_KEY;
  try {
    const envFile = await fs.readFile(path.join(process.cwd(), '.env.local'), 'utf8');
    const match = envFile.match(/^KIE_API_KEY=(.+)$/m);
    if (match) return match[1].trim();
  } catch {
    // no .env.local
  }
  throw new Error('Set KIE_API_KEY in .env.local (do not commit it).');
}

const BASE = 'https://api.kie.ai/api/v1/jobs';
const MODEL = 'gpt-image-2-text-to-image';

// Shared art direction: abstract only, no text, no people, no logos, locked
// palette (near-black #0a0a0b, single cool-blue accent #4cb2f0), cinematic,
// editorial, expensive. One art director across the whole set.
const STYLE =
  'Abstract cinematic background art, ultra premium editorial style, near-black charcoal base (#0a0a0b), ' +
  'a single restrained cool-blue accent (#4cb2f0), deep shadows, very high detail, subtle tonal gradations, ' +
  'matte finish, no neon, no text, no letters, no people, no logos, no watermark.';

const assets = [
  {
    name: 'hero-soundfield',
    aspect_ratio: '3:2',
    resolution: '2K',
    prompt:
      `${STYLE} A dark cinematic abstract sound field: fine flowing audio waveform lines and delicate particle ` +
      'streams drifting horizontally and dissolving into pure black, one soft blue glow low on the horizon, ' +
      'enormous negative space in the upper half, quiet and expensive, like a studio at night.',
  },
  {
    name: 'hero-soundfield-tall',
    aspect_ratio: '2:3',
    resolution: '2K',
    prompt:
      `${STYLE} A dark cinematic abstract sound field composed for a tall portrait crop: fine audio waveform ` +
      'threads and sparse particles falling vertically and fading into black, one subtle blue glow near the ' +
      'bottom third, generous negative space, quiet and expensive.',
  },
  {
    name: 'section-mesh',
    aspect_ratio: '3:2',
    resolution: '2K',
    prompt:
      `${STYLE} An extremely subtle dark gradient mesh: soft radial light pools and gentle tonal folds on a ` +
      'near-black field, barely-there blue tint in one corner, smooth and out of focus, designed to sit behind ' +
      'text at low opacity without drawing attention.',
  },
  {
    name: 'grain',
    aspect_ratio: '1:1',
    resolution: '1K',
    prompt:
      'Fine monochrome analog film grain texture, uniform high-frequency photographic noise on a mid-gray field, ' +
      'no shapes, no vignette, no text, no pattern repetition, tileable feel, 35mm film scan aesthetic.',
  },
  {
    name: 'ribbon-accent',
    aspect_ratio: '3:2',
    resolution: '2K',
    prompt:
      `${STYLE} One single elegant ribbon of light shaped like a smooth audio waveform, sweeping across a pure ` +
      'near-black field, glowing softly in cool blue (#4cb2f0), thin and precise like a long-exposure light ' +
      'painting, everything else empty darkness.',
  },
];

async function createTask(key, input) {
  const res = await fetch(`${BASE}/createTask`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, input }),
  });
  const json = await res.json();
  if (!json?.data?.taskId) {
    throw new Error(`createTask failed (HTTP ${res.status}): ${JSON.stringify(json).slice(0, 400)}`);
  }
  return json.data.taskId;
}

async function poll(key, taskId, interval = 5000, maxAttempts = 90) {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const res = await fetch(`${BASE}/recordInfo?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${key}` },
    });
    const { data } = await res.json();
    if (data?.state === 'success') {
      const result = JSON.parse(data.resultJson);
      const urls = result.resultUrls || result.result_urls;
      if (!urls?.length) throw new Error(`success but no resultUrls: ${data.resultJson?.slice(0, 300)}`);
      return urls;
    }
    if (data?.state === 'fail') throw new Error(`task failed: ${data.failMsg}`);
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error('task timed out');
}

async function optimize(rawPath, outDir, name) {
  const image = sharp(rawPath);
  const meta = await image.metadata();
  const width = Math.min(meta.width || 1920, 1920);
  const base = sharp(rawPath).resize({ width, withoutEnlargement: true });
  await base.clone().avif({ quality: 52, effort: 6 }).toFile(path.join(outDir, `${name}.avif`));
  await base.clone().webp({ quality: 68 }).toFile(path.join(outDir, `${name}.webp`));
  const [a, w] = await Promise.all([
    fs.stat(path.join(outDir, `${name}.avif`)),
    fs.stat(path.join(outDir, `${name}.webp`)),
  ]);
  console.log(`  optimized ${name}: avif ${(a.size / 1024).toFixed(0)}KB, webp ${(w.size / 1024).toFixed(0)}KB`);
}

const key = await loadKey();
const rawDir = path.join(process.cwd(), 'public', 'generated', 'raw');
const outDir = path.join(process.cwd(), 'public', 'generated');
await fs.mkdir(rawDir, { recursive: true });

for (const asset of assets) {
  const rawPath = path.join(rawDir, `${asset.name}.png`);
  const exists = await fs.stat(rawPath).then(() => true).catch(() => false);
  if (exists) {
    console.log(`${asset.name}: raw exists, skipping generation`);
  } else {
    console.log(`Generating ${asset.name} ...`);
    const taskId = await createTask(key, {
      prompt: asset.prompt,
      aspect_ratio: asset.aspect_ratio,
      resolution: asset.resolution,
    });
    const [url] = await poll(key, taskId);
    const buffer = Buffer.from(await (await fetch(url)).arrayBuffer());
    await fs.writeFile(rawPath, buffer);
    console.log(`  saved raw ${asset.name}.png (${(buffer.length / 1024).toFixed(0)}KB)`);
  }
  await optimize(rawPath, outDir, asset.name);
}

console.log('Done. Commit only public/generated/*.avif and *.webp (raw/ is gitignored).');
