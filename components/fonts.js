import { Fraunces, Inter } from 'next/font/google';

/**
 * Self-hosted variable fonts via next/font: zero layout shift, no Google CDN
 * request. Fraunces carries the editorial display voice; Inter stays the
 * body and UI face the site already used.
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  axes: ['opsz'],
});

export const fontClassNames = `${inter.variable} ${fraunces.variable}`;
