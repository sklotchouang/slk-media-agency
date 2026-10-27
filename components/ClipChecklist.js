'use client';

import { useEffect, useState } from 'react';

/**
 * Home page "Clipping is a second job" card. The steps tick themselves off one
 * by one, then start over for the next platform, then the next clip, so the
 * visitor sees how often the same work repeats. Static (first three steps
 * ticked) under prefers-reduced-motion. Pauses while off screen.
 */
const STEPS = [
  'Find the moment in the episode',
  'Cut it and add a hook',
  'Add captions',
  'Make a thumbnail',
  'Resize for this platform',
  'Write the post and hashtags',
  'Schedule it',
];
const PLATFORMS = ['TikTok', 'Reels', 'Shorts', 'LinkedIn', 'Facebook'];

export default function ClipChecklist() {
  const [done, setDone] = useState(3);
  const [platform, setPlatform] = useState(0);
  const [clip, setClip] = useState(1);
  const [host, setHost] = useState(null);

  useEffect(() => {
    if (!host) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let timer = null;
    let state = { done: 0, platform: 0, clip: 1 };
    setDone(0);
    const tick = () => {
      if (state.done < STEPS.length) {
        state = { ...state, done: state.done + 1 };
      } else {
        const nextPlatform = (state.platform + 1) % PLATFORMS.length;
        state = {
          done: 0,
          platform: nextPlatform,
          clip: nextPlatform === 0 ? (state.clip % 9) + 1 : state.clip,
        };
      }
      setDone(state.done);
      setPlatform(state.platform);
      setClip(state.clip);
    };
    const start = () => { if (!timer) timer = setInterval(tick, 700); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.2 }
    );
    io.observe(host);
    return () => { io.disconnect(); stop(); };
  }, [host]);

  return (
    <div className="hp-todo" ref={setHost} aria-label="The steps behind one clip">
      <div className="hp-todo-head">
        <strong>Clipping is a second job</strong>
        <span>Clip {clip}</span>
      </div>
      <div className="hp-todo-platforms" aria-hidden="true">
        {PLATFORMS.map((name, index) => (
          <span key={name} className={index === platform ? 'is-current' : undefined}>{name}</span>
        ))}
      </div>
      <ul>
        {STEPS.map((step, index) => (
          <li key={step} className={index < done ? 'is-done' : undefined}>
            <i aria-hidden="true"></i>
            <span>{step}</span>
          </li>
        ))}
      </ul>
      <p className="hp-note">Then again for the next platform. Then for the next clip.</p>
    </div>
  );
}
