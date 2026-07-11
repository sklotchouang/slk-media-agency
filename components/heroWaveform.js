// Canvas 2D waveform field for the home hero. Imported dynamically by
// HeroAtmosphere so it never ships in the shared bundle.

export function mountWaveform(host) {
  const canvas = document.createElement('canvas');
  const spotlight = document.createElement('div');
  spotlight.className = 'hero-spotlight';
  host.appendChild(canvas);
  host.appendChild(spotlight);

  const ctx = canvas.getContext('2d');
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const LINES = isMobile ? 3 : 5;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let width = 0;
  let height = 0;
  let running = true;
  let visible = true;
  let rafId = 0;
  let t = 0;

  // pointer state, eased toward the cursor for a lazy, expensive feel
  const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

  function resize() {
    const rect = host.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    if (!running) return;
    rafId = requestAnimationFrame(draw);
    if (!visible) return;

    t += 0.007;
    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;

    ctx.clearRect(0, 0, width, height);

    const cy = height * 0.62;
    const influence = 1 + (pointer.y - 0.5) * 0.35;

    for (let line = 0; line < LINES; line += 1) {
      const phase = t * (1 + line * 0.18) + line * 1.7;
      const amp = (height * 0.095) * (1 - line / (LINES + 1)) * influence;
      const alpha = 0.38 - line * 0.055;

      ctx.beginPath();
      const steps = isMobile ? 60 : 110;
      for (let i = 0; i <= steps; i += 1) {
        const x = (i / steps) * width;
        const nx = i / steps;
        // waves swell gently near the pointer's x position
        const proximity = Math.exp(-((nx - pointer.x) ** 2) / 0.045);
        const y =
          cy +
          Math.sin(nx * 7 + phase) * amp * (0.45 + proximity * 0.8) +
          Math.sin(nx * 17 - phase * 1.4) * amp * 0.24 +
          line * 9;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = line === 0
        ? `rgba(124, 198, 245, ${alpha})`
        : `rgba(76, 178, 240, ${alpha})`;
      ctx.lineWidth = line === 0 ? 1.8 : 1.3;
      ctx.stroke();
    }
  }

  function onPointer(event) {
    const rect = host.getBoundingClientRect();
    pointer.tx = (event.clientX - rect.left) / rect.width;
    pointer.ty = (event.clientY - rect.top) / rect.height;
    spotlight.style.transform =
      `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px) translate(-50%, -50%)`;
    spotlight.style.opacity = '1';
  }

  function onLeave() {
    pointer.tx = 0.5;
    pointer.ty = 0.5;
    spotlight.style.opacity = '0';
  }

  const io = new IntersectionObserver(
    (entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    },
    { threshold: 0 }
  );
  io.observe(host);

  const controller = new AbortController();
  const { signal } = controller;
  window.addEventListener('resize', resize, { passive: true, signal });
  const heroSection = host.closest('section') || host;
  heroSection.addEventListener('pointermove', onPointer, { passive: true, signal });
  heroSection.addEventListener('pointerleave', onLeave, { passive: true, signal });

  resize();
  draw();

  return () => {
    running = false;
    cancelAnimationFrame(rafId);
    io.disconnect();
    controller.abort();
    canvas.remove();
    spotlight.remove();
  };
}
