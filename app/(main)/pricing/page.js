import Link from 'next/link';
import { PlanCards, CompareTable, AddOns } from '../../../components/PricingPlans';
import PricingCalculator from '../../../components/PricingCalculator';

// The /pricing page: three packages, proof, the comparison table, the add-ons,
// the plan calculator and a pricing FAQ. Rebuilt 16 October 2026 (Samuel
// approved every price and rule that day); Done For You Plus, the comparison
// line, the proof section and the FAQ added 19 October 2026.
// Replaced the 12 October page; the retired plans are listed in OVERVIEW.md
// section 7.1. /pricing/clips-only still redirects here, see next.config.mjs.
// 2 Nov 2026 (Samuel): Done For You Starter ($997, 10 clips) replaced the Done
// With You card, the hero was rewritten, and the calculator moved up directly
// under the packages with a prompt that points to it.
// 11 Nov 2026 (Samuel approved the positioning "Your podcast content team"):
// new hero, client proof, a freelancer vs AI tool vs content team comparison
// and a raw vs finished clip block. Later the same day (Samuel): all pricing
// (cards, calculator, add-ons, package table) sits at the top, client quotes
// come after it, and no client channel numbers, view counts or channel links. The agency and salary comparison line, the four
// portfolio clips and the Why SLK Media Agency block were removed to keep the
// page short. Prices, plans, checkouts and the calculator are unchanged.

const DESCRIPTION =
  'SLK Media Agency pricing: Done For You Starter at $997 a month (10 clips, thumbnails, captions, posting, a project manager, a monthly call and report), Done For You at $1,597 a month (20 clips, weekly calls and reporting) or Done For You Plus at $1,897 a month (everything in Done For You plus 4 long-form episode edits). Add-ons and a plan calculator.';

const SHARE_DESCRIPTION =
  'Your podcast content team: we pick the moments, edit the clips, design the thumbnails, write the captions, post everywhere and report back. From $997 a month for 10 clips.';

export const metadata = {
  title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description: SHARE_DESCRIPTION,
    url: '/pricing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
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

// Video testimonials. Steve's quote is his own words from
// testimonial-steve.mp4 (transcribed 11 Nov 2026; the older quote shown for
// him was not in the video). Brian's matches testimonial-brian.mp4. Preston
// Hurd's card was dropped here to keep the page short (still on /testimonials). Channel numbers and links to client
// channels were removed on 11 Nov 2026 (Samuel: the results are not impressive
// enough to help).
const TESTIMONIALS = [
  {
    name: 'Steve Garrett',
    show: 'Corvette Today Podcast',
    initials: 'SG',
    video: 'steve',
    quote: "That was one thing that was on my list of things to do is to make these videos. And with you guys doing that, it's really helped me out a lot. It takes one thing off of my plate. I think you guys do a great job. You're professional. I'm very happy with everything so far.",
  },
  {
    name: 'Brian Burton',
    show: 'Waste No Day Podcast',
    initials: 'BB',
    video: 'brian',
    quote: 'I have several teams across three different businesses and I consider you one of the "A-Players" on the teams that I would like to make sure we do business with for a long time. The quality of the short reels created out of full episodes has been surprising, and also the communication, the support, and the professionalism.',
  },
];

// A freelancer vs doing it yourself with an AI tool vs us. No prices and no
// numbers on purpose: nothing here is a measured figure.
const WAYS = [
  { label: 'Who picks the best moments', free: 'You brief them, or they guess', ai: 'The tool suggests, you choose', us: 'We pick them, for the people you want to reach' },
  { label: 'Editing the clips', free: 'Yes', ai: 'A first cut. You fix the rest', us: 'Our editors finish every clip' },
  { label: 'A thumbnail for every clip', free: 'Depends on who you hire', ai: 'You make it', us: 'Yes, designed for each clip' },
  { label: 'Captions and hashtags', free: 'Depends on who you hire', ai: 'You write them', us: 'Written for each platform' },
  { label: 'Posting on every platform', free: 'Usually you', ai: 'You', us: 'We post them' },
  { label: 'Reporting on what worked', free: 'Depends on who you hire', ai: 'You pull the numbers', us: 'A report every week or month' },
  { label: 'Who keeps it running', free: 'You manage them', ai: 'You', us: 'Your project manager' },
  { label: 'Your time each month', free: 'Briefing, checking, posting', ai: 'All of it', us: 'Recording, plus your call with us' },
];

// The pricing FAQ. Pricing questions taken from the home page FAQ (answers
// brought in line with the three packages) plus questions about the packages
// themselves. Every fact here is on this page, the home page FAQ or the
// approved timelines in slkwebsitechatbotknowledge.md. Added 19 Oct 2026.
const FAQ = [
  {
    q: 'What is the difference between the three packages?',
    a: [
      'All three are fully done for you: we edit the clips, make a custom thumbnail for every clip, write the captions, hashtags and calls to action, post every clip on every platform, and give you a dedicated project manager and a strategy document before the first clip.',
      'Done For You Starter ($997 a month): 10 clips a month, with a monthly call and a monthly report.',
      'Done For You ($1,597 a month): 20 clips a month, with a weekly call and weekly reporting.',
      'Done For You Plus ($1,897 a month): everything in Done For You, plus 4 long-form episode edits a month.',
    ],
  },
  {
    q: 'Which package should I pick?',
    a: [
      'Done For You Starter if you publish 1 or 2 episodes a month. Done For You if you publish 2 to 4. Done For You Plus if you also want your full episodes edited.',
      'Already have someone posting for you? Pick "Clips only" in the Build your own plan calculator: we make the clips and you post them.',
      'Still not sure? Book a 30-minute strategy call and we will work it out with you.',
    ],
  },
  {
    q: 'Why is Done For You Plus cheaper than adding episode edits myself?',
    a: [
      'A long-form episode edit costs $150 as an add-on. Done For You with 4 edits added would be $1,597 plus $600, so $2,197 a month.',
      'Done For You Plus includes those 4 edits for $1,897 a month, which is $300 a month less, because you take them as part of the full done-for-you package.',
    ],
  },
  {
    q: 'Can I add more clips or episode edits?',
    a: [
      'Yes. Extra clips are $60 each on Done For You Starter, and $75 each on Done For You and Done For You Plus. Extra long-form episode edits are $150 per episode. Show notes ($50) and SEO show notes ($100) are available per episode on any package.',
      'Use the Build your own plan calculator above to see your monthly price.',
    ],
  },
  {
    q: 'How many clips do I get?',
    a: [
      'We count clips per month, not per episode. Done For You Starter comes with 10 clips a month, Done For You and Done For You Plus with 20, and you can add extra clips on top. We pick the strongest moments from all the episodes you send that month.',
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
      'No. Nobody can honestly promise those. What we commit to is the work: your clips every month, posted on the schedule we agree, with a report showing what every clip did (monthly on Starter, weekly on Done For You and Done For You Plus).',
    ],
  },
  {
    q: 'What if I only publish 1 episode a month?',
    a: [
      'Done For You Starter is built for that. Its 10 clips a month fit one or two episodes without your feed starting to feel repetitive.',
      'For 20 clips a month we work best with shows publishing 2 to 4 episodes. With one episode, every clip comes from the same conversation.',
    ],
  },
  {
    q: 'Will I own my content and files?',
    a: ['Yes. Everything we create for you is yours to keep, forever, no matter what.'],
  },
  {
    q: 'Do you provide analytics or reports?',
    a: [
      'Yes, on every package: weekly on Done For You and Done For You Plus, monthly on Done For You Starter. We report on which clips got the most views and engagement, how each platform performed, and what we recommend next.',
    ],
  },
  {
    q: 'Can I see examples of your work first?',
    a: [
      'Yes. The clip above is real client work, and the portfolio has more. Want examples from your niche? Mention it on your strategy call and we will pull relevant samples.',
    ],
  },
];

function monthlyOffer(name, description, price) {
  return {
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'USD',
      unitText: 'MONTH',
    },
    availability: 'https://schema.org/InStock',
    url: 'https://slkmediaagency.com/pricing',
  };
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Podcast Content Production by SLK Media Agency',
  description:
    'Done-for-you podcast clip production, copywriting, and omnichannel distribution for podcasters who publish consistently.',
  brand: { '@type': 'Brand', name: 'SLK Media Agency' },
  url: 'https://slkmediaagency.com/pricing',
  image: 'https://slkmediaagency.com/og-image.jpg',
  offers: [
    monthlyOffer(
      'Done For You',
      '20 short clips a month with a custom thumbnail for every clip, captions, hashtags and calls to action, posting on every platform, a dedicated project manager, a weekly call, weekly reporting and a strategy document before the first clip.',
      '1597'
    ),
    monthlyOffer(
      'Done For You Starter',
      '10 short clips a month with a custom thumbnail for every clip, captions, hashtags and calls to action, posting on every platform, a dedicated project manager, a monthly call, monthly reporting and a strategy document before the first clip.',
      '997'
    ),
    monthlyOffer(
      'Done For You Plus',
      'Everything in Done For You plus 4 long-form episode edits a month.',
      '1897'
    ),
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            <li><a href="/blog">Blog</a></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pricing-page">
        {/* Hero */}
        <section className="pp-hero">
          <div className="container">
            <p className="pp-kicker">Pricing</p>
            <h1>Your podcast content team.</h1>
            <p className="pp-hero-sub">The whole job, off your plate. You record. We pick the best moments, edit the clips, design a thumbnail for each one, write the captions, post on every platform and report back.</p>
            <ul className="pp-hero-points">
              <li><i className="fas fa-check" aria-hidden="true"></i> From $997 a month for 10 clips</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> Month to month, pause up to 60 days</li>
              <li><i className="fas fa-check" aria-hidden="true"></i> You own every clip</li>
            </ul>
            <div className="pp-hero-ctas">
              <a href={BOOK_URL} className="primary-cta pp-hero-cta" target="_blank" rel="noopener">Book a Strategy Call</a>
              <a href="#build" className="pp-hero-alt"><i className="fas fa-sliders" aria-hidden="true"></i> Build your own plan</a>
            </div>
          </div>
        </section>

        {/* The three packages and the terms line */}
        <section className="pp-plans" id="pricing">
          <div className="container">
            <PlanCards />
          </div>
        </section>

        {/* Build your plan */}
        <section className="pp-build" id="build" aria-labelledby="pp-build-title">
          <div className="container">
            <p className="pp-eyebrow">Pricing calculator</p>
            <h2 id="pp-build-title">Build your own plan</h2>
            <p className="pp-lead">Pick your clips, add full episode edits or show notes, or choose to post the clips yourself. The price updates as you go.</p>
            <PricingCalculator />
          </div>
        </section>

        {/* Optional add-ons, under the calculator */}
        <section className="pp-details pp-details-addons">
          <div className="container">
            <AddOns />
          </div>
        </section>

        {/* What each package includes */}
        <section className="pp-details">
          <div className="container">
            <CompareTable />
          </div>
        </section>

        {/* Client video quotes, after all the pricing */}
        <section className="pp-proof" aria-labelledby="pp-clips-title">
          <div className="container">
            <h2 id="pp-clips-title">What clients say</h2>
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

        {/* Three ways to get it done (positioning approved 11 Nov 2026) */}
        <section className="pp-ways" aria-labelledby="pp-ways-title">
          <div className="container">
            <h2 id="pp-ways-title">Three ways to get your clips made</h2>
            <p className="pp-lead">The difference is everything a tool, or one freelancer, leaves for you to do.</p>
            <div className="pp-ways-box">
              <table className="pp-ways-table">
                <thead>
                  <tr>
                    <th scope="col"><span className="pp-sr">Task</span></th>
                    <th scope="col">A freelancer</th>
                    <th scope="col">You, with an AI clipping tool</th>
                    <th scope="col" className="pp-us">Your podcast content team</th>
                  </tr>
                </thead>
                <tbody>
                  {WAYS.map((w) => (
                    <tr key={w.label}>
                      <th scope="row">{w.label}</th>
                      <td data-label="Freelancer">{w.free}</td>
                      <td data-label="AI tool">{w.ai}</td>
                      <td data-label="Us" className="pp-us">{w.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <div className="pp-strip">
              <h2>Done For You Starter $997, Done For You $1,597 or Done For You Plus $1,897 a month. Not sure which one fits? We&apos;ll work it out with you on a 30-minute call.</h2>
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
