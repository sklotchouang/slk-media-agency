import Link from 'next/link';

export const metadata = {
  title: 'Thank You: Your Strategy Report Is On the Way | SLK Media Agency',
  description: 'Your Custom Social Media Strategy Report purchase is confirmed.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/podcast-toolkits/thank-you' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

export default function PodcastToolkitsThankYouPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar fixed-nav">
        <div className="container">
          <div className="logo">
            <Link href="/" aria-label="SLK Media Agency, home"><img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" /></Link>
          </div>
        </div>
      </nav>

      {/* Confirmation */}
      <section className="hero-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <p className="sub-headline-blue"><i className="fas fa-circle-check" aria-hidden="true"></i> Payment confirmed</p>
            <h1 className="headline">Your Strategy Report Is On the Way</h1>
            <p className="subheadline">Thank you. Your payment went through and your spot is locked in. Here is exactly what happens next.</p>
          </div>

          <div className="growth-limbo-content" style={{ marginTop: '10px' }}>
            <div className="problem-list">
              <div className="problem-item"><strong>1.</strong> Check your inbox. A short intake form is on its way by email (about five minutes to complete).</div>
              <div className="problem-item"><strong>2.</strong> Fill it in. Tell us about your podcast, your channels, and your goals.</div>
              <div className="problem-item"><strong>3.</strong> Within 1 to 2 days, your custom strategy report lands in your inbox.</div>
            </div>
            <p className="pt-center" style={{ textAlign: 'center', marginTop: '8px' }}>Did not get the email within a few minutes? Check spam, or reach us at <a href="mailto:hello@slkmediaagency.com">hello@slkmediaagency.com</a>.</p>
          </div>

          <div className="cta-center">
            <Link href="/" className="btn-primary">Back to Home</Link>
          </div>
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
    </>
  );
}
