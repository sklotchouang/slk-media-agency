import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | SLK Media Agency',
  description: "The terms and conditions governing use of SLK Media Agency's website and services.",
  robots: { index: true, follow: true },
  alternates: { canonical: '/terms-and-conditions' },
};

export default function TermsAndConditionsPage() {
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
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/#contact" className="cta-button">Get Started</Link></li>
          </ul>
        </div>
      </nav>
      <main id="main">

      {/* Terms and Conditions Content */}
      <section className="privacy-policy-section">
        <div className="container">
          <div className="privacy-content">
            <h1>Terms Of Service</h1>
            <p className="last-updated">Last updated: May 15, 2025</p>

            <div className="policy-intro">
              <p>Welcome to <code>slkmediaagency.com</code>. By accessing or using our website or services, you agree to comply with and be bound by the following Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website.</p>
            </div>

            <div className="policy-section">
              <h2>1. Acceptance of Terms</h2>
              <p>By using our website or services, you agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            </div>

            <div className="policy-section">
              <h2>2. Use of the Website and Services</h2>
              <p>You may use our website and services only for lawful purposes and in accordance with these Terms. You agree not to use our site or services:</p>
              <ul>
                <li>In any way that violates applicable laws or regulations.</li>
                <li>To send unsolicited advertising or promotional material.</li>
                <li>To impersonate SLK Media Agency or misrepresent your affiliation with us.</li>
              </ul>
              <p>We reserve the right to suspend or terminate your access to our services at our discretion and without notice, if we believe you have violated these Terms.</p>
            </div>

            <div className="policy-section">
              <h2>3. Intellectual Property</h2>
              <p>All content, features, and functionality on this website - including text, graphics, logos, icons, images, audio clips, and software - are the property of SLK Media Agency or its licensors and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or exploit any content without our prior written permission.</p>
            </div>

            <div className="policy-section">
              <h2>4. User Contributions</h2>
              <p>Our site may allow users to post content such as feedback, comments, or other material ("User Contributions"). By submitting content, you grant SLK Media Agency a non-exclusive, royalty-free, transferable, and worldwide license to use, reproduce, distribute, and display the content. You are responsible for ensuring your content does not violate any third-party rights or laws.</p>
            </div>

            <div className="policy-section">
              <h2>5. SMS Messaging Terms</h2>
              <p>SLK Media Agency may use SMS messaging to provide appointment reminders, updates, marketing offers, or client support - only to those who have opted in.</p>

              <h3>Opt-Out:</h3>
              <p>You may opt out at any time by replying "STOP" to any SMS you receive from us. You will receive a final confirmation message, and then you will no longer receive further SMS communication unless you opt in again.</p>

              <h3>Support:</h3>
              <p>If you need assistance, reply "HELP" or contact us at hello@slkmediaagency.com or +31 6 1001 25 43.</p>

              <h3>Message & Data Rates:</h3>
              <p>Standard message and data rates may apply depending on your mobile provider. Message frequency may vary.</p>

              <h3>Privacy:</h3>
              <p>Your number and preferences are kept private in accordance with our Privacy Policy.</p>
            </div>

            <div className="policy-section">
              <h2>6. Links to Third-Party Websites</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content, terms, or privacy practices of any third-party sites. You access such sites at your own risk.</p>
            </div>

            <div className="policy-section">
              <h2>7. Disclaimer of Warranties</h2>
              <p>Our website and services are provided "as is" and "as available" without warranties of any kind. SLK Media Agency does not guarantee that the website will be error-free or uninterrupted. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>
            </div>

            <div className="policy-section">
              <h2>8. Limitation of Liability</h2>
              <p>In no event will SLK Media Agency, its employees, partners, or affiliates be liable for any indirect, incidental, special, or consequential damages arising from your use of the website or services, even if we were advised of the possibility of such damages.</p>
            </div>

            <div className="policy-section">
              <h2>9. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless SLK Media Agency and its affiliates from any claims, liabilities, damages, or expenses resulting from your use of the website or breach of these Terms.</p>
            </div>

            <div className="policy-section">
              <h2>10. Governing Law</h2>
              <p>These Terms are governed by the laws of the Netherlands, without regard to its conflict of law rules. Any legal action or proceeding relating to your access to or use of the website shall be instituted in the courts of the Netherlands.</p>
            </div>

            <div className="policy-section">
              <h2>11. Changes to Terms</h2>
              <p>We may modify these Terms at any time. If we make material changes, we will post the updated version here and update the "Last Updated" date. Your continued use of the website after any changes indicates your acceptance of the revised terms.</p>
            </div>

            <div className="policy-section">
              <h2>12. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> Email: hello@slkmediaagency.com</p>
                <p><i className="fas fa-phone"></i> Phone: +31 6 1001 25 43</p>
              </div>
            </div>

            <div className="back-to-home">
              <Link href="/" className="primary-cta">Back to Home</Link>
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
