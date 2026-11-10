'use client';

// Article table of contents. Highlights the section in view. The links are
// plain #anchors, so SiteBehaviors' anchor handler scrolls and moves focus.
import { useEffect, useState } from 'react';

export default function BlogToc({ items }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const heads = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!heads.length) return undefined;
    const onScroll = () => {
      let current = heads[0].id;
      for (const h of heads) {
        if (h.getBoundingClientRect().top < 140) current = h.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <nav className="bl-toc" aria-label="Table of contents">
      <div className="bl-overline">On this page</div>
      {items.map((i) => (
        <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'is-on' : undefined} aria-current={active === i.id ? 'true' : undefined}>
          {i.text}
        </a>
      ))}
    </nav>
  );
}
