import Link from 'next/link';
import { BOOK_URL, CONTACT_EMAIL } from '../../../lib/checkout';

// /payment-failed: where a Myfundbox checkout sends the buyer when the payment
// does not go through (Samuel, 25 Nov 2026; set as the "Failure Page URL" in
// the Myfundbox Checkout Customizer next to the /thank-you success page).
// Not indexed and not in the sitemap. Reuses the .welcome-page styles.

export const metadata = {
  title: 'Payment not completed | SLK Media Agency',
  description: 'Your payment to SLK Media Agency did not go through. Try again, or book a call.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/payment-failed' },
};

export default function PaymentFailedPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link href="/" aria-label="SLK Media Agency, home"><img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" width={120} height={45} /></Link>
          </div>
          <ul className="nav-menu" id="primary-nav">
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="welcome-page">
        <section className="wl-hero">
          <div className="container">
            <span className="wl-seal wl-seal-fail" aria-hidden="true"><i className="fas fa-xmark"></i></span>
            <h1>Payment not completed.</h1>
            <p className="wl-sub">Your payment did not go through, so your plan has not started yet. This can happen when a card is declined or the checkout is closed before it finishes.</p>
          </div>
        </section>

        <section className="wl-steps" aria-labelledby="wl-fail-title">
          <div className="container">
            <h2 id="wl-fail-title" className="wl-h2">What you can do</h2>
            <ol className="wl-list">
              <li className="wl-step wl-step-now">
                <div className="wl-step-body">
                  <h3>Try again</h3>
                  <p>Go back to the plans and choose yours again. Check the card details, or use another card.</p>
                  <Link href="/pricing#pricing" className="primary-cta wl-cta">Back to the plans</Link>
                </div>
              </li>
              <li className="wl-step">
                <div className="wl-step-body">
                  <h3>Rather talk it through?</h3>
                  <p>Book a 30-minute call and we help you get started.</p>
                  <p><a href={BOOK_URL} target="_blank" rel="noopener">Book a call</a></p>
                </div>
              </li>
              <li className="wl-step">
                <div className="wl-step-body">
                  <h3>Charged but sent here?</h3>
                  <p>Email <a href={`mailto:${CONTACT_EMAIL}?subject=Payment%20problem`}>{CONTACT_EMAIL}</a> and we check it for you.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
