import Link from 'next/link';
import StrategySampleGallery from '../../../components/StrategySampleGallery';
import './podcast-toolkits.css';

// Live Stripe Payment Link for the Custom Social Media Strategy Report ($100).
// Settles on the SLK Media Stripe account and is tagged type=strategy_report so the
// n8n bridge can fire the GoHighLevel optin automation without marking buyers new clients.
const CHECKOUT_URL = 'https://buy.stripe.com/aFa4gydJa5bq7zLgrX18c07';

export const metadata = {
  title: 'Custom Podcast Social Media Strategy Report ($100) | SLK Media Agency',
  description:
    'Stop posting blind. Get a custom, done-for-you social media strategy report for your podcast, delivered within 1 to 2 days. One-time $100, no subscription.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/podcast-toolkits' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Custom Podcast Social Media Strategy Report | SLK Media Agency',
    description:
      'A custom social media strategy for your podcast, delivered in 1 to 2 days. One-time $100, no subscription.',
    url: '/podcast-toolkits',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

const deliverables = [
  ['Complete social media audit', 'A full audit and performance analysis of where your podcast stands today.'],
  ['Detailed SWOT analysis', 'Exactly where you are now and where the fastest growth is hiding.'],
  ['Audience and competitor analysis', 'What is already working in your niche, and the gaps you can own.'],
  ['Custom content ideas and pillars', 'Themes and post ideas built around your voice and your show.'],
  ['Brand tone and voice guidelines', 'So every post sounds like you and stays consistent.'],
  ['SEO keyword and hashtag list', 'Tuned for discoverability in your specific category.'],
  ['Proven growth tactics', 'The plays that are actually moving podcasts right now.'],
  ['Step-by-step implementation guide', 'A clear order of operations so you know exactly what to do next.'],
];

const faqs = [
  [
    'What exactly do I get?',
    'A custom social media strategy report built for your podcast: a full audit, SWOT, audience and competitor analysis, content pillars, brand voice guidelines, an SEO keyword and hashtag list, growth tactics, and a step-by-step implementation guide. It is the same strategic thinking we use with agency clients.',
  ],
  [
    'How fast will I get it?',
    'Within 1 to 2 days after you complete a short intake form. The form arrives by email the moment your payment goes through.',
  ],
  [
    'What do you need from me?',
    'About five minutes. After you buy, you fill in a short intake (your podcast, your channels, and your goals). We take it from there.',
  ],
  [
    'Is this a generic template?',
    'No. It is built from your podcast, your niche, and a real audit of your current presence. The samples above are real reports we produced for real shows.',
  ],
  [
    'How is this different from your full agency service?',
    'The report is the plan. The agency is the execution. You can run the plan yourself, hand it to a freelancer, or come back for done-for-you work later when you are ready.',
  ],
  [
    'Is this a subscription?',
    'No. It is a one-time $100 payment. Nothing recurring.',
  ],
];

export default function PodcastToolkitsPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar fixed-nav">
        <div className="container">
          <div className="logo">
            <Link href="/" aria-label="SLK Media Agency — home"><img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" /></Link>
          </div>
          <button className="menu-toggle" id="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-controls="nav-menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu" id="nav-menu">
            <li><Link href="/">Home</Link></li>
            <li><a href="#pricing" className="cta-button">Get the Report</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <p className="sub-headline-blue">Have a Podcast? You Need a Plan.</p>
            <h1 className="headline">A Custom Social Media Strategy for Your Podcast</h1>
            <p className="subheadline">Stop posting blind. Get a done-for-you strategy report built for your show, so every post actually serves your audience and pulls its weight. Delivered in 1 to 2 days.</p>
          </div>
          <div className="cta-center">
            <p className="pt-anchor"><span className="pt-old-price">$500</span> <span className="pt-new-price">$100 today</span></p>
            <a href={CHECKOUT_URL} className="btn-primary" target="_blank" rel="noopener">Get My Strategy Report</a>
            <p className="pt-cta-note">One-time $100. No subscription. Delivered in 1 to 2 days.</p>
          </div>
          <p className="tagline">⚡ This price is temporary and will increase soon.</p>
        </div>
      </section>

      {/* Honest Truth */}
      <section className="growth-limbo-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Here is the Honest Truth</h2>
          <div className="growth-limbo-content">
            <p className="section-subtitle">Hiring a full-service podcast agency is not the right move for everyone.</p>
            <p className="section-subtitle">If the price feels too high, it usually means one of two things:</p>
            <div className="problem-list">
              <div className="problem-item">🚫 You are not ready for done-for-you execution yet.</div>
              <div className="problem-item">🚫 Or you need clarity before committing at that level.</div>
            </div>
            <p><strong>That is exactly why this exists.</strong></p>
          </div>
        </div>
      </section>

      {/* The Smart Alternative */}
      <section className="problem-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">The Smart Alternative</h2>
          <div className="problem-content">
            <p className="section-subtitle">Without walking away empty-handed.</p>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-question"></i></div>
                <h3>Instead of guessing</h3>
                <p>Stop hoping a random clip takes off. Follow a plan built on a real audit of your show.</p>
              </div>
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-ban"></i></div>
                <h3>Instead of doing nothing</h3>
                <p>Doing nothing keeps you exactly where you are. The report gives you a clear next move.</p>
              </div>
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-copy"></i></div>
                <h3>Instead of copying others</h3>
                <p>Copying random creators ignores your niche and your audience. This is built for you.</p>
              </div>
            </div>
            <p className="problem-summary">Get the <strong>Custom Social Media Strategy Report</strong>. It gives you the same strategic thinking we use with agency clients, without the agency price.</p>
          </div>
        </div>
      </section>

      {/* What This Does */}
      <section className="solution-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">What This Does for You</h2>
          <div className="solution-content">
            <div className="solution-highlight">
              <p><strong>This report tells you:</strong></p>
              <ul className="pt-list">
                <li>✅ What to post</li>
                <li>✅ Where to post it</li>
                <li>✅ How to turn episodes into growth</li>
                <li>✅ How to position your podcast to attract sponsors</li>
              </ul>
              <p><strong>So you can:</strong></p>
              <ul className="pt-list">
                <li>🚀 Execute it yourself</li>
                <li>🚀 Hand it to a freelancer</li>
                <li>🚀 Or come back ready for full-service later</li>
              </ul>
            </div>
            <p className="pt-center"><strong>Either way, you move forward.</strong></p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="proof-results-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Here is What You Get</h2>
          <div className="pt-deliverables">
            {deliverables.map(([title, body]) => (
              <div className="pt-deliverable" key={title}>
                <i className="fas fa-check-circle" aria-hidden="true"></i>
                <div>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof: sample report gallery + video */}
      <section className="illustration-section" id="samples">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">This Is Exactly What You Get</h2>
          <p className="section-subtitle pt-center">Real strategy pages from podcasts we have worked with. Clear, structured, and ready to execute. Client details are blurred for privacy.</p>
          <StrategySampleGallery />
          <div className="video-wrapper pt-video-wrapper">
            <video controls preload="none" poster="/podcast-toolkits/samples/image-2.png">
              <source src="/toolkits/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="steps-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="pt-steps">
            <div className="pt-step">
              <div className="pt-step-number">1</div>
              <h3>Buy the report</h3>
              <p>Secure checkout. One-time $100, no subscription.</p>
            </div>
            <div className="pt-step">
              <div className="pt-step-number">2</div>
              <h3>Fill a short intake</h3>
              <p>Five minutes about your podcast, channels, and goals.</p>
            </div>
            <div className="pt-step">
              <div className="pt-step-number">3</div>
              <h3>Get your report</h3>
              <p>Your custom strategy lands in your inbox within 1 to 2 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section" id="pricing">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Your One-Time Investment</h2>
          <p className="section-subtitle pt-center">Compared to another month of guessing.</p>
          <div className="pt-pricing-card">
            <div className="pt-price-row">
              <span className="pt-price-old">$500</span>
              <span className="pt-price-now">$100</span>
            </div>
            <p className="pt-price-label">One-time payment. No subscription.</p>
            <ul className="pt-price-list">
              <li><i className="fas fa-check" aria-hidden="true"></i> Less than one month of guessing.</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Less than one bad freelancer hire.</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> A fraction of full-service execution.</li>
            </ul>
            <div className="pt-delivery-badge"><i className="fas fa-bolt" aria-hidden="true"></i> Delivered within 1 to 2 days</div>
            <div className="pt-urgency"><i className="fas fa-exclamation-triangle" aria-hidden="true"></i> This price is temporary and will increase soon.</div>
            <a href={CHECKOUT_URL} className="btn-primary pt-buy" target="_blank" rel="noopener">Get My Strategy Report</a>
            <p className="pt-cta-note">One-time $100 · No subscription · Delivered in 1 to 2 days</p>
          </div>
        </div>
      </section>

      {/* Right move if */}
      <section className="comparison-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">This Is the Right Move If</h2>
          <ul className="pt-qualify">
            <li><i className="fas fa-check-circle" aria-hidden="true"></i> You want to grow, but are not ready for an agency.</li>
            <li><i className="fas fa-check-circle" aria-hidden="true"></i> You would rather follow a plan than keep figuring it out.</li>
            <li><i className="fas fa-check-circle" aria-hidden="true"></i> You want to make your next move with confidence.</li>
          </ul>
          <p className="pt-center pt-closer"><strong>If you do nothing, nothing changes.</strong></p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq faq-section" id="faq">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="accordion">
            {faqs.map(([q, a]) => (
              <div className="accordion-item" key={q}>
                <div className="accordion-header">
                  <h3>{q}</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="footer-cta-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="footer-cta-heading">Make the Smart Call</h2>
          <p className="final-cta-text">You do not need us to do everything for you. You just need to know what actually works.</p>
          <a href={CHECKOUT_URL} className="btn-primary" target="_blank" rel="noopener">Get My Strategy Report</a>
          <p className="pt-cta-note">One-time $100 · No subscription · Delivered in 1 to 2 days</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="grid-pattern-overlay"></div>
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

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <div className="container">
          <p className="sticky-cta-text">Custom strategy report · <strong>$100</strong> one-time · delivered in 1 to 2 days</p>
          <a href={CHECKOUT_URL} className="btn-primary" target="_blank" rel="noopener">Get My Strategy Report</a>
        </div>
      </div>
    </>
  );
}
