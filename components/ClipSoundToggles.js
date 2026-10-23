'use client';

import { useEffect } from 'react';

/**
 * Sound buttons for /portfolio/audio-only. Every clip on that page autoplays
 * muted (SiteBehaviors handles play/pause while on screen). A tap on a clip's
 * sound button restarts it with sound and mutes every other clip, so only one
 * clip is ever heard at a time.
 */
export default function ClipSoundToggles() {
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll('[data-sound-toggle]'));
    const pairs = buttons
      .map((button) => ({ button, video: button.closest('.ao-card')?.querySelector('video') }))
      .filter((p) => p.video);

    const setState = (button, on) => {
      button.setAttribute('aria-pressed', on ? 'true' : 'false');
      button.classList.toggle('is-on', on);
      const label = button.querySelector('.ao-sound-label');
      if (label) label.textContent = on ? 'Sound on' : 'Tap for sound';
      const icon = button.querySelector('i');
      if (icon) icon.className = on ? 'fas fa-volume-high' : 'fas fa-volume-xmark';
    };

    const handlers = pairs.map(({ button, video }) => {
      const onClick = (event) => {
        event.preventDefault();
        const turnOn = video.muted;
        pairs.forEach((p) => {
          p.video.muted = true;
          setState(p.button, false);
        });
        if (turnOn) {
          video.muted = false;
          video.currentTime = 0;
          video.play().catch(() => {});
          setState(button, true);
        }
      };
      button.addEventListener('click', onClick);
      return () => button.removeEventListener('click', onClick);
    });

    return () => handlers.forEach((off) => off());
  }, []);

  return null;
}
