import Link from 'next/link';

export const metadata = {
  title: 'The Podcast Multiplier™: Sponsor-Magnet Content for Podcasters | SLK Media Agency',
  description:
    'The Podcast Multiplier™ turns every episode into sponsor-attracting clips and distributes them across every platform. Done-for-you content production for established podcasters.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/podcast-multiplier' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'The Podcast Multiplier™ | SLK Media Agency',
    description: 'The content engine that turns established podcasts into sponsor magnets.',
    url: '/podcast-multiplier',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function PodcastMultiplierPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar fixed-nav">
        <div className="container">
          <div className="logo">
            <Link href="/"><img src="/images/SLK Media Agency LOGO. 500x500 - CROPPED.png" alt="SLK Media Agency" className="logo-image" /></Link>
          </div>
          <button className="menu-toggle" id="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-controls="nav-menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-menu" id="nav-menu">
            <li><Link href="/">Home</Link></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><a href="#next-steps">Get Started</a></li>
          </ul>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <p className="sub-headline-blue">The Podcast Multiplier™</p>
            <h1 className="headline">The Content Engine That Turns Established Podcasts Into Sponsor Magnets</h1>
            <p className="subheadline">Your show deserves more than 200-view clips. Let us convert every episode into high-impact, sponsor-magnet assets while you stay focused on creating great content.</p>
          </div>
          <div className="cta-center">
            <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Let's Chat - Qualified Shows Only</a>
          </div>
          <p className="tagline">⚡ LIMITED CAPACITY: Only 3 spots available per quarter.</p>

          <div className="hero-snapshot" aria-label="How it works in three steps">
            <div className="hsnap-step"><span className="hsnap-num">1</span><span>You record your episode</span></div>
            <span className="hsnap-arrow" aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
            <div className="hsnap-step"><span className="hsnap-num">2</span><span>We multiply it into 20+ assets</span></div>
            <span className="hsnap-arrow" aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
            <div className="hsnap-step"><span className="hsnap-num">3</span><span>You show up everywhere</span></div>
          </div>
          <p className="hero-pricing-peek">Done-for-you content from <strong>$1,597/mo</strong>. <a href="#pricing">See what is included</a></p>
        </div>
      </section>

      {/* Section: Growth Limbo */}
      <section className="growth-limbo-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Why Monetized Podcasts Hit A Revenue Ceiling</h2>
          <div className="growth-limbo-content">
            <p className="section-subtitle">You've already done the hard part: Built a real audience, published consistently for 6+ months, and maybe even landed your first sponsor or two.</p>
            <p className="section-subtitle"><strong>But you've hit a revenue plateau. And you know exactly why:</strong></p>
            <div className="problem-list">
              <div className="problem-item">🚫 You're spending 10-20 hours per week editing, clipping, captioning, and scheduling posts</div>
              <div className="problem-item">🚫 Your clips get 300-800 views because you're rushing them between episodes</div>
              <div className="problem-item">🚫 Sponsors want "social proof" but your Instagram has 12 sporadic posts</div>
              <div className="problem-item">🚫 You know you should be on LinkedIn, TikTok, and YouTube Shorts... but who has time?</div>
            </div>
            <div className="cost-callout">
              <div className="cost-callout-icon"><i className="fas fa-hourglass-half" aria-hidden="true"></i></div>
              <div className="cost-callout-body">
                <p><strong>The brutal math:</strong> 10 hours/week × 4 weeks = <strong>40 hours per month</strong> spent on content production.</p>
                <p>That's <strong>$2,000-$5,000 in opportunity cost</strong> if you valued your time at $50-125/hour (which you should, because that's billable time you could spend closing sponsors or creating paid products).</p>
                <p><strong>Meanwhile, your best episodes die after publication because you're too exhausted to promote them.</strong></p>
              </div>
            </div>
            <p><strong>Here's what you actually need:</strong> A dedicated content team that treats your podcast like the revenue asset it is, multiplying every episode into 20+ sponsor-attracting assets while you focus on recording and monetization strategy.</p>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem Section */}
      <section className="problem-section" id="problem">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Why Your Current Approach Isn't Scaling Revenue</h2>
          <div className="problem-content">
            <p className="section-subtitle">You've tried the "obvious" solutions. None worked:</p>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-robot"></i></div>
                <h3>AI Clipping Tools (Descript, OpusClip, Repurpose.io)</h3>
                <p><strong>What they promised:</strong> "Just upload your episode! AI will find the best clips automatically!"</p>
                <p><strong>What actually happened:</strong> Algorithm clips random 60-second segments with zero context. Misses your best punchlines, cuts off stories mid-sentence. You spend 3 hours per week "fixing" AI output, defeating the purpose.</p>
                <p><strong>Why it failed:</strong> AI optimizes for "engagement patterns" (loud moments, laughter), not sponsor psychology (authority demonstrations, expertise showcases). Brands don't partner because clips are "engaging." They partner because clips prove audience trust and commercial alignment.</p>
              </div>
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Cheap Freelancers on Fiverr/Upwork ($200-800/month)</h3>
                <p><strong>What you thought you'd get:</strong> "Affordable editor who'll handle clips so I can focus on recording."</p>
                <p><strong>What actually happened:</strong> Week 1: Promising start. Week 3: Quality drops. Week 5: Disappears for 4 days. Week 8: You're re-editing their clips because they don't understand your audience. Week 10: Ghosted.</p>
                <p><strong>Why it failed:</strong> You hired task-based labor, not a strategic partner. Freelancers aren't invested in your revenue outcomes. They're optimizing for speed and volume, not sponsor appeal. Plus, you're managing another employee (revisions, feedback, deadlines), which defeats the "time savings" promise.</p>
              </div>
            </div>
            <p className="problem-summary"><strong>The Real Problem (That Nobody Talks About):</strong> You don't have a content problem. You have a leverage problem. Successful podcasters at $25K-$100K+/month aren't better interviewers than you. <strong>They have content teams</strong> that multiply their effort: 1 hour of recording into 20 hours of distributed content across multiple platforms.</p>
          </div>
        </div>
      </section>

      {/* Section 3: The Solution Section */}
      <section className="solution-section" id="solution">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Introducing: The Podcast Multiplier™</h2>
          <div className="solution-content">
            <p className="section-subtitle">Your Dedicated Content Team With One Job: Fill Your Sponsor Pipeline</p>
            <p>This isn't a tool. It's not a contractor. It's a <strong>strategic content system</strong> designed specifically for podcasters who've proven their show works and are ready to scale revenue.</p>
            <p><strong>Here's how it works:</strong></p>
            <div className="solution-highlight">
              <p><strong>You record your podcast episodes.</strong></p>
              <p><strong>We turn them into sponsor-ready assets published across your entire ecosystem.</strong></p>
              <p><strong>You show up everywhere, effortlessly, and sponsors notice.</strong></p>
            </div>
            <p><strong>The result:</strong> By the time a brand Googles you, they've already seen you 8 times across multiple platforms. You're not a "podcast." You're a <em>media presence</em>.</p>
            <Link href="/portfolio" className="btn-primary" target="_blank" rel="noopener">See Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Section: Founder mini-strip (humanize early) */}
      <section className="founder-mini-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <div className="founder-mini">
            <img src="/images/founder.webp" alt="Samuel K. Lotchouang, Founder of SLK Media Agency" className="founder-mini-photo" width={140} height={140} loading="lazy" />
            <div className="founder-mini-text">
              <span className="founder-mini-tag"><i className="fas fa-quote-left" aria-hidden="true"></i> Why I built this</span>
              <p>I watched too many talented podcasters burn out editing clips instead of closing sponsor deals. SLK Media Agency exists so you record, we multiply, and sponsors notice. When you book a call, you speak directly with me, not a sales rep.</p>
              <span className="founder-mini-sign">Samuel K. Lotchouang, CEO &amp; Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Before / After results grid (proof, surfaced early) */}
      <section className="results-section" id="results">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">💰 Real Results from Established Podcasters</h2>
          <p className="section-subtitle results-subtitle">Before SLK Media Agency vs After, real shifts from real client shows.</p>

          <div className="results-stats">
            <h3>Average Client Results (90-Day Benchmark)</h3>
            <div className="stats-band">
              <div className="stat-card">
                <div className="stat-number">2.3X</div>
                <div className="stat-label">More Sponsor Inquiries</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$4.2-8.5K</div>
                <div className="stat-label">Monthly Sponsorship Revenue</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">40-60%</div>
                <div className="stat-label">Less Time on Production</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">180-320%</div>
                <div className="stat-label">More Social Reach</div>
              </div>
            </div>
          </div>

          <div className="ba-grid">

            <article className="ba-card">
              <Link href="/success/conjure-queen" className="ba-card-media">
                <span className="case-tag">Spiritual Empowerment</span>
                <img src="/thumbnails/Shatavia Green - Conjure Queen.webp" alt="Shatavia Green, Conjure Queen Podcast" loading="lazy" width={600} height={338} />
              </Link>
              <header className="ba-card-head">
                <h3>Shatavia Green</h3>
                <span className="ba-show">Conjure Queen Podcast</span>
              </header>
              <div className="ba-cols">
                <div className="ba-col ba-before">
                  <span className="ba-tag">Before</span>
                  <ul>
                    <li>Editing and posting everything herself</li>
                    <li>Inconsistent engagement, no strategy</li>
                    <li>Burned out, no time for her mission</li>
                  </ul>
                </div>
                <div className="ba-col ba-after">
                  <span className="ba-tag">After</span>
                  <ul>
                    <li>100% done-for-you content</li>
                    <li>Engagement doubled across platforms</li>
                    <li>Reclaimed energy and focus</li>
                  </ul>
                </div>
              </div>
              <div className="ba-headline"><i className="fas fa-award" aria-hidden="true"></i> 100K+ subscribers, Silver Play Button</div>
              <Link href="/success/conjure-queen" className="ba-case-link">Read case study <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
            </article>

            <article className="ba-card">
              <Link href="/success/brian-burton" className="ba-card-media">
                <span className="case-tag">B2B Sales Training</span>
                <img src="/thumbnails/Brian Burton - Blue Collar Closer.webp" alt="Brian Burton, Waste No Day Podcast" loading="lazy" width={600} height={338} />
              </Link>
              <header className="ba-card-head">
                <h3>Brian Burton</h3>
                <span className="ba-show">Waste No Day Podcast</span>
              </header>
              <div className="ba-cols">
                <div className="ba-col ba-before">
                  <span className="ba-tag">Before</span>
                  <ul>
                    <li>Invisible beyond full episodes</li>
                    <li>No short-form strategy or time</li>
                    <li>Competitors dominating discovery</li>
                  </ul>
                </div>
                <div className="ba-col ba-after">
                  <span className="ba-tag">After</span>
                  <ul>
                    <li>8-12 clips produced per episode</li>
                    <li>Reaching ideal clients on 4+ platforms</li>
                    <li>Zero extra hours in his week</li>
                  </ul>
                </div>
              </div>
              <div className="ba-headline"><i className="fas fa-video" aria-hidden="true"></i> 8-12 sponsor-ready clips, every episode</div>
              <Link href="/success/brian-burton" className="ba-case-link">Read case study <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
            </article>

            <article className="ba-card">
              <Link href="/success/steve-garrett" className="ba-card-media">
                <span className="case-tag">Automotive Media</span>
                <img src="/thumbnails/Steve Garrett - Corvette Today.webp" alt="Steve Garrett, Corvette Today Podcast" loading="lazy" width={600} height={338} />
              </Link>
              <header className="ba-card-head">
                <h3>Steve Garrett</h3>
                <span className="ba-show">Corvette Today Podcast</span>
              </header>
              <div className="ba-cols">
                <div className="ba-col ba-before">
                  <span className="ba-tag">Before</span>
                  <ul>
                    <li>Repurposing stuck on the to-do list</li>
                    <li>Key moments trapped in long episodes</li>
                    <li>Growth plateau, limited exposure</li>
                  </ul>
                </div>
                <div className="ba-col ba-after">
                  <span className="ba-tag">After</span>
                  <ul>
                    <li>Repurposed across 4+ platforms</li>
                    <li>Expanded reach and new discovery</li>
                    <li>Zero extra hours added</li>
                  </ul>
                </div>
              </div>
              <div className="ba-headline"><i className="fab fa-youtube" aria-hidden="true"></i> 11.9K subscribers, 599+ episodes</div>
              <Link href="/success/steve-garrett" className="ba-case-link">Read case study <i className="fas fa-arrow-right" aria-hidden="true"></i></Link>
            </article>

          </div>
          <div className="cta-center" style={{ marginTop: '40px' }}>
            <Link href="/success/case-studies" className="btn-primary">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works Section */}
      <section className="steps-section" id="how-it-works">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">How The Podcast Multiplier™ Turns Episodes Into Revenue</h2>
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-item-number">1</div>
              <div className="step-item-content">
                <h3>Sponsor Psychology Strategy (Week 1)</h3>
                <p>Before we edit a single clip, we answer the only question that matters: <strong>"What content will make brands want to partner with this podcast?"</strong></p>
                <p>
                  ✅ <strong>Sponsor Psychology Analysis:</strong> We study your niche's top sponsored podcasts. What clip types do they produce? What messages do brands respond to?<br /><br />
                  ✅ <strong>Competitor Intelligence Report:</strong> Who's winning sponsor deals in your space? What's their content distribution strategy?<br /><br />
                  ✅ <strong>Platform Optimization Blueprint:</strong> Where do sponsors in your niche discover podcasts? (B2B brands scout LinkedIn. DTC brands hunt TikTok and Instagram.)<br /><br />
                  ✅ <strong>90-Day Revenue-First Content Calendar:</strong> We map exactly what clips to produce, when to publish them, and which platforms to prioritize, aligned with your sponsor outreach timeline<br />
                  <br />
                  🚀 <strong>Quick win:</strong> You will receive a full social media strategy report, giving you clarity on what to expect in the coming weeks/months.
                </p>
                <p><strong>This is the step every other service skips.</strong> They treat editing like a commodity. We treat it like sponsor development.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-item-number">2</div>
              <div className="step-item-content">
                <h3>Content Multiplication (Ongoing, Every Episode)</h3>
                <p>Our team transforms each episode into <strong>10-20+ sponsor-attracting assets.</strong></p>
                <p><strong>But here's what makes us different: We don't edit chronologically. We edit strategically.</strong></p>
                <p>
                  ✅ <strong>Strategic Clip Selection:</strong> We hunt for "sponsor moments," authority demonstrations, audience engagement proof, expertise showcases<br /><br />
                  ✅ <strong>Platform-Native Optimization:</strong> LinkedIn clips focus on credibility. TikTok clips focus on virality. YouTube clips focus on watch time. Same episode, different psychology<br /><br />
                  ✅ <strong>Sponsor-Ready Packaging:</strong> Every clip includes engagement metrics, audience demographics, and CTA performance in our weekly reports<br /><br />
                  ✅ <strong>Brand Consistency Obsession:</strong> Custom style guides, tone matching, zero generic templates<br />
                  <br />
                  <strong>We don't just edit. We turn your podcast into an omnipresent content machine.</strong>
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-item-number">3</div>
              <div className="step-item-content">
                <h3>Omnichannel Distribution (Autopilot)</h3>
                <p>We don't just create content. We publish it strategically across your entire ecosystem:</p>
                <p>
                  ✅ <strong>Multi-Platform Scheduling:</strong> LinkedIn, YouTube, Instagram, TikTok, X, Facebook (wherever your sponsors look)<br /><br />
                  ✅ <strong>Engagement Amplification:</strong> We monitor comments, tag relevant industry figures, cross-promote with guests<br /><br />
                  ✅ <strong>Sponsor Signal Tracking:</strong> When brands engage with your content, we flag it immediately<br /><br />
                  ✅ <strong>Weekly Performance Intelligence:</strong> Which clips drive sponsor inquiries? Which platforms generate leads? We track everything<br />
                  <br />
                  <strong>The result:</strong> By the time a brand Googles you, they've already seen you 8 times across multiple platforms. You're not a "podcast." You're a <em>media presence</em>.
                </p>
              </div>
            </div>
          </div>
          <div className="cta-center" style={{ marginTop: '40px' }}>
            <Link href="/testimonials" className="btn-primary">See Client Testimonials</Link>
          </div>
        </div>
      </section>

      {/* Section: See The Output */}
      <section className="clips-section" id="output">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">See The Output For Yourself</h2>
          <p className="section-subtitle clips-subtitle">Three clips straight from client episodes. The exact style of sponsor-ready content your show gets every week.</p>
          <div className="clip-grid">
            <figure className="clip-card video-wrapper">
              <video poster="/portfolio/thumbnails/Clip-1.jpg" preload="none" playsInline aria-label="Client clip example 1">
                <source src="/portfolio/Clip-1.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play client clip 1">
                <span className="play-icon" aria-hidden="true"><i className="fas fa-play"></i></span>
              </div>
            </figure>
            <figure className="clip-card video-wrapper">
              <video poster="/portfolio/thumbnails/Clip-5.jpg" preload="none" playsInline aria-label="Client clip example 2">
                <source src="/portfolio/Clip-5.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play client clip 2">
                <span className="play-icon" aria-hidden="true"><i className="fas fa-play"></i></span>
              </div>
            </figure>
            <figure className="clip-card video-wrapper">
              <video poster="/portfolio/thumbnails/Clip-8.jpg" preload="none" playsInline aria-label="Client clip example 3">
                <source src="/portfolio/Clip-8.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play client clip 3">
                <span className="play-icon" aria-hidden="true"><i className="fas fa-play"></i></span>
              </div>
            </figure>
          </div>
          <div className="cta-center" style={{ marginTop: '40px' }}>
            <Link href="/portfolio" className="btn-primary">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Section 5: Differentiation Section */}
      <section className="comparison-section" id="comparison">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Why Established Podcasters Choose The Podcast Multiplier™</h2>
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>AI Tools ($30-100/mo)</th>
                  <th>Freelancers ($200-800/mo)</th>
                  <th className="featured">The Podcast Multiplier™</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="negative">❌ No strategy, just clips</td>
                  <td className="warning">⚠️ Task-based, no big picture</td>
                  <td className="positive">✅ Revenue-first content strategy</td>
                </tr>
                <tr>
                  <td className="negative">❌ Robotic, contextless</td>
                  <td className="warning">⚠️ Variable, requires management</td>
                  <td className="positive">✅ Brand-obsessed, sponsor-ready</td>
                </tr>
                <tr>
                  <td className="warning">⚠️ 3-5 hrs/week cleanup</td>
                  <td className="warning">⚠️ 2-4 hrs/week managing</td>
                  <td className="positive">✅ 1 hr/week strategy calls</td>
                </tr>
                <tr>
                  <td className="negative">❌ Basic analytics</td>
                  <td className="negative">❌ No sponsor attribution</td>
                  <td className="positive">✅ Full revenue attribution reporting</td>
                </tr>
                <tr>
                  <td className="negative">❌ Algorithm-driven</td>
                  <td className="negative">❌ Not their focus</td>
                  <td className="positive">✅ Built into every clip decision</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="comparison-content">
            <p><strong>The difference:</strong> We're not a "service provider." We're an extension of your revenue team. Every clip decision is filtered through: <em>"Does this help us close the next sponsor?"</em></p>
            <p><strong>Example:</strong> Shatavia Green, founder of Conjure Queen, went from content burnout and inconsistent leads to a fully booked coaching calendar using the Podcast Multiplier™ system, so much so that she had to pause marketing to keep up with demand.</p>
            <div className="cta-group">
              <a href="https://gamma.app/docs/From-Burnout-to-Breakthrough-How-SLK-Media-Helped-Conjure-Queen-H-27tv5yjdnca6upb" className="btn-primary" target="_blank" rel="noopener">See Shatavia's Case Study</a>
            </div>
          </div>
          <p className="comparison-conclusion"><strong>Bottom line:</strong> AI tools save you time. We make you money.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Simple, Transparent Investment</h2>
          <div className="pricing-grid">
            <div className="pricing-tier featured compact">
              <div className="pricing-header">
                <h3>Content Engine</h3>
                <p className="pricing-period">(DFY)</p>
                <div className="pricing-price">$1,597/month</div>
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
                </ul>
              </div>
              <div className="pricing-footer">
                <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Our Guarantee */}
      <section className="guarantee-section">
        <div className="container">
          <h2 className="section-title">100% Risk-Free Guarantee</h2>
          <div className="guarantee-content">
            <p>Try The Podcast Multiplier™ for 14 days. If you don't see measurable improvements in content output quality, time savings, and sponsor-ready assets, we'll refund your first month. No questions asked.</p>
            <p><strong>We only win if you grow.</strong></p>
          </div>
        </div>
      </section>

      {/* Section 7: Founder Section */}
      <section className="founder-section" id="founder">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">A Message From Our Founder</h2>
          <div className="founder-content">
            <div className="founder-image">
              <img src="/images/founder.webp" alt="Samuel Lotchouang Kouam, CEO &amp; Founder" className="founder-photo" width={300} height={300} loading="lazy" />
            </div>
            <div className="founder-text">
              <p className="founder-quote">"Hi, I'm Samuel. I built SLK Media after watching too many talented podcasters burn out editing clips instead of closing sponsor deals. When you book a strategy call, you'll speak directly with me, not a sales rep. I'll be honest: if we don't think we can deliver 3X ROI on our fee, I'll tell you to wait. We only work with podcasters we KNOW we can help scale. Looking forward to our conversation."</p>
              <p className="founder-signature">Samuel K. Lotchouang, CEO &amp; Founder, SLK Media Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do Next Section */}
      <section className="next-steps-section" id="next-steps">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Ready to Scale Your Podcast to $10K+/Month?</h2>
          <div className="next-steps-content">
            <p><strong>Here's what happens next:</strong></p>
            <ul className="steps-list">
              <li>
                <h3>Step 1: Book Your Strategy Call (30 Minutes)</h3>
                <p>You'll speak directly with Samuel, our founder. We'll discuss your current download numbers, monetization status, biggest content bottlenecks, and whether The Podcast Multiplier™ is the right fit. <strong>This is NOT a sales pitch.</strong> If we don't think we can deliver 3X ROI on our fee, we'll tell you to wait.</p>
                <p><a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a></p>
              </li>
              <li>
                <h3>Step 2: Receive Your Custom Strategy Audit (If We're a Fit)</h3>
                <p>Within 7 days, you'll get: Competitor content analysis, platform optimization plan, 90-day content roadmap tied to revenue milestones, and sponsor target list.</p>
              </li>
              <li>
                <h3>Step 3: We Handle Everything (While You Focus on Revenue)</h3>
                <p>Send us your episodes. Within 3-4 business days: 10-20 sponsor-optimized clips per episode, published across all your social platforms, weekly performance reports tracking sponsor visibility.</p>
              </li>
            </ul>
            <div className="limited-spots">
              <p>🚨 <strong>IMPORTANT: Limited Client Capacity</strong></p>
              <p>We only onboard 3 podcasters per quarter to ensure world-class service. Once we're at capacity, the next opportunity to work with us will be in the next quarter.</p>
              <p><strong>The longer you wait, the more sponsors your competitors are closing while you're stuck editing clips.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final Call-to-Action Section */}
      <section className="final-cta-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <p className="final-cta-text">Your next episode could attract 3 sponsor inquiries. Let's make it happen.</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Check Current Availability & Book Your Call</a>
        </div>
      </section>

      {/* Section 9: FAQ Section */}
      <section className="faq faq-section" id="faq">
        <div className="grid-pattern-overlay"></div>
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
                <p><strong>Long answer:</strong> AI tools optimize for engagement metrics (watch time, likes, shares). They clip moments that the algorithm THINKS are interesting, usually loud moments, laughter, or high-energy segments.</p>
                <p><strong>The Podcast Multiplier™ optimizes for sponsor appeal.</strong> We clip moments that demonstrate: Authority (you're an expert, not just entertaining), Audience trust (engaged listeners, not passive consumers), Commercial alignment (your content attracts brands naturally).</p>
                <p><strong>Example:</strong> AI tool picks the funniest joke from your episode (gets 5K views, 200 likes, zero sponsor inquiries). We pick the 60-second segment where you broke down industry trends and cited data, boring to casual viewers, but GOLD to sponsors who want to reach your audience (gets 2K views, 80 likes, 3 sponsor inquiries).</p>
                <p><strong>Bottom line:</strong> AI tools save you time. We make you money.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Why not just hire a freelancer on Fiverr for $200/month?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Because <strong>you're not buying editing hours. You're buying a revenue outcome.</strong></p>
                <p><strong>Freelancers on Fiverr give you:</strong> Task-based labor (you tell them what to do), inconsistent quality (depends on their mood, workload, skill level), zero strategy (they don't understand sponsor psychology), management burden (you're revising, giving feedback, chasing deadlines).</p>
                <p><strong>The Podcast Multiplier™ gives you:</strong> Strategic content partner (we own the plan, you don't manage us), consistent quality (dedicated team, not rotating contractors), revenue-first approach (every clip filtered through "does this attract sponsors?"), full autonomy (we run on autopilot after Week 1).</p>
                <p><strong>The math:</strong> Freelancer approach: $200/month + 4 hours/week managing them (16 hrs/month) = $200 + $1,600 opportunity cost = $1,800 total cost. Output: 5-8 mediocre clips per episode, no strategy, you're still the bottleneck.</p>
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
                <p><strong>No, and you should run from anyone who does.</strong></p>
                <p>Here's why: We control content production and distribution. We don't control: Your recording quality, guest selection, or topic relevance; How aggressively you pursue sponsor outreach (we give you ammunition; you pull the trigger); Market conditions in your niche; Your existing audience quality and engagement rates.</p>
                <p><strong>What we DO guarantee:</strong> professionally edited, sponsor-ready clips per episode (delivered on time, every time), Multi-platform distribution on schedule (we never miss a publish date), Weekly performance reports (you'll know exactly what's working).</p>
                <p><strong>What our average client sees:</strong> 2.3X increase in sponsor inquiries within 90 days, $4,200-$8,500/month in new sponsorship revenue, 40-60% reduction in time spent on content production.</p>
                <p>But that requires YOU to actively pursue sponsors, negotiate deals, and record compelling episodes. We create the visibility. You close the partnerships.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What if I'm not comfortable sharing episode files with a third party?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>We sign NDAs for all clients. Your content, guest information, and strategic plans are 100% confidential.</p>
                <p>We've worked with: Corporate podcasts discussing unreleased product strategies, Health professionals navigating HIPAA compliance, Financial advisors with client confidentiality requirements.</p>
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
                <p><strong>Our process:</strong> Day 1-4: We immerse ourselves in your niche (competitor analysis, sponsor research, audience psychology). Day 5-8: We produce a test batch of clips and iterate based on your feedback. Day 9+: We run autonomously with weekly strategy syncs.</p>
                <p>If your podcast is in a niche we haven't tackled, we research it until we're experts. That's included in onboarding.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What if I only publish 1 episode per month?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Honest answer:</strong> We work best with shows publishing <strong>2-4 episodes/month.</strong></p>
                <p>Here's why: Content volume drives sponsor visibility. Sponsors want to see consistent presence across platforms, not sporadic posts every 3 weeks. 1 episode/month = 10-15 clips = ~2 weeks of posting (if we spread it out). That leaves 2 weeks of silence. Your audience thinks you've abandoned social media. Sponsors see inconsistent engagement.</p>
                <p><strong>If you're publishing 1 episode/month:</strong> Option 1: Batch-record 3-4 episodes per quarter and release them consistently (2/month). Option 2: Start with our service once you increase production cadence. Option 3: We can still work together, but set expectations: Growth will be slower due to content gaps.</p>
                <p>We're happy to strategize on increasing output sustainably. Many clients successfully shift from 1 episode/month to 2-3 with better planning.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Can I see examples of your work before committing?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Absolutely.</strong> Check out our portfolio: <Link href="/portfolio" target="_blank" rel="noopener">View Client Work</Link></p>
                <p>You'll see before/after examples from: SaaS/B2B podcasts (authority-focused LinkedIn clips), Health/wellness shows (educational TikTok/Instagram content), Entrepreneurship content (motivational YouTube Shorts), Multiple niches with different brand styles.</p>
                <p><strong>Want to see examples specific to your niche?</strong> Mention it on your strategy call and we'll pull relevant samples.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What happens if I don't like the clips you produce?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Unlimited revisions until you're satisfied.</strong></p>
                <p>Our quality process: Day 5-8: We produce a test batch and iterate based on your feedback (usually 2-3 rounds). Then lock in your style guide and brand voice guidelines. Day 9+: 95% of clips are approved on first submission (because we've nailed your voice).</p>
                <p><strong>If you're consistently unhappy after Week 2:</strong> We'll either assign a different team who better matches your style, OR offer a full refund if we can't meet your standards. We want raving fans, not hostages.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What if my show grows significantly? Does pricing change?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Your pricing locks in when you join.</strong> We've never raised rates on existing clients mid-contract.</p>
                <p>If you outgrow package limits (great problem to have!), we'll discuss: Upgrading to the next tier, OR Custom enterprise pricing for high-volume shows.</p>
                <p><strong>We reward growth, not punish it.</strong> If you're scaling rapidly, we'll find a way to scale with you that makes financial sense.</p>
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
                <h3>How long before I see results?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Depends on what "results" means to you:</strong></p>
                <p><strong>If "results" = high-quality clips delivered consistently:</strong> Week 1. You'll have 5-10 clips ready to publish within 3-4 business days.</p>
                <p><strong>If "results" = increased social media engagement and visibility:</strong> 30-45 days. Platforms need time to recognize your consistent posting and boost distribution. Week 1-2: Baseline engagement. Week 3-4: 20-40% increase. Week 5-8: 2-3X increase.</p>
                <p><strong>If "results" = sponsor inquiries and revenue opportunities:</strong> 60-90 days. Sponsors need to see you multiple times across platforms before reaching out. Our average client sees 2-3X increase in sponsor inquiries by month 3.</p>
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
                <h3>Do you provide analytics or growth reports?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Yes. We track and report weekly on: Which clips got the most views and engagement, Which clips drove sponsor-adjacent traffic (views from brand employees), Platform performance comparison, Sponsor signals (brands that engaged with your content), Recommendations for next week.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Is this confidential? I don't want competitors to know I use you.</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>100% confidential.</strong> We never share your info or project details without permission. We've worked with corporate podcasts, health professionals with HIPAA requirements, and financial advisors with strict confidentiality needs.</p>
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
      <section className="footer-cta-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="footer-cta-heading">The only risk is waiting while your competitors scale their sponsor pipelines.</h2>
          <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call - Qualified Shows Only</a>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#fcf4f4' }}>📍 <strong>Note on Pricing Transparency:</strong> Our full-service package is $1,597/month. If that investment doesn't align with your current budget, we recommend starting with Descript ($30/month) or OpusClip ($50/month) until your podcast revenue supports professional content production. Come back when you're ready to scale, no hard feelings.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="grid-pattern-overlay"></div>
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
          <p className="sticky-cta-text">Limited capacity: only 3 client spots available per quarter</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Check Availability & Book Now</a>
        </div>
      </div>
    </>
  );
}
