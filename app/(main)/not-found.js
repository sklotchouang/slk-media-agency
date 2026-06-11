import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found (404) | SLK Media Agency',
  robots: { index: false, follow: true },
};

const errorStyles = `
        .error-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px 20px;background:var(--gradient-dark-purple,#0a0a0a)}
        .error-inner{max-width:560px}
        .error-code{font-size:clamp(5rem,18vw,9rem);font-weight:800;line-height:1;background:linear-gradient(135deg,#3ba7e7,#1e90ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:10px}
        .error-inner h1{font-size:1.6rem;margin-bottom:14px;color:#fff}
        .error-inner p{color:rgba(255,255,255,.7);margin-bottom:30px;font-size:1.05rem}
        .error-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
`;

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: errorStyles }} />
      <main className="error-wrap">
        <div className="error-inner">
          <div className="error-code">404</div>
          <h1>This page took an unscheduled break</h1>
          <p>The page you're looking for moved or never existed. Let's get you back to scaling your podcast.</p>
          <div className="error-actions">
            <Link href="/" className="primary-cta">Back to Home</Link>
            <Link href="/portfolio" className="secondary-cta">View Portfolio</Link>
          </div>
        </div>
      </main>
    </>
  );
}
