import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BlogNav, BlogFooter } from '../../../../components/BlogChrome';
import BlogToc from '../../../../components/BlogToc';
import {
  getPosts, getPost, getRelated, getToolkit, topicLabel, formatDate, getAuthor, SITE, SHOW_DRAFTS,
} from '../../../../lib/blog';
import '../blog.css';

// Only posts known at build time exist. Drafts are left out of the live
// build (see lib/blog.js), so a draft URL is a 404 on slkmediaagency.com.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const title = post.seoTitle || `${post.title} | SLK Media Agency`;
  const url = `/blog/${post.slug}`;
  return {
    title,
    description: post.description,
    robots: post.status === 'published' ? { index: true, follow: true } : { index: false, follow: false },
    alternates: { canonical: url },
    authors: [{ name: getAuthor(post.author).name }],
    openGraph: {
      type: 'article',
      siteName: 'SLK Media Agency',
      title,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      images: [{ url: post.image?.og || '/og-image.jpg', width: 1200, height: 630, alt: post.image?.alt }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.author);
  const kit = getToolkit(post.toolkit);
  const related = getRelated(post);
  const url = `${SITE}/blog/${post.slug}`;
  const topic = topicLabel(post.topic);

  const toc = [
    { id: 'short-answer', text: 'The short answer' },
    ...post.toc,
    ...(post.faq?.length ? [{ id: 'faq', text: 'FAQ' }] : []),
    ...(post.sources?.length ? [{ id: 'sources', text: 'Sources' }] : []),
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      image: post.image?.og ? [`${SITE}${post.image.og}`] : undefined,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      wordCount: post.words,
      articleSection: topic,
      author: { '@type': 'Person', name: author.name, image: author.photo ? `${SITE}${author.photo}` : undefined, jobTitle: author.role, worksFor: { '@type': 'Organization', name: 'SLK Media Agency' } },
      publisher: {
        '@type': 'Organization',
        name: 'SLK Media Agency',
        url: SITE,
        logo: { '@type': 'ImageObject', url: `${SITE}/favicon/android-chrome-512x512.png` },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    ...(post.faq?.length
      ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }]
      : []),
  ];

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <BlogNav />
      <main id="main" className="blog-page blog-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {post.status !== 'published' && SHOW_DRAFTS ? (
          <div className="bl-draft-flag" role="note">Draft preview. Not published on slkmediaagency.com.</div>
        ) : null}

        <header className="bl-head">
          <div className="bl-wrap bl-narrow">
            <nav aria-label="Breadcrumb" className="bl-crumbs">
              <ol>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href={`/blog?topic=${post.topic}`}>{topic}</Link></li>
                <li aria-current="page">{post.shortTitle || post.title}</li>
              </ol>
            </nav>
            <h1>{post.title}</h1>
            <p className="bl-lede">{post.dek}</p>
            <div className="bl-byline">
              {author.photo ? <img className="bl-avatar bl-avatar-lg" src={author.photo} alt="" width={44} height={44} /> : <span className="bl-avatar bl-avatar-lg" aria-hidden="true">{author.initials}</span>}
              <span className="bl-strong">{author.name}</span>
              <span>{author.role}</span>
              <span>Published <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time></span>
              <span>Updated <time dateTime={post.updatedAt || post.publishedAt}>{formatDate(post.updatedAt || post.publishedAt)}</time></span>
              <span>{post.readMinutes} min read</span>
            </div>
          </div>
        </header>

        {post.image?.src ? (
          <div className="bl-wrap">
            <figure className="bl-hero-img">
              <img src={post.image.src} alt={post.image.alt} width={1680} height={720} fetchPriority="high" />
            </figure>
          </div>
        ) : null}

        <div className="bl-wrap bl-cols">
          <aside className="bl-side">
            <BlogToc items={toc} />
          </aside>

          <article className="bl-prose">
            <section id="short-answer" className="bl-box bl-answer" aria-labelledby="short-answer-h">
              <h2 id="short-answer-h" className="bl-overline bl-accent-text">The short answer</h2>
              <p className="bl-answer-text">{post.shortAnswer.text}</p>
              {post.shortAnswer.bullets?.length ? (
                <ul>{post.shortAnswer.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              ) : null}
            </section>

            {kit ? (
              <aside className="bl-box bl-kit" aria-label="Toolkit">
                <img src={kit.cover.small} alt={`${kit.title} cover`} width={120} height={155} loading="lazy" />
                <div>
                  <div className="bl-overline">Toolkit · ${kit.price_usd}</div>
                  <div className="bl-kit-title">{kit.title}</div>
                  <p>{post.toolkitPitch || kit.summary}</p>
                  <div className="bl-kit-ctas">
                    <a href={kit.gumroad_url} className="bl-btn" target="_blank" rel="noopener">Get {kit.title.replace(/^The /, 'the ')}, ${kit.price_usd}</a>
                    <a href="/podcast-toolkits#guides" className="bl-textlink">See all toolkits</a>
                  </div>
                </div>
              </aside>
            ) : null}

            <div className="bl-body" dangerouslySetInnerHTML={{ __html: post.html }} />

            <div className="bl-box bl-cta">
              <div>
                <div className="bl-cta-title">Rather not check every clip yourself?</div>
                <div className="bl-cta-sub">SLK Media Agency edits, captions and posts your clips by hand, every week.</div>
              </div>
              <a href="https://link.slkmediaagency.com/strmeet" className="bl-btn" target="_blank" rel="noopener">Book Strategy Call</a>
            </div>

            {post.faq?.length ? (
              <section className="bl-faq" aria-labelledby="faq">
                <h2 id="faq">Frequently asked questions</h2>
                {post.faq.map((f, i) => (
                  <details key={f.q} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </section>
            ) : null}

            {post.sources?.length ? (
              <section className="bl-sources" aria-labelledby="sources">
                <h2 id="sources">Sources</h2>
                <ol>
                  {post.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener">{s.label}</a>
                      {s.note ? <span>. {s.note}</span> : null}
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <section className="bl-box bl-author" aria-label="About the author">
              {author.photo ? <img className="bl-avatar bl-avatar-xl" src={author.photo} alt={author.name} width={72} height={72} loading="lazy" /> : <span className="bl-avatar bl-avatar-xl" aria-hidden="true">{author.initials}</span>}
              <div>
                <div className="bl-author-name">{author.name}</div>
                <div className="bl-author-role">{author.role}</div>
                <p>{author.bio}</p>
              </div>
            </section>
          </article>
        </div>

        {related.length ? (
          <section className="bl-related">
            <div className="bl-wrap">
              <h2>Keep reading</h2>
              <div className="bl-grid">
                {related.map((r) => (
                  <article key={r.slug} className="bl-card">
                    <Link href={`/blog/${r.slug}`} className="bl-card-link">
                      <div className="bl-thumb">{r.image?.card ? <img src={r.image.card} alt="" loading="lazy" width={640} height={360} /> : null}</div>
                      <div className="bl-card-body">
                        <span className="bl-cat">{topicLabel(r.topic)}</span>
                        <h3>{r.title}</h3>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bl-bands">
          <div className="bl-wrap">
            <div className="bl-band">
              <div>
                <h2>Want us to make the clips for you?</h2>
                <p>Book a call and we will show you what your episodes could look like as clips.</p>
              </div>
              <a href="https://link.slkmediaagency.com/strmeet" className="bl-btn" target="_blank" rel="noopener">Book Strategy Call</a>
            </div>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
}
