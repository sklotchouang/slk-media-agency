// Blog data layer. Posts are files in content/blog/posts:
//   <slug>.json  metadata, short answer, FAQ, sources, toolkit id, status
//   <slug>.html  the article body (plain HTML, every <h2> carries an id)
//
// Publishing rule (Samuel, 10 Nov 2026): a post goes live only after he
// approves it. A post with "status": "draft" is never built on the live site.
// Drafts render only when the build runs with BLOG_PREVIEW=1 (local preview).
// While no post is published, /blog and every /blog/<slug> return 404 live.

import fs from 'node:fs';
import path from 'node:path';
import toolkits from '../app/(multiplier)/podcast-toolkits/toolkits.json';

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog', 'posts');

export const SITE = 'https://slkmediaagency.com';
export const SHOW_DRAFTS = process.env.BLOG_PREVIEW === '1';
export const POSTS_PER_PAGE = 9;

// Topic tabs. Order here is the tab order on /blog.
export const TOPICS = [
  { id: 'growth', label: 'Growth and audits' },
  { id: 'clips', label: 'Clips and hooks' },
  { id: 'repurposing', label: 'Repurposing' },
  { id: 'ai', label: 'AI for podcasters' },
  { id: 'guests', label: 'Guests and episodes' },
  { id: 'monetization', label: 'Monetization' },
];

// Authors are the SDR personas, in rotation (Samuel, 10 Nov 2026: not his
// face; rotating the SDRs builds their reputation). A new post takes the next
// name in AUTHOR_ROTATION after the newest post's author:
//   node -e "import('./lib/blog.js').then(m=>console.log(m.nextAuthor()))"
// If an SDR account is retired, remove her from AUTHOR_ROTATION only; keep
// her entry in AUTHORS so her published posts keep their byline.
export const AUTHORS = {
  'natalie-nicholas': {
    name: 'Natalie Nicholas',
    initials: 'NN',
    photo: '/blog/authors/natalie-nicholas.webp',
    role: 'Growth team, SLK Media Agency',
    bio: 'Natalie Nicholas works on the growth team at SLK Media Agency, where the team edits, captions and posts short clips from podcast episodes every week. She writes about the first seconds of a clip: the cut, the frame and the hook.',
  },
  'claire-peter': {
    name: 'Claire Peter',
    initials: 'CP',
    photo: '/blog/authors/claire-peter.webp',
    role: 'Growth team, SLK Media Agency',
    bio: 'Claire Peter works on the growth team at SLK Media Agency, where the team edits, captions and posts short clips from podcast episodes every week. She writes about the habits that separate growing shows from stalled ones.',
  },
  'rachel-davis': {
    name: 'Rachel Davis',
    initials: 'RD',
    photo: '/blog/authors/rachel-davis.webp',
    role: 'Growth team, SLK Media Agency',
    bio: 'Rachel Davis works on the growth team at SLK Media Agency, where the team edits, captions and posts short clips from podcast episodes every week. She writes about turning a podcast into revenue: sponsors, offers and pricing.',
  },
};

export const AUTHOR_ROTATION = ['natalie-nicholas', 'claire-peter', 'rachel-davis'];

export function getAuthor(id) {
  return AUTHORS[id] || AUTHORS[AUTHOR_ROTATION[0]];
}

// The author the next new post should get (all posts, drafts included).
export function nextAuthor() {
  if (!fs.existsSync(POSTS_DIR)) return AUTHOR_ROTATION[0];
  const all = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8')))
    .sort((a, b) => (a.publishedAt || '').localeCompare(b.publishedAt || ''));
  const last = all.length ? all[all.length - 1].author : null;
  const i = AUTHOR_ROTATION.indexOf(last);
  return AUTHOR_ROTATION[(i + 1) % AUTHOR_ROTATION.length];
}

export function topicLabel(id) {
  const t = TOPICS.find((x) => x.id === id);
  return t ? t.label : id;
}

export function getToolkit(id) {
  return toolkits.products.find((p) => p.id === id) || null;
}

export function toolkitStats() {
  const prices = toolkits.products.map((p) => p.price_usd);
  return { count: toolkits.products.length, from: Math.min(...prices) };
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function readPost(slug) {
  const meta = JSON.parse(fs.readFileSync(path.join(POSTS_DIR, `${slug}.json`), 'utf8'));
  const html = fs.readFileSync(path.join(POSTS_DIR, `${slug}.html`), 'utf8');
  const extra = [
    meta.shortAnswer?.text || '',
    ...(meta.shortAnswer?.bullets || []),
    ...(meta.faq || []).flatMap((f) => [f.q, f.a]),
  ].join(' ');
  const words = wordCount(stripTags(html)) + wordCount(extra);
  const toc = [...html.matchAll(/<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => ({
    id: m[1],
    text: stripTags(m[2]).replace(/\s+/g, ' ').trim(),
  }));
  return { ...meta, slug, html, words, readMinutes: Math.max(1, Math.round(words / 230)), toc };
}

function isVisible(post) {
  return post.status === 'published' || SHOW_DRAFTS;
}

// Every visible post, newest first. Body HTML is kept off this list so the
// index page does not ship article bodies to the browser.
export function getPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => readPost(f.replace(/\.json$/, '')))
    .filter(isVisible)
    .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
    .map(({ html, toc, ...rest }) => rest);
}

export function getPost(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  if (!fs.existsSync(path.join(POSTS_DIR, `${slug}.json`))) return null;
  const post = readPost(slug);
  return isVisible(post) ? post : null;
}

// Up to 3 posts: same topic first, then the newest others.
export function getRelated(post, limit = 3) {
  const others = getPosts().filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.topic === post.topic);
  const rest = others.filter((p) => p.topic !== post.topic);
  return [...same, ...rest].slice(0, limit);
}

export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T12:00:00Z`);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
