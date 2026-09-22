import Link from 'next/link';

// Clips Only: the done-with-you product line, one step below the done-for-you
// plans on /pricing. Reached only from the downsell band on /pricing, never
// from a nav. See OVERVIEW.md section 7.1.

export const metadata = {
  title: 'Clips Only Pricing: Podcast Clips You Post Yourself | SLK Media Agency',
  description:
    'Clips Only from SLK Media Agency: podcast clips cut from your episodes and delivered ready to post, with a dedicated project manager. $697/month for 10 clips, $1,097/month for 20. Scheduling and posting available for +$100/month.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/pricing/clips-only' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Clips Only Pricing: Podcast Clips You Post Yourself | SLK Media Agency',
    description:
      'We cut the clips, you post them. $697/month for 10 clips, $1,097/month for 20.',
    url: '/pricing/clips-only',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clips Only Pricing: Podcast Clips You Post Yourself | SLK Media Agency',
    description:
      'We cut the clips, you post them. $697/month for 10 clips, $1,097/month for 20.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

const schedulingAddOn = {
  '@type': 'Offer',
  name: 'Scheduling and posting add-on',
  description: 'SLK Media Agency schedules and posts the clips for you.',
  price: '100',
  priceCurrency: 'USD',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Clips Only by SLK Media Agency',
  description:
    'Done-with-you podcast clip production: clips cut from your episodes and delivered ready to post, with a dedicated project manager. You post them yourself.',
  brand: { '@type': 'Brand', name: 'SLK Media Agency' },
  url: 'https://slkmediaagency.com/pricing/clips-only',
  image: 'https://slkmediaagency.com/og-image.jpg',
  offers: [
    {
      '@type': 'Offer',
      name: 'Clips Only 10',
      description: '10 clips per month, cut from your episodes and delivered ready to post, with a dedicated project manager.',
      price: '697',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing/clips-only',
      addOn: schedulingAddOn,
    },
    {
      '@type': 'Offer',
      name: 'Clips Only 20',
      description: '20 clips per month, cut from your episodes and delivered ready to post, with a dedicated project manager.',
      price: '1097',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing/clips-only',
      addOn: schedulingAddOn,
    },
  ],
};

export default function ClipsOnlyPricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a href="#main" className="skip-link">Skip to content</a>

      {/* Navigation: same as /pricing. Clips Only is deliberately not in any nav. */}
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
            <li><a href="#pricing-faq">FAQ</a></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      {/* .pricing-page pulls in the whole /pricing re-skin (premium.css section 17).
          .clips-only-page is the hook for the one rule this page adds. */}
      <main id="main" className="pricing-page clips-only-page">
        {/* Hero */}
        <section className="pp-hero">
          <div className="container">
            <p className="pp-kicker">Clips Only</p>
            <h1>Just the clips.</h1>
            <p className="pp-hero-sub">
              For podcasters who already have a way to post, or want to do it themselves. We cut the clips and a dedicated project manager still handles delivery and quality. No strategy document, no copywriting, no scheduling, unless you add it.
            </p>
            <div className="pp-hero-jump">
              <a href="#pricing" className="pp-jump-link">See the plans</a>
              <a href="#pricing-faq" className="pp-jump-link">Common questions</a>
              <Link href="/pricing" className="pp-jump-link">See the done-for-you plans</Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <div className="container">
            <h2 className="section-title">Two plans, clips only</h2>
            <div className="pricing-grid">
              <div className="pricing-tier compact">
                <div className="pricing-header">
                  <h3>Clips Only 10</h3>
                  <p className="pricing-period">(DWY)</p>
                  <div className="pricing-price">$697/month</div>
                  <p className="pricing-cost-anchor">
                    <strong>The math:</strong> 10 clips a month, the same volume as Content Engine Lite, for <span className="pricing-cost-anchor-figure">$300 a month less</span>. The difference is everything around the clips: no strategy document, no copywriting, no custom thumbnails and no scheduling. You post them yourself.
                  </p>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>10 clips/month, cut from your episodes</li>
                    <li>Delivered ready to post</li>
                    <li>Dedicated Project Manager</li>
                    <li>You post them yourself</li>
                    <li>Add-on: we schedule and post them for you, +$100/month</li>
                  </ul>
                </div>
                <p className="pricing-outcome">You send your episodes. We deliver <strong>10 ready-to-post clips</strong> every month, and you post them on your own schedule.</p>
                <div className="pricing-footer">
                  <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a>
                </div>
              </div>
              <div className="pricing-tier compact">
                <div className="pricing-header">
                  <h3>Clips Only 20</h3>
                  <p className="pricing-period">(DWY)</p>
                  <div className="pricing-price">$1,097/month</div>
                  <p className="pricing-cost-anchor">
                    <strong>The math:</strong> 20 clips a month, the same volume as the Content Engine, for <span className="pricing-cost-anchor-figure">$500 a month less</span>. The difference is everything around the clips: no strategy document, no copywriting, no custom thumbnails and no scheduling. You post them yourself.
                  </p>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>20 clips/month, cut from your episodes</li>
                    <li>Delivered ready to post</li>
                    <li>Dedicated Project Manager</li>
                    <li>You post them yourself</li>
                    <li>Add-on: we schedule and post them for you, +$100/month</li>
                  </ul>
                </div>
                <p className="pricing-outcome">You send your episodes. We deliver <strong>20 ready-to-post clips</strong> every month, and you post them on your own schedule.</p>
                <div className="pricing-footer">
                  <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="faq pp-faq" id="pricing-faq">
          <div className="container">
            <h2 className="section-title">Pricing questions</h2>
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>Why is this less than Content Engine Lite?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p><strong>Because it is only the clips.</strong> Content Engine Lite adds the strategy document, copywriting, custom thumbnails and scheduling on top of the clips. Clips Only leaves that work with you.</p>
                  <p>If you would rather have all of it done for you, <Link href="/pricing#pricing">see the done-for-you plans</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pp-final-cta">
          <div className="container">
            <h2>Not sure which one fits?</h2>
            <p>That is what the strategy call is for. Thirty minutes, we look at your show, and we tell you whether Clips Only or a done-for-you plan makes more sense.</p>
            <div className="pp-final-actions">
              <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Your Strategy Call</a>
              <Link href="/pricing" className="pp-final-secondary">See the done-for-you plans</Link>
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
