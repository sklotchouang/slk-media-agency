'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

// The 16 real sample pages live in /public/podcast-toolkits/samples as image-1..16.png.
const sampleNumbers = Array.from({ length: 16 }, (_, index) => index + 1);

/**
 * Responsive grid of strategy-report sample slides with a click-to-open lightbox.
 * Built as a small client component so the rest of the page stays server-rendered.
 * Keyboard: Escape closes, Left/Right move between slides.
 */
export default function StrategySampleGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const isOpen = openIndex !== null;
  const visible = showAll ? sampleNumbers : sampleNumbers.slice(0, 6);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (next) => setOpenIndex((current) => (current + next + sampleNumbers.length) % sampleNumbers.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight') show(1);
      else if (event.key === 'ArrowLeft') show(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, show]);

  return (
    <>
      <div className="pt-gallery">
        {visible.map((number, index) => (
          <button
            type="button"
            className="pt-thumb"
            key={number}
            onClick={() => setOpenIndex(index)}
            aria-label={`Open strategy report sample ${number}`}
          >
            <Image
              src={`/podcast-toolkits/samples/image-${number}.png`}
              alt={`Strategy report sample page ${number}`}
              fill
              sizes="(max-width: 768px) 45vw, 220px"
              style={{ objectFit: 'cover' }}
            />
            <span className="pt-thumb-zoom" aria-hidden="true"><i className="fas fa-search-plus"></i></span>
          </button>
        ))}
      </div>

      {!showAll && (
        <div className="pt-gallery-more-wrap">
          <button type="button" className="pt-gallery-more" onClick={() => setShowAll(true)}>
            Show all 16 pages
          </button>
        </div>
      )}

      {isOpen && (
        <div className="pt-lightbox" role="dialog" aria-modal="true" aria-label="Strategy report sample viewer" onClick={close}>
          <button type="button" className="pt-lb-close" onClick={close} aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
          <button
            type="button"
            className="pt-lb-nav pt-lb-prev"
            onClick={(event) => {
              event.stopPropagation();
              show(-1);
            }}
            aria-label="Previous sample"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <img
            className="pt-lb-image"
            src={`/podcast-toolkits/samples/image-${sampleNumbers[openIndex]}.png`}
            alt={`Strategy report sample page ${sampleNumbers[openIndex]}`}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="pt-lb-nav pt-lb-next"
            onClick={(event) => {
              event.stopPropagation();
              show(1);
            }}
            aria-label="Next sample"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <p className="pt-lb-count">{openIndex + 1} / {sampleNumbers.length}</p>
        </div>
      )}
    </>
  );
}
