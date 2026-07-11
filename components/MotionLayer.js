'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide motion primitives, applied to the server-rendered DOM so page
 * content (and its frozen copy) never has to become a client component:
 *
 *  - Lenis smooth scrolling with custom easing
 *  - staggered scroll-in reveals, auto-annotated per section
 *  - count-up on .stat-number values when they enter the viewport
 *  - magnetic primary buttons on fine pointers
 *
 * Everything is gated behind prefers-reduced-motion: when reduced, the page
 * stays fully static and this component only cleans up after itself. Reveal
 * styles only activate once <html data-motion="on"> is set, so a JS failure
 * can never hide content.
 */

const STAGGER_CONTAINERS = [
  '.features', '.stats-band', '.problem-points', '.case-showcase-grid',
  '.client-videos', '.portfolio-items', '.cs-grid', '.ba-grid', '.problem-grid',
  '.pt-deliverables', '.pt-steps', '.pt-vtests', '.qualification-list',
  '.accordion', '.process-steps', '.steps-timeline', '.clip-grid', '.problem-list',
  '.cs-overview-stats', '.t-features',
].join(',');

function annotateReveals(root) {
  const annotated = [];
  root.querySelectorAll('main section, body > section, .pt-page section').forEach((section) => {
    const container = section.querySelector(':scope > .container') || section;
    Array.from(container.children).forEach((child) => {
      if (child.matches('script, style, .grid-pattern, .grid-pattern-overlay')) return;
      if (child.matches(STAGGER_CONTAINERS)) {
        Array.from(child.children).forEach((item, index) => {
          item.classList.add('rv');
          item.style.setProperty('--rv-delay', `${Math.min(index * 70, 420)}ms`);
          // grid items glide in from alternating sides
          item.style.setProperty('--rv-x', index % 2 ? '44px' : '-44px');
          annotated.push(item);
        });
      } else {
        child.classList.add('rv');
        annotated.push(child);
      }
    });
  });
  return annotated;
}

function parseStat(text) {
  // Animates the first numeric token of a stat ("12.4M", "$4.2-8.5K", "87%")
  // and always restores the exact original string at the end.
  const match = text.match(/\d+(?:[.,]\d+)?/);
  if (!match) return null;
  return {
    original: text,
    value: parseFloat(match[0].replace(',', '.')),
    decimals: (match[0].split(/[.,]/)[1] || '').length,
    prefix: text.slice(0, match.index),
    suffix: text.slice(match.index + match[0].length),
  };
}

export default function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const html = document.documentElement;

    if (reduced) {
      html.removeAttribute('data-motion');
      return undefined;
    }

    html.setAttribute('data-motion', 'on');

    const cleanups = [];

    // ----- Lenis smooth scroll (dynamically imported, skipped when reduced) -----
    let lenis = null;
    let rafId = 0;
    let cancelled = false;
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      // Exposed so in-page anchor scrolling (SiteBehaviors) and the
      // screenshot tooling can drive the scroller instead of fighting it.
      window.__lenis = lenis;
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }).catch(() => {});
    cleanups.push(() => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    });

    // ----- Injected motion visuals: equalizer dividers + platform marquee -----
    // Decorative only (aria-hidden), added client-side so the server-rendered
    // copy stays untouched. Only exists while motion is on.
    const injected = [];

    const EQ_SECTIONS = [
      '.problem', '.how-it-works', '.testimonials', '.qualification', '.faq',
      '.problem-section', '.results-section', '.comparison-section',
      '.t-features', '.cs-section',
    ].join(',');
    document.querySelectorAll(EQ_SECTIONS).forEach((section) => {
      const container = section.querySelector(':scope > .container') || section;
      const eq = document.createElement('div');
      eq.className = 'eq-divider';
      eq.setAttribute('aria-hidden', 'true');
      for (let i = 0; i < 7; i += 1) eq.appendChild(document.createElement('span'));
      container.insertBefore(eq, container.firstChild);
      injected.push(eq);
    });

    if (pathname === '/' || pathname === '/podcast-multiplier') {
      const hero = document.querySelector('.hero, .hero-section');
      if (hero) {
        const ICONS = [
          'fa-brands fa-youtube', 'fa-brands fa-spotify', 'fa-brands fa-tiktok',
          'fa-brands fa-instagram', 'fa-brands fa-linkedin-in', 'fa-brands fa-x-twitter',
          'fa-brands fa-facebook-f', 'fa-brands fa-apple', 'fa-solid fa-podcast',
        ];
        const marquee = document.createElement('div');
        marquee.className = 'platform-marquee';
        marquee.setAttribute('aria-hidden', 'true');
        const track = document.createElement('div');
        track.className = 'marquee-track';
        // two identical sets so the -50% glide loops seamlessly
        for (let set = 0; set < 2; set += 1) {
          ICONS.forEach((cls) => {
            const icon = document.createElement('i');
            icon.className = cls;
            track.appendChild(icon);
          });
        }
        marquee.appendChild(track);
        hero.insertAdjacentElement('afterend', marquee);
        injected.push(marquee);
      }
    }

    cleanups.push(() => {
      injected.forEach((el) => el.remove());
    });

    // ----- Scroll progress hairline + parallax variable -----
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progressBar);
    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const max = html.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        html.style.setProperty('--scroll-progress', max > 0 ? String(Math.min(1, y / max)) : '0');
        html.style.setProperty('--sy', String(Math.min(y, 900)));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(scrollRaf);
      progressBar.remove();
      html.style.removeProperty('--scroll-progress');
      html.style.removeProperty('--sy');
    });

    // ----- Scroll-in reveals -----
    const revealed = annotateReveals(document);
    if (revealed.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('rv-in');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0 }
      );
      revealed.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      revealed.forEach((el) => el.classList.add('rv-in'));
    }
    cleanups.push(() => {
      revealed.forEach((el) => {
        el.classList.remove('rv', 'rv-in');
        el.style.removeProperty('--rv-delay');
        el.style.removeProperty('--rv-x');
      });
    });

    // ----- Count-up stats -----
    const stats = Array.from(document.querySelectorAll('.stat-number'));
    if (stats.length && 'IntersectionObserver' in window) {
      const statIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            statIo.unobserve(entry.target);
            const el = entry.target;
            const stat = parseStat(el.textContent);
            if (!stat) return;
            const start = performance.now();
            const duration = 1300;
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 4);
              el.textContent = p >= 1
                ? stat.original
                : `${stat.prefix}${(stat.value * eased).toFixed(stat.decimals)}${stat.suffix}`;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.4 }
      );
      stats.forEach((el) => statIo.observe(el));
      cleanups.push(() => statIo.disconnect());
    }

    // ----- Price anchor reveal (/podcast-toolkits) -----
    const anchors = Array.from(
      document.querySelectorAll('.pt-anchor, .pt-price-row')
    ).filter((el) => el.querySelector('.pt-old-price, .pt-price-old'));
    if (anchors.length && 'IntersectionObserver' in window) {
      anchors.forEach((el) => el.classList.add('price-anchor-wait'));
      const priceIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            priceIo.unobserve(entry.target);
            entry.target.classList.remove('price-anchor-wait');
            entry.target.classList.add('price-anchor-go');
          });
        },
        { threshold: 0.6 }
      );
      anchors.forEach((el) => priceIo.observe(el));
      cleanups.push(() => priceIo.disconnect());
      cleanups.push(() => {
        anchors.forEach((el) => el.classList.remove('price-anchor-wait', 'price-anchor-go'));
      });
    }

    // ----- Magnetic primary buttons (fine pointers only) -----
    if (window.matchMedia('(pointer: fine)').matches) {
      const buttons = document.querySelectorAll('.primary-cta, .btn-primary, .cta-button');
      const controller = new AbortController();
      buttons.forEach((btn) => {
        btn.addEventListener(
          'pointermove',
          (event) => {
            const rect = btn.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.14}px, ${y * 0.22 - 2}px)`;
          },
          { signal: controller.signal }
        );
        btn.addEventListener(
          'pointerleave',
          () => {
            btn.style.transform = '';
          },
          { signal: controller.signal }
        );
      });
      cleanups.push(() => {
        controller.abort();
        buttons.forEach((btn) => {
          btn.style.transform = '';
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
