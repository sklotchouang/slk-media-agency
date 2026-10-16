import Link from 'next/link';
import PricingPlans from '../../../components/PricingPlans';
import PricingCalculator from '../../../components/PricingCalculator';

// The unified pricing page. Replaced the old /pricing and /pricing/clips-only
// on 12 October 2026 (Samuel approved every price and the layout that day).
// /pricing/clips-only now redirects here, see next.config.mjs.

export const metadata = {
  title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
  description:
    'What SLK Media Agency costs, in full. Clips Only is $597/month for 12 clips or $997/month for 20. Content Engine Lite is $997/month and Content Engine is $1,597/month, with thumbnails, captions, posting, a project manager and reporting included. The 10-Day Trial is $497 one time.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description:
      'Choose your clips. Choose who does the rest. Every price, month to month, no contract.',
    url: '/pricing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description:
      'Choose your clips. Choose who does the rest. Every price, month to month, no contract.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

const TRIAL_URL = 'https://pay.myfundbox.com/OVP/?token=2vrB8voEVlNvxYLTc6S_5g';

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
    {
      '@type': 'Offer',
      name: '10-Day Trial',
      description: '5 finished clips within 10 days. One payment, no subscription.',
      price: '497',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Clips Only 12',
      description: '12 clips a month, cut from your episodes and ready for you to post.',
      price: '597',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Content Engine Lite',
      description: '12 clips a month with custom thumbnails, captions, hashtags and CTAs posted on every platform, a dedicated project manager, a weekly call, weekly reporting and a strategy document.',
      price: '997',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Clips Only 20',
      description: '20 clips a month, cut from your episodes and ready for you to post.',
      price: '997',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Content Engine',
      description: '20 clips a month with custom thumbnails, captions, hashtags and CTAs posted on every platform, a dedicated project manager, a weekly call, weekly reporting and a strategy document.',
      price: '1597',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
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
            <h1>Choose your clips. <span className="pp-hl">Choose who does the rest.</span></h1>
          </div>
        </section>

        {/* Switch, the two plan cards, and the "what the difference replaces" table */}
        <section className="pp-plans" id="pricing">
          <div className="container">
            <PricingPlans />
          </div>
        </section>

        {/* Build your own plan */}
        <section className="pp-build" id="build" aria-labelledby="pp-build-title">
          <div className="container">
            <p className="pp-eyebrow">Something else in mind?</p>
            <h2 id="pp-build-title">Build your own plan</h2>
            <p className="pp-lead">Pick what you want each month. The price updates as you go.</p>
            <PricingCalculator />
          </div>
        </section>

        {/* 10-Day Trial */}
        <section className="pp-trial" id="trial">
          <div className="container">
            <div className="pp-strip">
              <div className="pp-strip-copy">
                <h2>Want to see it on your own episodes first?</h2>
                <p>10-Day Trial: 5 finished clips within 10 days. One payment, no subscription.</p>
              </div>
              <div className="pp-strip-action">
                <span className="pp-strip-price">$497</span>
                <a href={TRIAL_URL} className="primary-cta pp-cta pp-cta-quiet" target="_blank" rel="noopener">Get Your 10-Day Trial</a>
              </div>
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
