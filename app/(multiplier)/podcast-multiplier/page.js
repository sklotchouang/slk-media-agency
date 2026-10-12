import Link from 'next/link';
import HeroAtmosphere from '../../../components/HeroAtmosphere';

export const metadata = {
  title: 'The Podcast Multiplier™: Done-For-You Clips for Podcasters | SLK Media Agency',
  description:
    'The Podcast Multiplier™ turns your episodes into 12 or 20 clips a month and posts them on every platform. Done-for-you content production for podcasters who publish consistently.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/podcast-multiplier' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'The Podcast Multiplier™ | SLK Media Agency',
    description: 'Done-for-you clips for consistent podcasts. You record once. We handle everything after.',
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
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><a href="#next-steps">Get Started</a></li>
          </ul>
        </div>
      </nav>

      {/* Section 1: Hero Section */}
      <section className="hero-section">
        <HeroAtmosphere />
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <div className="hero-wrapper">
            <p className="sub-headline-blue">The Podcast Multiplier™</p>
            <h1 className="headline">The Content Engine That Turns Consistent Podcasts Into a Steady Stream of Clips</h1>
            <p className="subheadline">Your show deserves more than 200-view clips. We turn your episodes into short clips that help new listeners find your show and show future clients what you know. You record once. We handle everything after.</p>
          </div>
          <div className="cta-center">
            <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Let's Chat - Qualified Shows Only</a>
          </div>
          <p className="tagline">Month to month. No contract.</p>

          <div className="hero-snapshot" aria-label="How it works in three steps">
            <div className="hsnap-step"><span className="hsnap-num">1</span><span>You record your episode</span></div>
            <span className="hsnap-arrow" aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
            <div className="hsnap-step"><span className="hsnap-num">2</span><span>We make and post the clips</span></div>
            <span className="hsnap-arrow" aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
            <div className="hsnap-step"><span className="hsnap-num">3</span><span>You show up everywhere</span></div>
          </div>
        </div>
      </section>

      {/* Section: Growth Limbo */}
      <section className="growth-limbo-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Why Podcast Growth Hits A Ceiling</h2>
          <div className="growth-limbo-content">
            <p className="section-subtitle">You've already done the hard part: shown up and published consistently for 6+ months.</p>
            <p className="section-subtitle"><strong>But growth has stalled. And you know exactly why:</strong></p>
            <div className="problem-list">
              <div className="problem-item">🚫 You're spending 10-20 hours per week editing, clipping, captioning, and scheduling posts</div>
              <div className="problem-item">🚫 Your clips get 300-800 views because you're rushing them between episodes</div>
              <div className="problem-item">🚫 New listeners look you up, and your Instagram has 12 sporadic posts</div>
              <div className="problem-item">🚫 You know you should be on LinkedIn, TikTok, and YouTube Shorts... but who has time?</div>
            </div>
            <div className="cost-callout">
              <div className="cost-callout-icon"><i className="fas fa-hourglass-half" aria-hidden="true"></i></div>
              <div className="cost-callout-body">
                <p><strong>The brutal math:</strong> 10 hours/week × 4 weeks = <strong>40 hours per month</strong> spent on content production.</p>
                <p>That's <strong>$2,000-$5,000 in opportunity cost</strong> if you valued your time at $50-125/hour (which you should, because that's billable time you could spend with clients or on your business).</p>
                <p><strong>Meanwhile, your best episodes die after publication because you're too exhausted to promote them.</strong></p>
              </div>
            </div>
            <p><strong>Here's what you actually need:</strong> A dedicated content team that turns your episodes into 12 or 20 finished clips a month and posts them for you, while you focus on recording and running your business.</p>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem Section */}
      <section className="problem-section" id="problem">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Why Your Current Approach Isn't Working</h2>
          <div className="problem-content">
            <p className="section-subtitle">You've tried the "obvious" solutions. None worked:</p>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-robot"></i></div>
                <h3>AI Clipping Tools (Descript, OpusClip, Repurpose.io)</h3>
                <p><strong>What they promised:</strong> "Just upload your episode! AI will find the best clips automatically!"</p>
                <p><strong>What actually happened:</strong> Algorithm clips random 60-second segments with zero context. Misses your best punchlines, cuts off stories mid-sentence. You spend 3 hours per week "fixing" AI output, defeating the purpose.</p>
                <p><strong>Why it failed:</strong> AI optimizes for "engagement patterns" (loud moments, laughter), not for the moments that show what you know. A loud clip gets a laugh. A clip that shows your expertise is the one that makes someone want the full episode.</p>
              </div>
              <div className="problem-card">
                <div className="problem-card-icon"><i className="fas fa-laptop-code"></i></div>
                <h3>Cheap Freelancers on Fiverr/Upwork ($200-800/month)</h3>
                <p><strong>What you thought you'd get:</strong> "Affordable editor who'll handle clips so I can focus on recording."</p>
                <p><strong>What actually happened:</strong> Week 1: Promising start. Week 3: Quality drops. Week 5: Disappears for 4 days. Week 8: You're re-editing their clips because they don't understand your audience. Week 10: Ghosted.</p>
                <p><strong>Why it failed:</strong> You hired task-based labor, not a strategic partner. Freelancers aren't invested in your goals. They're optimizing for speed and volume, not for the people you want to reach. Plus, you're managing another employee (revisions, feedback, deadlines), which defeats the "time savings" promise.</p>
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
            <p className="section-subtitle">Your Dedicated Content Team With One Job: Get Your Episodes Seen</p>
            <p>This isn't a tool. It's not a contractor. It's a <strong>strategic content system</strong> designed specifically for podcasters who publish consistently and are ready to invest in scaling.</p>
            <p><strong>Here's how it works:</strong></p>
            <div className="solution-highlight">
              <p><strong>You record your podcast episodes.</strong></p>
              <p><strong>We turn them into finished clips and post them on every platform you use.</strong></p>
              <p><strong>You show up everywhere, and you get your time back.</strong></p>
            </div>
            <p><strong>The result:</strong> You post on every platform, every week, without editing a thing. You're not just a "podcast." You're a <em>media presence</em>.</p>
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
              <p>I watched too many talented podcasters burn out editing clips instead of running their business. SLK Media Agency exists so you record once and we handle everything after. When you book a call, you speak directly with me, not a sales rep.</p>
              <span className="founder-mini-sign">Samuel K. Lotchouang, CEO &amp; Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Before / After results grid (proof, surfaced early) */}
      <section className="results-section" id="results">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">💰 Real Clients, Real Results</h2>
          <p className="section-subtitle results-subtitle">Before SLK Media Agency vs After, real shifts from real client shows.</p>

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
              <div className="ba-headline"><i className="fas fa-video" aria-hidden="true"></i> 8-12 clips, every episode</div>
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
          <h2 className="section-title">How The Podcast Multiplier™ Works</h2>
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-item-number">1</div>
              <div className="step-item-content">
                <h3>Strategy (Week 1)</h3>
                <p>Before we edit a single clip, we answer the only question that matters: <strong>"Who should find this show, and what will make them stop scrolling?"</strong></p>
                <p>
                  ✅ <strong>Niche Analysis:</strong> We study the top shows in your niche. What clip types do they produce? What do their viewers respond to?<br /><br />
                  ✅ <strong>Competitor Review:</strong> Who is getting attention in your space? Where and how do they post?<br /><br />
                  ✅ <strong>Platform Plan:</strong> Where do the people you want to reach spend their time? (Business buyers are on LinkedIn. Younger listeners are on TikTok and Instagram.)<br /><br />
                  ✅ <strong>90-Day Content Calendar:</strong> We map exactly what clips to produce, when to publish them, and which platforms to prioritize<br />
                  <br />
                  🚀 <strong>Quick win:</strong> You will receive a full social media strategy report, giving you clarity on what to expect in the coming weeks/months.
                </p>
                <p><strong>This is the step every other service skips.</strong> They treat editing like a commodity. We start with a plan.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-item-number">2</div>
              <div className="step-item-content">
                <h3>Content Multiplication (Ongoing, Every Episode)</h3>
                <p>Our team turns your episodes into <strong>12 or 20 finished clips a month</strong>, depending on your plan.</p>
                <p><strong>But here's what makes us different: We don't edit chronologically. We edit strategically.</strong></p>
                <p>
                  ✅ <strong>Strategic Clip Selection:</strong> We look for the moments that show your expertise, tell a complete story, and make a new viewer want the full episode<br /><br />
                  ✅ <strong>Platform-Native Optimization:</strong> LinkedIn clips focus on credibility. TikTok clips focus on virality. YouTube clips focus on watch time. Same episode, different psychology<br /><br />
                  ✅ <strong>Reported Every Week:</strong> Every clip includes engagement metrics, audience demographics, and CTA performance in our weekly reports<br /><br />
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
                  ✅ <strong>Multi-Platform Scheduling:</strong> LinkedIn, YouTube, Instagram, TikTok, X, Facebook (wherever your audience spends time)<br /><br />
                  ✅ <strong>Engagement Amplification:</strong> We monitor comments, tag relevant industry figures, cross-promote with guests<br /><br />
                  ✅ <strong>A Fixed Posting Schedule:</strong> Every clip goes out on the schedule we agree with you, so your feed never goes quiet<br /><br />
                  ✅ <strong>Weekly Performance Report:</strong> Which clips got the most views? Which platforms performed best? You see it every week<br />
                  <br />
                  <strong>The result:</strong> You show up on every platform, every week, while you spend your time on recording and your business.
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
          <p className="section-subtitle clips-subtitle">Three clips straight from client episodes. The exact style of content your show gets every week.</p>
          <div className="clip-grid">
            <figure className="clip-card video-wrapper">
              <video poster="/portfolio/thumbnails/Steve-Before-After.jpg" preload="none" playsInline aria-label="Steve Garrett before and after clip">
                <source src="/portfolio/Steve-Before-After.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Steve Garrett before and after clip">
                <span className="play-icon" aria-hidden="true"><i className="fas fa-play"></i></span>
              </div>
            </figure>
            <figure className="clip-card video-wrapper">
              <video poster="/portfolio/thumbnails/Brian-Before-After.jpg" preload="none" playsInline aria-label="Brian Burton before and after clip">
                <source src="/portfolio/Brian-Before-After.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Brian Burton before and after clip">
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
          <h2 className="section-title">Why Growth-Focused Podcasters Choose The Podcast Multiplier™</h2>
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
                  <td className="positive">✅ A content strategy for your show</td>
                </tr>
                <tr>
                  <td className="negative">❌ Robotic, contextless</td>
                  <td className="warning">⚠️ Variable, requires management</td>
                  <td className="positive">✅ On-brand, ready to post</td>
                </tr>
                <tr>
                  <td className="warning">⚠️ 3-5 hrs/week cleanup</td>
                  <td className="warning">⚠️ 2-4 hrs/week managing</td>
                  <td className="positive">✅ 1 hr/week strategy calls</td>
                </tr>
                <tr>
                  <td className="negative">❌ Basic analytics</td>
                  <td className="negative">❌ No reporting</td>
                  <td className="positive">✅ Weekly performance reports</td>
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
            <p><strong>The difference:</strong> We work like part of your team, not a vendor you have to manage. Every clip decision is filtered through: <em>"Will this help the right people find the show?"</em></p>
            <p><strong>Example:</strong> Shatavia Green, founder of Conjure Queen, went from content burnout and inconsistent leads to a fully booked coaching calendar using the Podcast Multiplier™ system, so much so that she had to pause marketing to keep up with demand.</p>
            <div className="cta-group">
              <a href="https://gamma.app/docs/From-Burnout-to-Breakthrough-How-SLK-Media-Helped-Conjure-Queen-H-27tv5yjdnca6upb" className="btn-primary" target="_blank" rel="noopener">See Shatavia's Case Study</a>
            </div>
          </div>
          <p className="comparison-conclusion"><strong>Bottom line:</strong> AI tools still leave the work to you. We do all of it.</p>
        </div>
      </section>

      {/* Section: What We Commit To (replaced the refund guarantee on 2026-10-12) */}
      <section className="guarantee-section">
        <div className="container">
          <h2 className="section-title">What We Commit To</h2>
          <div className="guarantee-content">
            <p>Every month you get the clips your plan includes (12 or 20, or the custom number you chose), posted on the schedule we agree with you, and a weekly report on how they performed. We never promise downloads, views or sponsors, because nobody controls those. We do control the work, and that is what we commit to.</p>
            <p><strong>Month to month. No contract.</strong></p>
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
              <p className="founder-quote">"Hi, I'm Samuel. I built SLK Media Agency after watching too many talented podcasters burn out editing clips instead of running their business. When you book a strategy call, you'll speak directly with me, not a sales rep. I'll be honest: if I don't think we're the right fit for your show, I'll tell you. We only take on podcasters we believe we can help. Looking forward to our conversation."</p>
              <p className="founder-signature">Samuel K. Lotchouang, CEO &amp; Founder, SLK Media Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do Next Section */}
      <section className="next-steps-section" id="next-steps">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="section-title">Ready to Scale Your Podcast?</h2>
          <div className="next-steps-content">
            <p><strong>Here's what happens next:</strong></p>
            <ul className="steps-list">
              <li>
                <h3>Step 1: Book Your Strategy Call (30 Minutes)</h3>
                <p>You'll speak directly with Samuel, our founder. We'll discuss your content, your goals, biggest content bottlenecks, and whether The Podcast Multiplier™ is the right fit. <strong>This is NOT a sales pitch.</strong> If we don't think we're the right fit for your show, we'll tell you.</p>
                <p><a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call</a></p>
              </li>
              <li>
                <h3>Step 2: Receive Your Custom Strategy Audit (If We're a Fit)</h3>
                <p>Within 7 days, you'll get: Competitor content analysis, platform plan, and a 90-day content roadmap.</p>
              </li>
              <li>
                <h3>Step 3: We Handle Everything (While You Focus on Your Show)</h3>
                <p>Send us your episodes. We deliver the 12 or 20 clips a month your plan includes, post them across your social platforms, and send you a weekly performance report.</p>
              </li>
            </ul>
            <div className="limited-spots">
              <p><strong>Month to month, no contract</strong></p>
              <p>Cancel any time with 14 days' notice, or pause for up to 60 days. You keep every clip we make for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final Call-to-Action Section */}
      <section className="final-cta-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <p className="final-cta-text">Your next episode has more in it than one listen. Let's put it to work.</p>
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
                <p><strong>Short answer:</strong> AI tools are for podcasters testing the waters with content repurposing. The Podcast Multiplier™ is for podcasters who are serious about growing their show or their business.</p>
                <p><strong>Long answer:</strong> AI tools optimize for engagement metrics (watch time, likes, shares). They clip moments that the algorithm THINKS are interesting, usually loud moments, laughter, or high-energy segments.</p>
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
                <p>Here's why: We control content production and posting. We don't control: Your recording quality, guest selection, or topic relevance; How each platform chooses to show your clips; Market conditions in your niche; Your existing audience quality and engagement rates.</p>
                <p><strong>What we DO commit to:</strong> 12 or 20 professionally edited clips a month, depending on your plan, delivered on time. Posting on your platforms on the schedule we agree with you. A weekly report showing what every clip did.</p>
                <p>We never promise downloads, views or sponsors. We do the work and show you the numbers every week.</p>
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
                <p><strong>Our process:</strong> Day 1-4: We immerse ourselves in your niche (competitor analysis, audience research, what similar shows post). Day 5-8: We produce a test batch of clips and iterate based on your feedback. Day 9+: We run autonomously with weekly strategy syncs.</p>
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
                <p>Here's why: steady posting needs steady material. With 2-4 episodes a month we have plenty of strong moments to fill your 12 or 20 clips. With one episode, every clip comes from the same conversation, and your feed can start to feel repetitive.</p>
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
                <p>Our quality process: Day 5-8: We produce a test batch and iterate based on your feedback (usually 2-3 rounds). Then lock in your style guide and brand voice guidelines. Day 9+: most clips are approved on first submission (because we've nailed your voice).</p>
                <p><strong>If you're consistently unhappy after Week 2:</strong> We'll assign a different team who better matches your style. And because every plan is month to month, you are never locked in. We want raving fans, not hostages.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <h3>What if my show grows significantly? Does pricing change?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p><strong>Your pricing locks in when you join.</strong> We've never raised rates on an existing client.</p>
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
                <p><strong>If "results" = finished clips delivered consistently:</strong> that part is in our hands. Your plan sets the number (12 or 20 a month, or the custom number you chose) and we deliver it on the schedule agreed at onboarding.</p>
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
                <p><strong>100% confidential.</strong> We never share your info or project details without permission. We've worked with corporate podcasts, health professionals with HIPAA requirements, and financial advisors with strict confidentiality needs.</p>
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
      <section className="footer-cta-section">
        <div className="grid-pattern-overlay"></div>
        <div className="container">
          <h2 className="footer-cta-heading">You record once. We handle everything after.</h2>
          <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Book Your Strategy Call - Qualified Shows Only</a>
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
          <p className="sticky-cta-text">Month to month, no contract. See if your show is a fit.</p>
          <a href="https://link.slkmediaagency.com/strmeet" className="btn-primary" target="_blank" rel="noopener">Check Availability & Book Now</a>
        </div>
      </div>
    </>
  );
}
