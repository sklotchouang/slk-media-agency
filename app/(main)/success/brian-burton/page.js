import CaseStudy from '../../../../components/CaseStudy';

export const metadata = {
  title: 'Brian Burton Case Study | SLK Media Agency',
  description:
    'How a sales coach turned his podcast into a lead generation machine with 8-12 clips per episode and hundreds of views on every short.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/brian-burton' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Brian Burton Case Study | SLK Media Agency',
    description:
      'How a sales coach turned his podcast into a lead generation machine with 8-12 clips per episode and hundreds of views on every short.',
    url: '/success/brian-burton',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const data = {
  heroTitle: (
    <>How a Sales Coach Turned His Podcast into a <span className="highlight">Lead Generation Machine</span></>
  ),
  heroStats: [
    { number: '1k+', label: 'Views Per Short' },
    { number: '8-12', label: 'Clips Per Episode' },
    { number: '100%', label: 'Hands-Off' },
  ],
  heroMeta: [
    { icon: 'fab fa-youtube', text: 'Blue Collar Closer Podcast' },
    { icon: 'fas fa-briefcase', text: 'B2B Sales Training' },
    { icon: 'fas fa-users', text: 'Trade Business Owners' },
  ],
  profileHeading: 'Meet Brian Burton',
  profileIcon: 'fas fa-podcast',
  profileName: 'Blue Collar Closer',
  profileText:
    'Sales coach and consultant helping trade industry businesses build high-performing sales teams. His podcast delivers tactical sales training for HVAC, plumbing, electrical, and roofing businesses.',
  profileChipIcon: 'fab fa-youtube',
  profileChip: 'YouTube Shorts generating hundreds of views',
  profileStats: [
    { number: '1.82K', label: 'YouTube Subscribers' },
    { number: '8-12', label: 'Clips Per Episode' },
    { number: 'Target', label: 'Trade Business Owners' },
  ],
  challengeHeading: 'The Challenge Brian Was Facing',
  challengeIntro: (
    <>Brian runs a successful sales coaching business serving the trades industry. His podcast featured valuable training content that was <strong>dying after one listen</strong>. Here's what was holding him back:</>
  ),
  problems: [
    { icon: 'fas fa-ghost', title: 'Content Was Invisible', text: 'Publishing full podcast episodes to YouTube with minimal social distribution. Zero short-form content strategy for LinkedIn, Instagram, or TikTok.' },
    { icon: 'fas fa-clock', title: 'No Time to Repurpose', text: 'Running a coaching business, delivering client results, recording weekly episodes. Video editing and clipping was "on the list" but never got done.' },
    { icon: 'fas fa-user-slash', title: 'Limited Reach', text: '1.82K YouTube subscribers, solid but not growing aggressively. Content wasn\'t reaching NEW prospects in the "scroll economy" where buyers spend 90% of their time.' },
    { icon: 'fas fa-fire-alt', title: "Couldn't Compete", text: "Other sales coaches were crushing it with short-form clips on social. Brian's deep expertise was trapped in long-form content while competitors dominated discovery." },
  ],
  challengeQuote:
    '"I would say working with this team is a breath of fresh air from most of the media teams that I have worked with over the years. It tends to be a lot of promises, not a whole lot of delivery."',
  challengeQuoteAuthor: '- Brian Burton, Blue Collar Closer',
  transformHeading: 'From Invisible to Everywhere',
  before: [
    { icon: 'fas fa-ghost', text: 'Content dying after one listen' },
    { icon: 'fas fa-calendar-times', text: 'Video editing on "someday" list' },
    { icon: 'fas fa-user-slash', text: 'Missing 90% of potential audience' },
    { icon: 'fas fa-arrow-trend-down', text: 'Competitors dominating social' },
    { icon: 'fas fa-hourglass-half', text: 'No time for content repurposing' },
  ],
  after: [
    { icon: 'fas fa-rocket', text: '8-12 clips per episode going viral' },
    { icon: 'fas fa-robot', text: '100% automated clip production' },
    { icon: 'fas fa-users', text: 'Reaching ideal clients on 4+ platforms' },
    { icon: 'fas fa-trophy', text: '800+ views per short consistently' },
    { icon: 'fas fa-clock', text: 'Zero hours added to workweek' },
  ],
  solutionIntro: (
    <>We transformed Brian's podcast into a <strong>library of high-performing social clips</strong> designed to capture attention, deliver value, and drive engagement where his ideal clients scroll daily.</>
  ),
  process: [
    { icon: 'fas fa-bullseye', title: 'Automated Content Submission', text: 'Brian records his podcast episodes as usual and submits them to SLK Media. No extra work required, no change to his normal workflow.' },
    { icon: 'fas fa-video', title: 'Strategic Clip Identification', text: 'Our team watches each full episode and identifies 8-12 high-impact moments: controversial takes, actionable tactics, emotional stories, and "mic drop" moments that stop the scroll.' },
    { icon: 'fas fa-rocket', title: 'Professional Editing & Optimization', text: 'Each clip is edited with attention-grabbing captions, dynamic cuts, strategic zooms, and platform-specific formatting (vertical for Reels/Shorts, horizontal for LinkedIn).' },
    { icon: 'fas fa-sync-alt', title: 'Consistent Delivery & Support', text: "Weekly content packages delivered on schedule with ongoing communication to refine strategy. A dedicated account manager who acts as an extension of Brian's team." },
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
    src: '/video-testimonials/testimonial-brian.mp4',
    poster: '/thumbnails/Brian Burton - Blue Collar Closer.png',
    aspect: 'ar-169',
  },
  resultChip: { icon: 'fab fa-youtube', text: '1.82K Subscribers' },
  testimonialQuote:
    '"I have several teams across three different businesses and I consider you one of the \'A-Players\' on the teams that I would like to make sure we do business with for a long time. The quality of the short reels created out of full episodes has been surprising. And also the communication, definitely the support, the communication, and professionalism."',
  person: { initials: 'BB', name: 'Brian Burton', role: 'Founder, Blue Collar Closer' },
  resultsHeading: 'Results That Speak for Themselves',
  results: [
    { icon: 'fas fa-expand-arrows-alt', title: 'Time Reclaimed', text: (<>SLK Media handles <strong>100% of video editing</strong> and distribution strategy. Brian can focus on coaching clients and recording content, not becoming a video editor.</>) },
    { icon: 'fas fa-clock', title: 'Consistent Social Presence', text: (<><strong>8-12 high-quality clips</strong> per episode, published across multiple platforms. Brian's content now appears where his ideal clients are actively scrolling.</>) },
    { icon: 'fas fa-chart-bar', title: 'Increased Visibility', text: (<>YouTube Shorts generating <strong>hundreds to thousands of views</strong> each. "PRICE WAS NEVER THE OBJECTION" hit 802 views, "OUTSELL THE CHEAP COMPETITOR!" reached 812 views.</>) },
    { icon: 'fas fa-fire', title: 'No Upsells, Just Results', text: (<>"I've never been asked to invest in a bigger package. I've never been asked for another dollar. It's just been <strong>work, work, work, work</strong>."</>) },
    { icon: 'fas fa-users', title: 'Data-Driven Strategy', text: 'Weekly check-ins to review performance, data-driven insights on which clips perform best, and strategic recommendations for content optimization.' },
    { icon: 'fas fa-handshake', title: 'Lead Generation Machine', text: "Every clip is a lead magnet. When prospects see Brian's expertise in a 60-second clip, they seek out his full episodes and coaching services." },
  ],
  resultsHighlightTitle: 'The Bottom Line',
  resultsHighlightText: (
    <>Brian went from <strong>invisible on social media</strong> to building a <strong>sustainable lead generation system</strong> that compounds over time, with zero extra work on his end.</>
  ),
  whyHeading: 'Why This Strategy Works',
  why: [
    { title: 'Trust in Expertise', text: "Brian let SLK Media's team handle what they do best (video editing and strategy), so he could focus on what he does best (coaching and content creation)." },
    { title: 'Consistent Communication', text: 'Weekly check-ins ensured alignment on goals, performance, and content direction. No surprise fees, no bait-and-switch, no over-promising.' },
    { title: 'Accountability & Metrics', text: 'Unlike most podcasters who "just look once a month to see if downloads are up or down," Brian has weekly data-driven insights and optimization recommendations.' },
    { title: 'Long-Term Mindset', text: 'This isn\'t a "quick win" strategy. Brian invested in building a sustainable content machine where every clip lives forever and continues generating leads.' },
  ],
  showcase: {
    heading: '3 Clips That Became Lead Magnets',
    text: 'These clips consistently generate thousands of views and attract high-quality sales leads. Watch how we transform podcast moments into client acquisition tools.',
    clips: [
      { src: '/success/Top performing content/brian 1.mp4', poster: '/success/Top performing content/thumbnails/brian 1.png', label: 'Brian Burton top performing clip 1' },
      { src: '/success/Top performing content/brian 2.mp4', poster: '/success/Top performing content/thumbnails/brian 2.png', label: 'Brian Burton top performing clip 2' },
      { src: '/success/Top performing content/brian 3.mp4', poster: '/success/Top performing content/thumbnails/brian 3.png', label: 'Brian Burton top performing clip 3' },
    ],
  },
};

export default function BrianBurtonCaseStudy() {
  return <CaseStudy data={data} />;
}
