import { notFound } from 'next/navigation';
import { BlogNav, BlogFooter } from '../../../components/BlogChrome';
import BlogBrowser from '../../../components/BlogBrowser';
import { getPosts, getAuthor, TOPICS, POSTS_PER_PAGE, SITE, formatDate, toolkitStats } from '../../../lib/blog';
import './blog.css';

const TITLE = 'Podcast Growth Blog: Clips, AI and Audience Guides | SLK Media Agency';
const DESCRIPTION =
  'Practical guides for podcasters on clips, distribution, AI tools, guests and sponsors, from the team at SLK Media Agency that edits podcast clips every week.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: TITLE,
    description: DESCRIPTION,
    url: '/blog',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

export default function BlogIndex() {
  const posts = getPosts();
  // Nothing published yet: the blog does not exist on the live site.
  if (!posts.length) notFound();

  const cards = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    shortTitle: p.shortTitle,
    dek: p.dek,
    topic: p.topic,
    readMinutes: p.readMinutes,
    author: { name: getAuthor(p.author).name, photo: getAuthor(p.author).photo },
    updatedLabel: formatDate(p.updatedAt || p.publishedAt),
    image: p.image ? { card: p.image.card, alt: p.image.alt } : null,
  }));
  const tk = toolkitStats();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'The SLK Media Agency Blog',
      url: `${SITE}/blog`,
      description: DESCRIPTION,
      publisher: { '@type': 'Organization', name: 'SLK Media Agency', url: SITE },
      blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${SITE}/blog/${p.slug}`,
        datePublished: p.publishedAt,
        dateModified: p.updatedAt || p.publishedAt,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      ],
    },
  ];

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <BlogNav />
      <main id="main" className="blog-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="bl-hero">
          <div className="bl-wrap">
            <div className="bl-overline">The SLK Media Agency Blog</div>
            <h1>Grow your podcast with <span className="bl-accent">short clips</span> that bring listeners back</h1>
            <p className="bl-lede">Practical guides on clips, distribution and audience growth, from the team that edits clips for podcasters every week.</p>
          </div>
        </section>

        <section className="bl-index">
          <div className="bl-wrap">
            <BlogBrowser posts={cards} topics={TOPICS} perPage={POSTS_PER_PAGE} />
          </div>
        </section>

        <section className="bl-bands">
          <div className="bl-wrap">
            <div className="bl-band">
              <div>
                <h2>Prefer to do it yourself?</h2>
                <p>{tk.count} podcast toolkits with templates, checklists and worked examples. From ${tk.from}.</p>
              </div>
              <a href="/podcast-toolkits#guides" className="bl-btn">Browse the toolkits</a>
            </div>
            <div className="bl-band bl-band-quiet">
              <div>
                <h2>Want us to make the clips for you?</h2>
                <p>Book a call and we will show you what your episodes could look like as clips.</p>
              </div>
              <a href="https://link.slkmediaagency.com/strmeet" className="bl-btn bl-btn-ghost" target="_blank" rel="noopener">Book Strategy Call</a>
            </div>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
}
