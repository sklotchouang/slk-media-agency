import Link from 'next/link';
import ClipSoundToggles from '../../../../components/ClipSoundToggles';

export const metadata = {
  title: 'Audio-Only Podcast Clips | SLK Media Agency',
  description:
    'Video clips SLK Media Agency built from podcasts that record audio only: before and after examples plus finished clips from Corvette Today and Byte-Sized Biographies.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/portfolio/audio-only' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Audio-Only Podcast Clips | SLK Media Agency',
    description: 'No camera, still video: clips we built from audio-only podcasts.',
    url: '/portfolio/audio-only',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b',
};

const BASE = '/portfolio/audio-only';

// Before and after composites (9:16). Left: what the show had. Right: the clip we made.
const BEFORE_AFTER = [
  { file: 'ba-corvette-today-1', show: 'Corvette Today' },
  { file: 'ba-corvette-today-2', show: 'Corvette Today' },
  { file: 'ba-pine-forest-media', show: 'Pine Forest Media' },
  { file: 'ba-mindset-neuroscience', show: 'Mindset Neuroscience' },
];

// Finished clips, grouped by show. shape: 'square' (1:1) or 'vertical' (9:16, shown inside a square tile).
const SHOWS = [
  {
    show: 'Corvette Today',
    clips: [
      { file: 'corvette-road-america', title: 'Road America', shape: 'square' },
      { file: 'corvette-split-window', title: "The '63 Split Window", shape: 'square' },
      { file: 'corvette-hidden-tech', title: 'Hidden tech for your Corvette', shape: 'vertical' },
    ],
  },
  {
    show: 'Byte-Sized Biographies',
    clips: [
      { file: 'bsb-dasch', title: 'Dasch', shape: 'square' },
      { file: 'bsb-bob-marley', title: 'Bob Marley', shape: 'square' },
      { file: 'bsb-db-cooper', title: 'D.B. Cooper', shape: 'square' },
    ],
  },
];

function videoHtml(file, label) {
  return `<video autoplay muted loop playsinline preload="none" poster="${BASE}/thumbnails/${file}.jpg" data-autoplay aria-label="${label}"><source src="${BASE}/${file}.mp4" type="video/mp4"></video>`;
}

function SoundButton() {
  return (
    <button type="button" className="ao-sound" data-sound-toggle aria-pressed="false">
      <i className="fas fa-volume-xmark" aria-hidden="true"></i>
      <span className="ao-sound-label">Tap for sound</span>
    </button>
  );
}

export default function AudioOnlyPortfolioPage() {
  return (
    <>
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
            <li><Link href="/portfolio" aria-current="page">Portfolio</Link></li>
            <li><Link href="/success/case-studies">Case Studies</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><a href="https://link.slkmediaagency.com/strmeet" className="cta-button" target="_blank" rel="noopener">Schedule a Call</a></li>
          </ul>
        </div>
      </nav>

      <main className="ao-page">
        {/* Hero */}
        <section className="portfolio-hero ao-hero">
          <div className="container">
            <p className="ao-eyebrow"><i className="fas fa-microphone-lines" aria-hidden="true"></i> Audio-only podcasts</p>
            <h1>No camera? Your podcast still gets video.</h1>
            <p className="portfolio-subtitle">
              Every clip on this page was made from a show that records audio only. We pick the moments worth sharing,
              then build the visuals, captions and branding around the audio, ready to post on LinkedIn, YouTube Shorts,
              TikTok and Instagram.
            </p>
            <p className="ao-hint"><i className="fas fa-volume-high" aria-hidden="true"></i> Clips play muted. Tap the sound button on any clip to hear it.</p>
          </div>
        </section>

        {/* Before and after */}
        <section className="ao-section" aria-labelledby="ao-ba-title">
          <div className="container">
            <div className="ao-head">
              <h2 id="ao-ba-title">Before and after</h2>
              <p>Before: what the show gave us, a cover image and an audio file. After: the clip we made from it.</p>
            </div>
            <div className="ao-grid ao-grid-ba">
              {BEFORE_AFTER.map((clip) => (
                <figure className="ao-card" key={clip.file}>
                  <div
                    className="ao-media ao-media-vertical"
                    dangerouslySetInnerHTML={{ __html: videoHtml(clip.file, `${clip.show}, before and after`) }}
                  />
                  <SoundButton />
                  <figcaption>
                    <span className="ao-show">{clip.show}</span>
                    <span className="ao-title">Before and after</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Finished clips by show */}
        <section className="ao-section ao-section-alt" aria-labelledby="ao-clips-title">
          <div className="container">
            <div className="ao-head">
              <h2 id="ao-clips-title">Finished clips from audio-only shows</h2>
              <p>The same approach across very different shows: a car podcast and a history podcast.</p>
            </div>
            {SHOWS.map((group) => (
              <div className="ao-show-group" key={group.show}>
                <h3 className="ao-group-title">{group.show}</h3>
                <div className="ao-grid ao-grid-clips">
                  {group.clips.map((clip) => (
                    <figure className="ao-card" key={clip.file}>
                      <div
                        className={`ao-media ao-media-square${clip.shape === 'vertical' ? ' ao-media-fit' : ''}`}
                        style={clip.shape === 'vertical' ? { '--ao-poster': `url(${BASE}/thumbnails/${clip.file}.jpg)` } : undefined}
                        dangerouslySetInnerHTML={{ __html: videoHtml(clip.file, `${group.show}: ${clip.title}`) }}
                      />
                      <SoundButton />
                      <figcaption>
                        <span className="ao-show">{group.show}</span>
                        <span className="ao-title">{clip.title}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}

            <div className="portfolio-cta">
              <h2>Your show records audio only?</h2>
              <p>That is all we need. Book a free strategy call and we will show you what your episodes can look like.</p>
              <a href="https://link.slkmediaagency.com/strmeet" className="primary-cta" target="_blank" rel="noopener">Book Your Strategy Call</a>
              <p className="ao-more"><Link href="/portfolio">See the full portfolio <i className="fas fa-arrow-right" aria-hidden="true"></i></Link></p>
            </div>
          </div>
        </section>
      </main>

      <ClipSoundToggles />

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
