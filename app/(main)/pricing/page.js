import Link from 'next/link';

export const metadata = {
  title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
  description:
    'What SLK Media Agency costs, in full. The 10-Day Trial is $597 one-time for 5 clips. Content Engine Lite is $997/month for 10 clips. Content Engine is $1,597/month for 20 clips, with strategy, copywriting, thumbnails and distribution included.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description:
      'Every plan, every price, and what each one actually delivers. No call required to see the numbers.',
    url: '/pricing',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing: Podcast Clip Production Plans | SLK Media Agency',
    description:
      'Every plan, every price, and what each one actually delivers. No call required to see the numbers.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

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
    {
      '@type': 'Offer',
      name: '10-Day Trial',
      description: '5 clips produced from your episodes, delivered within 10 days. One-time payment.',
      price: '597',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Content Engine Lite',
      description: '10 clips per month with strategy, copywriting, thumbnails, scheduling and reporting.',
      price: '997',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Content Engine',
      description: '20 clips per month with strategy, copywriting, thumbnails, scheduling and reporting.',
      price: '1597',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://slkmediaagency.com/pricing',
    },
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
            <li><a href="#pricing-faq">FAQ</a></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main" className="pricing-page">
        {/* Hero */}
        <section className="pp-hero">
          <div className="container">
            <p className="pp-kicker">Pricing</p>
            <h1>Here is exactly what we cost.</h1>
            <p className="pp-hero-sub">
              Three ways to work with SLK Media Agency. Every price on this page is the real price, listed in full, with what it delivers next to it. Read it, pick the one that fits your show, and go.
            </p>
            <div className="pp-hero-jump">
              <a href="#pricing" className="pp-jump-link">See the plans</a>
              <a href="#compare" className="pp-jump-link">Compare what is included</a>
              <a href="#pricing-faq" className="pp-jump-link">Common questions</a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing-section" id="pricing">
          <div className="container">
            <h2 className="section-title">Simple, Transparent Investment</h2>
            <div className="pricing-grid">
              <div className="pricing-tier compact">
                <div className="pricing-header">
                  <h3>10-Day Trial</h3>
                  <p className="pricing-period">(One-time)</p>
                  <div className="pricing-price">$597</div>
                  <p className="pricing-cost-anchor">
                    <strong>See it first:</strong> a one-time project so you can judge our work on <span className="pricing-cost-anchor-figure">your own episodes</span>, not on somebody else's portfolio. No subscription, no commitment, nothing to cancel.
                  </p>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>5 clips produced from your episodes</li>
                    <li>Delivered within 10 days</li>
                    <li>One-time payment, no subscription</li>
                  </ul>
                </div>
                <p className="pricing-outcome">You send your episodes. We deliver <strong>5 finished clips</strong> within 10 days, so you see the quality before you commit.</p>
                <div className="pricing-footer">
                  <a href="https://subscription.myfundbox.com/OVP.jsf?orgid=3337&projectId=2530&projProdId=38954" className="btn-primary" target="_blank" rel="noopener">Get Your 10-Day Trial</a>
                </div>
                <p className="pricing-fee-note">Price excludes the Stripe processing fee. The fee is added at checkout, bringing the total to $617.</p>
              </div>
              <div className="pricing-tier compact">
                <div className="pricing-header">
                  <h3>Content Engine Lite</h3>
                  <p className="pricing-period">(DFY)</p>
                  <div className="pricing-price">$997/month</div>
                  <p className="pricing-cost-anchor">
                    <strong>The math:</strong> The same system as the Content Engine at <span className="pricing-cost-anchor-figure">half the monthly clip volume</span>. Built for shows that publish less often, or that want to start smaller without giving up strategy, copywriting and scheduling.
                  </p>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Complete Social Media Strategy Document</li>
                    <li>Target Audience Research, Competitor Analysis</li>
                    <li>10 clips/month with custom thumbnails</li>
                    <li>Copywriting (captions, hashtags, CTAs)</li>
                    <li>Full scheduling across all platforms</li>
                    <li>Dedicated Project Manager</li>
                    <li>Weekly Consultation Calls</li>
                    <li>Weekly Reporting</li>
                  </ul>
                </div>
                <p className="pricing-outcome">You record once. We turn it into <strong>10 platform-ready clips</strong>, posted consistently across every platform, every month.</p>
                <div className="pricing-footer">
                  <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a>
                </div>
              </div>
              <div className="pricing-tier featured compact">
                <div className="pricing-header">
                  <h3>Content Engine</h3>
                  <p className="pricing-period">(DFY)</p>
                  <div className="pricing-price">$1,597/month</div>
                  <p className="pricing-cost-anchor">
                    <strong>The math:</strong> A full-time in-house video editor in the US runs <span className="pricing-cost-anchor-figure">$50,000 to $80,000</span> a year, before software, equipment, and management time. SLK Media Agency delivers done-for-you repurposing across LinkedIn, YouTube, Instagram, Facebook and TikTok for a fraction of that. No one to hire. No one to manage.
                  </p>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Complete Social Media Strategy Document</li>
                    <li>Target Audience Research, Competitor Analysis</li>
                    <li>20 clips/month with custom thumbnails</li>
                    <li>Copywriting (captions, hashtags, CTAs)</li>
                    <li>Full scheduling across all platforms</li>
                    <li>Dedicated Project Manager</li>
                    <li>Weekly Consultation Calls</li>
                    <li>Weekly Reporting</li>
                  </ul>
                </div>
                <p className="pricing-outcome">You record once. We turn it into <strong>20 platform-ready clips</strong>, posted consistently across every platform, every month.</p>
                <div className="pricing-footer">
                  <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a>
                </div>
              </div>
            </div>

            {/* Custom order */}
            <div className="pp-custom">
              <div className="pp-custom-copy">
                <h3>Need a different volume?</h3>
                <p>
                  If your show publishes more often than these plans cover, needs a platform mix we have not listed, or has a launch or a back catalogue to work through, we will build the package around it and quote you directly.
                </p>
              </div>
              <div className="pp-custom-action">
                {/* .primary-cta, not .btn-primary: styles.css (the (main) group base)
                    carries only a responsive fragment for .btn-primary, its real base
                    lives in podcast-multiplier-styles.css which this group never loads.
                    .btn-primary therefore only renders correctly inside .pricing-footer,
                    where premium.css sets display:flex on it explicitly. */}
                <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Request a Custom Order</a>
                <p className="pp-custom-note">A 30 minute call. You leave with a scoped quote, whether or not you work with us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="pp-compare" id="compare">
          <div className="container">
            <h2 className="section-title">What each plan includes</h2>
            <p className="pp-section-sub">The same information as the cards above, side by side, so nothing is buried.</p>

            <div className="pp-table-scroll">
              <table className="pp-table">
                <caption className="pp-table-caption">A dot means the item is included in that plan. A dash means it is not part of that plan.</caption>
                <thead>
                  <tr>
                    <th scope="col">What you get</th>
                    <th scope="col">10-Day Trial</th>
                    <th scope="col">Content Engine Lite</th>
                    <th scope="col" className="pp-col-featured">Content Engine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Price</th>
                    <td><span className="pp-cell-strong">$597 one-time</span></td>
                    <td><span className="pp-cell-strong">$997/month</span></td>
                    <td className="pp-col-featured"><span className="pp-cell-strong">$1,597/month</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Finished clips</th>
                    <td><span className="pp-cell-strong">5 total</span></td>
                    <td><span className="pp-cell-strong">10 per month</span></td>
                    <td className="pp-col-featured"><span className="pp-cell-strong">20 per month</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Custom thumbnails</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Complete Social Media Strategy Document</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Target audience research and competitor analysis</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Copywriting (captions, hashtags, CTAs)</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Full scheduling across all platforms</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Dedicated Project Manager</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Weekly consultation calls</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Weekly reporting</th>
                    <td><span className="pp-no" role="img" aria-label="Not included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">Billing</th>
                    <td>One-time payment</td>
                    <td>Month to month</td>
                    <td className="pp-col-featured">Month to month</td>
                  </tr>
                  <tr>
                    <th scope="row">You own the content</th>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td><span className="pp-yes" role="img" aria-label="Included"></span></td>
                    <td className="pp-col-featured"><span className="pp-yes" role="img" aria-label="Included"></span></td>
                  </tr>
                  <tr>
                    <th scope="row">How you start</th>
                    <td><a href="https://subscription.myfundbox.com/OVP.jsf?orgid=3337&projectId=2530&projProdId=38954" className="pp-table-link" target="_blank" rel="noopener">Buy now</a></td>
                    <td><a href="https://link.slkmediaagency.com/strmeet" className="pp-table-link" target="_blank" rel="noopener">Strategy call</a></td>
                    <td className="pp-col-featured"><a href="https://link.slkmediaagency.com/strmeet" className="pp-table-link" target="_blank" rel="noopener">Strategy call</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Objections */}
        <section className="pp-objections">
          <div className="container">
            <h2 className="section-title">The three things people ask after they see the price</h2>

            <div className="pp-objection-grid">
              <article className="pp-objection">
                <div className="pp-objection-icon"><i className="fas fa-calculator" aria-hidden="true"></i></div>
                <h3>"That is more than I wanted to spend."</h3>
                <p>Fair. Here is the comparison that actually matters, because the alternative is never zero.</p>
                <ul className="pp-objection-list">
                  <li><strong>Freelancer:</strong> $200/month, plus roughly 4 hours a week managing them. That is $200 plus about $1,600 of your time, so $1,800 a month for 5 to 8 clips and no strategy.</li>
                  <li><strong>In-house editor:</strong> $50,000 to $80,000 a year in the US, before software, equipment and management time.</li>
                  <li><strong>Content Engine:</strong> $1,597/month, plus about 1 hour a week. 20 sponsor-optimized clips, full strategy, zero management.</li>
                </ul>
                <p className="pp-objection-close">You are not buying editing hours. You are buying a finished, published content operation you do not have to run.</p>
              </article>

              <article className="pp-objection">
                <div className="pp-objection-icon"><i className="fas fa-robot" aria-hidden="true"></i></div>
                <h3>"Why not just use an AI clipping tool?"</h3>
                <p><strong>Short answer:</strong> AI tools are for podcasters testing the waters with content repurposing. This is for podcasters who are serious about scaling revenue.</p>
                <p>AI tools optimize for engagement metrics. They clip the moments an algorithm thinks are interesting, usually the loud ones, the laughs, the high-energy segments. Nobody writes your captions, nobody builds a strategy, nobody posts it, and nobody tells you what worked.</p>
                <p>SLK Media Agency clips for sponsor appeal: moments that prove authority, audience trust, and commercial alignment. Then we write it, thumbnail it, schedule it, publish it, and report on it.</p>
                <p className="pp-objection-close">AI tools save you time. We take the whole job off your desk.</p>
              </article>

              <article className="pp-objection">
                <div className="pp-objection-icon"><i className="fas fa-unlock" aria-hidden="true"></i></div>
                <h3>"What am I locking myself into?"</h3>
                <p><strong>Nothing. The monthly plans are month to month. Cancel any time before your next billing cycle, with zero penalties.</strong></p>
                <ul className="pp-objection-list">
                  <li><strong>Want to pause instead?</strong> Pause for up to 60 days, no questions asked.</li>
                  <li><strong>Notice period:</strong> 14 days, so we can finish anything in progress.</li>
                  <li><strong>Who owns the work?</strong> You do, completely. If you leave, you keep everything we ever made for you.</li>
                  <li><strong>The 10-Day Trial:</strong> a one-time $597 payment. No subscription, nothing to cancel.</li>
                </ul>
                <p className="pp-objection-close">We do not trap clients in contracts, because we do not need to. Clients stay because the work keeps earning its place.</p>
              </article>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="pp-next">
          <div className="container">
            <h2 className="section-title">What happens after you choose</h2>
            <div className="pp-next-grid">
              <div className="pp-next-step">
                <span className="pp-next-num">1</span>
                <h3>Strategy</h3>
                <p>We study your niche's top sponsored podcasts, analyze competitor content, and map a 90-day, revenue-first content calendar. You get a full strategy document, so you know what is coming and when.</p>
              </div>
              <div className="pp-next-step">
                <span className="pp-next-num">2</span>
                <h3>Production</h3>
                <p>Our team turns each episode into sponsor-attracting assets. We do not edit chronologically. We hunt for the moments that prove authority, engagement and commercial alignment, then thumbnail and caption every one.</p>
              </div>
              <div className="pp-next-step">
                <span className="pp-next-num">3</span>
                <h3>Distribution and reporting</h3>
                <p>We publish across LinkedIn, YouTube, Instagram, Facebook and TikTok on schedule, watch for sponsor engagement signals, and send a weekly report showing what actually moved.</p>
              </div>
            </div>
            <div className="pp-proof">
              <p>Want to see the work before the numbers mean anything?</p>
              <div className="pp-proof-links">
                <Link href="/portfolio" className="pp-proof-link"><i className="fas fa-play" aria-hidden="true"></i> View the portfolio</Link>
                <Link href="/success/case-studies" className="pp-proof-link"><i className="fas fa-chart-line" aria-hidden="true"></i> Read the case studies</Link>
                <Link href="/testimonials" className="pp-proof-link"><i className="fas fa-comments" aria-hidden="true"></i> Hear from clients</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="faq pp-faq" id="pricing-faq">
          <div className="container">
            <h2 className="section-title">Pricing questions</h2>
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>Is the $597 trial charged again?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p><strong>No. It is a single payment.</strong> It exists so you can judge our work on your own episodes before committing to anything monthly. One-time payment, no subscription, nothing to cancel.</p>
                  <p>Note that the $597 excludes the processing fee, which is added at checkout and brings the total to $617.</p>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>What is the difference between Content Engine Lite and Content Engine?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p><strong>Clip volume, and nothing else.</strong> Lite delivers 10 clips a month, Content Engine delivers 20. Strategy, research, copywriting, thumbnails, scheduling, your Project Manager, the weekly calls and the weekly reporting are identical in both.</p>
                  <p>Lite is built for shows that publish less often, or that want to start smaller without giving up the strategy layer.</p>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>Can I move between plans?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p>Yes. Both monthly plans run month to month, so moving from Lite to Content Engine, or back down, takes effect from your next billing cycle. Raise it with your Project Manager on a weekly call and it is handled.</p>
                  <p><strong>Your pricing locks in when you join.</strong> We have never raised rates on existing clients mid-contract.</p>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>Do you guarantee download growth or sponsor revenue?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p><strong>No, and you should run from anyone who does.</strong></p>
                  <p>We control content production and distribution. We do not control your recording quality, your guest selection, how aggressively you pursue sponsor outreach, or market conditions in your niche.</p>
                  <p><strong>What we do commit to:</strong> the clip volume your plan states, delivered on time; multi-platform distribution on schedule; and weekly performance reports so you always know what is working.</p>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>What if I only publish one episode a month?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p><strong>Honest answer:</strong> we work best with shows publishing <strong>2 to 4 episodes a month.</strong></p>
                  <p>Content volume drives sponsor visibility. One episode a month leaves gaps in your posting calendar, and sponsors read those gaps as inconsistent engagement.</p>
                  <p>We are happy to strategize on increasing output sustainably. Many clients successfully shift from 1 episode a month to 2 or 3 with better planning.</p>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>Is it safe to hand over my episode files?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p>We sign NDAs for all clients. Your content, guest information and strategic plans are 100% confidential. We have worked with corporate podcasts discussing unreleased product strategies, health professionals navigating HIPAA compliance, and financial advisors with client confidentiality requirements.</p>
                  <p><strong>You retain 100% ownership</strong> of all content we create. If you leave, you keep everything forever.</p>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header">
                  <h3>What if none of these fit my budget right now?</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content">
                  <p>Then this is not the right time, and we will say so rather than sell you something that will not work.</p>
                  <p>Our monthly plans start at $997/month, and the 10-Day Trial is $597 one-time. If a monthly content budget is not realistic for your show yet, we recommend starting with Descript ($30/month) or OpusClip ($50/month). Come back when the timing is right, no hard feelings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pp-final-cta">
          <div className="container">
            <h2>Still deciding between two of them?</h2>
            <p>That is exactly what the strategy call is for. Thirty minutes, we look at your show, and we tell you which plan fits. If we do not think we can deliver, we will tell you to wait.</p>
            <div className="pp-final-actions">
              <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Your Strategy Call</a>
              <a href="#pricing" className="pp-final-secondary">Back to the plans</a>
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
