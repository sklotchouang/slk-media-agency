import Link from 'next/link';
import HeroAtmosphere from '../../components/HeroAtmosphere';
import ClipChecklist from '../../components/ClipChecklist';
import ClipCostCalculator from '../../components/ClipCostCalculator';

export const metadata = {
  title: 'Done-for-You Podcast Clips, Posted and Reported | SLK Media Agency',
  description:
    'Your episodes already hold a month of content. SLK Media Agency picks the best moments, edits them into short clips, posts them on LinkedIn, YouTube, Instagram, TikTok and Facebook, and reports on how each one did.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Done-for-You Podcast Clips, Posted and Reported | SLK Media Agency',
    description:
      'Your episodes already hold a month of content. We cut it, post it and report on it. You record the show. We handle everything after.',
    url: '/',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Done-for-You Podcast Clips, Posted and Reported | SLK Media Agency',
    description:
      'Your episodes already hold a month of content. We cut it, post it and report on it.',
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

const STRMEET = 'https://link.slkmediaagency.com/strmeet';

// Vertical client clips from public/portfolio, all 9:16.
const WALL = [
  { src: '/portfolio/Clip-4.mp4', poster: '/portfolio/thumbnails/Clip-4.jpg' },
  { src: '/portfolio/Clip-5.mp4', poster: '/portfolio/thumbnails/Clip-5.jpg' },
  { src: '/portfolio/Clip-6.mp4', poster: '/portfolio/thumbnails/Clip-6.jpg' },
  { src: '/portfolio/Brian-Before-After.mp4', poster: '/portfolio/thumbnails/Brian-Before-After.jpg' },
  { src: '/portfolio/Steve-Before-After.mp4', poster: '/portfolio/thumbnails/Steve-Before-After.jpg' },
  { src: '/portfolio/Clip-1.mp4', poster: '/portfolio/thumbnails/Clip-1.jpg' },
  { src: '/portfolio/Clip-2.mp4', poster: '/portfolio/thumbnails/Clip-2.jpg' },
  { src: '/portfolio/Clip-3.mp4', poster: '/portfolio/thumbnails/Clip-3.jpg' },
];

// React drops the `muted` attribute in server HTML, which blocks autoplay, so
// muted looping clips are written as raw HTML (same approach as the rest of
// the site). data-autoplay lets SiteBehaviors play them only while on screen.
function Clip({ src, poster, label, className }) {
  const aria = label ? ` aria-label="${label}"` : ' aria-hidden="true"';
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<video muted loop playsinline preload="none" poster="${poster}" data-autoplay${aria}><source src="${src}" type="video/mp4"></video>`,
      }}
    />
  );
}

const FAQ = [
  ['How many clips do I get?', 'It depends on how often you publish and what you want the clips to do. We agree it with you on the strategy call, and you can change it later. We pick the strongest moments from every episode you send.'],
  ['How fast do the first clips arrive?', '3 to 5 business days after onboarding. After that, on the schedule we agree with you.'],
  ['Which platforms do you post on?', "LinkedIn, YouTube Shorts, Instagram, TikTok, Facebook and X. If you're not sure where to focus, we recommend based on your niche."],
  ['Do you guarantee views, downloads or sponsors?', "No. We control the clips and the posting. We don't control how each platform shows them. We commit to the work, on time, with a report you can check."],
  ['Can I get a discount if I prepay?', 'Yes. 10% off when you prepay 3 months or more, on our normal prices. It does not combine with a promotion.'],
  ['Who owns the clips?', 'You do, all of them, forever, including if you leave.'],
  ['Is my content kept confidential?', 'Yes. We sign an NDA with every client and never share your files or plans without permission.'],
  ['Can I cancel or pause?', "Month to month. Give 14 days' notice to cancel, or pause for up to 60 days."],
  ['Do you find sponsors for me?', 'No. We make and post the content. The report gives you real numbers to show sponsors yourself.'],
];

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
            <li><a href={STRMEET} className="cta-button" target="_blank" rel="noopener">Book Strategy Call</a></li>
          </ul>
        </div>
      </nav>
      <main id="main" className="home-v3">

      {/* Hero */}
      <section className="hero hp-hero">
        <HeroAtmosphere />
        <div className="container">
          <div className="hp-hero-grid">
            <div className="hp-hero-copy">
              <p className="hp-kicker">Done-for-you clips for podcasts that publish every month</p>
              <h1 className="hp-headline">Your episodes already hold a month of content. <span className="hp-shine">We cut it, post it and report on it.</span></h1>
              <p className="hp-sub">We pick the moments that show what you know, edit them with captions and a custom thumbnail, post them on LinkedIn, YouTube, Instagram, TikTok and Facebook, and send you a report on how each one did. You record the show. We handle everything after.</p>
              <div className="hp-cta-row">
                <a href={STRMEET} className="primary-cta hp-btn-shine" target="_blank" rel="noopener">Book a strategy call</a>
                <Link href="/portfolio" className="secondary-cta">See clips we&apos;ve made</Link>
              </div>
              <div className="hp-chips">
                <span className="hp-chip"><i className="hp-live" aria-hidden="true"></i>First clips 3 to 5 business days after onboarding</span>
                <span className="hp-chip">Month to month</span>
                <span className="hp-chip">You own every clip</span>
              </div>
            </div>
            <div className="hp-stage" aria-label="Client clips playing on phones">
              <div className="hp-phone hp-phone-b"><Clip className="hp-phone-in" src="/portfolio/Clip-2.mp4" poster="/portfolio/thumbnails/Clip-2.jpg" /></div>
              <div className="hp-phone hp-phone-c"><Clip className="hp-phone-in" src="/portfolio/Clip-3.mp4" poster="/portfolio/thumbnails/Clip-3.jpg" /></div>
              <div className="hp-phone hp-phone-a"><Clip className="hp-phone-in" src="/portfolio/Clip-1.mp4" poster="/portfolio/thumbnails/Clip-1.jpg" label="Client clip, edited by SLK Media Agency" /></div>
              <div className="hp-toast hp-toast-1"><i aria-hidden="true">▶</i>New clip posted to TikTok</div>
              <div className="hp-toast hp-toast-2"><i aria-hidden="true">✓</i>Weekly report ready</div>
              <div className="hp-toast hp-toast-3"><i aria-hidden="true">✎</i>Captions and thumbnail done</div>
            </div>
          </div>
          <div className="hp-marquee" aria-label="Wall of client clips">
            <div className="hp-track">
              {WALL.map((clip) => <Clip key={clip.src} className="hp-tile" src={clip.src} poster={clip.poster} />)}
              {WALL.map((clip) => <Clip key={`${clip.src}-2`} className="hp-tile" src={clip.src} poster={clip.poster} />)}
            </div>
          </div>
          <p className="hp-shows">Shows we work with: Conjure Queen Podcast (100K+ YouTube subscribers), Corvette Today (599+ episodes), Waste No Day Podcast, RWS Group, SalesFix.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="hp-section hp-pain" id="services">
        <div className="container">
          <p className="hp-kicker">Where the time goes now</p>
          <h2 className="section-title">Your best minute of every episode is sitting unseen inside the full recording.</h2>
          <div className="hp-pain-grid">
            <div className="hp-stack">
              <div className="hp-card"><h3>New people never hear it</h3><p>A full episode reaches people who already follow you. Someone scrolling LinkedIn or TikTok will watch 60 seconds, not 50 minutes.</p></div>
              <div className="hp-card"><h3>So posting stops and starts</h3><p>A good week of clips, then nothing while the next episode gets made. People who don&apos;t see you often forget the show.</p></div>
              <div className="hp-card"><h3>AI tools only do the first cut</h3><p>They pick the loud moments, not the useful ones. You still check, fix, caption and post every clip yourself.</p></div>
            </div>
            <ClipChecklist />
          </div>
          <ClipCostCalculator />
        </div>
      </section>

      {/* How it works */}
      <section className="hp-section hp-how" id="process">
        <div className="container">
          <p className="hp-kicker">The Podcast Multiplier™</p>
          <h2 className="section-title">One team does every step after you stop recording.</h2>
          <div className="hp-how-grid">
            <ol className="hp-steps">
              <li><div><h3>We plan before the first clip</h3><p>We study your niche and what similar shows post, then write you a strategy document: which moments to clip, which platforms, how often.</p></div></li>
              <li><div><h3>You upload the episode</h3><p>That is the last thing you do. No editor, no scheduler, no captions to write.</p></div></li>
              <li><div><h3>We pick and edit the clips</h3><p>Moments that show your expertise, hold one complete idea, and give a viewer a reason to hear the full episode. Each gets captions, a hook and a custom thumbnail.</p></div></li>
              <li><div><h3>We post on every platform</h3><p>Captions, hashtags and a call to action for each clip, posted on the schedule we agree with you.</p></div></li>
              <li><div><h3>You get a report</h3><p>Which clips got the most views and engagement, which platforms did best, and what we post next.</p></div></li>
            </ol>
            <figure className="hp-ba">
              <Clip className="hp-ba-frame" src="/portfolio/Steve-Before-After.mp4" poster="/portfolio/thumbnails/Steve-Before-After.jpg" label="Before and after edit, Corvette Today" />
              <figcaption><span>Raw episode</span><span>Finished clip</span></figcaption>
              <p className="hp-note">Corvette Today, Steve Garrett</p>
            </figure>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="hp-section hp-benefits">
        <div className="container">
          <p className="hp-kicker">What changes for you</p>
          <h2 className="section-title">You keep the show. We take the work around it.</h2>
          <div className="features hp-benefit-grid">
            <div className="hp-card hp-benefit"><span className="hp-ico" aria-hidden="true">⏱</span><h3>Your clipping hours come back</h3><p>Editing, captions, thumbnails and scheduling leave your week. What is left is recording the show and a short check-in call.</p></div>
            <div className="hp-card hp-benefit"><span className="hp-ico" aria-hidden="true">↻</span><h3>You show up every week</h3><p>Clips go out on schedule on every platform you use, including the weeks you don&apos;t record.</p></div>
            <div className="hp-card hp-benefit"><span className="hp-ico" aria-hidden="true">◎</span><h3>The right people find you</h3><p>Clips are picked for your goal: new listeners for the show, or future clients for your business.</p></div>
            <div className="hp-card hp-benefit"><span className="hp-ico" aria-hidden="true">▤</span><h3>You see what works</h3><p>Real view and engagement numbers you can share with guests or sponsors.</p></div>
            <div className="hp-card hp-benefit"><span className="hp-ico" aria-hidden="true">⇄</span><h3>No lock-in</h3><p>Month to month, pause for up to 60 days, and every clip is yours to keep if you leave.</p></div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="hp-section hp-included">
        <div className="container">
          <p className="hp-kicker">What you get</p>
          <h2 className="section-title">Everything after the recording, done for you.</h2>
          <div className="hp-feat-grid">
            <ul className="hp-incl">
              <li>Short clips from every episode you send</li>
              <li>A custom thumbnail for every clip</li>
              <li>Captions, hashtags and a call to action for every clip</li>
              <li>Every clip posted on every platform</li>
              <li>A dedicated project manager</li>
              <li>Regular calls and performance reports</li>
              <li>A strategy document before the first clip</li>
              <li>Full episode edits if you want them</li>
            </ul>
            <div className="hp-report" aria-label="Example report layout">
              <div className="hp-report-head"><strong>Weekly report</strong><span>Views per clip</span></div>
              <div className="hp-bars" aria-hidden="true">
                <span style={{ height: '38%' }}></span><span style={{ height: '52%' }}></span><span style={{ height: '44%' }}></span><span style={{ height: '71%' }}></span><span style={{ height: '63%' }}></span><span style={{ height: '92%' }}></span><span style={{ height: '80%' }}></span>
              </div>
              <p className="hp-note">Example layout, not client data</p>
            </div>
          </div>
          <p className="hp-note hp-platforms">Platforms: LinkedIn, YouTube Shorts, Instagram, TikTok, Facebook and X.</p>
        </div>
      </section>

      {/* Case Studies Showcase (cards unchanged from the previous home page) */}
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

      {/* Testimonials */}
      <section className="testimonials hp-quotes">
        <div className="container">
          <div className="hp-quote-grid">
            <figure className="hp-card"><blockquote>&ldquo;I have several teams across three different businesses and I consider you one of the &lsquo;A-Players&rsquo; on the teams I want to do business with for a long time. The quality of the short reels has been surprising, and the communication, support, and professionalism.&rdquo;</blockquote><figcaption>Brian Burton, Waste No Day Podcast</figcaption></figure>
            <figure className="hp-card"><blockquote>&ldquo;I&apos;ve been really amazed at the quality of the content they produce. Since launch we&apos;ve consistently grown our audience ahead of expectations, and we&apos;re driving really good metrics in reactions and engagement.&rdquo;</blockquote><figcaption>David Hetling, Marketing Director, RWS Group</figcaption></figure>
            <figure className="hp-card"><blockquote>&ldquo;Working with SLK Media has been an amazing experience. As someone juggling multiple platforms, they took a huge burden off my shoulders and freed up my time. The process became easier and the content quality improved.&rdquo;</blockquote><figcaption>Shatavia Green, Conjure Queen Podcast</figcaption></figure>
          </div>
          <div className="video-testimonials">
            <h3 className="video-testimonials-title">Hear It From Them</h3>
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

      {/* Objections */}
      <section className="hp-section hp-objections">
        <div className="container">
          <p className="hp-kicker">What podcasters ask us before they sign</p>
          <h2 className="section-title">Before you decide</h2>
          <div className="features hp-obj-grid">
            <div className="hp-card"><h3>&ldquo;OpusClip does this for $30.&rdquo;</h3><p>It makes a first cut. You still choose, fix, caption and post every clip. If a monthly budget isn&apos;t realistic yet, use it. We&apos;ll tell you that on the call.</p></div>
            <div className="hp-card"><h3>&ldquo;A freelancer is cheaper.&rdquo;</h3><p>A freelancer edits what you send and waits for your notes. We own the plan, the posting and the report, so there is nobody for you to manage.</p></div>
            <div className="hp-card"><h3>&ldquo;What if it doesn&apos;t work?&rdquo;</h3><p>You see every clip&apos;s numbers, so you judge us on data. Month to month: cancel with 14 days&apos; notice, or pause up to 60 days.</p></div>
            <div className="hp-card"><h3>&ldquo;I don&apos;t have time for another vendor.&rdquo;</h3><p>Your part is uploading episodes and a short check-in call. We handle the rest.</p></div>
            <div className="hp-card"><h3>&ldquo;My niche is too specific.&rdquo;</h3><p>We&apos;ve made clips for a Corvette show, a spiritual coaching podcast, B2B sales training and a biotech institute. New niches get researched during onboarding.</p></div>
            <div className="hp-card"><h3>&ldquo;I only publish once a month.&rdquo;</h3><p>That works. We plan the clips around how often you publish, and agree it with you on the call.</p></div>
          </div>
        </div>
      </section>

      {/* Offer: terms only, no packages, no prices, no clip counts */}
      <section className="hp-section hp-offer">
        <div className="container">
          <p className="hp-kicker">The offer</p>
          <h2 className="section-title">Your own clip team, on terms that don&apos;t tie you down.</h2>
          <p className="hp-sub hp-center">On the call we look at how often you publish and what you want the podcast to do, then agree a plan that fits your show.</p>
          <div className="features hp-terms">
            <div className="hp-card"><span className="hp-ico" aria-hidden="true">↻</span><h3>Month to month</h3><p>No long contract. Cancel with 14 days&apos; notice.</p></div>
            <div className="hp-card"><span className="hp-ico" aria-hidden="true">II</span><h3>Pause up to 60 days</h3><p>Taking a break from recording? Pause instead of cancelling.</p></div>
            <div className="hp-card"><span className="hp-ico" aria-hidden="true">✓</span><h3>You own every clip</h3><p>Everything we make is yours to keep, including if you leave.</p></div>
            <div className="hp-card"><span className="hp-ico" aria-hidden="true">⚡</span><h3>First clips in 3 to 5 days</h3><p>Business days after onboarding.</p></div>
          </div>
          <div className="hp-prepay"><span className="hp-pct">10% off</span><p>Prepay 3 months or more and save 10% on our normal prices.</p></div>
          <div className="cta-center">
            <a href={STRMEET} className="primary-cta hp-btn-shine" target="_blank" rel="noopener">Book a strategy call</a>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="hp-section hp-fit">
        <div className="container">
          <h2 className="section-title">Is this right for your show?</h2>
          <div className="hp-fit-grid">
            <div className="hp-card hp-fit-yes"><h3>A good fit if</h3><ul><li>You publish regularly and plan to keep going</li><li>You want the podcast to bring in listeners or clients</li><li>You have a monthly budget for content</li></ul></div>
            <div className="hp-card hp-fit-no"><h3>Not a fit yet if</h3><ul><li>The show is a hobby or a test</li><li>You want guaranteed views or sponsors</li></ul></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="accordion">
            {FAQ.map(([q, a]) => (
              <div className="accordion-item" key={q}>
                <div className="accordion-header">
                  <h3>{q}</h3>
                  <span className="accordion-icon"><i className="fas fa-plus"></i></span>
                </div>
                <div className="accordion-content"><p>{a}</p></div>
              </div>
            ))}
            <div className="accordion-item">
              <div className="accordion-header">
                <h3>Can I see your work first?</h3>
                <span className="accordion-icon"><i className="fas fa-plus"></i></span>
              </div>
              <div className="accordion-content">
                <p>Yes, on the <Link href="/portfolio">portfolio page</Link>. Ask on the call and we&apos;ll pull examples from your niche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="footer-cta hp-final" id="contact">
        <div className="container">
          <div className="hp-final-grid">
            <div className="hp-final-copy">
              <h2 className="hp-headline">You record once. <span className="hp-shine">We handle everything after.</span></h2>
              <p className="hp-sub">Book a strategy call with Samuel LK, our founder. He looks at your show, tells you which plan fits or whether a cheaper tool makes more sense for now, and answers every question. If we&apos;re not the right fit, he&apos;ll say so.</p>
              <div className="hp-cta-row"><a href={STRMEET} className="primary-cta hp-btn-shine" target="_blank" rel="noopener">Book a strategy call</a></div>
            </div>
            <div className="hp-mini-wall" aria-hidden="true">
              <Clip className="hp-mini" src="/portfolio/Clip-5.mp4" poster="/portfolio/thumbnails/Clip-5.jpg" />
              <Clip className="hp-mini" src="/portfolio/Brian-Before-After.mp4" poster="/portfolio/thumbnails/Brian-Before-After.jpg" />
              <Clip className="hp-mini" src="/portfolio/Clip-6.mp4" poster="/portfolio/thumbnails/Clip-6.jpg" />
            </div>
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

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <div className="container">
          <p>Month to month. First clips 3 to 5 business days after onboarding.</p>
          <a href={STRMEET} className="primary-cta" target="_blank" rel="noopener">Book a strategy call</a>
        </div>
      </div>
    </>
  );
}
