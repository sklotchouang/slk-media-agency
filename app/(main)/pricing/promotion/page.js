import Link from 'next/link';
import {
  PlanCards,
  CompareTable,
  AddOns,
  WhyUs,
  PROMO_SPOTS_TOTAL,
  PROMO_SPOTS_LEFT,
  promoIsFull,
} from '../../../../components/PromoPricingPlans';
import PromoPricingCalculator from '../../../../components/PromoPricingCalculator';

// The /pricing/promotion page (built 21 October 2026 from Samuel's brief): a
// copy of /pricing with temporary promotion prices for 4 new creators. Same
// sections in the same order. It is for outreach links only, so it is
// noindex, not in any nav and not in the sitemap. /pricing is unchanged and
// still uses PricingPlans.js and PricingCalculator.js.
//
// Whether the promotion is still open lives only in PROMO_OPEN in
// components/PromoPricingPlans.js. The banner, the middle card and the FAQ
// below all read it. How many spots are left lives in PROMO_SPOTS_LEFT in the same file. To remove the promotion, see "Promotion page and
// rollback" in OVERVIEW.md.

const DESCRIPTION =
  'SLK Media Agency flash promotion for 4 new creators: Done For You Starter at $697 a month (normally $997, 10 clips, monthly call and report), Done For You at $997 a month (normally $1,597, 20 clips) or Done For You Plus at $1,597 a month (normally $1,897, 20 clips plus 4 long-form episode edits). Add-ons and a plan calculator.';

const SHARE_DESCRIPTION =
  'Flash promotion for 4 new creators. Same clips, same quality, lower monthly price for as long as you stay.';

const TITLE = 'Pricing Promotion: Podcast Clip Production Plans | SLK Media Agency';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: true },
  alternates: { canonical: '/pricing/promotion' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: TITLE,
    description: SHARE_DESCRIPTION,
    url: '/pricing/promotion',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

// Same clips and testimonials as /pricing.
const CLIPS = [4, 6, 7, 8];
const POSTER = { 8: '/portfolio/thumbnails/Clip-8-vertical.jpg' };

const TESTIMONIALS = [
  {
    name: 'Brian Burton',
    show: 'Waste No Day Podcast',
    initials: 'BB',
    chip: '8-12 clips per episode, every episode',
    icon: 'fas fa-video',
    video: 'brian',
    quote: 'I have several teams across three different businesses and I consider you one of the "A-Players" on the teams that I would like to make sure we do business with for a long time. The quality of the short reels created out of full episodes has been surprising, and also the communication, the support, and the professionalism.',
  },
  {
    name: 'Steve Garrett',
    show: 'Corvette Today Podcast',
    initials: 'SG',
    chip: '11.9K subscribers, 599+ episodes',
    icon: 'fab fa-youtube',
    video: 'steve',
    quote: "Working with SLK Media Agency has been a game-changer for my podcast. They handle all the clip creation and distribution while I focus on what I do best: creating great content. The reach we've gained across multiple platforms is incredible.",
  },
  {
    name: 'Preston Hurd',
    show: 'The Filtered Brew Podcast',
    initials: 'PH',
    chip: 'Fast turnaround on every edit',
    icon: 'fas fa-bolt',
    video: 'preston',
    vertical: true,
    quote: "I showed him your intro video, which I think is fantastic. It's not done, but it's fantastic. I love it. I don't like it, I love it. What you do is so professional. It gave me the confidence to move forward on the whole project. And your team is fast. I don't know how you make any money with all the time these edits take. I don't know how you charge so cheap for what you do.",
  },
];

// The promotion FAQ: the /pricing questions, with the package, add-on and
// promotion answers changed as Samuel's brief of 21 October 2026 sets out.
const PROMOTION_LENGTH = promoIsFull
  ? [
      `This promotion is full: all ${PROMO_SPOTS_TOTAL} spots at these prices have been taken.`,
      'Book a call to join the waiting list for the next one.',
    ]
  : [
      `Until ${PROMO_SPOTS_TOTAL} new creators are on board. We are taking only ${PROMO_SPOTS_TOTAL} new creators at these prices, because that is how many we can onboard properly right now. Only ${PROMO_SPOTS_LEFT} of the ${PROMO_SPOTS_TOTAL} spots are left.`,
      'Once all of them have joined, the promotion ends and prices return to normal. If you want one of the spots, book your call now.',
    ];

const FAQ = [
  {
    q: 'What is the difference between the three packages?',
    a: [
      'All three include the full service: editing, a custom thumbnail for every clip, captions, hashtags and calls to action, posting on every platform, a dedicated project manager and a strategy document before the first clip.',
      'Starter ($697 a month, normally $997): 10 clips a month, with a monthly call and a monthly report.',
      'Done For You and Done For You Plus come with a weekly call and a weekly report.',
      'Done For You ($997 a month, normally $1,597): 20 clips a month, weekly call and report.',
      'Done For You Plus ($1,597 a month, normally $1,897): everything in Done For You, plus 4 long-form episode edits a month.',
    ],
  },
  {
    q: 'Which package should I pick?',
    a: [
      'Starter if you publish 1 or 2 episodes a month. Done For You if you publish 2 to 4. Done For You Plus if you also want your full episodes edited. Want to post the clips yourself? Use Build your plan and pick Done With You.',
      'Still not sure? Book a 30-minute strategy call and we will work it out with you.',
    ],
  },
  {
    q: 'Do I keep this price?',
    a: [
      'Yes. If you join during this promotion, you keep your promotion price for as long as you stay with us, even after the promotion ends and prices go back up.',
    ],
  },
  {
    q: 'How long does the promotion last?',
    a: PROMOTION_LENGTH,
  },
  {
    q: 'Can I add more clips or episode edits?',
    a: [
      'Yes. Extra clips are $30 each on Starter (at 20 clips you move up to Done For You), $50 each on Done For You and Done For You Plus, and $25 each on Done With You. Extra long-form episode edits are $150 per episode. Show notes ($50) and SEO show notes ($100) are available per episode on any package.',
      'Use the Build your plan calculator above to see your monthly price.',
    ],
  },
  {
    q: 'How many clips do I get?',
    a: [
      'We count clips per month, not per episode. Starter comes with 10 clips a month, Done For You and Done For You Plus with 20, and you can add extra clips on top. We pick the strongest moments from all the episodes you send that month.',
    ],
  },
  {
    q: "What's your turnaround time?",
    a: [
      'Your first clips arrive within 3 to 5 business days after onboarding. After that we deliver on the schedule we agree with you at onboarding.',
    ],
  },
  {
    q: "What's your cancellation policy?",
    a: [
      'Month to month. Cancel anytime before your next billing cycle.',
      'Can I pause instead of canceling? Yes. Pause for up to 60 days.',
      "Notice period: give us 14 days' notice so we can finish any in-progress work.",
    ],
  },
  {
    q: 'Do you guarantee downloads, views or sponsors?',
    a: [
      'No. Nobody can honestly promise those. What we commit to is the work: your clips every month, posted on the schedule we agree (on Done For You and Done For You Plus), with a report showing what every clip did (monthly on Starter, weekly on Done For You and Done For You Plus).',
    ],
  },
  {
    q: 'What if I only publish 1 episode a month?',
    a: [
      'We work best with shows publishing 2 to 4 episodes a month. Steady posting needs steady material: with 2 to 4 episodes we have plenty of strong moments to fill your 20 clips. With one episode, every clip comes from the same conversation, and your feed can start to feel repetitive.',
    ],
  },
  {
    q: 'Will I own my content and files?',
    a: ['Yes. Everything we create for you is yours to keep, forever, no matter what.'],
  },
  {
    q: 'Do you provide analytics or reports?',
    a: [
      'Yes, on Done For You and Done For You Plus. Every week we report on which clips got the most views and engagement, how each platform performed, and what we recommend for next week.',
    ],
  },
  {
    q: 'Can I see examples of your work first?',
    a: [
      'Yes. The clips above are real client work, and the portfolio has more. Want examples from your niche? Mention it on your strategy call and we will pull relevant samples.',
    ],
  },
];

export default function PricingPromotionPage() {
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
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/success/case-studies">Case Studies</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="#build">Pricing Calculator</a></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pricing-page pp-promo-page">
        {/* Hero */}
        <section className="pp-hero">
          <div className="container">
            <p className="pp-kicker pp-kicker-promo"><i className="fas fa-bolt" aria-hidden="true"></i> Flash promotion pricing</p>
            <h1>Three ways to work with us.</h1>
            <p className="pp-hero-sub">Same clips, same quality. Pick how much of the rest you want us to handle.</p>
            <a href={BOOK_URL} className="primary-cta pp-hero-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
          </div>
        </section>

        {/* Comparison line, same as /pricing */}
        <section className="pp-anchor" aria-label="Price comparison">
          <div className="container">
            <p className="pp-anchor-note">
              <i className="fas fa-circle-info" aria-hidden="true"></i>
              <span>For comparison: a full-time US video editor earns a median salary of <strong>$75,420 a year</strong>, and full-service podcast agencies start at <strong>$2,500 per episode</strong>.</span>
            </p>
          </div>
        </section>

        {/* The promotion banner, the three packages and the terms line */}
        <section className="pp-plans" id="pricing">
          <div className="container">
            <PlanCards />
          </div>
        </section>

        {/* Optional add-ons, directly under the packages */}
        <section className="pp-details pp-details-addons">
          <div className="container">
            <AddOns />
          </div>
        </section>

        {/* Build your plan */}
        <section className="pp-build" id="build" aria-labelledby="pp-build-title">
          <div className="container">
            <h2 id="pp-build-title">Build your plan</h2>
            <p className="pp-lead">Pick what you want each month. The price updates as you go.</p>
            <PromoPricingCalculator />
          </div>
        </section>

        {/* Why SLK Media Agency (moved below Build your plan) */}
        <section className="pp-whyus">
          <div className="container">
            <WhyUs />
          </div>
        </section>

        {/* Proof: real client clips, then real client quotes */}
        <section className="pp-proof" aria-labelledby="pp-clips-title">
          <div className="container">
            <div className="pp-proof-head">
              <h2 id="pp-clips-title">Clips we made for real shows</h2>
              <Link href="/portfolio" className="pp-more">Watch more examples <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
            </div>
            <div className="pp-clips">
              {CLIPS.map((n) => (
                <div
                  key={n}
                  className="pp-clip"
                  dangerouslySetInnerHTML={{
                    __html: `<video controls muted playsinline preload="none" poster="${POSTER[n] || `/portfolio/thumbnails/Clip-${n}.jpg`}" aria-label="Client clip ${n}"><source src="/portfolio/Clip-${n}.mp4" type="video/mp4"></video>`,
                  }}
                />
              ))}
            </div>

            <h2 className="pp-quotes-title">What clients say</h2>
            <div className="pp-tlist">
              {TESTIMONIALS.map((t) => (
                <figure className={t.vertical ? 'pp-tcard pp-tcard-vertical' : 'pp-tcard'} key={t.name}>
                  <div
                    className="pp-tvideo"
                    dangerouslySetInnerHTML={{
                      __html: `<video controls playsinline preload="none" poster="/video-testimonials/poster-${t.video}.webp" aria-label="${t.name}'s video testimonial"><source src="/video-testimonials/testimonial-${t.video}.mp4" type="video/mp4"></video>`,
                    }}
                  />
                  <div className="pp-tbody">
                    <span className="pp-tchip"><i className={t.icon} aria-hidden="true"></i> {t.chip}</span>
                    <blockquote className="pp-tquote">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="pp-tperson">
                      <span className="pp-tavatar" aria-hidden="true">{t.initials}</span>
                      <span>
                        <span className="pp-tname">{t.name}</span>
                        <span className="pp-tshow">{t.show}</span>
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
            <p className="pp-proof-more"><Link href="/testimonials">See all testimonials</Link> or <Link href="/success/case-studies">read the case studies</Link>.</p>
          </div>
        </section>

        {/* Comparison table (moved below the proof) */}
        <section className="pp-details">
          <div className="container">
            <CompareTable />
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="faq pp-faq" id="faq" aria-labelledby="pp-faq-title">
          <div className="container">
            <h2 className="section-title" id="pp-faq-title">Pricing questions</h2>
            <div className="accordion">
              {FAQ.map((item) => (
                <div className="accordion-item" key={item.q}>
                  <div className="accordion-header">
                    <h3>{item.q}</h3>
                    <span className="accordion-icon"><i className="fas fa-plus" aria-hidden="true"></i></span>
                  </div>
                  <div className="accordion-content">
                    {item.a.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing band */}
        <section className="pp-close">
          <div className="container">
            <div className="pp-strip pp-strip-promo">
              <h2>Flash promotion, {PROMO_SPOTS_TOTAL} creators only: Starter $697 (normally $997), Done For You $997 (normally $1,597) or Done For You Plus $1,597 (normally $1,897) a month. Keep your price for as long as you stay. Book your 30-minute call now.</h2>
              <a href={BOOK_URL} className="primary-cta pp-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
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
