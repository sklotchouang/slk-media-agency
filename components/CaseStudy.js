import Link from 'next/link';

/**
 * Shared template for every client case study page. Each page under
 * app/(main)/success/ passes in a data object with its own copy, so all six
 * case studies stay perfectly uniform with the main site's design: same
 * navbar, same dark theme, same buttons, same footer.
 */
export default function CaseStudy({ data }) {
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
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Book Strategy Call</a></li>
          </ul>
        </div>
      </nav>

      <main id="main">

      {/* Hero */}
      <section className="cs-hero">
        <div className="container">
          <span className="tpage-badge"><i className="fas fa-trophy" aria-hidden="true"></i> CLIENT SUCCESS STORY</span>
          <h1>{data.heroTitle}</h1>
          {data.heroSubtitle ? <p className="subheadline">{data.heroSubtitle}</p> : null}
          <div className="stats-band">
            {data.heroStats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="cs-meta">
            {data.heroMeta.map((item) => (
              <span key={item.text}><i className={item.icon} aria-hidden="true"></i> {item.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Client profile */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">CLIENT PROFILE</span>
            <h2 className="section-title">{data.profileHeading}</h2>
          </div>
          <div className="cs-overview">
            <div className="cs-card">
              <div className="cs-icon"><i className={data.profileIcon} aria-hidden="true"></i></div>
              <h3>{data.profileName}</h3>
              <p>{data.profileText}</p>
              <span className="cs-chip"><i className={data.profileChipIcon} aria-hidden="true"></i> {data.profileChip}</span>
            </div>
            <div className="cs-overview-stats">
              {data.profileStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="cs-section cs-section--alt">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">THE SITUATION</span>
            <h2 className="section-title">{data.challengeHeading}</h2>
          </div>
          <p className="cs-lead">{data.challengeIntro}</p>
          <div className="cs-grid">
            {data.problems.map((problem, index) => (
              <div className="cs-card" key={index}>
                <div className="cs-num">{String(index + 1).padStart(2, '0')}</div>
                <h3><i className={problem.icon} aria-hidden="true"></i> {problem.title}</h3>
                <p>{problem.text}</p>
              </div>
            ))}
          </div>
          <div className="testimonial-mini">
            <p>{data.challengeQuote}</p>
            <span className="testimonial-author">{data.challengeQuoteAuthor}</span>
          </div>
        </div>
      </section>

      {/* Before / after transformation */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">THE TRANSFORMATION</span>
            <h2 className="section-title">{data.transformHeading}</h2>
          </div>
          <div className="cs-transform">
            <div className="cs-transform-col cs-before">
              <span className="cs-transform-badge"><i className="fas fa-times-circle" aria-hidden="true"></i> BEFORE SLK MEDIA</span>
              {data.before.map((item, index) => (
                <div className="cs-transform-item" key={index}>
                  <i className={item.icon} aria-hidden="true"></i>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="cs-transform-arrow"><i className="fas fa-arrow-right" aria-hidden="true"></i></div>
            <div className="cs-transform-col cs-after">
              <span className="cs-transform-badge"><i className="fas fa-check-circle" aria-hidden="true"></i> AFTER SLK MEDIA</span>
              {data.after.map((item, index) => (
                <div className="cs-transform-item" key={index}>
                  <i className={item.icon} aria-hidden="true"></i>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The solution */}
      <section className="cs-section cs-section--alt">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">THE SOLUTION</span>
            <h2 className="section-title">Enter SLK Media Agency</h2>
          </div>
          <p className="cs-lead">{data.solutionIntro}</p>
          <div className="cs-grid">
            {data.process.map((step, index) => (
              <div className="cs-card" key={index}>
                <div className="cs-num">{index + 1}</div>
                <div className="cs-icon"><i className={step.icon} aria-hidden="true"></i></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">{data.deliverablesTag}</span>
            <h2 className="section-title">{data.deliverablesHeading}</h2>
          </div>
          <div className="cs-grid">
            {data.deliverables.map((card, index) => (
              <div className="cs-card" key={index}>
                <div className="cs-icon"><i className={card.icon} aria-hidden="true"></i></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <div className="cs-highlight">
            <p>{data.deliverablesHighlight}</p>
          </div>
        </div>
      </section>

      {/* Video testimonial */}
      <section className="cs-section cs-section--alt">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">CLIENT TESTIMONIAL</span>
            <h2 className="section-title">Hear From {data.person.name}</h2>
          </div>
          <div className="t-feature">
            <div className={`t-feature-media video-wrapper ${data.video.aspect}`}>
              <video poster={data.video.poster} preload="none" playsInline controls>
                <source src={data.video.src} type="video/mp4" />
              </video>
              <div className="video-overlay" role="button" tabIndex={0} aria-label={`Play ${data.person.name}'s video testimonial`}>
                <div className="play-icon" aria-hidden="true">▶</div>
              </div>
            </div>
            <div className="t-feature-quote">
              <span className="t-result-chip"><i className={data.resultChip.icon} aria-hidden="true"></i> {data.resultChip.text}</span>
              <blockquote>{data.testimonialQuote}</blockquote>
              <div className="person">
                <div className="avatar-ring"><span className="avatar-mono" aria-hidden="true">{data.person.initials}</span></div>
                <div className="meta">
                  <div className="name">{data.person.name}</div>
                  <div className="role">{data.person.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The results */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">THE IMPACT</span>
            <h2 className="section-title">{data.resultsHeading}</h2>
          </div>
          <div className="cs-grid">
            {data.results.map((card, index) => (
              <div className="cs-card" key={index}>
                <div className="cs-icon"><i className={card.icon} aria-hidden="true"></i></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
          <div className="cs-highlight">
            <h3><i className="fas fa-star" aria-hidden="true"></i> {data.resultsHighlightTitle}</h3>
            <p>{data.resultsHighlightText}</p>
          </div>
        </div>
      </section>

      {/* Why it worked */}
      <section className="cs-section cs-section--alt">
        <div className="container">
          <div className="cs-head">
            <span className="tpage-badge">THE SECRET SAUCE</span>
            <h2 className="section-title">{data.whyHeading}</h2>
          </div>
          <div className="cs-grid">
            {data.why.map((card, index) => (
              <div className="cs-card" key={index}>
                <div className="cs-num">{index + 1}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top performing content */}
      {data.showcase ? (
        <section className="cs-section cs-showcase">
          <div className="container">
            <div className="cs-head">
              <span className="tpage-badge">TOP PERFORMING CONTENT</span>
              <h2 className="section-title">{data.showcase.heading}</h2>
            </div>
            <p className="cs-lead">{data.showcase.text}</p>
            <div className="client-videos">
              {data.showcase.clips.map((clip) => (
                <div
                  key={clip.src}
                  className="client-video"
                  dangerouslySetInnerHTML={{
                    __html: `<video autoplay muted loop playsinline data-autoplay${clip.poster ? ` poster="${clip.poster}"` : ''} aria-label="${clip.label}"><source src="${clip.src}" type="video/mp4"></video>`,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="t-cta">
        <div className="container">
          <h2>Ready to Multiply Your <span className="highlight">Podcast's Reach?</span></h2>
          <p className="cs-cta-sub">Stop letting your best content collect dust. Let's turn your podcast into a multi-platform powerhouse.</p>
          <div className="cs-cta-buttons">
            <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener"><i className="fas fa-calendar-check" aria-hidden="true"></i> Book a Strategy Call</a>
            <Link href="/" className="secondary-cta"><i className="fas fa-globe" aria-hidden="true"></i> Visit Our Website</Link>
          </div>
          <p className="cs-cta-note"><i className="fas fa-shield-alt" aria-hidden="true"></i> No fluff. No wasted time. Just results, or we'll tell you upfront if we're not the right fit.</p>
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
