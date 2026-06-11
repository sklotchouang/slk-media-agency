import Link from 'next/link';

export const metadata = {
  title: 'Pre-Call Instructions | SLK Media Agency',
  description:
    'Thanks for booking your strategy call with SLK Media Agency. Watch this short video and review our work before we meet.',
  robots: { index: false, follow: true },
};

export default function PreCallPage() {
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
            <li><a href="mailto:hello@slkmediaagency.com">hello@slkmediaagency.com</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pre-call-container">
        <h1 className="main-heading">Thanks For Booking Your Call</h1>
        <p className="sub-heading">Now just before we meet, please follow the instructions below 👇</p>

        <h2 className="instruction-step">Step 1: Watch this video first</h2>
        <div className="video-wrapper">
          <video controls poster="/pre-call-instructions-video/thumbnail.webp" playsInline preload="none">
            <source src="/pre-call-instructions-video/precall-instructions-podcasters.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2 className="instruction-step">Step 2: Take a look at some of the clips we've created</h2>
        <Link href="/portfolio" className="pre-call-button" target="_blank" rel="noopener">
          <span className="button-main-text">Content Portfolio</span>
          <span className="button-sub-text">The Content That Keeps Our Clients Coming Back</span>
        </Link>

        <h2 className="instruction-step">Step 3: Below are some client testimonials for your review</h2>
        <Link href="/testimonials" className="pre-call-button" target="_blank" rel="noopener">
          <span className="button-main-text">Client Testimonials</span>
          <span className="button-sub-text">See What Our Happy Clients Had To Say About Working With Us</span>
        </Link>
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
