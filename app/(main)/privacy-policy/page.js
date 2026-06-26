import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | SLK Media Agency',
  description: 'How SLK Media Agency collects, uses and protects your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
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
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/#contact" className="cta-button">Get Started</Link></li>
          </ul>
        </div>
      </nav>
      <main id="main">

      {/* Privacy Policy Content */}
      <section className="privacy-policy-section">
        <div className="container">
          <div className="privacy-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last updated: May 15, 2025</p>

            <div className="policy-intro">
              <p>SLK Media Agency ("us", "we", or "our") operates the website <code>https://slkmediaagency.com</code> (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit or interact with our Service.</p>
              <p>By using the Service, you agree to the collection and use of information in accordance with this policy. Terms not defined here are defined in our Terms of Service.</p>
            </div>

            <div className="policy-section">
              <h2>1. Information We Collect</h2>
              <p>We collect personal and non-personal information from users of our Service.</p>

              <h3>Personal Information you may provide includes:</h3>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Any other information submitted via our contact forms or inquiry tools</li>
              </ul>

              <h3>Automatically collected information includes:</h3>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Referring/exit pages</li>
                <li>Date/time stamps</li>
                <li>Device type and operating system</li>
                <li>Time spent on pages and browsing behavior</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>2. Use of Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to inquiries and customer service requests</li>
                <li>Provide, operate, and improve our Service</li>
                <li>Personalize user experience</li>
                <li>Send newsletters, marketing emails, or service updates (if opted in)</li>
                <li>Analyze trends and optimize performance</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>3. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to track activity on our site and store certain information. Cookies are small data files stored on your device that may include an anonymous unique identifier.</p>
              <p>You can configure your browser to refuse cookies or alert you when cookies are being sent. Disabling cookies may affect the functionality of our Service.</p>
            </div>

            <div className="policy-section">
              <h2>4. Data Sharing and Third-Party Access</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers (e.g., hosting, analytics, CRM tools) solely to perform tasks on our behalf</li>
                <li>Legal authorities when required by law, subpoena, or governmental request</li>
                <li>Successors in the event of a business transfer, merger, or acquisition</li>
              </ul>
              <p>All third parties are required to handle your information securely and are restricted from using it for unrelated purposes.</p>
            </div>

            <div className="policy-section">
              <h2>5. SMS Communication (If Applicable)</h2>
              <p>If you provide your phone number and opt in, we may use SMS to deliver reminders, updates, or promotions. You can opt out at any time by replying "STOP" to any message. Message and data rates may apply. For assistance, reply "HELP" or contact us at hello@slkmediaagency.com.</p>
            </div>

            <div className="policy-section">
              <h2>6. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="policy-section">
              <h2>7. Your Rights (GDPR Compliance)</h2>
              <p>If you are located in the European Economic Area (EEA), you have the right to:</p>
              <ul>
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent (if processing is based on consent)</li>
                <li>Request data portability</li>
              </ul>
              <p>To exercise these rights, contact us at hello@slkmediaagency.com.</p>
            </div>

            <div className="policy-section">
              <h2>8. Children's Privacy</h2>
              <p>Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe your child has provided us with personal information, please contact us, and we will promptly delete the data.</p>
            </div>

            <div className="policy-section">
              <h2>9. External Links</h2>
              <p>Our site may contain links to third-party websites. We are not responsible for the content, terms, or privacy policies of such sites. Please review their policies before engaging with them.</p>
            </div>

            <div className="policy-section">
              <h2>10. Legal Compliance</h2>
              <p>We may disclose your personal data where required to do so by law or when we believe disclosure is necessary to protect our rights, comply with a legal obligation, or prevent fraud or abuse.</p>
            </div>

            <div className="policy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted to this page with an updated "Last Updated" date. Continued use of the Service after changes are posted constitutes your acceptance of the updated policy.</p>
            </div>

            <div className="policy-section">
              <h2>12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
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
