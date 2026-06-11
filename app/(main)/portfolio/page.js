import Link from 'next/link';

export const metadata = {
  title: "Portfolio — Podcast Clips We've Produced | SLK Media Agency",
  description:
    'See how SLK Media Agency transforms podcast episodes into scroll-stopping, sponsor-ready clips across LinkedIn, YouTube Shorts, TikTok and Instagram.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/portfolio' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: "Portfolio — Podcast Clips We've Produced | SLK Media Agency",
    description: 'Real client work: podcast episodes turned into high-impact short-form video.',
    url: '/portfolio',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

const clipNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function PortfolioPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link href="/" aria-label="SLK Media Agency — home"><img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" width={120} height={45} /></Link>
          </div>
          <button className="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-controls="primary-nav" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu" id="primary-nav">
            <li><Link href="/">Home</Link></li>
            <li><a href="#" aria-current="page">Portfolio</a></li>
            <li><a href="/success/case-studies">Case Studies</a></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      {/* Portfolio Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p className="portfolio-subtitle">See how we've transformed podcasts into viral content across all platforms</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        <div className="container">
          <div className="portfolio-items">
            {clipNumbers.map((clipNumber) => (
              <div
                key={clipNumber}
                className="portfolio-video"
                dangerouslySetInnerHTML={{
                  __html: `<video autoplay muted loop playsinline poster="/portfolio/thumbnails/Clip-${clipNumber}.jpg" data-autoplay aria-label="Portfolio clip ${clipNumber}"><source src="/portfolio/Clip-${clipNumber}.mp4" type="video/mp4"></video>`,
                }}
              />
            ))}
          </div>

          <div className="portfolio-cta">
            <h2>Ready to Scale Your Podcast Show?</h2>
            <p>Let's turn your podcast into a powerful growth engine. Schedule a free strategy call today.</p>
            <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Your Strategy Call</a>
          </div>
        </div>
      </section>

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
