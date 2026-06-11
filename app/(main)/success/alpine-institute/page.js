import CaseStudy from '../../../../components/CaseStudy';

export const metadata = {
  title: 'Alpine Institute Case Study | SLK Media Agency',
  description:
    'Biotech branding done right: How we built a digital presence from zero and positioned a research organization as an industry thought leader.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/success/alpine-institute' },
  openGraph: {
    type: 'website',
    siteName: 'SLK Media Agency',
    title: 'Alpine Institute Case Study | SLK Media Agency',
    description:
      'Biotech branding done right: How we built a digital presence from zero and positioned a research organization as an industry thought leader.',
    url: '/success/alpine-institute',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: { card: 'summary_large_image' },
};

const data = {
  heroTitle: (
    <>Biotech Branding Done Right: Alpine Institute's <span className="highlight">Social Media Success</span></>
  ),
  heroStats: [
    { number: 'High', label: 'Industry Engagement' },
    { number: '2X', label: 'Outreach Effectiveness' },
    { number: '1 Year', label: 'Of Growth' },
  ],
  heroMeta: [
    { icon: 'fas fa-flask', text: 'Alpine Institute' },
    { icon: 'fas fa-dna', text: 'Biotechnology Research' },
    { icon: 'fas fa-microscope', text: 'Life Sciences' },
  ],
  profileHeading: 'Meet Alpine Institute',
  profileIcon: 'fas fa-flask',
  profileName: 'Alpine Institute',
  profileText:
    'Kelly Bellaria, Marketing Director at Alpine Institute (formerly Gero Life Science), faced a significant challenge: her non-profit research organization had zero online presence in the highly specialized biotechnology sector.',
  profileChipIcon: 'fas fa-rocket',
  profileChip: 'Built from zero to recognized biotech brand',
  profileStats: [
    { number: 'Research', label: 'Organization' },
    { number: '1 Year', label: 'Partnership' },
    { number: 'Life Sciences', label: 'Industry Focus' },
  ],
  challengeHeading: 'The Challenge Alpine Faced',
  challengeIntro: (
    <>Despite their expertise and innovations, Alpine Institute struggled with <strong>zero online presence</strong> in the highly specialized biotechnology sector. Here's what was holding them back:</>
  ),
  problems: [
    { icon: 'fas fa-ban', title: 'No Social Media Presence', text: 'Zero accounts, zero followers, zero industry recognition in the biotechnology space.' },
    { icon: 'fas fa-question-circle', title: 'Difficulty Establishing Authority', text: 'Struggled to position themselves as thought leaders and gain credibility in the life sciences space.' },
    { icon: 'fas fa-brain', title: 'Complex Scientific Concepts', text: 'Challenges in communicating complex scientific research to a broader audience of investors and professionals.' },
    { icon: 'fas fa-hourglass-half', title: 'Overwhelmed Team', text: 'Managing social media alongside research and development was overwhelming for the small team.' },
  ],
  challengeQuote:
    '"We needed to establish our digital presence in a way that speaks directly to our industry peers, investors, and potential partners."',
  challengeQuoteAuthor: '- Kelly Bellaria, Marketing Director, Alpine Institute',
  transformHeading: 'A Strategic Science-Focused Overhaul',
  before: [
    { icon: 'fas fa-ban', text: 'Zero online presence' },
    { icon: 'fas fa-question-circle', text: 'No thought leadership' },
    { icon: 'fas fa-brain', text: 'Complex concepts hard to communicate' },
    { icon: 'fas fa-users-slash', text: 'Limited industry recognition' },
    { icon: 'fas fa-hourglass-half', text: 'Overwhelmed marketing team' },
  ],
  after: [
    { icon: 'fas fa-check-circle', text: 'Strong digital presence established' },
    { icon: 'fas fa-lightbulb', text: 'Positioned as thought leaders' },
    { icon: 'fas fa-comments', text: 'Complex research made digestible' },
    { icon: 'fas fa-users', text: 'Industry recognition achieved' },
    { icon: 'fas fa-hands-helping', text: 'Team freed to focus on research' },
  ],
  solutionIntro: (
    <>We created and optimized <strong>industry-focused social media accounts</strong> to showcase Alpine's groundbreaking research and translate complex science into engaging, digestible content.</>
  ),
  process: [
    { icon: 'fas fa-bullhorn', title: "Amplified Alpine's Voice", text: 'We created and optimized industry-focused social media accounts tailored to biotech professionals, investors, and researchers.' },
    { icon: 'fas fa-language', title: 'Translated Complex Content', text: 'Our content strategy transformed complex scientific insights into engaging, digestible posts for a broader audience.' },
    { icon: 'fas fa-image', title: 'Positioned the Brand', text: "Impactful visuals highlighted Alpine's innovations, boosting their visibility and reputation in the competitive life sciences market." },
    { icon: 'fas fa-chart-line', title: 'Tracked Growth', text: 'Consistent engagement from key industry stakeholders demonstrated the effectiveness of our biotech-focused strategy.' },
  ],
  deliverablesTag: 'WHAT YOU GET',
  deliverablesHeading: 'The Results: A Recognized Biotech Brand',
  deliverables: [
    { icon: 'fas fa-rocket', title: 'Platform Growth', text: 'Significant increase in LinkedIn and Twitter engagement among biotech professionals and investors.' },
    { icon: 'fas fa-handshake', title: 'New Opportunities', text: 'Doubled outreach effectiveness with investors and researchers, opening new partnership doors.' },
    { icon: 'fas fa-trophy', title: 'Credibility Score', text: 'Dramatic increase in brand credibility metrics within the competitive biotechnology space.' },
    { icon: 'fas fa-smile', title: 'Emotional Impact', text: "The team now feels confident about their brand's online presence and industry positioning." },
    { icon: 'fas fa-dollar-sign', title: 'Financial Growth', text: 'Increased visibility led to more investor interest and partnership inquiries.' },
    { icon: 'fas fa-cogs', title: 'Operational Efficiency', text: 'SLK Media manages content, freeing Alpine Institute to focus on research and innovation.' },
  ],
  deliverablesHighlight: (
    <><strong>"They didn't just create our social media accounts, they built a strategy that aligns with our industry's unique needs."</strong> - Kelly Bellaria, Alpine Institute</>
  ),
  video: {
    src: '/video-testimonials/testimonial-kelly.mp4',
    poster: '/thumbnails/Kelly Bellaria - Alpine Institute.png',
    aspect: 'ar-45',
  },
  resultChip: { icon: 'fas fa-flask', text: 'Biotech Research Leader' },
  testimonialQuote:
    '"We\'ve seen incredible growth in engagement from the life sciences community, and the content SLK Media creates truly captures our expertise. They understand the biotech space and have helped us communicate our vision in a way that resonates with investors, researchers, and industry professionals."',
  person: { initials: 'KB', name: 'Kelly Bellaria', role: 'Marketing Director, Alpine Institute' },
  resultsHeading: 'A Year of Growth in Biotech',
  results: [
    { icon: 'fas fa-rocket', title: 'Phase 1: Launch', text: (<>Launched <strong>social media accounts</strong> tailored specifically to biotech professionals, investors, and researchers.</>) },
    { icon: 'fas fa-edit', title: 'Phase 2: Strategy', text: (<>Developed and executed a <strong>content strategy</strong> that simplified complex research for a broader audience.</>) },
    { icon: 'fas fa-chart-line', title: 'Phase 3: Growth', text: (<>Achieved <strong>increased engagement</strong>, industry recognition, and stronger investor interest.</>) },
    { icon: 'fas fa-users', title: 'Industry Engagement', text: (<>Significant increase in engagement from <strong>biotech professionals</strong> and key stakeholders.</>) },
    { icon: 'fas fa-lightbulb', title: 'Thought Leadership', text: (<>Alpine positioned as a <strong>credible player</strong> in the competitive biotechnology market.</>) },
    { icon: 'fas fa-handshake', title: 'Partnership Growth', text: (<>Enhanced reputation led to <strong>more partnership inquiries</strong> and investor interest.</>) },
  ],
  resultsHighlightTitle: 'One Year of Partnership',
  resultsHighlightText: (
    <>Alpine Institute has been working with SLK Media for about a year, seeing <strong>consistent engagement growth and recognition</strong> in the Biotechnology sector.</>
  ),
  whyHeading: "Key Takeaways from Alpine's Transformation",
  why: [
    { title: 'Industry-Specific Strategy', text: "SLK Media's approach focused on creating content tailored to the life sciences and biotechnology sector." },
    { title: 'Translating Complexity', text: 'Complex scientific concepts were transformed into engaging, digestible content for a broader audience.' },
    { title: 'Measurable Impact', text: 'The digital strategy led to increased engagement, improved brand positioning, and enhanced reputation.' },
    { title: 'Long-Term Partnership', text: 'Over a year of collaboration resulted in consistent growth and recognition for Alpine Institute in the Biotechnology sector.' },
  ],
  showcase: null,
};

export default function AlpineInstituteCaseStudy() {
  return <CaseStudy data={data} />;
}
