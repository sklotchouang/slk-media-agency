import CaseStudy from '../../../../components/CaseStudy';

export const metadata = {
  title: 'RWS Group Case Study | SLK Media Agency',
  description:
    'How SLK Media helped a global leader in language services take over B2B social media with rapid audience growth and all-time high engagement.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/rws-group' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'RWS Group Case Study | SLK Media Agency',
    description:
      'How SLK Media helped a global leader in language services take over B2B social media with rapid audience growth and all-time high engagement.',
    url: '/success/rws-group',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const data = {
  heroTitle: (
    <>How SLK Media Helped RWS Group Take Over <span className="highlight">B2B Social Media</span></>
  ),
  heroStats: [
    { number: 'Rapid', label: 'Audience Growth' },
    { number: 'High', label: 'Engagement Rate' },
    { number: '100%', label: 'Ownership' },
  ],
  heroMeta: [
    { icon: 'fas fa-globe', text: 'RWS Group' },
    { icon: 'fas fa-language', text: 'Language Services & Technology' },
    { icon: 'fas fa-building', text: 'Global B2B Leader' },
  ],
  profileHeading: 'Meet RWS Group',
  profileIcon: 'fas fa-globe',
  profileName: 'RWS Group',
  profileText:
    'A global leader in language services and technology, RWS Group helps businesses worldwide communicate and connect across cultures. Despite their industry success, they struggled to translate their expertise into a strong B2B social media presence.',
  profileChipIcon: 'fas fa-chart-line',
  profileChip: 'Social media transformed into a business asset',
  profileStats: [
    { number: 'Global', label: 'Industry Leader' },
    { number: 'B2B', label: 'Focus Market' },
    { number: 'All-Time', label: 'High Engagement' },
  ],
  challengeHeading: 'The Challenge RWS Was Facing',
  challengeIntro: (
    <>David Hetling, Director of Marketing at RWS Group, knew they needed a stronger digital presence. Despite being a <strong>global leader in language services</strong>, their social media wasn't reflecting that authority. Here's what was holding them back:</>
  ),
  problems: [
    { icon: 'fas fa-chart-line', title: 'Struggling to Gain Traction', text: "Growing an engaged B2B audience proved much harder than expected. Their expertise wasn't translating into social media success." },
    { icon: 'fas fa-users-slash', title: 'Stretched Too Thin', text: "Their small marketing team couldn't keep up with the demands of social media while managing other critical business priorities." },
    { icon: 'fas fa-puzzle-piece', title: 'Inconsistent Messaging', text: 'Without a clear content strategy, their social efforts lacked cohesion and failed to position them as thought leaders.' },
    { icon: 'fas fa-chart-bar', title: 'Measuring the Impossible', text: 'They had no way to track performance or prove the value of social media to stakeholders.' },
  ],
  challengeQuote:
    '"We needed a team to take full ownership of our social media and help us position ourselves as thought leaders."',
  challengeQuoteAuthor: '- David Hetling, Director of Marketing, RWS Group',
  transformHeading: 'From Struggling to Soaring',
  before: [
    { icon: 'fas fa-arrow-trend-down', text: 'Inconsistent posting schedule' },
    { icon: 'fas fa-users-slash', text: 'Low engagement rates' },
    { icon: 'fas fa-hourglass-half', text: 'Overworked marketing team' },
    { icon: 'fas fa-eye-slash', text: 'No data-driven insights' },
    { icon: 'fas fa-puzzle-piece', text: 'Unclear brand messaging' },
  ],
  after: [
    { icon: 'fas fa-rocket', text: 'Rapid B2B audience growth' },
    { icon: 'fas fa-chart-line', text: 'All-time high engagement' },
    { icon: 'fas fa-hands-helping', text: 'Freed up internal team' },
    { icon: 'fas fa-chart-column', text: 'Clear performance metrics' },
    { icon: 'fas fa-trophy', text: 'Improved brand authority' },
  ],
  solutionIntro: (
    <>We knew that RWS needed a <strong>complete social media transformation</strong>, not just a few tweaks. We took full ownership of their presence and built a data-driven strategy tailored to B2B success.</>
  ),
  process: [
    { icon: 'fas fa-handshake', title: 'Took Full Ownership', text: 'We handled their entire social media presence from strategy to execution, so their marketing team could focus on other priorities.' },
    { icon: 'fas fa-edit', title: 'Crafted High-Quality Content', text: "We wrote industry-specific, engaging posts that resonated with their B2B audience and aligned perfectly with RWS's brand voice." },
    { icon: 'fas fa-users', title: 'Grew Their Reach', text: 'We implemented smart audience growth strategies tailored for B2B platforms, expanding their following beyond expectations.' },
    { icon: 'fas fa-chart-bar', title: 'Tracked Real Progress', text: 'We introduced data tracking and reporting to show the real impact, making it easy for RWS to measure social media success.' },
  ],
  deliverablesTag: 'WHAT YOU GET',
  deliverablesHeading: 'The Results: A Social Media Transformation',
  deliverables: [
    { icon: 'fas fa-rocket', title: 'Rapid Audience Growth', text: 'Their B2B following expanded rapidly, exceeding expectations and reaching key industry stakeholders.' },
    { icon: 'fas fa-heart', title: 'Soaring Engagement', text: 'We drove a surge in comments, shares, and meaningful interactions from their target audience.' },
    { icon: 'fas fa-trophy', title: 'Improved Brand Authority', text: 'RWS emerged as a credible thought leader and contender in their industry.' },
    { icon: 'fas fa-chart-bar', title: 'Data-Driven Strategy', text: 'They could now clearly see and measure the success of their social media efforts.' },
    { icon: 'fas fa-handshake', title: 'Trusted Partnership', text: "We became one of RWS Group's most valued agency partners." },
    { icon: 'fas fa-clock', title: 'Time Savings', text: 'Their marketing team could focus on strategic priorities while we handled social media.' },
  ],
  deliverablesHighlight: (
    <><strong>"Since launching with SLK, our audience has grown beyond expectations. Engagement is at an all-time high."</strong> - David Hetling, RWS Group</>
  ),
  video: {
    src: '/video-testimonials/testimonial-david.mp4',
    poster: '/thumbnails/David Hetling - RWS Group.png',
    aspect: 'ar-45',
  },
  resultChip: { icon: 'fas fa-globe', text: 'Global B2B Leader' },
  testimonialQuote:
    '"SLK Media is one of our most valued agency partners. Their expertise, professionalism, and results-driven approach set them apart. They quickly aligned with our brand voice and started delivering exceptional content tailored to our industry."',
  person: { initials: 'DH', name: 'David Hetling', role: 'Director of Marketing, RWS Group' },
  resultsHeading: 'The Turning Point: When It All Clicked',
  results: [
    { icon: 'fas fa-bullseye', title: 'Laser-Focused Content', text: (<>We meticulously refined their messaging until it <strong>struck a powerful chord</strong> with the target B2B audience.</>) },
    { icon: 'fas fa-calendar-check', title: 'Consistent Momentum', text: (<>We launched a <strong>strategic posting cadence</strong> that kept their social channels buzzing with engagement.</>) },
    { icon: 'fas fa-fire-alt', title: 'Audience Ignited', text: (<>Their followers came alive, transforming social media into a <strong>thriving marketing channel</strong>.</>) },
    { icon: 'fas fa-chart-line', title: 'Data-Driven Success', text: (<>Clear performance metrics showed the <strong>real impact</strong> of their social media efforts.</>) },
    { icon: 'fas fa-lightbulb', title: 'Thought Leadership', text: (<>RWS positioned themselves as <strong>industry experts</strong> through strategic content.</>) },
    { icon: 'fas fa-handshake', title: 'Trusted Partnership', text: (<>SLK Media became one of RWS's <strong>most valued agency partners</strong>.</>) },
  ],
  resultsHighlightTitle: 'From day one, SLK Media instilled confidence',
  resultsHighlightText: (
    <>"From day one, SLK Media instilled confidence with their <strong>expertise and commitment to delivering results</strong>." - David Hetling, RWS Group</>
  ),
  whyHeading: 'Why SLK Media Stands Out',
  why: [
    { title: 'We Own It', text: "We take full responsibility for your social media success so you don't have to worry about a thing." },
    { title: 'High-Quality Content That Delivers', text: 'We create content that actually drives results and resonates with your B2B audience.' },
    { title: 'Audience Growth and Engagement', text: "We'll grow your audience and keep them coming back with strategic, engaging content." },
    { title: 'ROI You Can See', text: 'We track performance to show you the real impact of your social media investment.' },
  ],
  showcase: null,
};

export default function RwsGroupCaseStudy() {
  return <CaseStudy data={data} />;
}
