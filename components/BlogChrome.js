// Nav and footer for the blog pages only (/blog and /blog/<slug>).
// Same markup and classes as the other sub-pages (see app/(main)/portfolio),
// kept in one file so the two blog routes cannot drift apart.
// The site-wide navs do NOT link to /blog until Samuel says so.
import Link from 'next/link';

export function BlogNav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link href="/" aria-label="SLK Media Agency, home">
            <img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" width={120} height={45} />
          </Link>
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
          <li><Link href="/blog" aria-current="page">Blog</Link></li>
          <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Book Strategy Call</a></li>
        </ul>
      </div>
    </nav>
  );
}

export function BlogFooter() {
  return (
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
  );
}
