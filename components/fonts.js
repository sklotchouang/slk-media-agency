import { Inter } from 'next/font/google';

/**
 * Self-hosted via next/font: zero layout shift, no Google CDN request.
 * Inter carries the whole site, same as the original design: headings are
 * bold Inter, exactly the original text format.
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const fontClassNames = inter.variable;
