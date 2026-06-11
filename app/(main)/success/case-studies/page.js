import Link from 'next/link';

export const metadata = {
  title: 'Client Success Stories | SLK Media Agency',
  description:
    "Real client case studies: how podcasters and brands grew reach, engagement and revenue with SLK Media Agency's done-for-you content system.",
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/case-studies' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Client Success Stories | SLK Media Agency',
    description:
      "Real client case studies: how podcasters and brands grew reach, engagement and revenue with SLK Media Agency's done-for-you content system.",
    url: '/success/case-studies',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const caseStudies = [
  {
    href: '/success/conjure-queen',
    tag: 'Spiritual Empowerment',
    image: '/thumbnails/Shatavia Green - Conjure Queen.webp',
    alt: 'Shatavia Green — Conjure Queen Podcast',
    name: 'Shatavia Green',
    show: 'Conjure Queen Podcast',
    text: 'From overwhelmed to omnipresent: How we helped a spiritual guide reclaim her energy, double engagement, and hit 100K+ subscribers without editing a single clip.',
    stats: [
      { icon: 'fas fa-award', text: 'Silver Play Button' },
      { icon: 'fas fa-chart-line', text: '2x engagement growth' },
    ],
  },
  {
    href: '/success/brian-burton',
    tag: 'B2B Sales Training',
    image: '/thumbnails/Brian Burton - Blue Collar Closer.webp',
    alt: 'Brian Burton — Waste No Day Podcast',
    name: 'Brian Burton',
    show: 'Waste No Day podcast',
    text: 'How a sales coach turned his podcast into a lead generation machine with 8-12 clips per episode and hundreds of views on every short.',
    stats: [
      { icon: 'fas fa-video', text: '8-12 clips/episode' },
      { icon: 'fas fa-eye', text: '800+ views per short' },
    ],
  },
  {
    href: '/success/steve-garrett',
    tag: 'Automotive Media',
    image: '/thumbnails/Steve Garrett - Corvette Today.webp',
    alt: 'Steve Garrett — Corvette Today Podcast',
    name: 'Steve Garrett',
    show: 'Corvette Today Podcast',
    text: 'How a niche automotive podcaster scaled his reach across 4+ platforms without adding a single hour to his workweek.',
    stats: [
      { icon: 'fab fa-youtube', text: '11.9K subscribers' },
      { icon: 'fas fa-microphone', text: '599+ episodes' },
    ],
  },
  {
    href: '/success/rws-group',
    tag: 'Language Services & Technology',
    image: '/thumbnails/David Hetling - RWS Group.webp',
    alt: 'David Hetling — RWS Group',
    name: 'David Hetling',
    show: 'RWS Group',
    text: 'How SLK Media helped a global leader in language services take over B2B social media with rapid audience growth and all-time high engagement.',
    stats: [
      { icon: 'fas fa-rocket', text: 'Rapid growth' },
      { icon: 'fas fa-heart', text: 'High engagement' },
    ],
  },
  {
    href: '/success/sales-fix',
    tag: 'Sales Training & Coaching',
    image: '/thumbnails/Julien Recoussine - SalesFix.webp',
    alt: 'Julien Recoussine — Sales Fix',
    name: 'Julien Recoussine',
    show: 'Sales Fix',
    text: 'From skeptic to success: How we proved the value of strategic social media and drove immediate growth for a sales training company.',
    stats: [
      { icon: 'fas fa-rocket', text: 'Immediate growth' },
      { icon: 'fas fa-infinity', text: 'Long-term partnership' },
    ],
  },
  {
    href: '/success/alpine-institute',
    tag: 'Biotechnology Research',
    image: '/thumbnails/Kelly Bellaria - Alpine Institute.webp',
    alt: 'Kelly Bellaria — Alpine Institute',
    name: 'Kelly Bellaria',
    show: 'Alpine Institute',
    text: 'Biotech branding done right: How we built a digital presence from zero and positioned a research organization as an industry thought leader.',
    stats: [
      { icon: 'fas fa-lightbulb', text: 'Thought leadership' },
      { icon: 'fas fa-chart-line', text: '1 year of growth' },
    ],
  },
];

const whyCards = [
  { title: 'No Upsells, Just Results', text: 'We deliver exactly what we promise. No surprise fees, no bait-and-switch, no constant pitches for bigger packages. Just consistent, quality work.' },
  { title: 'A-Player Team', text: 'Our clients call us "A-Players" for a reason. We treat your content like it\'s ours, with dedicated account managers and professional communication.' },
  { title: 'Data-Driven Strategy', text: 'Weekly performance reviews, strategic insights, and ongoing optimization. We track what works and double down on winners.' },
  { title: 'Zero Extra Work', text: 'You record your podcast like always. We handle everything else: clip selection, editing, optimization, and distribution strategy.' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
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
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><a href="#" aria-current="page">Case Studies</a></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Book Strategy Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main">

      {/* Hero */}
      <section className="cs-hero">
        <div className="container">
          <span className="tpage-badge"><i className="fas fa-trophy" aria-hidden="true"></i> CLIENT SUCCESS STORIES</span>
          <h1>Real Creators. <span className="highlight">Real Results.</span></h1>
          <p className="subheadline">See how we help content creators multiply their reach and turn content into revenue generating machines.</p>
          <div className="stats-band">
            <div className="stat-card">
              <div className="stat-number">12.4M</div>
              <div className="stat-label">Views Generated</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5-20+</div>
              <div className="stat-label">Clips Per Episode</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1k+</div>
              <div className="stat-label">Clips Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12k+</div>
              <div className="stat-label">Hours Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies grid */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">FEATURED CASE STUDIES</span>
            <h2 className="section-title">Proven Success Across Industries</h2>
          </div>
          <div className="case-showcase-grid">
            {caseStudies.map((study) => (
              <Link href={study.href} className="case-card" key={study.href}>
                <div className="case-card-media">
                  <span className="case-tag">{study.tag}</span>
                  <img src={study.image} alt={study.alt} loading="lazy" width={600} height={338} />
                </div>
                <div className="case-card-body">
                  <h3>{study.name}</h3>
                  <div className="case-show">{study.show}</div>
                  <p>{study.text}</p>
                  <div className="case-stats">
                    {study.stats.map((stat) => (
                      <span key={stat.text}><i className={stat.icon} aria-hidden="true"></i> {stat.text}</span>
                    ))}
                  </div>
                  <span className="case-link">Read Case Study <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SLK Media Agency */}
      <section className="cs-section cs-section--alt">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">WHY SLK MEDIA AGENCY</span>
            <h2 className="section-title">What Makes Us Different</h2>
          </div>
          <div className="cs-grid">
            {whyCards.map((card, index) => (
              <div className="cs-card" key={index}>
                <div className="cs-num">{index + 1}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="t-cta">
        <div className="container">
          <h2>Ready to Multiply Your <span className="highlight">Podcast's Reach?</span></h2>
          <p className="cs-cta-sub">Stop letting your best content collect dust. Let's turn your podcast into a multi-platform powerhouse.</p>
          <div className="cs-cta-buttons">
            <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener"><i className="fas fa-calendar-check" aria-hidden="true"></i> Book a Strategy Call</a>
            <Link href="/" className="secondary-cta"><i className="fas fa-globe" aria-hidden="true"></i> Visit Our Website</Link>
          </div>
          <p className="cs-cta-note"><i className="fas fa-shield-alt" aria-hidden="true"></i> No fluff. No wasted time. Just results, or we'll tell you upfront if we're not the right fit.</p>
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
                <i className="fas fa-building" aria-hidden="true"></i>
                <span>KVK-nummer: 95218300</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-receipt" aria-hidden="true"></i>
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
