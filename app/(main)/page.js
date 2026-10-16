import Link from 'next/link';
import HeroAtmosphere from '../../components/HeroAtmosphere';

export const metadata = {
  title: 'The Content Engine for Podcasters Ready to Scale | SLK Media Agency',
  description:
    'The Podcast Multiplier™ turns your episodes into 12 or 20 finished clips a month and posts them on LinkedIn, YouTube, TikTok and more. Done-for-you content for podcasters who publish consistently and want their time back.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'The Content Engine for Podcasters Ready to Scale | SLK Media Agency',
    description:
      'Done-for-you clip production and posting. We turn your episodes into clips that help new listeners find your show while you focus on creating great content.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Content Engine for Podcasters Ready to Scale | SLK Media Agency',
    description:
      'We turn your podcast episodes into 12 or 20 clips a month and post them everywhere your audience scrolls.',
    images: ['/og-image.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SLK Media Agency',
  description:
    'Done-for-you podcast clip production and omnichannel distribution for podcasters who publish consistently.',
  url: 'https://slkmediaagency.com/',
  email: 'hello@slkmediaagency.com',
  telephone: '+1-323-892-8644',
  image: 'https://slkmediaagency.com/og-image.jpg',
  sameAs: ['https://slkmediaagency.com/'],
  areaServed: 'Worldwide',
  serviceType: 'Podcast content production and distribution',
};

export default function HomePage() {
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
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#case-studies">Results</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Book Strategy Call</a></li>
          </ul>
        </div>
      </nav>
      <main id="main">

      {/* Hero Section */}
      <section className="hero">
        <HeroAtmosphere />
        <div className="container">
          <div className="grid-pattern"></div>
          <h1 className="headline"><span className="highlight">The Content Engine for Podcasters Ready to Scale</span></h1>
          <p className="subheadline">Your show deserves more than 200-view clips. We turn your episodes into short clips that help new listeners find your show and show future clients what you know. You record once. We handle everything after.<br /><br /><strong>The Podcast Multiplier™: Done-for-you clip production and distribution for shows that are serious about growing.</strong></p>
          <div className="cta-group">
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Strategy Call - Qualified Shows Only</a>
            <a href="#process" className="secondary-cta">See our process</a>
          </div>

          <div className="floating-cards">
            <div className="card card-1">
              <div className="card-content">
                <div className="mockup-container">
                  <img src="/generated/card-clip.webp" alt="Podcast clip playing on a phone" className="card-art" width={640} height={960} loading="lazy" />
                  <div className="mockup-title">Ready-to-Post Clips</div>
                </div>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-content">
                <div className="mockup-container">
                  <img src="/generated/card-studio.webp" alt="Podcast studio microphone and headphones" className="card-art" width={640} height={960} loading="lazy" />
                  <div className="mockup-title">A Plan for Every Clip</div>
                </div>
              </div>
            </div>
            <div className="card card-3">
              <div className="card-content">
                <div className="mockup-container">
                  <img src="/generated/card-distribution.webp" alt="One podcast distributed to many platforms" className="card-art" width={640} height={960} loading="lazy" />
                  <div className="mockup-title">Posted on Every Platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof">
        <div className="container">
          <p className="social-proof-text">Join podcasters who've grown from 1.82K to over 100K subscribers with our content system.</p>
          <div className="client-videos">
            <div
              className="client-video"
              dangerouslySetInnerHTML={{
                __html:
                  '<video autoplay muted loop playsinline poster="/portfolio/thumbnails/Clip-1.jpg" data-autoplay aria-label="Client success clip, ready-to-post content"><source src="/portfolio/Clip-1.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="video-overlay"><p class="client-name">Client Success Story</p><p class="video-description">Ready-to-Post Clips</p></div>',
              }}
            />
            <div
              className="client-video"
              dangerouslySetInnerHTML={{
                __html:
                  '<video autoplay muted loop playsinline poster="/portfolio/thumbnails/Clip-2.jpg" data-autoplay aria-label="Client success clip, authority-building content"><source src="/portfolio/Clip-2.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="video-overlay"><p class="client-name">Client Success Story</p><p class="video-description">Authority-Building Content</p></div>',
              }}
            />
            <div
              className="client-video"
              dangerouslySetInnerHTML={{
                __html:
                  '<video autoplay muted loop playsinline poster="/portfolio/thumbnails/Clip-3.jpg" data-autoplay aria-label="Client success clip, short-form clips"><source src="/portfolio/Clip-3.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="video-overlay"><p class="client-name">Client Success Story</p><p class="video-description">Short-Form Clips</p></div>',
              }}
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem" id="services">
        <div className="container">
          <h2 className="section-title">Why Podcast Growth Hits A Ceiling
          </h2>
          <div className="problem-points">
            <div className="problem-point">
              <div className="icon"><i className="fas fa-hourglass-half"></i></div>
              <p>You're spending 10-20 hours per week editing, clipping, and scheduling posts ($2,000-$5,000 in opportunity cost)</p>
            </div>
            <div className="problem-point">
              <div className="icon"><i className="fas fa-chart-line"></i></div>
              <p>Your clips get 300-800 views because you're rushing them between episodes, so new listeners rarely come across your show</p>
            </div>
            <div className="problem-point">
              <div className="icon"><i className="fas fa-search-dollar"></i></div>
              <p>You know you should be on LinkedIn, TikTok, and YouTube Shorts to reach new listeners and future clients... but who has time?</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px', color: '#ffffff' }}><strong>The brutal math:</strong> 40 hours/month spent on content production = time you could spend on your clients, your business, or your next episode.</p>
        </div>
      </section>

      {/* USP Section */}
      <section className="usp">
        <div className="container">
          <h2 className="section-title">The Podcast Multiplier™: Your Dedicated Content Team</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Clips Picked With a Purpose</h3>
              <p>We don't just "chop clips". We pick the moments that show what you know and give a new viewer a reason to hear the full episode.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Built Around Your Goals</h3>
              <p>Every clip is picked with your goal in mind: new listeners for the show, or future clients for your business.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Omnichannel Distribution</h3>
              <p>We publish across LinkedIn, YouTube, Instagram, TikTok and Facebook, wherever your future listeners and clients spend their time.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Weekly Reports</h3>
              <p>Every week you see which clips got the most views and engagement, which platforms performed best, and what we plan to post next.</p>
            </div>
          </div>
            <div className="testimonial-mini">
              <p>"Working with SLK Media has been an amazing experience. As someone juggling multiple platforms, they took a huge burden off my shoulders and freed up my time. The process became easier and the content quality improved."</p>
            <span className="testimonial-author"> - Shatavia Green, Conjure Queen Podcast (100K+ YouTube subscribers, Silver Play Button)</span>
            </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="process">
        <div className="container">
          <h2 className="section-title">How The Podcast Multiplier™ Works</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-chess"></i>
                </div>
                <h3>Strategy First</h3>
                <p>We study your niche, look at what similar shows post, and map a 90-day content calendar: which clips to make, where to post them, and when.<br /><br /><strong>Deliverable:</strong> Full strategy report giving you clarity on what to expect in the coming weeks/months</p>
              </div>
              <div className="step-number">1</div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-magic"></i>
                </div>
                <h3>Content Multiplication</h3>
                <p>Our team cuts your episodes into 12 or 20 finished clips a month, depending on your plan. We don't edit in order. We look for the moments that show your expertise, tell a complete story, and make a new viewer want the full episode.<br /><br /><strong>Output:</strong> We don't just edit. We turn your podcast into an omnipresent content machine.
                </p>
              </div>
              <div className="step-number">2</div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h3>Posting & Weekly Reports</h3>
                <p>We write the captions, add a custom thumbnail, post every clip on your platforms on the schedule we agree with you, and send a weekly report on how each clip performed.<br /><br /><strong>Result:</strong> You show up on every platform, every week, without opening an editor or a scheduler</p>
              </div>
              <div className="step-number">3</div>
            </div>
          </div>
          <div className="cta-center">
            <Link href="/portfolio" className="secondary-cta" target="_blank" rel="noopener">See Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="case-showcase" id="case-studies">
        <div className="container">
          <h2 className="section-title">Real Clients. <span className="highlight">Real Results.</span></h2>
          <p className="subheadline" style={{ textAlign: 'center' }}>Deep-dive case studies from creators who handed us their content engine.</p>
          <div className="case-showcase-grid">
            <Link href="/success/conjure-queen" className="case-card">
              <div className="case-card-media">
                <span className="case-tag">Spiritual Empowerment</span>
                <img src="/thumbnails/Shatavia Green - Conjure Queen.webp" alt="Shatavia Green, Conjure Queen Podcast" loading="lazy" width={600} height={338} />
              </div>
              <div className="case-card-body">
                <h3>Shatavia Green</h3>
                <div className="case-show">Conjure Queen Podcast</div>
                <p>From overwhelmed to omnipresent: doubled engagement and passed 100K subscribers without editing a single clip herself.</p>
                <div className="case-stats">
                  <span><i className="fas fa-award" aria-hidden="true"></i> Silver Play Button</span>
                  <span><i className="fas fa-chart-line" aria-hidden="true"></i> 2x engagement</span>
                </div>
                <span className="case-link">Read case study <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </Link>
            <Link href="/success/brian-burton" className="case-card">
              <div className="case-card-media">
                <span className="case-tag">B2B Sales Training</span>
                <img src="/thumbnails/Brian Burton - Blue Collar Closer.webp" alt="Brian Burton, Waste No Day Podcast" loading="lazy" width={600} height={338} />
              </div>
              <div className="case-card-body">
                <h3>Brian Burton</h3>
                <div className="case-show">Waste No Day Podcast</div>
                <p>How a sales coach turned his podcast into a lead generation machine with consistent clips on every platform.</p>
                <div className="case-stats">
                  <span><i className="fas fa-video" aria-hidden="true"></i> 8-12 clips/episode</span>
                  <span><i className="fas fa-eye" aria-hidden="true"></i> 800+ views/short</span>
                </div>
                <span className="case-link">Read case study <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </Link>
            <Link href="/success/steve-garrett" className="case-card">
              <div className="case-card-media">
                <span className="case-tag">Automotive Media</span>
                <img src="/thumbnails/Steve Garrett - Corvette Today.webp" alt="Steve Garrett, Corvette Today Podcast" loading="lazy" width={600} height={338} />
              </div>
              <div className="case-card-body">
                <h3>Steve Garrett</h3>
                <div className="case-show">Corvette Today Podcast</div>
                <p>How a niche automotive podcaster scaled his reach across 4+ platforms without adding a single hour to his week.</p>
                <div className="case-stats">
                  <span><i className="fab fa-youtube" aria-hidden="true"></i> 11.9K subscribers</span>
                  <span><i className="fas fa-microphone" aria-hidden="true"></i> 599+ episodes</span>
                </div>
                <span className="case-link">Read case study <i className="fas fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </Link>
          </div>
          <div className="cta-center">
            <Link href="/success/case-studies" className="secondary-cta">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonial-carousel">
            <div className="testimonial-slide active">
              <p className="testimonial-text">"I have several teams across three different businesses and I consider you one of the 'A-Players' on the teams I want to do business with for a long time. The quality of the short reels has been surprising, and the communication, support, and professionalism."</p>
              <div className="testimonial-author">Brian Burton, Waste No Day Podcast</div>
            </div>
            <div className="testimonial-slide">
              <p className="testimonial-text">"I've been really amazed at the quality of the content they produce. Since launch we've consistently grown our audience ahead of expectations, and we're driving really good metrics in reactions and engagement. I count SLK among our most valued agency partners."</p>
              <div className="testimonial-author">David Hetling, Marketing Director, RWS Group</div>
            </div>
            <div className="testimonial-slide">
              <p className="testimonial-text">"I'm highly impressed with the level of communication and transparency when you're working with SLK Media. What really impressed me was the expertise they bring. We saw significant growth in all the social media and online accounts we used them for."</p>
              <div className="testimonial-author">Julien Recoussine, SalesFix</div>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="control prev" type="button" aria-label="Previous testimonial"><i className="fas fa-chevron-left" aria-hidden="true"></i></button>
            <button className="control next" type="button" aria-label="Next testimonial"><i className="fas fa-chevron-right" aria-hidden="true"></i></button>
          </div>
          <div className="video-testimonials">
            <h3 className="video-testimonials-title">See What Our Clients Say</h3>
            <div className="client-videos">
              <div
                className="client-video ar-11"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-shatavia.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-shatavia.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">Shatavia Green</p><p class="video-description">Conjure Queen</p></div>',
                }}
              />
              <div
                className="client-video ar-169"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-brian.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-brian.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">Brian Burton</p><p class="video-description">Waste No Day Podcast</p></div>',
                }}
              />
              <div
                className="client-video ar-169"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-steve.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-steve.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">Steve Garrett</p><p class="video-description">Corvette Today Podcast</p></div>',
                }}
              />
              <div
                className="client-video ar-169"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-ad-edwards.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-ad-edwards.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">A.D. Edwards</p><p class="video-description">Ingleside Reviews Podcast</p></div>',
                }}
              />
              <div
                className="client-video ar-916"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-preston.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-preston.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">Preston Hurd</p><p class="video-description">The Filtered Brew Podcast</p></div>',
                }}
              />
            </div>
            <div className="view-more-testimonials">
              <Link href="/testimonials" className="view-more-btn">View More Testimonials</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison">
        <div className="container">
          <h2 className="section-title">Why Growth-Focused Podcasters Choose The Podcast Multiplier™</h2>
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>AI Tools ($30-100/mo)</th>
                  <th>Freelancers ($200-800/mo)</th>
                  <th>The Podcast Multiplier™</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Feature">Strategy</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ No strategy</span></td>
                  <td data-label="Freelancers"><span className="indicator warning">⚠️ Task-based only</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ A strategy for your show</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Quality</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ Robotic, contextless</span></td>
                  <td data-label="Freelancers"><span className="indicator warning">⚠️ Variable quality</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ On-brand, ready to post</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Time Investment</td>
                  <td data-label="AI Tools"><span className="indicator warning">⚠️ 3-5 hrs/week cleanup</span></td>
                  <td data-label="Freelancers"><span className="indicator warning">⚠️ 2-4 hrs/week managing</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ 1 hr/week strategy calls</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Reporting</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ Basic analytics</span></td>
                  <td data-label="Freelancers"><span className="indicator negative">❌ No reporting</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ Weekly performance reports</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Built Around Your Goals</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ Algorithm-driven</span></td>
                  <td data-label="Freelancers"><span className="indicator negative">❌ Not their focus</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ Every clip decision</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}><strong>The difference:</strong> We work like part of your team, not a vendor you have to manage. Every clip decision is filtered through: <em>"Will this help the right people find the show?"</em></p>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="qualification">
        <div className="container">
          <h2 className="section-title">Is The Podcast Multiplier™ Right for Your Show?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '40px' }}>
            <div>
              <h3 style={{ color: '#10b981', marginBottom: '20px' }}>✅ This is for you if:</h3>
              <div className="qualification-list">
                <div className="qualification-item">
                  <i className="fas fa-check"></i>
                  <p>Publishing 2+ episodes/month for 6+ months (minimum 15 episodes live)</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-check"></i>
                  <p>Ready to invest in professional-grade content production</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-check"></i>
                  <p>Goal: Turn your podcast into a real revenue channel</p>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ color: '#ef4444', marginBottom: '20px' }}>❌ This is NOT for you if:</h3>
              <div className="qualification-list">
                <div className="qualification-item">
                  <i className="fas fa-times"></i>
                  <p>Just launched your podcast (fewer than 15 episodes published)</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-times"></i>
                  <p>Treating podcasting as a hobby or experimental side project</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-times"></i>
                  <p>Exploring options or "seeing what's out there"</p>
                </div>
              </div>
            </div>
          </div>
          <p className="disclaimer" style={{ marginTop: '40px', textAlign: 'center', fontSize: '16px', color: '#ffffff' }}><strong>Not sure yet?</strong> Book a strategy call and we will tell you honestly whether your show is a fit. If a monthly content budget is not realistic for your show yet, Descript or OpusClip will serve you better for now, no hard feelings.</p>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="mid-cta">
        <div className="container">
          <h2>Ready to Scale Your Podcast?</h2>
          <p style={{ margin: '20px 0', fontSize: '18px' }}>You'll speak directly with our founder, Samuel LK. We'll discuss your content, your goals, and whether we're the right fit. <strong>This is NOT a sales pitch.</strong> If we don't think we're the right fit for your show, we'll tell you.</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Strategy Call - Qualified Shows Only</a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>How is this different from Descript or OpusClip?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Short answer:</strong> AI tools are for podcasters testing the waters with content repurposing. The Podcast Multiplier™ is for podcasters who are serious about growing their show or their business.</p>
                <p><strong>Long answer:</strong> AI tools optimize for engagement metrics (watch time, likes, shares). They clip moments that the algorithm THINKS are interesting - usually loud moments, laughter, or high-energy segments.</p>
                <p><strong>The Podcast Multiplier™ picks clips for the people you want to reach.</strong> We clip moments that show: Authority (you're an expert, not just entertaining), A complete idea (a viewer gets something useful in under a minute), A reason to go further (hear the full episode, or get in touch with you).</p>
                <p><strong>Bottom line:</strong> AI tools still leave the picking, fixing and posting to you. We do all of it, so you get your time back.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Why not just hire a freelancer on Fiverr for $200/month?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Because <strong>you're not buying editing hours. You're buying the whole job, done.</strong></p>
                <p><strong>Freelancers on Fiverr give you:</strong> Task-based labor (you tell them what to do), inconsistent quality (depends on their mood, workload, skill level), zero strategy (they edit what you send, with no plan behind it), management burden (you're revising, giving feedback, chasing deadlines).</p>
                <p><strong>The Podcast Multiplier™ gives you:</strong> Strategic content partner (we own the plan, you don't manage us), consistent quality (dedicated team, not rotating contractors), a plan behind every clip (each one picked for the people you want to reach), full autonomy (we run on autopilot after Week 1).</p>
                <p><strong>The real difference:</strong> a freelancer costs you management time on top of their fee, and still leaves you as the bottleneck. We take the whole job off your desk.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Do you guarantee downloads, views or sponsors?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>No, and you should run from anyone who does.</strong></p>
                <p>Here's why: We control content production and posting. We don't control: Your recording quality, guest selection, or topic relevance; How each platform chooses to show your clips; Market conditions in your niche.</p>
                <p><strong>What we DO commit to:</strong> 12 or 20 professionally edited clips a month, depending on your plan, delivered on time. Posting on your platforms on the schedule we agree with you. A weekly report showing what every clip did. We never promise downloads, views or sponsors.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What if I'm not comfortable sharing episode files with a third party?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>We sign NDAs for all clients. Your content, guest information, and strategic plans are 100% confidential. We've worked with: Corporate podcasts discussing unreleased product strategies, Health professionals navigating HIPAA compliance, Financial advisors with client confidentiality requirements.</p>
                <p><strong>You retain 100% ownership</strong> of all content we create. If you leave, you keep everything forever.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Can you work with my niche? I do [very specific topic].</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Yes.</strong> We've produced content for: B2B SaaS and sales podcasts, Health, wellness, and nutrition experts, Financial planning and investing shows, Real estate and entrepreneurship podcasts, Comedy, storytelling, and true crime shows, Technical deep-dives (AI, blockchain, biotech).</p>
                <p>If your podcast is in a niche we haven't tackled, we research it until we're experts. That's included in onboarding.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What's your cancellation policy?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Month-to-month. Cancel anytime before your next billing cycle. Zero penalties.</strong></p>
                <p>We don't trap clients in contracts because we don't need to. Clients stay because the work keeps earning its place, not because a contract says they have to.</p>
                <p><strong>Can I pause instead of canceling?</strong> Yes. Pause for up to 60 days. No questions asked.</p>
                <p><strong>Notice period:</strong> Give us 14 days' notice so we can finish any in-progress work.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What if I only publish 1 episode per month?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Honest answer:</strong> We work best with shows publishing <strong>2-4 episodes/month.</strong></p>
                <p>Here's why: steady posting needs steady material. With 2-4 episodes a month we have plenty of strong moments to fill your 12 or 20 clips. With one episode, every clip comes from the same conversation, and your feed can start to feel repetitive.</p>
                <p>We're happy to strategize on increasing output sustainably - many clients successfully shift from 1 episode/month to 2-3 with better planning.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Can I see examples of your work before committing?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Absolutely.</strong> Check out our portfolio: <Link href="/portfolio" target="_blank" rel="noopener">View Client Work</Link></p>
                <p>You'll see before/after examples from: SaaS/B2B podcasts, Health/wellness shows, Entrepreneurship content, Multiple niches with different brand styles.</p>
                <p><strong>Want to see examples specific to your niche?</strong> Mention it on your strategy call and we'll pull relevant samples.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Do you help with sponsor outreach, or just content?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>We don't do outreach for you (cold emailing brands, negotiating rates, closing deals). We make the content and post it.</p>
                <p><strong>What you do get:</strong> Clips that show your expertise, posted every week, and a weekly report with real view and engagement numbers you can share with anyone you work with.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>How long before I see results?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>If "results" = finished clips:</strong> that part is in our hands. Your plan sets the number (12 or 20 a month, or the custom number you chose) and we deliver it on the schedule agreed at onboarding.</p>
                <p><strong>If "results" = more listeners, more views or new clients:</strong> we can't promise a number or a date, and nobody honestly can. What we do promise is the work: the clips, posted on schedule, with a weekly report so you can see exactly what is happening.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What platforms do you post on?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Wherever your audience spends time:</strong> LinkedIn, YouTube (Shorts & full), Instagram (feed, reels, stories), TikTok, Facebook, X (Twitter), and more.</p>
                <p>Don't know which platforms to focus on? We'll recommend based on your niche and who you want to reach.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>How many clips do I get?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>We count clips per month, not per episode. Plans come with 12 or 20 clips a month, or a custom number if you build your own plan. We pick the strongest moments from all the episodes you send that month.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What's your turnaround time?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Standard: 3-4 business days per episode. Pro: 48-hour turnaround. Need it faster? We offer 24-hour rush delivery as a per-episode add-on.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Can I get a discount if I commit to 6-12 months upfront?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Yes. 10% off for 3+ month prepayment.</strong></p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Will I still "own" my content and files?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>100%.</strong> Everything we create for you is yours to keep, forever, no matter what.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Do you provide analytics or growth reports?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Yes. We track and report weekly on: Which clips got the most views and engagement, Platform performance comparison, Recommendations for next week.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Is this confidential? I don't want competitors to know I use you.</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>100% confidential.</strong> We never share your info or project details without permission.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Didn't see your question?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><a href="https://link.slkmediaagency.com/strmeet" target="_blank" rel="noopener">Book a strategy call</a> and ask us directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta" id="contact">
        <div className="container">
          <h2>You record once. We handle everything after.</h2>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Strategy Call - Qualified Shows Only</a>
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

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <div className="container">
          <p>Month to month, no contract. See if your show is a fit.</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Check Availability & Book Now</a>
        </div>
      </div>
    </>
  );
}
