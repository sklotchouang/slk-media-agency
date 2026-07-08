'use client';

import { useEffect, useRef } from 'react';

/**
 * The home hero's living background: an animated audio waveform field on a
 * canvas, plus a soft pointer-following spotlight. Design goals:
 *
 *  - code-split: the drawing module only ships to pages that render this
 *  - lazy: mounts after idle, pauses whenever the hero leaves the viewport
 *  - respectful: never mounts under prefers-reduced-motion (static CSS
 *    atmosphere remains), tuned down on small screens
 *  - cheap: 2D canvas, transform/opacity only elsewhere, no layout writes
 */
export default function HeroAtmosphere() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let cleanup = null;
    let disposed = false;

    const start = () => {
      import('./heroWaveform').then(({ mountWaveform }) => {
        if (disposed) return;
        cleanup = mountWaveform(host);
      }).catch(() => {});
    };

    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
    const idleId = idle(start);

    return () => {
      disposed = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={hostRef} className="hero-atmosphere" aria-hidden="true" />;
}
