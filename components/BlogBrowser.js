'use client';

// /blog index: featured post, topic tabs with counts, search, and pages of
// 9 cards (Samuel bans endless scrolling). The server renders page 1 of
// "All"; tab, search and page are kept in the URL (?topic=&q=&page=) so a
// link from an article breadcrumb opens the right tab.
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

function Card({ p, topics }) {
  const label = topics.find((t) => t.id === p.topic)?.label || p.topic;
  return (
    <article className="bl-card">
      <Link href={`/blog/${p.slug}`} className="bl-card-link">
        <div className="bl-thumb">
          {p.image?.card ? <img src={p.image.card} alt="" loading="lazy" width={640} height={360} /> : null}
        </div>
        <div className="bl-card-body">
          <span className="bl-cat">{label}</span>
          <h3>{p.title}</h3>
          <p>{p.dek}</p>
          <div className="bl-meta">{p.author?.name} · {p.readMinutes} min read</div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogBrowser({ posts, topics, perPage = 9 }) {
  const [topic, setTopic] = useState('all');
  const [query, setQuery] = useState('');
  const [draft, setDraft] = useState('');
  const [page, setPage] = useState(1);

  // Read the starting state from the URL once.
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    const t = sp.get('topic');
    if (t && topics.some((x) => x.id === t)) setTopic(t);
    const q = sp.get('q');
    if (q) { setQuery(q); setDraft(q); }
    const pg = Number(sp.get('page'));
    if (pg > 1) setPage(pg);
  }, [topics]);

  // Keep the URL in step, without adding history entries.
  useEffect(() => {
    const sp = new URLSearchParams();
    if (topic !== 'all') sp.set('topic', topic);
    if (query) sp.set('q', query);
    if (page > 1) sp.set('page', String(page));
    const qs = sp.toString();
    window.history.replaceState(null, '', qs ? `/blog?${qs}` : '/blog');
  }, [topic, query, page]);

  const counts = useMemo(() => {
    const c = { all: posts.length };
    topics.forEach((t) => { c[t.id] = posts.filter((p) => p.topic === t.id).length; });
    return c;
  }, [posts, topics]);

  const showFeatured = topic === 'all' && !query && page === 1 && posts.length > 0;
  const featured = showFeatured ? posts[0] : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (topic !== 'all' && p.topic !== topic) return false;
      if (!q) return true;
      return `${p.title} ${p.dek}`.toLowerCase().includes(q);
    });
  }, [posts, topic, query]);

  // On "All" page 1 the featured post sits above the grid, so the grid
  // starts with the next post.
  const list = topic === 'all' && !query ? filtered.slice(1) : filtered;
  const pages = Math.max(1, Math.ceil(list.length / perPage));
  const current = Math.min(page, pages);
  const shown = list.slice((current - 1) * perPage, current * perPage);

  function pickTopic(id) { setTopic(id); setPage(1); }
  function submit(e) { e.preventDefault(); setQuery(draft.trim()); setPage(1); }
  function go(n) {
    setPage(n);
    document.getElementById('bl-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const tabs = [{ id: 'all', label: 'All' }, ...topics.filter((t) => counts[t.id] > 0)];

  return (
    <>
      <form className="bl-search" role="search" onSubmit={submit}>
        <label htmlFor="bl-q" className="bl-sr">Search the blog</label>
        <input id="bl-q" type="search" placeholder="Search articles" value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {featured ? (
        <section className="bl-featured" aria-label="Featured article">
          <Link href={`/blog/${featured.slug}`} className="bl-feat-card">
            <div className="bl-feat-img">
              {featured.image?.card ? <img src={featured.image.card} alt={featured.image.alt || ''} width={1280} height={720} /> : null}
            </div>
            <div className="bl-feat-body">
              <div className="bl-pills">
                <span className="bl-pill">Featured</span>
                <span className="bl-pill">{topics.find((t) => t.id === featured.topic)?.label}</span>
              </div>
              <h2>{featured.shortTitle || featured.title}</h2>
              <p>{featured.dek}</p>
              <div className="bl-byline">
                <img className="bl-avatar" src={featured.author?.photo} alt="" width={36} height={36} />
                <span>{featured.author?.name}</span>
                <span>Updated {featured.updatedLabel}</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <span className="bl-readmore">Read the guide</span>
            </div>
          </Link>
        </section>
      ) : null}

      <div id="bl-list" className="bl-tabs" role="tablist" aria-label="Topics">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={topic === t.id}
            className={topic === t.id ? 'bl-tab is-on' : 'bl-tab'}
            onClick={() => pickTopic(t.id)}
          >
            {t.label} <span className="bl-count">{counts[t.id]}</span>
          </button>
        ))}
      </div>

      {query ? (
        <p className="bl-result-note">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} for “{query}”.{' '}
          <button type="button" className="bl-linkbtn" onClick={() => { setQuery(''); setDraft(''); setPage(1); }}>Clear search</button>
        </p>
      ) : null}

      {shown.length ? (
        <div className="bl-grid">
          {shown.map((p) => <Card key={p.slug} p={p} topics={topics} />)}
        </div>
      ) : (
        <p className="bl-empty">
          {query || topic !== 'all' ? 'No articles match yet.' : 'More guides are on the way.'}
        </p>
      )}

      {pages > 1 ? (
        <nav className="bl-pages" aria-label="Pages">
          {current > 1 ? <button type="button" className="bl-pg" onClick={() => go(current - 1)}>Previous</button> : null}
          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button key={n} type="button" className={n === current ? 'bl-pg is-on' : 'bl-pg'} aria-current={n === current ? 'page' : undefined} onClick={() => go(n)}>{n}</button>
          ))}
          {current < pages ? <button type="button" className="bl-pg" onClick={() => go(current + 1)}>Next</button> : null}
        </nav>
      ) : null}
    </>
  );
}
