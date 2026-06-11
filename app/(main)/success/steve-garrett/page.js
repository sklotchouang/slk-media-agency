import CaseStudy from '../../../../components/CaseStudy';

export const metadata = {
  title: 'Steve Garrett Case Study | SLK Media Agency',
  description:
    'How a niche automotive podcaster scaled his reach across 4+ platforms without adding a single hour to his workweek.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/steve-garrett' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Steve Garrett Case Study | SLK Media Agency',
    description:
      'How a niche automotive podcaster scaled his reach across 4+ platforms without adding a single hour to his workweek.',
    url: '/success/steve-garrett',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const data = {
  heroTitle: (
    <>How a Niche Automotive Podcaster Scaled His Reach <span className="highlight">Without Adding Work</span> to His Plate</>
  ),
  heroStats: [
    { number: '4+', label: 'Platforms Reached' },
    { number: '0', label: 'Extra Hours/Week' },
    { number: '599+', label: 'Episodes' },
  ],
  heroMeta: [
    { icon: 'fab fa-youtube', text: 'Corvette Today Podcast' },
    { icon: 'fas fa-microphone', text: 'Automotive Enthusiasts' },
    { icon: 'fas fa-users', text: '11.9K Subscribers' },
  ],
  profileHeading: 'Meet Steve Garrett',
  profileIcon: 'fas fa-podcast',
  profileName: 'Corvette Today - The Podcast',
  profileText:
    'One of the most respected voices in the Corvette community, delivering expert insights to enthusiasts, collectors, and automotive historians.',
  profileChipIcon: 'fab fa-youtube',
  profileChip: '11.9K YouTube Subscribers',
  profileStats: [
    { number: '11.9K', label: 'YouTube Subscribers' },
    { number: '599+', label: 'Episodes Published' },
    { number: 'Target', label: 'Corvette Enthusiasts' },
  ],
  challengeHeading: 'The Challenge Steve Was Facing',
  challengeIntro: (
    <>Steve had built serious credibility with <strong>599+ episodes</strong> and <strong>11.9K subscribers</strong>, but like most successful podcasters, he faced a critical bottleneck:</>
  ),
  problems: [
    { icon: 'fas fa-hourglass-half', title: 'Forever on the To-Do List', text: 'Video content repurposing was important, but Steve never had time to actually do it. The content stayed trapped in long-form episodes.' },
    { icon: 'fas fa-search', title: 'Hidden Gold', text: 'Hours of expert insights, guest interviews, and valuable stories were buried in full episodes, never reaching new audiences who prefer short-form content.' },
    { icon: 'fas fa-chart-line', title: 'Growth Plateau', text: "Without clips on platforms like LinkedIn, Instagram, and TikTok, Steve's reach was limited. No social proof, no viral moments, no algorithm momentum." },
    { icon: 'fas fa-hand-holding-usd', title: 'Missed Revenue', text: 'Less exposure meant fewer sponsorship opportunities and slower monetization growth in a competitive niche.' },
  ],
  challengeQuote:
    '"I knew I needed to be creating clips and getting on social media, but between recording, editing, and managing the show... it just never happened."',
  challengeQuoteAuthor: '- The reality for most podcasters',
  transformHeading: 'From Plateau to Multi-Platform Domination',
  before: [
    { icon: 'fas fa-box', text: 'Content trapped in long-form' },
    { icon: 'fas fa-hourglass-half', text: 'Video repurposing never happened' },
    { icon: 'fas fa-arrow-trend-down', text: 'Growth plateau, same audience' },
    { icon: 'fas fa-eye-slash', text: 'No social media presence' },
    { icon: 'fas fa-money-bill-wave', text: 'Leaving money on the table' },
  ],
  after: [
    { icon: 'fas fa-expand-arrows-alt', text: 'Content on 4+ platforms' },
    { icon: 'fas fa-magic', text: 'Fully automated repurposing' },
    { icon: 'fas fa-arrow-trend-up', text: 'New audience discovery daily' },
    { icon: 'fas fa-fire', text: 'Clips generating viral moments' },
    { icon: 'fas fa-clock', text: 'Zero extra hours per week' },
  ],
  solutionIntro: (
    <>We didn't just repurpose Steve's content. We turned his podcast into a <strong>multi-platform content engine</strong> with zero extra work on his end.</>
  ),
  process: [
    { icon: 'fas fa-bullseye', title: 'Strategic Content Analysis', text: "We analyzed Steve's episodes to identify the most engaging moments: emotional stories, expert insights, controversial takes, and viral-worthy soundbites." },
    { icon: 'fas fa-video', title: 'Professional Clip Creation', text: 'Each clip was edited with platform-specific formatting, captions, hooks, and visual elements optimized for LinkedIn, YouTube Shorts, Instagram Reels, and TikTok.' },
    { icon: 'fas fa-rocket', title: 'Multi-Platform Distribution', text: 'We handled everything (scheduling, posting, optimization). Steve just kept doing what he does best: creating amazing podcast content.' },
    { icon: 'fas fa-sync-alt', title: 'Ongoing Optimization', text: 'Continuous performance tracking and content refinement to maximize reach, engagement, and audience growth.' },
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
    src: '/video-testimonials/testimonial-steve.mp4',
    poster: '/thumbnails/Steve Garrett - Corvette Today.png',
    aspect: 'ar-169',
  },
  resultChip: { icon: 'fab fa-youtube', text: '11.9K Subscribers' },
  testimonialQuote:
    '"Working with SLK Media Agency has been a game-changer for my podcast. They handle all the clip creation and distribution while I focus on what I do best: creating great content. The reach we\'ve gained across multiple platforms is incredible."',
  person: { initials: 'SG', name: 'Steve Garrett', role: 'Host, Corvette Today Podcast' },
  resultsHeading: 'Results That Speak for Themselves',
  results: [
    { icon: 'fas fa-expand-arrows-alt', title: 'Massive Reach Expansion', text: (<>Steve's content now lives on <strong>4+ platforms</strong> instead of just YouTube, reaching completely new audience segments.</>) },
    { icon: 'fas fa-clock', title: 'Zero Extra Time', text: (<>Steve added <strong>zero hours</strong> to his workweek. He records episodes like always while we handle the rest.</>) },
    { icon: 'fas fa-chart-bar', title: 'Algorithm Boost', text: 'Short-form clips feed the social media algorithms, creating momentum that drives traffic back to full episodes.' },
    { icon: 'fas fa-fire', title: 'Viral Potential', text: 'Every episode now has multiple chances to go viral across different platforms and audience types.' },
    { icon: 'fas fa-users', title: 'New Audience Discovery', text: "Clips act as discovery tools, introducing Steve's podcast to people who've never heard of Corvette Today." },
    { icon: 'fas fa-handshake', title: 'Sponsorship Appeal', text: "Broader reach and engagement metrics make Steve's show more attractive to potential sponsors." },
  ],
  resultsHighlightTitle: 'The Bottom Line',
  resultsHighlightText: (
    <>Steve went from <strong>leaving money on the table</strong> to running a <strong>multi-platform content operation</strong> without lifting a finger beyond his normal recording schedule.</>
  ),
  whyHeading: 'Why This Strategy Works',
  why: [
    { title: 'Platform-Specific Optimization', text: "We don't just chop up videos. We create content that's native to each platform's format, algorithm, and audience behavior." },
    { title: 'Hook-First Editing', text: 'Every clip starts with a hook that grabs attention in the first 3 seconds (critical for stopping the scroll).' },
    { title: 'Strategic Storytelling', text: 'We identify complete story arcs, not random snippets. Each clip has a beginning, middle, and satisfying conclusion.' },
    { title: 'Niche Expertise', text: 'We understand automotive content and know what resonates with enthusiast communities like Corvette owners.' },
  ],
  showcase: {
    heading: '3 Clips That Rev Up Engagement',
    text: "From podcast episodes to viral shorts. These clips showcase how we turn Corvette passion into scroll-stopping content that grows Steve's automotive community.",
    clips: [
      { src: '/success/Top performing content/steve 1.mp4', poster: '/success/Top performing content/thumbnails/steve 1.png', label: 'Steve Garrett top performing clip 1' },
      { src: '/success/Top performing content/steve 2.mp4', poster: '/success/Top performing content/thumbnails/steve 2.png', label: 'Steve Garrett top performing clip 2' },
      { src: '/success/Top performing content/steve 3.mp4', poster: '/success/Top performing content/thumbnails/steve 3.png', label: 'Steve Garrett top performing clip 3' },
    ],
  },
};

export default function SteveGarrettCaseStudy() {
  return <CaseStudy data={data} />;
}
