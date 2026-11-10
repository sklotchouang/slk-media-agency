import Link from 'next/link';

// /pricing/promotion after the promotion ended (Samuel, 2 Nov 2026). Until
// then this path was a 307 redirect to /pricing; Samuel asked that people who
// still open old promotion links are told plainly that it has ended, with a
// button to the current pricing. Not indexed. It never names a promotion
// price and never mentions the honor rule (see docs/pricing-promotion-spec.md).

export const metadata = {
  title: 'This Promotion Has Ended | SLK Media Agency',
  description: 'The SLK Media Agency pricing promotion has ended. See the current packages and the pricing calculator.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/pricing' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

export default function PromotionEndedPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link href="/" aria-label="SLK Media Agency, home"><img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" width={120} height={45} /></Link>
          </div>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-controls="primary-nav" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu" id="primary-nav">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/success/case-studies">Case Studies</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href={BOOK_URL} className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pricing-page pp-ended-page">
        <section className="pp-hero pp-ended">
          <div className="container">
            <p className="pp-ended-badge"><i className="fas fa-clock" aria-hidden="true"></i> Promotion ended</p>
            <h1>This promotion has ended.</h1>
            <p className="pp-hero-sub">The limited pricing promotion closed on 2 November 2026, so the prices on this page are no longer available. Our current packages start at $997 a month for 10 clips, edited, captioned and posted for you.</p>
            <div className="pp-hero-ctas">
              <Link href="/pricing" className="primary-cta pp-hero-cta">See current pricing</Link>
              <Link href="/pricing#build" className="pp-hero-alt"><i className="fas fa-sliders" aria-hidden="true"></i> Build your own plan</Link>
            </div>
            <p className="pp-ended-more">Or <Link href="/">go to the homepage</Link>.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <a href="tel:+13238928644">(323) 892-8644</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <a href="mailto:hello@slkmediaagency.com">hello@slkmediaagency.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-building"></i>
                <span>KVK-nummer: 95218300</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-receipt"></i>
                <span>BTW-id/VAT: NL002482361B58</span>
              </div>
            </div>
            <div className="footer-legal">
              <Link href="/terms-and-conditions" className="legal-link">Terms and Conditions</Link>
              <span className="separator">|</span>
              <Link href="/privacy-policy" className="legal-link">Privacy Policy</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Copyright 2026 SLK Media Agency</p>
          </div>
        </div>
      </footer>
    </>
  );
}
