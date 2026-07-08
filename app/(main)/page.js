import Link from 'next/link';
import HeroAtmosphere from '../../components/HeroAtmosphere';

export const metadata = {
  title: 'The Content Engine for Established Podcasters | SLK Media Agency',
  description:
    'The Podcast Multiplier™ turns every episode into 10-20 sponsor-ready clips and distributes them across LinkedIn, YouTube, TikTok and more, done-for-you content for established podcasters scaling to $10K+/month.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'The Content Engine for Established Podcasters | SLK Media Agency',
    description:
      'Done-for-you clip production and distribution. We turn every episode into sponsor-magnet assets while you focus on creating great content.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Content Engine for Established Podcasters | SLK Media Agency',
    description:
      'We turn every podcast episode into 10-20 sponsor-ready clips and distribute them everywhere your sponsors look.',
    images: ['/og-image.jpg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SLK Media Agency',
  description:
    'Done-for-you podcast clip production and omnichannel distribution for established podcasters.',
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
          <h1 className="headline"><span className="highlight">The Content Engine for Established Podcasters</span></h1>
          <p className="subheadline">Your show deserves more than 200-view clips. Let us convert every episode into high-impact, sponsor-magnet assets while you stay focused on creating great content.<br /><br /><strong>The Podcast Multiplier™: Done-for-you clip production and distribution for established shows.</strong></p>
          <div className="cta-group">
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Strategy Call - Qualified Shows Only</a>
            <a href="#process" className="secondary-cta">See our process</a>
          </div>
          <p className="tagline">⚡ LIMITED CAPACITY: Only 3 spots available per quarter</p>

          <div className="floating-cards">
            <div className="card card-1">
              <div className="card-content">
                <div className="mockup-container">
                  <div className="mockup-phone">
                    <div className="mockup-screen">
                      <div className="mockup-video">
                        <div className="mockup-play-button">▶</div>
                      </div>
                      <div className="mockup-controls">
                        <div className="mockup-progress"></div>
                        <div className="mockup-stats">
                          <span>👁 15K</span>
                          <span>❤️ 892</span>
                          <span>💬 156</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mockup-title">Sponsor-Ready Content</div>
                </div>
              </div>
            </div>
            <div className="card card-2">
              <div className="card-content">
                <div className="mockup-container">
                  <div className="mockup-studio">
                    <div className="mockup-mic"></div>
                    <div className="mockup-waveform">
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                      <div className="wave-bar"></div>
                    </div>
                    <div className="mockup-controls-studio">
                      <div className="record-btn"></div>
                      <div className="play-btn-studio">▶</div>
                    </div>
                  </div>
                  <div className="mockup-title">Revenue-First Strategy</div>
                </div>
              </div>
            </div>
            <div className="card card-3">
              <div className="card-content">
                <div className="mockup-container">
                  <div className="mockup-distribution">
                    <div className="mockup-hub">
                      <div className="mockup-podcast-icon">💰</div>
                    </div>
                    <div className="mockup-platforms">
                      <div className="platform yt">YT</div>
                      <div className="platform ig">IG</div>
                      <div className="platform tk">TK</div>
                      <div className="platform ln">LN</div>
                      <div className="platform tw">TW</div>
                      <div className="platform fb">FB</div>
                    </div>
                    <div className="mockup-arrows"></div>
                  </div>
                  <div className="mockup-title">Sponsor-Focused Distribution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="social-proof">
        <div className="container">
          <p className="social-proof-text">Join established podcasters who've scaled to $50K+/month with our content system.</p>
          <div className="client-videos">
            <div
              className="client-video"
              dangerouslySetInnerHTML={{
                __html:
                  '<video autoplay muted loop playsinline poster="/portfolio/thumbnails/Clip-1.jpg" data-autoplay aria-label="Client success clip, sponsor-ready content"><source src="/portfolio/Clip-1.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="video-overlay"><p class="client-name">Client Success Story</p><p class="video-description">Sponsor-Ready Content</p></div>',
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
                  '<video autoplay muted loop playsinline poster="/portfolio/thumbnails/Clip-3.jpg" data-autoplay aria-label="Client success clip, revenue-driving clips"><source src="/portfolio/Clip-3.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="video-overlay"><p class="client-name">Client Success Story</p><p class="video-description">Revenue-Driving Clips</p></div>',
              }}
            />
          </div>
        </div>
      </section>

      {/* Results Stats Band */}
      <section className="results-band" aria-label="Results at a glance">
        <div className="container">
          <div className="stats-band">
            <div className="stat-card">
              <div className="stat-number">12.4M</div>
              <div className="stat-label">Views Generated</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1k+</div>
              <div className="stat-label">Clips Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12k+</div>
              <div className="stat-label">Hours Saved for Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Subscriber Milestone Hit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem" id="services">
        <div className="container">
          <h2 className="section-title">Why Monetized Podcasts Hit A Revenue Ceiling
          </h2>
          <div className="problem-points">
            <div className="problem-point">
              <div className="icon"><i className="fas fa-hourglass-half"></i></div>
              <p>You're spending 10-20 hours per week editing, clipping, and scheduling posts ($2,000-$5,000 in opportunity cost)</p>
            </div>
            <div className="problem-point">
              <div className="icon"><i className="fas fa-chart-line"></i></div>
              <p>Your clips get 300-800 views because you're rushing them between episodes - sponsors want consistent visibility</p>
            </div>
            <div className="problem-point">
              <div className="icon"><i className="fas fa-search-dollar"></i></div>
              <p>You know you should be on LinkedIn, TikTok, and YouTube Shorts to attract sponsors... but who has time?</p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px', color: '#ffffff' }}><strong>The brutal math:</strong> 40 hours/month spent on content production = time you could spend closing sponsor deals worth $5K-$10K/month.</p>
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
              <h3>Sponsor Psychology Strategy</h3>
              <p>We don't just "chop clips" - we identify "sponsor moments" that demonstrate authority, audience trust, and commercial alignment.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Revenue-First Approach</h3>
              <p>Every clip is filtered through: "Does this help us close the next sponsor?" Not just engagement - actual revenue attribution.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Omnichannel Distribution</h3>
              <p>We publish across LinkedIn, YouTube, Instagram, TikTok, Facebook - wherever your sponsors look for podcasts.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Full Revenue Attribution</h3>
              <p>Weekly reports showing which clips drove sponsor inquiries, which platforms generated leads, and what content converts.</p>
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
          <h2 className="section-title">How The Podcast Multiplier™ Turns Episodes Into Revenue</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-chess"></i>
                </div>
                <h3>Sponsor Psychology Strategy</h3>
                <p>We study your niche's top sponsored podcasts, analyze competitor content strategies, and map a 90-day revenue-first content calendar aligned with your sponsor outreach timeline.<br /><br /><strong>Deliverable:</strong> Full strategy report giving you clarity on what to expect in the coming weeks/months</p>
              </div>
              <div className="step-number">1</div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-magic"></i>
                </div>
                <h3>Content Multiplication</h3>
                <p>Our team transforms each episode into 10-20+ sponsor-attracting assets. We don't edit chronologically - we hunt for "sponsor moments" that prove authority, audience engagement, and commercial alignment.<br /><br /><strong>Output:</strong> We don't just edit. We turn your podcast into an omnipresent content machine.
                </p>
              </div>
              <div className="step-number">2</div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-hand-holding-usd"></i>
                </div>
                <h3>Omnichannel Distribution & Revenue Tracking</h3>
                <p>We publish strategically across your entire ecosystem, monitor sponsor engagement signals, and deliver weekly performance reports showing which clips drove sponsor inquiries.<br /><br /><strong>Result:</strong> By the time a brand Googles you, they've seen you 8 times across multiple platforms</p>
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
                className="client-video ar-45"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-david.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-david.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">David Hetling</p><p class="video-description">RWS Group</p></div>',
                }}
              />
              <div
                className="client-video ar-45"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-julien.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-julien.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">Julien Recoussine</p><p class="video-description">Sales Fix</p></div>',
                }}
              />
              <div
                className="client-video ar-45"
                dangerouslySetInnerHTML={{
                  __html:
                    '<video poster="/video-testimonials/poster-kelly.webp" controls muted playsinline preload="none"><source src="/video-testimonials/testimonial-kelly.mp4" type="video/mp4"></video><div class="video-overlay"><p class="client-name">Kelly Bellaria</p><p class="video-description">Alpine Institute</p></div>',
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
          <h2 className="section-title">Why Established Podcasters Choose The Podcast Multiplier™</h2>
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
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ Revenue-first strategy</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Quality</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ Robotic, contextless</span></td>
                  <td data-label="Freelancers"><span className="indicator warning">⚠️ Variable quality</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ Brand-obsessed, sponsor-ready</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Time Investment</td>
                  <td data-label="AI Tools"><span className="indicator warning">⚠️ 3-5 hrs/week cleanup</span></td>
                  <td data-label="Freelancers"><span className="indicator warning">⚠️ 2-4 hrs/week managing</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ 1 hr/week strategy calls</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">ROI Tracking</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ Basic analytics</span></td>
                  <td data-label="Freelancers"><span className="indicator negative">❌ No sponsor attribution</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ Full revenue attribution</span></td>
                </tr>
                <tr>
                  <td data-label="Feature">Sponsor Positioning</td>
                  <td data-label="AI Tools"><span className="indicator negative">❌ Algorithm-driven</span></td>
                  <td data-label="Freelancers"><span className="indicator negative">❌ Not their focus</span></td>
                  <td data-label="Podcast Multiplier"><span className="indicator positive">✅ Every clip decision</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}><strong>The difference:</strong> We're not a "service provider" - we're an extension of your revenue team. Every clip decision is filtered through: <em>"Does this help us close the next sponsor?"</em></p>
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
                  <p>Current audience: 5,000+ downloads/month OR existing sponsor/revenue</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-check"></i>
                  <p>Monthly marketing budget: $1,000+ allocated to podcast growth</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-check"></i>
                  <p>Goal: Scale to $10K+/month in podcast-driven revenue within 12 months</p>
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
                  <p>Monthly downloads under 5,000 with no current monetization</p>
                </div>
                <div className="qualification-item">
                  <i className="fas fa-times"></i>
                  <p>Exploring options or "seeing what's out there"</p>
                </div>
              </div>
            </div>
          </div>
          <p className="disclaimer" style={{ marginTop: '40px', textAlign: 'center', fontSize: '16px', color: '#ffffff' }}><strong>Not there yet?</strong> We recommend starting with Descript ($30/month) or OpusClip ($50/month) until you hit 5K downloads/month. Come back when you're ready to scale - no hard feelings.</p>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="mid-cta">
        <div className="container">
          <h2>Ready to Scale Your Podcast to $10K+/Month?</h2>
          <p style={{ margin: '20px 0', fontSize: '18px' }}>You'll speak directly with our founder, Samuel LK. We'll discuss your download numbers, monetization status, and whether we're the right fit. <strong>This is NOT a sales pitch.</strong> If we don't think we can deliver 3X ROI on our fee, we'll tell you to wait.</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Strategy Call - Qualified Shows Only</a>
          <p className="guarantee">🚨 LIMITED CAPACITY: Only 3 spots available per quarter</p>
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
                <p><strong>Short answer:</strong> AI tools are for beginners learning content repurposing. The Podcast Multiplier™ is for established podcasters scaling revenue.</p>
                <p><strong>Long answer:</strong> AI tools optimize for engagement metrics (watch time, likes, shares). They clip moments that the algorithm THINKS are interesting - usually loud moments, laughter, or high-energy segments.</p>
                <p><strong>The Podcast Multiplier™ optimizes for sponsor appeal.</strong> We clip moments that demonstrate: Authority (you're an expert, not just entertaining), Audience trust (engaged listeners, not passive consumers), Commercial alignment (your content attracts brands naturally).</p>
                <p><strong>Bottom line:</strong> AI tools save you time. We make you money.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Why not just hire a freelancer on Fiverr for $200/month?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Because <strong>you're not buying editing hours - you're buying a revenue outcome.</strong></p>
                <p><strong>The math:</strong> Freelancer approach: $200/month + 4 hours/week managing them (16 hrs/month) = $200 + $1,600 opportunity cost = $1,800 total cost. Output: 5-8 mediocre clips per episode, no strategy.</p>
                <p><strong>The Podcast Multiplier™:</strong> $1,597/month + 1 hour/week (4 hrs/month) = $1,597 + $400 opportunity cost = $1,997 total cost. Output: 10-20 sponsor-optimized clips per episode, full strategy, zero management.</p>
                <p><strong>Net difference:</strong> $197/month MORE for 3X the output and zero headaches. Plus: Our average client generates $4,200/month in new sponsor revenue. Freelancers don't deliver that.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Do you guarantee specific download growth or sponsor revenue?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>No - and you should run from anyone who does.</strong></p>
                <p>Here's why: We control content production and distribution. We don't control: Your recording quality, guest selection, or topic relevance; How aggressively you pursue sponsor outreach; Market conditions in your niche.</p>
                <p><strong>What we DO guarantee:</strong> 10-20 professionally edited, sponsor-ready clips per episode (delivered on time, every time), Multi-platform distribution on schedule, Weekly performance reports (you'll know exactly what's working), 14-day money-back guarantee (unsatisfied? Full refund).</p>
                <p><strong>What our average client sees:</strong> 2.3X increase in sponsor inquiries within 90 days, $4,200-$8,500/month in new sponsorship revenue, 40-60% reduction in time spent on content production.</p>
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
                <p>We don't trap clients in contracts because we don't need to. Our retention rate is 87% after 6 months - people stay because the ROI is undeniable.</p>
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
                <p>Here's why: Content volume drives sponsor visibility. 1 episode/month = 10-15 clips = ~2 weeks of posting. That leaves 2 weeks of silence. Sponsors see inconsistent engagement.</p>
                <p>We're happy to strategize on increasing output sustainably - many clients successfully shift from 1 episode/month to 2-3 with better planning.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Do you offer a trial or discounted first month?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>No discounted trial, but we offer a 14-day money-back guarantee.</strong></p>
                <p><strong>Instead:</strong> Pay the full $1,597 for Month 1. If you don't see the value by Day 14, we refund you completely. You keep everything we've produced. This filters out casual browsers and ensures we give you 100% effort from Day 1.</p>
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
                <p>We don't do outreach for you (cold emailing brands, negotiating rates, closing deals). That's your zone of genius.</p>
                <p><strong>But we set you up for success:</strong> Clips designed to demonstrate sponsor-friendly messaging, Weekly performance reports you can show to brands, Sponsor signal tracking (we flag when brands engage with your content).</p>
                <p><strong>Think of it this way:</strong> We build the ammunition. You pull the trigger.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>How long before I see results?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>If "results" = high-quality clips delivered:</strong> Week 1. You'll have 10-15 clips ready within 3-4 business days.</p>
                <p><strong>If "results" = increased social media engagement:</strong> 30-45 days. Platforms need time to recognize your consistent posting and boost distribution.</p>
                <p><strong>If "results" = sponsor inquiries and revenue:</strong> 60-90 days. Sponsors need to see you multiple times across platforms before reaching out. Our average client sees 2-3X increase in sponsor inquiries by month 3.</p>
                <p><strong>The compounding effect:</strong> Month 1 lays the foundation. Month 3 is when you start seeing revenue impact. Month 6 is when clients say "I can't believe I didn't do this sooner."</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What platforms do you post on?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Wherever your sponsors look for podcasts:</strong> LinkedIn, YouTube (Shorts & full), Instagram (feed, reels, stories), TikTok, Facebook, X (Twitter), and more.</p>
                <p>Don't know which platforms to focus on? We'll recommend based on your niche and sponsor targets.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>How many clips do I get per episode?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Standard package: 10-15 clips per episode. Pro package: 20-25 clips per episode. If there's more "sponsor gold" in your episode, we'll pull extra clips at no additional cost.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What's your turnaround time?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Standard: 3-4 business days per episode. Pro: 48-hour turnaround. Need it faster? We offer 24-hour rush delivery for $297 per episode (one-time fee).</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Can I get a discount if I commit to 6-12 months upfront?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Yes. 10% off for 3+ month prepayment.</strong></p>
                <p>3 months prepaid: $4,312 (save $479)<br />6 months prepaid: $8,624 (save $958)<br />12 months prepaid: $17,248 (save $1,916)</p>
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
                <p>Yes. We track and report weekly on: Which clips got the most views and engagement, Which clips drove sponsor-adjacent traffic, Platform performance comparison, Sponsor signals (brands that engaged with your content), Recommendations for next week.</p>
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
                <p><a href="https://link.slkmediaagency.com/strmeet" target="_blank" rel="noopener">Book a strategy call</a> and ask us directly. If we can't answer it on the call, your next month's on us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="footer-cta" id="contact">
        <div className="container">
          <h2>The only risk is waiting while your competitors scale their sponsor pipelines.</h2>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Strategy Call - Qualified Shows Only</a>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#ffffff' }}>📍 <strong>Note on Pricing Transparency:</strong> Our full-service package is $1,597/month. If that investment doesn't align with your current budget, we recommend starting with Descript ($30/month) or OpusClip ($50/month) until your podcast revenue supports professional content production. Come back when you're ready to scale-no hard feelings.</p>
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
          <p>Only 2 spots remaining this quarter - Don't wait until it's too late</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Check Availability & Book Now</a>
        </div>
      </div>
    </>
  );
}
