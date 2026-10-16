import Link from 'next/link';
import PricingPlans from '../../../components/PricingPlans';
import PricingCalculator from '../../../components/PricingCalculator';

// The /pricing page: two packages, the add-ons and the plan calculator.
// Rebuilt 16 October 2026 (Samuel approved every price and rule that day).
// Replaced the 12 October page; the retired plans are listed in OVERVIEW.md
// section 7.1. /pricing/clips-only still redirects here, see next.config.mjs.

const DESCRIPTION =
  'SLK Media Agency pricing: Done For You at $1,597 a month (20 clips, thumbnails, captions, posting, a project manager, weekly calls and reporting) or Done With You at $997 a month (20 clips, you post). Add-ons and a plan calculator.';

const SHARE_DESCRIPTION =
  'Two ways to work with us. Same clips, same quality. Pick how much of the rest you want us to handle.';

export const metadata = {
  title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description: SHARE_DESCRIPTION,
    url: '/pricing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description: SHARE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

function monthlyOffer(name, description, price) {
  return {
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'USD',
      unitText: 'MONTH',
    },
    availability: 'https://schema.org/InStock',
    url: 'https://slkmediaagency.com/pricing',
  };
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Podcast Content Production by SLK Media Agency',
  description:
    'Done-for-you podcast clip production, copywriting, and omnichannel distribution for podcasters who publish consistently.',
  brand: { '@type': 'Brand', name: 'SLK Media Agency' },
  url: 'https://slkmediaagency.com/pricing',
  image: 'https://slkmediaagency.com/og-image.jpg',
  offers: [
    monthlyOffer(
      'Done For You',
      '20 short clips a month with a custom thumbnail for every clip, captions, hashtags and calls to action, posting on every platform, a dedicated project manager, a weekly call, weekly reporting and a strategy document before the first clip.',
      '1597'
    ),
    monthlyOffer(
      'Done With You',
      '20 short clips a month, edited and ready for you to post.',
      '997'
    ),
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Navigation */}
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
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pricing-page">
        {/* Hero */}
        <section className="pp-hero">
          <div className="container">
            <p className="pp-kicker">Pricing</p>
            <h1>Two ways to work with us.</h1>
            <p className="pp-hero-sub">Same clips, same quality. Pick how much of the rest you want us to handle.</p>
            <a href={BOOK_URL} className="primary-cta pp-hero-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
          </div>
        </section>

        {/* The two packages, the comparison table and the add-ons */}
        <section className="pp-plans" id="pricing">
          <div className="container">
            <PricingPlans />
          </div>
        </section>

        {/* Build your plan */}
        <section className="pp-build" id="build" aria-labelledby="pp-build-title">
          <div className="container">
            <h2 id="pp-build-title">Build your plan</h2>
            <p className="pp-lead">Pick what you want each month. The price updates as you go.</p>
            <PricingCalculator />
          </div>
        </section>

        {/* Closing band */}
        <section className="pp-close">
          <div className="container">
            <div className="pp-strip">
              <h2>Not sure which one fits? We&apos;ll work it out with you on a 30-minute call.</h2>
              <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <span>BTW-id/VAT: NL004936980B59</span>
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
