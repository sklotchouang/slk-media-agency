'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Gumroad offer codes can contain only letters and numbers (Gumroad help, "Discount codes").
// Anything else in ?code= is stripped so a mistyped link can never produce a broken URL.
function readOfferCode() {
  if (typeof window === 'undefined') return '';
  const raw = new URLSearchParams(window.location.search).get('code') || '';
  return raw.replace(/[^A-Za-z0-9]/g, '').slice(0, 64);
}

// Reads ?code= once after mount. The server render (and the first client render) always
// has no code, so the page shows normal prices until the browser has read the URL.
function useOfferCode() {
  const [code, setCode] = useState('');
  useEffect(() => {
    setCode(readOfferCode());
  }, []);
  return code;
}

// Gumroad's documented format for a discount in a product link:
// https://user.gumroad.com/l/{product}/{code}
export function withOfferCode(url, code) {
  if (!code) return url;
  return `${url.replace(/\/+$/, '')}/${encodeURIComponent(code)}`;
}

// A guide whose data says outreach_code_applies: false (the 6 guides added 2026-10-03)
// keeps its plain link even when ?code= is set. Products without the field get the code.
function buyUrl(product, code) {
  return withOfferCode(product.gumroad_url, product.outreach_code_applies === false ? '' : code);
}

export function OfferCodeBanner() {
  const code = useOfferCode();
  if (!code) return null;
  return (
    <div className="tk-code-banner" role="status">
      <i className="fas fa-tag" aria-hidden="true"></i> Your code <strong>{code}</strong> is applied at checkout.
    </div>
  );
}

export function BundleBanner({ bundle, total, count }) {
  const code = useOfferCode();
  if (!bundle || !bundle.gumroad_url || bundle.price_usd == null) return null;
  return (
    <section className="tk-bundle-section" id="bundle">
      <div className="container">
        <div className="tk-bundle">
          {bundle.image && (
            <img
              className="tk-bundle-image"
              src={bundle.image}
              alt={`All ${count} Podcast Toolkits bundle cover`}
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="tk-bundle-body">
            <h2>
              All {count} Podcast Toolkits for ${bundle.price_usd} instead of ${total}
            </h2>
            <a className="tk-buy tk-buy-lg" href={withOfferCode(bundle.gumroad_url, code)}>
              Buy the bundle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ToolkitGrid({ products }) {
  const code = useOfferCode();
  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];
  const [filter, setFilter] = useState('All');
  const [openId, setOpenId] = useState(null);
  const [page, setPage] = useState(0);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  const visible = filter === 'All' ? products : products.filter((p) => p.category === filter);
  const open = products.find((p) => p.id === openId) || null;

  const close = useCallback(() => {
    setOpenId(null);
    if (triggerRef.current) triggerRef.current.focus();
  }, []);
  const step = useCallback(
    (dir) => setPage((current) => (open ? (current + dir + open.previews.length) % open.previews.length : 0)),
    [open]
  );

  const openViewer = (id, event) => {
    triggerRef.current = event.currentTarget;
    setPage(0);
    setOpenId(id);
  };

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight') step(1);
      else if (event.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (closeRef.current) closeRef.current.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, step]);

  return (
    <>
      <div className="tk-filters" role="group" aria-label="Filter guides by topic">
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            className={`tk-chip${filter === c ? ' is-active' : ''}`}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="tk-grid">
        {visible.map((p) => (
          <article className="tk-card" key={p.id}>
            <button
              type="button"
              className="tk-cover"
              onClick={(event) => openViewer(p.id, event)}
              aria-label={`See inside ${p.title}`}
            >
              <img
                src={p.cover.small}
                srcSet={`${p.cover.small} 400w, ${p.cover.large} 720w`}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                alt={`${p.title} cover`}
                width="400"
                height="566"
                loading="lazy"
                decoding="async"
              />
            </button>
            <div className="tk-card-body">
              <span className="tk-tag">{p.format}</span>
              <h3>{p.title}</h3>
              <p className="tk-summary">{p.summary}</p>
              <p className="tk-meta">
                <span className="tk-price">${p.price_usd}</span>
                <span className="tk-pages">{p.pages} pages</span>
              </p>
              <div className="tk-actions">
                <a className="tk-buy" href={buyUrl(p, code)} aria-label={`Buy ${p.title}`}>
                  Buy
                </a>
                <button type="button" className="tk-see" onClick={(event) => openViewer(p.id, event)}>
                  See inside
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Portalled to <body>: the guide section is its own stacking context, so a lightbox
          rendered inside it would sit under the fixed navbar and sticky CTA. */}
      {open && createPortal(
        <div
          className="tk-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Inside ${open.title}`}
          onClick={close}
          data-lenis-prevent
        >
          <div className="tk-lb-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="tk-lb-close" onClick={close} aria-label="Close" ref={closeRef}>
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
            <div className="tk-lb-viewer">
              <div className="tk-lb-stage">
                <button type="button" className="tk-lb-nav tk-lb-prev" onClick={() => step(-1)} aria-label="Previous page">
                  <i className="fas fa-chevron-left" aria-hidden="true"></i>
                </button>
                <img
                  className="tk-lb-page"
                  src={open.previews[page].full}
                  alt={`${open.title}, preview page ${page + 1} of ${open.previews.length}`}
                  width="900"
                  height="1273"
                  decoding="async"
                />
                <button type="button" className="tk-lb-nav tk-lb-next" onClick={() => step(1)} aria-label="Next page">
                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
              <div className="tk-lb-thumbs">
                {open.previews.map((pv, i) => (
                  <button
                    type="button"
                    key={pv.thumb}
                    className={`tk-lb-thumb${i === page ? ' is-active' : ''}`}
                    onClick={() => setPage(i)}
                    aria-label={`Show preview page ${i + 1}`}
                    aria-current={i === page}
                  >
                    <img src={pv.thumb} alt="" width="160" height="226" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </div>
            <div className="tk-lb-info">
              <span className="tk-tag">{open.format}</span>
              <h3>{open.title}</h3>
              <p className="tk-summary">{open.summary}</p>
              <p className="tk-lb-inside-label">What is inside</p>
              <ul className="tk-inside">
                {open.inside.map((item) => (
                  <li key={item}>
                    <i className="fas fa-check" aria-hidden="true"></i> {item}
                  </li>
                ))}
              </ul>
              <p className="tk-meta">
                <span className="tk-price">${open.price_usd}</span>
                <span className="tk-pages">{open.pages} pages</span>
              </p>
              <a className="tk-buy tk-buy-lg" href={buyUrl(open, code)} aria-label={`Buy ${open.title}`}>
                Buy
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
