import CaseStudy from '../../../../components/CaseStudy';

export const metadata = {
  title: 'Conjure Queen Case Study | SLK Media Agency',
  description:
    'From overwhelmed to omnipresent: How we helped a spiritual guide reclaim her energy, double engagement, and hit 100K+ subscribers without editing a single clip.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/conjure-queen' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Conjure Queen Case Study | SLK Media Agency',
    description:
      'From overwhelmed to omnipresent: How we helped a spiritual guide reclaim her energy, double engagement, and hit 100K+ subscribers without editing a single clip.',
    url: '/success/conjure-queen',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const data = {
  heroTitle: (
    <>From Overwhelmed to <span className="highlight">Omnipresent</span></>
  ),
  heroSubtitle:
    'How The Podcast Multiplier Helped Conjure Queen Expand Her Audience, Increase Engagement & Reclaim Her Energy Without Editing a Single Clip',
  heroStats: [
    { number: '100K+', label: 'YouTube Subscribers' },
    { number: '2x', label: 'Engagement Growth' },
    { number: '100%', label: 'Energy Reclaimed' },
  ],
  heroMeta: [
    { icon: 'fab fa-youtube', text: 'Conjure Queen Podcast' },
    { icon: 'fas fa-star', text: 'Spiritual Empowerment' },
    { icon: 'fas fa-users', text: '100K+ Subscribers' },
  ],
  profileHeading: 'Meet Shatavia Green',
  profileIcon: 'fas fa-podcast',
  profileName: 'Conjure Queen',
  profileText:
    'Sought-after spiritual guide and thought leader helping her audience tap into their inner power and reclaim their divine path. Her podcast is powerful, raw, and deeply transformational.',
  profileChipIcon: 'fab fa-youtube',
  profileChip: '100K+ YouTube Subscribers',
  profileStats: [
    { number: '100K+', label: 'YouTube Subscribers' },
    { number: 'Silver', label: 'Play Button Earned' },
    { number: 'Booked', label: 'Coaching Calendar' },
  ],
  challengeHeading: 'The Challenge Shatavia Was Facing',
  challengeIntro: (
    <>Shatavia's podcast is powerful and transformational, but despite the value she delivered, her content wasn't reaching the people who needed it most. She was juggling it all: <strong>recording, editing, clipping, and trying to post consistently</strong>. Here's what was holding her back:</>
  ),
  problems: [
    { icon: 'fas fa-user-ninja', title: 'Too Many Hats', text: 'She was recording, editing, clipping, and posting all on her own. The energy drain from post-production was starting to impact her creativity.' },
    { icon: 'fas fa-arrow-trend-down', title: 'Inconsistent Engagement', text: 'Some clips took off, others fell flat, with no strategy behind what worked. Inconsistent reach meant her powerful message stayed hidden.' },
    { icon: 'fas fa-battery-quarter', title: 'Mental Fatigue', text: 'Constant burnout from trying to manage everything herself. The hustle was draining her spiritual energy and taking time away from her mission.' },
    { icon: 'fas fa-calendar-times', title: 'No Time for Strategy', text: "Her schedule left little room for optimizing content or growing the show. She knew her podcast had the power to reach thousands but didn't have the time or support to make it happen." },
  ],
  challengeQuote:
    '"I knew I needed to be creating clips and getting on social media, but between recording, editing, and managing the show... I had no time left for my actual mission: helping people reclaim their divine power."',
  challengeQuoteAuthor: '- The reality Shatavia faced daily',
  transformHeading: 'From Overwhelmed to Omnipresent',
  before: [
    { icon: 'fas fa-ghost', text: 'Doing everything herself (recording, editing, posting)' },
    { icon: 'fas fa-calendar-times', text: 'Inconsistent engagement with no clear strategy' },
    { icon: 'fas fa-user-slash', text: 'Mental fatigue impacting creativity' },
    { icon: 'fas fa-arrow-trend-down', text: 'Powerful content not reaching those who needed it' },
    { icon: 'fas fa-hourglass-half', text: 'No time for strategy or growth' },
  ],
  after: [
    { icon: 'fas fa-rocket', text: '100% done-for-you content creation' },
    { icon: 'fas fa-robot', text: 'Audience engagement doubled across platforms' },
    { icon: 'fas fa-users', text: '100K+ YouTube subscribers (Silver Play Button)' },
    { icon: 'fas fa-trophy', text: 'Fully booked coaching calendar' },
    { icon: 'fas fa-clock', text: 'Energy reclaimed to focus on her mission' },
  ],
  solutionIntro: (
    <>We implemented our <strong>Podcast Multiplier Method™</strong> to help Shatavia turn every episode into a stream of high-performing short-form videos, done completely for her with zero effort required on her end.</>
  ),
  process: [
    { icon: 'fas fa-bullseye', title: 'Extract the Gold', text: "We reviewed each episode to pull out Shatavia's most powerful, shareable moments - the kind of spiritual gems that stop the scroll and resonate deeply." },
    { icon: 'fas fa-video', title: 'Edit for Engagement', text: 'Using platform-specific strategies, we turned each moment into a clip that hooks fast, holds attention, and highlights her voice, captions, and brand identity.' },
    { icon: 'fas fa-rocket', title: 'Deliver & Repeat', text: 'Each week, she received ready-to-post video clips for TikTok, Reels, and YouTube Shorts, delivered via Google Drive with zero effort required on her end.' },
    { icon: 'fas fa-sync-alt', title: 'Ongoing Optimization', text: 'We transformed her content from time-consuming chaos into a well-oiled, high-impact machine that runs on autopilot while she focuses on her mission.' },
  ],
  deliverablesTag: 'WHAT YOU GET',
  deliverablesHeading: 'Specific Deliverables Every Week',
  deliverables: [
    { icon: 'fas fa-video', title: '8-12 Pro-Edited Clips', text: 'Every episode transformed into scroll-stopping shorts optimized for engagement and reach.' },
    { icon: 'fas fa-text-height', title: 'Attention-Grabbing Captions', text: 'Every clip includes professional captions so your content works with sound off.' },
    { icon: 'fas fa-mobile-alt', title: 'Platform-Specific Formats', text: 'Vertical for Reels/Shorts/TikTok. Horizontal for LinkedIn. Perfectly formatted for each platform.' },
    { icon: 'fas fa-chart-line', title: 'Weekly Performance Reports', text: 'Data-driven insights showing which clips perform best and strategic recommendations for optimization.' },
    { icon: 'fas fa-user-tie', title: 'Dedicated Account Manager', text: "Your own point of contact who treats your content like it's theirs and responds fast." },
    { icon: 'fas fa-infinity', title: 'Unlimited Revisions', text: "Not happy with a clip? We'll re-edit it. Your satisfaction is our priority." },
  ],
  deliverablesHighlight: (
    <><strong>100% Hands-Off:</strong> You record your podcast like always. We handle everything else. No upsells, no surprise fees, just consistent quality work.</>
  ),
  video: {
    src: '/video-testimonials/testimonial-shatavia.mp4',
    poster: '/thumbnails/Shatavia Green - Conjure Queen.png',
    aspect: 'ar-11',
  },
  resultChip: { icon: 'fab fa-youtube', text: '100K+ Subscribers' },
  testimonialQuote:
    '"Working with SLK Media has been a game-changer! They\'ve taken a huge burden off my shoulders, freeing up my time to focus on what truly matters. As a busy content creator managing multiple platforms, SLK Media made my life so much easier. Their team is reliable, and the quality of their content is top-notch!"',
  person: { initials: 'SG', name: 'Shatavia Green', role: 'Host, Conjure Queen Podcast' },
  resultsHeading: 'Results That Speak for Themselves',
  results: [
    { icon: 'fas fa-expand-arrows-alt', title: 'Audience Engagement Doubled', text: (<>Her clips began generating <strong>regular views and shares</strong> across platforms, increasing her podcast's visibility and spiritual reach dramatically.</>) },
    { icon: 'fas fa-clock', title: '100K+ YouTube Subscribers', text: (<>Earned the coveted <strong>YouTube Silver Play Button</strong>. Short-form content drove new listeners to her full episodes, growing her listenership exponentially.</>) },
    { icon: 'fas fa-chart-bar', title: 'Fully Booked Coaching Calendar', text: (<>She had so many inquiries that she had to <strong>pause her marketing campaign</strong> in March 2025. Her content now does the lead generation for her.</>) },
    { icon: 'fas fa-fire', title: 'More Leads for Her Offers', text: (<>With increased attention came more inquiries. Her content now <strong>warms up potential clients</strong> for her spiritual coaching services automatically.</>) },
    { icon: 'fas fa-users', title: 'Podcast Visibility Improved', text: (<>Short-form content acts as <strong>discovery tools</strong>, introducing Conjure Queen to people who've never heard of her, then converting them to listeners.</>) },
    { icon: 'fas fa-handshake', title: 'Time & Energy Reclaimed', text: (<>Shatavia no longer had to worry about editing or social media. She focused entirely on <strong>her message and her mission</strong>, where her energy belongs.</>) },
  ],
  resultsHighlightTitle: 'The Bottom Line',
  resultsHighlightText: (
    <>Shatavia went from <strong>overwhelmed and burned out</strong> to <strong>omnipresent and fully booked</strong>, with her content working for her 24/7 while she focuses on transforming lives.</>
  ),
  whyHeading: 'Why This Strategy Works',
  why: [
    { title: 'Done-For-You System', text: "Shatavia didn't have to learn editing software or content strategy. She simply recorded her episodes and we handled everything else from start to finish." },
    { title: 'Platform-Specific Strategy', text: "We didn't just chop up videos. Each clip was crafted for the specific platform (TikTok, Reels, Shorts) with hooks, captions, and pacing optimized for maximum engagement." },
    { title: 'Spiritual Storytelling Expertise', text: 'We understand transformational content and know what resonates with spiritual communities. We extracted the moments that inspire, empower, and convert.' },
    { title: 'Energy Protection', text: "By removing the editing burden, we protected Shatavia's creative energy. She could focus on channeling her spiritual gifts instead of wrestling with CapCut at midnight." },
  ],
  showcase: {
    heading: '3 Clips That Changed Everything',
    text: "See the exact type of content that's driving results for Shatavia. These clips consistently deliver 10K+ views and high engagement.",
    clips: [
      { src: '/success/Top performing content/conjure queen 1.mp4', label: 'Conjure Queen top performing clip 1' },
      { src: '/success/Top performing content/conjure queen 2.mp4', label: 'Conjure Queen top performing clip 2' },
      { src: '/success/Top performing content/conjure queen 3.mp4', label: 'Conjure Queen top performing clip 3' },
    ],
  },
};

export default function ConjureQueenCaseStudy() {
  return <CaseStudy data={data} />;
}
