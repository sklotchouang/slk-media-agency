import CaseStudy from '../../../../components/CaseStudy';

export const metadata = {
  title: 'Sales Fix Case Study | SLK Media Agency',
  description:
    'From skeptic to success: How we proved the value of strategic social media and drove immediate growth for a sales training company.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/sales-fix' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Sales Fix Case Study | SLK Media Agency',
    description:
      'From skeptic to success: How we proved the value of strategic social media and drove immediate growth for a sales training company.',
    url: '/success/sales-fix',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const data = {
  heroTitle: (
    <>From Skeptic to Success: How SLK Media Skyrocketed <span className="highlight">Sales Fix's Social Media Exposure</span></>
  ),
  heroStats: [
    { number: 'Immediate', label: 'Growth Impact' },
    { number: 'High', label: 'Engagement Rate' },
    { number: '100%', label: 'Transparent' },
  ],
  heroMeta: [
    { icon: 'fas fa-handshake', text: 'Sales Fix' },
    { icon: 'fas fa-chart-line', text: 'Sales Training & Coaching' },
    { icon: 'fas fa-users', text: 'Entrepreneurs & Businesses' },
  ],
  profileHeading: 'Meet Julian Recoussine',
  profileIcon: 'fas fa-handshake',
  profileName: 'Sales Fix',
  profileText:
    'Co-founder Julian Recoussine leads Sales Fix, a sales training and coaching company helping businesses and entrepreneurs master proven sales strategies. Despite their expertise, their social media was not growing fast enough.',
  profileChipIcon: 'fas fa-rocket',
  profileChip: 'Social media growth happened immediately',
  profileStats: [
    { number: 'Sales', label: 'Training Expert' },
    { number: '6 Months', label: 'Growth Period' },
    { number: 'Long-Term', label: 'Partnership' },
  ],
  challengeHeading: 'The Struggle: Why Julian Was Skeptical',
  challengeIntro: (
    <>Julian wasn't sure about hiring a social media agency. He had seen too many companies <strong>overpromise and underdeliver</strong>, posting content but with no real strategy behind it. Here's what held him back:</>
  ),
  problems: [
    { icon: 'fas fa-question-circle', title: 'Agency Skepticism', text: 'Would an agency actually help Sales Fix grow, or just post random content with no strategy?' },
    { icon: 'fas fa-clock', title: 'No Time to Learn', text: "Julian didn't have time to research best practices, hashtags, or optimal posting times himself." },
    { icon: 'fas fa-arrow-trend-down', title: 'Limited Growth', text: "Social media wasn't a priority, and their audience wasn't growing fast enough to attract new clients." },
    { icon: 'fas fa-video-slash', title: 'Content Needed Polish', text: "They had videos, but they weren't polished or optimized for maximum social media engagement." },
  ],
  challengeQuote:
    '"I was skeptical at first, but SLK Media proved me wrong. They don\'t just post content, they create a real strategy that works!"',
  challengeQuoteAuthor: '- Julian Recoussine, Co-Founder, Sales Fix',
  transformHeading: 'The Turning Point: Working with Us',
  before: [
    { icon: 'fas fa-question-circle', text: 'Skeptical about agencies' },
    { icon: 'fas fa-arrow-trend-down', text: 'Slow social media growth' },
    { icon: 'fas fa-calendar-times', text: 'No time for social strategy' },
    { icon: 'fas fa-video-slash', text: 'Unpolished video content' },
    { icon: 'fas fa-clock', text: 'Missing best practices' },
  ],
  after: [
    { icon: 'fas fa-check-circle', text: 'Trust in proven strategy' },
    { icon: 'fas fa-rocket', text: 'Immediate growth impact' },
    { icon: 'fas fa-hands-helping', text: 'Full social media management' },
    { icon: 'fas fa-video', text: 'Polished, optimized content' },
    { icon: 'fas fa-chart-line', text: 'Data-driven optimization' },
  ],
  solutionIntro: (
    <>After speaking with us, Julian decided to take a chance. We did things differently from other agencies. We didn't just post content, <strong>we built a strategy</strong>.</>
  ),
  process: [
    { icon: 'fas fa-hashtag', title: 'Optimized for Maximum Reach', text: "We chose the right hashtags, best posting times, and platform-specific formats to get Sales Fix's content seen by more people." },
    { icon: 'fas fa-video', title: 'Polished & Edited Videos', text: 'Instead of posting raw videos, we improved the quality, making them more engaging, professional, and optimized for each platform.' },
    { icon: 'fas fa-chart-bar', title: 'Data-Driven Strategy', text: "We didn't just guess what worked, we used real data to track performance and adjusted the strategy accordingly." },
    { icon: 'fas fa-comments', title: 'Clear Communication', text: 'We made sure Julian always knew what was happening, keeping the process smooth, transparent, and stress-free.' },
  ],
  deliverablesTag: 'WHAT YOU GET',
  deliverablesHeading: 'The Transformation: What Changed?',
  deliverables: [
    { icon: 'fas fa-rocket', title: 'Immediate Social Growth', text: 'Julian and his team saw an immediate improvement in engagement, reach, and followers.' },
    { icon: 'fas fa-heart', title: 'More Engagement', text: 'The optimized videos and smart posting strategy led to more views, more likes, and more shares.' },
    { icon: 'fas fa-hands-helping', title: 'Sales Fix Stopped Worrying', text: 'With us handling content, Julian and his team could focus on coaching clients and growing the business.' },
    { icon: 'fas fa-smile', title: 'Less Stress, More Productivity', text: 'No more spending hours researching what to post. We took care of everything.' },
    { icon: 'fas fa-infinity', title: 'A Long-Term Partnership', text: 'Julian was so happy with the results that he decided to continue working with us long-term.' },
    { icon: 'fas fa-chart-line', title: 'Data-Driven Success', text: "Clear metrics showed the real impact of the social media strategy on Sales Fix's growth." },
  ],
  deliverablesHighlight: (
    <><strong>"We saw significant social media growth right away. Our content is better, more engaging, and actually getting noticed!"</strong> - Julian Recoussine, Sales Fix</>
  ),
  video: {
    src: '/video-testimonials/testimonial-julien.mp4',
    poster: '/thumbnails/Julien Recoussine - SalesFix.png',
    aspect: 'ar-45',
  },
  resultChip: { icon: 'fas fa-handshake', text: 'Sales Training Expert' },
  testimonialQuote:
    '"SLK Media keeps us updated every step of the way. They\'re easy to work with and always transparent about what\'s happening. They took our existing content and made it better: polished videos, attention-grabbing edits, and optimized formats that perform exceptionally well on social media."',
  person: { initials: 'JR', name: 'Julian Recoussine', role: 'Co-Founder, Sales Fix' },
  resultsHeading: 'The Results: A Huge Success!',
  results: [
    { icon: 'fas fa-calendar-check', title: 'Consistent Posting', text: (<>We created a <strong>structured posting plan</strong> with smart hashtags, trending topics, and optimal timing.</>) },
    { icon: 'fas fa-video', title: 'Polished Videos', text: (<>We <strong>improved video quality</strong>, making them more engaging and professional for each platform.</>) },
    { icon: 'fas fa-chart-bar', title: 'Data-Driven Optimization', text: (<>We used <strong>real performance data</strong> to track what was working and adjusted strategy accordingly.</>) },
    { icon: 'fas fa-sync-alt', title: 'Consistent Flow', text: (<>Keeping a <strong>steady flow of content</strong> helped grow the audience without overwhelming Julian's team.</>) },
    { icon: 'fas fa-comments', title: 'Clear Communication', text: (<>We made sure Julian <strong>always knew what was happening</strong>, keeping the process smooth and stress-free.</>) },
    { icon: 'fas fa-infinity', title: 'Long-Term Partnership', text: (<>Julian decided to <strong>keep working with us</strong> because of the results and trustworthiness.</>) },
  ],
  resultsHighlightTitle: 'The Proof',
  resultsHighlightText: (
    <>"If you want a team that understands branding, engagement, and social media strategy, <strong>SLK Media is the way to go</strong>." - Julian Recoussine</>
  ),
  whyHeading: 'The Strategy: What Worked?',
  why: [
    { title: 'Optimizing Content', text: 'We used smart tactics like hashtags, trending topics, and the best posting times for maximum engagement.' },
    { title: 'Polishing Videos', text: 'Instead of posting raw videos, we improved the quality, making them more engaging and professional.' },
    { title: 'Data-Driven Strategy', text: "We didn't just guess what worked, we used real data to track performance and adjusted accordingly." },
    { title: 'Clear Communication', text: 'We made sure Julian always knew what was happening, keeping the process smooth and stress-free.' },
  ],
  showcase: null,
};

export default function SalesFixCaseStudy() {
  return <CaseStudy data={data} />;
}
