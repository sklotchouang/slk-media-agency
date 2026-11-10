// /robots.txt. Replaced public/robots.txt on 10 Nov 2026 with the same rules.
// Every crawler is allowed, including the AI search crawlers (OAI-SearchBot,
// PerplexityBot, Googlebot, Bingbot), because the blog is written to be cited.
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/pre-call', '/pre-call.html', '/*.md$'],
      },
    ],
    sitemap: 'https://slkmediaagency.com/sitemap.xml',
  };
}
