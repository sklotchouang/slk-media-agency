import { notFound } from 'next/navigation';

/**
 * Catch-all route: any address that does not match a real page, a static file,
 * a redirect, or a rewrite ends up here and shows the styled 404 page.
 */
export default function CatchAllPage() {
  notFound();
}
