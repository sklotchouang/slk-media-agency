// tools/shot.js - render a URL in headless Chrome and capture a screenshot
// plus console errors and document height.
//
// Usage:
//   node tools/shot.js <url> <out.png> [WxH] [settleMs] [scrollY|mid|bottom] [--reduced-motion]
//   node tools/shot.js http://localhost:3000/podcast-toolkits out.png 1440x900 4000
//   node tools/shot.js http://localhost:3000/ out.png 390x844 4000 mid --reduced-motion
//
// Prints one JSON line: {"out":"out.png","docHeight":<n>,"scrollY":<n>,"errors":[...]}

const puppeteer = require('puppeteer');

async function main() {
  const args = process.argv.slice(2).filter((a) => a !== '--reduced-motion');
  const reducedMotion = process.argv.includes('--reduced-motion');
  const [url, out = 'out.png', size = '1440x900', settleRaw = '3000', scrollRaw = '0'] = args;
  if (!url) {
    console.error('usage: node tools/shot.js <url> [out.png] [WxH] [settleMs] [scrollY|mid|bottom] [--reduced-motion]');
    process.exit(1);
  }
  const [width, height] = size.split('x').map(Number);
  const settle = Number(settleRaw);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  if (reducedMotion) {
    await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  }

  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      errors.push(`[${msg.type()}] ${msg.text()}`);
    }
  });
  page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`));
  page.on('requestfailed', (req) => {
    // net::ERR_ABORTED for cancelled media loads is routine; report the rest
    const failure = req.failure()?.errorText || '';
    if (failure !== 'net::ERR_ABORTED') errors.push(`[requestfailed] ${req.url()} ${failure}`);
  });

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  let scrollY = 0;
  if (scrollRaw === 'mid') scrollY = Math.max(0, Math.round(docHeight / 2 - height / 2));
  else if (scrollRaw === 'bottom') scrollY = Math.max(0, docHeight - height);
  else scrollY = Number(scrollRaw) || 0;

  if (scrollY > 0) {
    await page.evaluate((y) => {
      if (window.__lenis) window.__lenis.scrollTo(y, { immediate: true });
      else window.scrollTo(0, y);
    }, scrollY);
    // let reveals and lazy media catch up
    await new Promise((r) => setTimeout(r, Math.max(800, settle / 3)));
  }
  await new Promise((r) => setTimeout(r, settle));

  await page.screenshot({ path: out });
  await browser.close();

  console.log(JSON.stringify({ out, docHeight, scrollY, errors }));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
