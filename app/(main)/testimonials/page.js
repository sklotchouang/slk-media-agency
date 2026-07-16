import Link from 'next/link';

export const metadata = {
  title: 'Client Testimonials: What Our Happy Clients Said | SLK Media Agency',
  description:
    "Hear directly from podcasters and brands (Conjure Queen, RWS Group, Corvette Today, Waste No Day and more) on working with SLK Media Agency's done-for-you content system.",
  robots: { index: true, follow: true },
  alternates: { canonical: '/testimonials' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Client Testimonials | SLK Media Agency',
    description:
      'Real clients. Real videos. Real results: what podcasters and brands say about working with SLK Media Agency.',
    url: '/testimonials',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function TestimonialsPage() {
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/success/case-studies">Case Studies</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Book Strategy Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main">

      {/* Hero */}
      <section className="tpage-hero">
        <div className="container">
          <span className="tpage-badge"><i className="fas fa-star" aria-hidden="true"></i> TESTIMONIALS</span>
          <h1>What Our <span className="highlight">Happy Clients</span> Said</h1>
          <p className="subheadline">Unscripted, on camera, in their own words: podcasters and brands on what changed after handing their content to SLK Media.</p>
          <div className="stats-band">
            <div className="stat-card">
              <div className="stat-number">12.4M</div>
              <div className="stat-label">Views Generated</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Clips Created</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12k+</div>
              <div className="stat-label">Hours Saved for Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">87%</div>
              <div className="stat-label">Retention After 6 Months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured video testimonials */}
      <section className="t-features">
        <div className="container">

          <div className="t-feature">
            <div className="t-feature-media video-wrapper ar-11">
              <video poster="/video-testimonials/poster-shatavia.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-shatavia.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Shatavia Green's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fas fa-award" aria-hidden="true"></i> 100K+ subscribers · Silver Play Button</span>
              <h2 className="t-headline">SLK Media made my content workflow so much easier</h2>
              <blockquote>Working with SLK Media has been an amazing experience. As someone juggling multiple platforms, they took a huge burden off my shoulders and freed up my time. The process became easier, the content quality improved, and Sam was flexible and great to work with. Highly recommend!</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">SG</span></div>
                <div className="meta">
                  <div className="name">Shatavia Green</div>
                  <div className="role">Conjure Queen Podcast</div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-feature">
            <div className="t-feature-media video-wrapper ar-45">
              <video poster="/video-testimonials/poster-david.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-david.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play David Hetling's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fas fa-chart-line" aria-hidden="true"></i> Audience growth ahead of expectations</span>
              <h2 className="t-headline">I count SLK Media among our most valued agency partners</h2>
              <blockquote>I've been really amazed at the quality of the content that they produce, and that's often quite specific and complicated. Since launch we've consistently grown our audience ahead of expectations and we're driving really good metrics in terms of reactions and engagement.</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">DH</span></div>
                <div className="meta">
                  <div className="name">David Hetling</div>
                  <div className="role">Marketing Director, RWS Group</div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-feature">
            <div className="t-feature-media video-wrapper ar-169">
              <video poster="/video-testimonials/poster-brian.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-brian.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Brian Burton's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fas fa-video" aria-hidden="true"></i> 8-12 clips per episode, every episode</span>
              <h2 className="t-headline">I count SLK Media among the A-players</h2>
              <blockquote>I have several teams across three different businesses and I consider you one of the "A-Players" on the teams that I would like to make sure we do business with for a long time. The quality of the short reels created out of full episodes has been surprising, and also the communication, the support, and the professionalism.</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">BB</span></div>
                <div className="meta">
                  <div className="name">Brian Burton</div>
                  <div className="role">Waste No Day Podcast</div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-feature">
            <div className="t-feature-media video-wrapper ar-169">
              <video poster="/video-testimonials/poster-steve.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-steve.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Steve Garrett's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fab fa-youtube" aria-hidden="true"></i> 11.9K subscribers · 599+ episodes</span>
              <h2 className="t-headline">Working with SLK Media Agency has been a game-changer for my podcast</h2>
              <blockquote>Working with SLK Media Agency has been a game-changer for my podcast. They handle all the clip creation and distribution while I focus on what I do best: creating great content. The reach we've gained across multiple platforms is incredible.</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">SG</span></div>
                <div className="meta">
                  <div className="name">Steve Garrett</div>
                  <div className="role">Corvette Today Podcast</div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-feature">
            <div className="t-feature-media video-wrapper ar-45">
              <video poster="/video-testimonials/poster-kelly.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-kelly.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Kelly Bellaria's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fas fa-users" aria-hidden="true"></i> A great increase in followers</span>
              <h2 className="t-headline">We've seen a great increase in the amount of followers</h2>
              <blockquote>SLK Media has done a great job both on the design side and the management side. They've done a wonderful job as we've seen a great increase in the amount of followers, and the content they've created for us visually is very appealing.</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">KB</span></div>
                <div className="meta">
                  <div className="name">Kelly Bellaria</div>
                  <div className="role">Alpine Institute</div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-feature">
            <div className="t-feature-media video-wrapper ar-45">
              <video poster="/video-testimonials/poster-julien.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-julien.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Julien Recoussine's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fas fa-rocket" aria-hidden="true"></i> Significant growth across all accounts</span>
              <h2 className="t-headline">We saw significant growth in all the social media and online accounts</h2>
              <blockquote>I'm highly impressed with the level of communication and transparency that occurs when you're working with SLK Media. The piece that really impressed me was the level of expertise that they bring into it. We saw significant growth in all the social media and online accounts that we used them for.</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">JR</span></div>
                <div className="meta">
                  <div className="name">Julien Recoussine</div>
                  <div className="role">SalesFix</div>
                </div>
              </div>
            </div>
          </div>

          <div className="t-feature t-feature-vertical">
            <div className="t-feature-media video-wrapper ar-916">
              <video poster="/video-testimonials/poster-preston.webp" preload="none" playsInline controls>
                <source src="/video-testimonials/testimonial-preston.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label="Play Preston Hurd's video testimonial">
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className="fas fa-bolt" aria-hidden="true"></i> Fast turnaround on every edit</span>
              <h2 className="t-headline">What you do is so professional</h2>
              <blockquote>I showed him your intro video, which I think is fantastic. It's not done, but it's fantastic. I love it. I don't like it, I love it. What you do is so professional. It gave me the confidence to move forward on the whole project. And your team is fast. I don't know how you make any money with all the time these edits take. I don't know how you charge so cheap for what you do.</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">PH</span></div>
                <div className="meta">
                  <div className="name">Preston Hurd</div>
                  <div className="role">The Filtered Brew Podcast</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="t-cta">
        <div className="container">
          <h2>Want results like these for <span className="highlight">your show?</span></h2>
          <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Your Strategy Call</a>
          <p style={{ marginTop: '18px' }}><Link href="/success/case-studies" className="text-link">Or read the full case studies <i className="fas fa-arrow-right" aria-hidden="true"></i></Link></p>
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
                <i className="fas fa-building" aria-hidden="true"></i>
                <span>KVK-nummer: 95218300</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-receipt" aria-hidden="true"></i>
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
