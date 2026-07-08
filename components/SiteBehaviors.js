'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Recreates the behavior of the original script.js and
 * podcast-multiplier-script.js files: mobile menu, navbar shadow on scroll,
 * video play/pause overlays, autoplaying preview clips, testimonial carousel,
 * FAQ accordion, smooth scrolling for in-page anchors, and the sticky
 * call-to-action bar. It runs again after every page navigation and cleans up
 * after itself, which is what the original files could not do in an app.
 */
export default function SiteBehaviors() {
  const pathname = usePathname();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const cleanups = [];

    // ----- Mobile menu toggle -----
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    function closeMenu() {
      if (!navMenu) return;
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle && navMenu) {
      menuToggle.addEventListener(
        'click',
        (event) => {
          event.stopPropagation();
          const open = navMenu.classList.toggle('active');
          document.body.classList.toggle('menu-open', open);
          menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        },
        { signal }
      );
      document.addEventListener(
        'click',
        (event) => {
          if (navMenu.classList.contains('active') && !event.target.closest('.navbar')) {
            closeMenu();
          }
        },
        { signal }
      );
      document.addEventListener(
        'keydown',
        (event) => {
          if (event.key === 'Escape') closeMenu();
        },
        { signal }
      );
    }

    // ----- Navbar shadow once the page is scrolled -----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const markScrolled = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
      markScrolled();
      window.addEventListener('scroll', markScrolled, { passive: true, signal });
    }

    // ----- Click-to-play videos with an is-playing marker on their card -----
    const containerSelector = '.video-wrapper, .client-video, .card-media, .portfolio-video';

    function toggleVideo(trigger) {
      const wrapper = trigger.closest(containerSelector);
      const video = wrapper && wrapper.querySelector('video');
      if (!video) return;
      document.querySelectorAll('video').forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
      if (video.paused) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }

    document.querySelectorAll('video').forEach((video) => {
      const wrapper = video.closest(containerSelector);
      if (!wrapper) return;
      video.addEventListener('play', () => wrapper.classList.add('is-playing'), { signal });
      video.addEventListener('pause', () => wrapper.classList.remove('is-playing'), { signal });
      video.addEventListener(
        'ended',
        () => {
          wrapper.classList.remove('is-playing');
          try {
            video.currentTime = 0;
          } catch (error) {
            // ignored, exactly like the original script
          }
        },
        { signal }
      );
    });

    document.querySelectorAll('.video-overlay, .play-icon').forEach((overlay) => {
      overlay.addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          toggleVideo(overlay);
        },
        { signal }
      );
      overlay.addEventListener(
        'keydown',
        (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleVideo(overlay);
          }
        },
        { signal }
      );
    });

    // ----- Preview clips that play only while visible on screen -----
    const autoplayVideos = document.querySelectorAll('video[data-autoplay]');
    if (autoplayVideos.length && 'IntersectionObserver' in window) {
      const viewObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else if (!video.paused) {
              video.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      autoplayVideos.forEach((video) => viewObserver.observe(video));
      cleanups.push(() => viewObserver.disconnect());

      // When the tab becomes visible again (for example after switching back),
      // restart whichever preview clips are on screen, since browsers pause
      // them while the tab is hidden.
      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.visibilityState !== 'visible') return;
          autoplayVideos.forEach((video) => {
            const rect = video.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              video.play().catch(() => {});
            }
          });
        },
        { signal }
      );
    }

    // ----- Testimonial carousel -----
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.control.prev');
    const nextButton = document.querySelector('.control.next');
    if (slides.length && prevButton && nextButton) {
      let current = 0;
      let timer = null;
      const show = (index) => {
        slides.forEach((slide) => slide.classList.remove('active'));
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
      };
      const next = () => show(current + 1);
      const restartTimer = () => {
        if (timer) clearInterval(timer);
        timer = setInterval(next, 6000);
      };
      nextButton.addEventListener(
        'click',
        () => {
          next();
          restartTimer();
        },
        { signal }
      );
      prevButton.addEventListener(
        'click',
        () => {
          show(current - 1);
          restartTimer();
        },
        { signal }
      );
      restartTimer();
      cleanups.push(() => {
        if (timer) clearInterval(timer);
      });
    }

    // ----- FAQ accordion, one item open at a time -----
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item) => {
      const header = item.querySelector('.accordion-header');
      if (!header) return;
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', 'false');
      const toggleItem = () => {
        const willOpen = !item.classList.contains('active');
        accordionItems.forEach((other) => {
          other.classList.remove('active');
          const otherHeader = other.querySelector('.accordion-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        });
        if (willOpen) {
          item.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
        }
      };
      header.addEventListener('click', toggleItem, { signal });
      header.addEventListener(
        'keydown',
        (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleItem();
          }
        },
        { signal }
      );
    });

    // ----- Smooth scrolling for in-page anchor links, offset for the navbar -----
    document.addEventListener(
      'click',
      (event) => {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (href === '#' || href.length < 2) return;
        let target = null;
        try {
          target = document.querySelector(href);
        } catch (error) {
          return;
        }
        if (!target) return;
        event.preventDefault();
        closeMenu();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        if (window.__lenis) {
          window.__lenis.scrollTo(top);
        } else {
          window.scrollTo({ top, behavior: 'smooth' });
        }
      },
      { signal }
    );

    // ----- Sticky bottom call-to-action bar -----
    const stickyCta = document.querySelector('.sticky-cta');
    const hero = document.querySelector('.hero') || document.querySelector('.hero-section');
    const footerCta =
      document.querySelector('.footer-cta') || document.querySelector('.footer-cta-section');
    if (stickyCta && hero) {
      const updateSticky = () => {
        const y = window.scrollY;
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        const stop = footerCta ? footerCta.offsetTop : Infinity;
        stickyCta.classList.toggle('visible', y > heroBottom && y < stop - 200);
      };
      updateSticky();
      window.addEventListener('scroll', updateSticky, { passive: true, signal });
    }

    return () => {
      controller.abort();
      cleanups.forEach((cleanup) => cleanup());
      document.body.classList.remove('menu-open');
    };
  }, [pathname]);

  return null;
}
