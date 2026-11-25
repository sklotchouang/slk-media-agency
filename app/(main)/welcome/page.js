import Link from 'next/link';
import { onboardingFormUrl, CONTACT_EMAIL } from '../../../lib/checkout';

// /welcome: the page a new client lands on right after paying for Monthly Show
// or Biweekly Show by Myfundbox checkout (per-episode pricing, Samuel, 25 Nov
// 2026). Samuel sets https://slkmediaagency.com/welcome as the redirect inside
// each Myfundbox checkout. Not indexed and not in the sitemap.
//
// The steps follow how onboarding runs today: the Formaloo "Onboarding Intake
// Form", then the Nifty project board (files, discussion, the project manager),
// then the strategy document, then the first clips. The only timings used are
// approved ones: "a strategy document before the first clip" and "first clips
// within 3 to 5 business days after onboarding". No prices on this page.
//
// The onboarding form link is ONBOARDING_FORM_URL in lib/checkout.js. While it
// is empty, step 1 says we email the form and gives the hello@ address.

export const metadata = {
  title: 'Welcome, here is what happens next | SLK Media Agency',
  description: 'You are in. The next steps for new SLK Media Agency clients: your onboarding form, your project board, your strategy document and your first clips.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/welcome' },
};

const INCLUDED = [
  '5 clips for every episode',
  'A custom thumbnail for every clip',
  'Captions, hashtags and calls to action for every clip',
  'Every clip posted for you on every platform',
  'A dedicated project manager',
  'A strategy document before the first clip',
];

export default function WelcomePage() {
  const formUrl = onboardingFormUrl();
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
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
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="welcome-page">
        <section className="wl-hero">
          <div className="container">
            <span className="wl-seal" aria-hidden="true"><i className="fas fa-check"></i></span>
            <h1>You&apos;re in.</h1>
            <p className="wl-sub">Welcome to SLK Media Agency. Your plan is booked. Here is exactly what happens next, step by step.</p>
          </div>
        </section>

        <section className="wl-steps" aria-labelledby="wl-steps-title">
          <div className="container">
            <h2 id="wl-steps-title" className="wl-h2">Your next steps</h2>
            <ol className="wl-list">
              <li className="wl-step wl-step-now">
                <div className="wl-step-body">
                  <h3>Fill in your onboarding form</h3>
                  <p>Tell us about your show, your audience, your goals and your brand. We build your strategy from it.</p>
                  {formUrl ? (
                    <a href={formUrl} className="primary-cta wl-cta" target="_blank" rel="noopener">Open the onboarding form</a>
                  ) : (
                    <p className="wl-note">To get your onboarding form, email <a href={`mailto:${CONTACT_EMAIL}?subject=My%20onboarding%20form`}>{CONTACT_EMAIL}</a> with the name of your show. We reply with your form.</p>
                  )}
                </div>
              </li>
              <li className="wl-step">
                <div className="wl-step-body">
                  <h3>Join your project board</h3>
                  <p>We invite you by email to your project board on Nifty. That is where you share files, see your clips and talk to your project manager. Not in your inbox? Check your spam folder.</p>
                </div>
              </li>
              <li className="wl-step">
                <div className="wl-step-body">
                  <h3>Share your episodes and your brand</h3>
                  <p>Upload your episodes to the Files section of your project board, or post the link to where they live. Add your brand colours (hex codes), fonts and logo, so every thumbnail matches your look.</p>
                </div>
              </li>
              <li className="wl-step">
                <div className="wl-step-body">
                  <h3>Get your strategy document</h3>
                  <p>It is the plan behind every clip: who the clips are for and where we post them. You get it before the first clip.</p>
                </div>
              </li>
              <li className="wl-step">
                <div className="wl-step-body">
                  <h3>Your first clips arrive</h3>
                  <p>Within 3 to 5 business days after onboarding. After that, on the schedule we agree with you.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="wl-plan" aria-labelledby="wl-plan-title">
          <div className="container wl-grid">
            <div className="wl-box">
              <h2 id="wl-plan-title" className="wl-h2">What you get every month</h2>
              <ul className="wl-checks">
                {INCLUDED.map((item) => (
                  <li key={item}><i className="fas fa-check" aria-hidden="true"></i> {item}</li>
                ))}
                <li><i className="fas fa-check" aria-hidden="true"></i> A monthly call and a monthly report</li>
              </ul>
            </div>
            <div className="wl-box">
              <h2 className="wl-h2">How episodes work</h2>
              <ul className="wl-rules">
                <li><strong>Every episode gets 5 clips.</strong> Monthly Show is 5 clips a month, Biweekly Show is 10.</li>
                <li><strong>No new episode this month?</strong> We cut your clips from your back catalogue.</li>
                <li><strong>More episodes than your plan covers?</strong> You pick which episode we clip. Tell your project manager on your board.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="wl-help">
          <div className="container">
            <p>Questions, or something not working? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-building"></i>
                <span>KVK-nummer: 95218300</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-receipt"></i>
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
    </>
  );
}
