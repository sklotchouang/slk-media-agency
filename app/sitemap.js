// /sitemap.xml. Replaced the hand-kept public/sitemap.xml on 10 Nov 2026 so
// published blog posts are listed automatically. The static list below is the
// old file's list, unchanged. Add a line here when you add a page.
import { getPosts, SITE } from '../lib/blog';

const PAGES = [
  ['/', 'weekly', 1.0],
  ['/podcast-multiplier', 'monthly', 0.9],
  ['/pricing', 'monthly', 0.9],
  ['/portfolio', 'monthly', 0.8],
  ['/testimonials', 'monthly', 0.8],
  ['/success/case-studies', 'monthly', 0.8],
  ['/success/conjure-queen', 'monthly', 0.6],
  ['/success/brian-burton', 'monthly', 0.6],
  ['/success/steve-garrett', 'monthly', 0.6],
  ['/success/rws-group', 'monthly', 0.6],
  ['/success/sales-fix', 'monthly', 0.6],
  ['/success/alpine-institute', 'monthly', 0.6],
  ['/privacy-policy', 'yearly', 0.3],
  ['/terms-and-conditions', 'yearly', 0.3],
];

export default function sitemap() {
  const pages = PAGES.map(([p, changeFrequency, priority]) => ({ url: `${SITE}${p}`, changeFrequency, priority }));
  // Only published posts (drafts never reach the live build, see lib/blog.js).
  const posts = getPosts().filter((p) => p.status === 'published');
  if (!posts.length) return pages;
  return [
    ...pages,
    { url: `${SITE}/blog`, lastModified: posts[0].updatedAt || posts[0].publishedAt, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: p.updatedAt || p.publishedAt, changeFrequency: 'monthly', priority: 0.7 })),
  ];
}
