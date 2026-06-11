/**
 * Next.js configuration for the SLK Media Agency marketing site.
 *
 * Two jobs happen here:
 *
 * 1. redirects()  - every old ".html" address permanently (301) forwards to its
 *    new clean address, so links shared on LinkedIn, in emails, or indexed by
 *    Google keep working.
 *
 * 2. rewrites()   - the case study and resource pages are served from the
 *    /public folder as original HTML files. A rewrite lets the clean address
 *    (for example /success/conjure-queen) display the matching HTML file
 *    without the visitor ever seeing ".html" in the address bar.
 */

const nextConfig = {
  async redirects() {
    return [
      // Main pages
      { source: '/index.html', destination: '/', statusCode: 301 },
      { source: '/portfolio.html', destination: '/portfolio', statusCode: 301 },
      { source: '/podcast-multiplier.html', destination: '/podcast-multiplier', statusCode: 301 },
      { source: '/testimonials.html', destination: '/testimonials', statusCode: 301 },
      { source: '/pre-call.html', destination: '/pre-call', statusCode: 301 },
      { source: '/privacy-policy.html', destination: '/privacy-policy', statusCode: 301 },
      { source: '/terms-and-conditions.html', destination: '/terms-and-conditions', statusCode: 301 },

      // Case study pages
      { source: '/success/case-studies.html', destination: '/success/case-studies', statusCode: 301 },
      { source: '/success/conjure-queen.html', destination: '/success/conjure-queen', statusCode: 301 },
      { source: '/success/brian-burton.html', destination: '/success/brian-burton', statusCode: 301 },
      { source: '/success/steve-garrett.html', destination: '/success/steve-garrett', statusCode: 301 },
      { source: '/success/rws-group.html', destination: '/success/rws-group', statusCode: 301 },
      { source: '/success/sales-fix.html', destination: '/success/sales-fix', statusCode: 301 },
      { source: '/success/alpine-institute.html', destination: '/success/alpine-institute', statusCode: 301 },

      // The Conjure Queen case study was also shared as "case-study-conjure-queen"
      { source: '/case-study-conjure-queen', destination: '/success/conjure-queen', statusCode: 301 },
      { source: '/case-study-conjure-queen.html', destination: '/success/conjure-queen', statusCode: 301 },

      // Resource pages (simple names)
      { source: '/resources/authority_builder_checklist.html', destination: '/resources/authority_builder_checklist', statusCode: 301 },
      { source: '/resources/case_studies.html', destination: '/resources/case_studies', statusCode: 301 },
      { source: '/resources/podcast_toolkits.html', destination: '/resources/podcast_toolkits', statusCode: 301 },
      { source: '/resources/the_podcast_growth_audit.html', destination: '/resources/the_podcast_growth_audit', statusCode: 301 },

      // Resource pages whose filenames contain spaces (sources are percent-encoded
      // because that is how browsers send these addresses)
      { source: '/resources/The%205-Step%20Content%20Calendar.html', destination: '/resources/the-5-step-content-calendar', statusCode: 301 },
      { source: '/resources/The%206-Figure%20Podcast%20Playbook.html', destination: '/resources/the-6-figure-podcast-playbook', statusCode: 301 },
      { source: '/resources/The%207-Day%20Podcast%20Growth%20Challenge.html', destination: '/resources/the-7-day-podcast-growth-challenge', statusCode: 301 },
      { source: '/resources/The%20Platform%20Posting%20Cheat%20Sheet.html', destination: '/resources/the-platform-posting-cheat-sheet', statusCode: 301 },
      { source: '/resources/the%20podcast%20clip%20goldmine.html', destination: '/resources/the-podcast-clip-goldmine', statusCode: 301 },
      { source: '/resources/The%20Podcast%20Monetization%20Playbook.html', destination: '/resources/the-podcast-monetization-playbook', statusCode: 301 },
      { source: '/resources/The%20Podcast%20Problem%20Solver.html', destination: '/resources/the-podcast-problem-solver', statusCode: 301 },
      { source: '/resources/The%20Podcast%20Scaling%20Roadmap.html', destination: '/resources/the-podcast-scaling-roadmap', statusCode: 301 },
      { source: '/resources/The%20Viral%20Hook%20Generator.html', destination: '/resources/the-viral-hook-generator', statusCode: 301 },
      { source: '/resources/Why%20Your%20Podcast%20Clips%20Get%20Ignored%20\\(And%20the%20Simple%20Fix\\).html', destination: '/resources/why-your-podcast-clips-get-ignored-and-the-simple-fix', statusCode: 301 },

      // Toolkit page
      { source: '/toolkits/podcast-strategy-report.html', destination: '/toolkits/podcast-strategy-report', statusCode: 301 },
    ];
  },

  async rewrites() {
    return {
      afterFiles: [
        // Case studies: clean URL -> original HTML file in /public
        { source: '/success/case-studies', destination: '/success/case-studies.html' },
        { source: '/success/conjure-queen', destination: '/success/conjure-queen.html' },
        { source: '/success/brian-burton', destination: '/success/brian-burton.html' },
        { source: '/success/steve-garrett', destination: '/success/steve-garrett.html' },
        { source: '/success/rws-group', destination: '/success/rws-group.html' },
        { source: '/success/sales-fix', destination: '/success/sales-fix.html' },
        { source: '/success/alpine-institute', destination: '/success/alpine-institute.html' },

        // Resources: clean URL -> original HTML file in /public
        { source: '/resources/authority_builder_checklist', destination: '/resources/authority_builder_checklist.html' },
        { source: '/resources/case_studies', destination: '/resources/case_studies.html' },
        { source: '/resources/podcast_toolkits', destination: '/resources/podcast_toolkits.html' },
        { source: '/resources/the_podcast_growth_audit', destination: '/resources/the_podcast_growth_audit.html' },
        { source: '/resources/the-5-step-content-calendar', destination: '/resources/the-5-step-content-calendar.html' },
        { source: '/resources/the-6-figure-podcast-playbook', destination: '/resources/the-6-figure-podcast-playbook.html' },
        { source: '/resources/the-7-day-podcast-growth-challenge', destination: '/resources/the-7-day-podcast-growth-challenge.html' },
        { source: '/resources/the-platform-posting-cheat-sheet', destination: '/resources/the-platform-posting-cheat-sheet.html' },
        { source: '/resources/the-podcast-clip-goldmine', destination: '/resources/the-podcast-clip-goldmine.html' },
        { source: '/resources/the-podcast-monetization-playbook', destination: '/resources/the-podcast-monetization-playbook.html' },
        { source: '/resources/the-podcast-problem-solver', destination: '/resources/the-podcast-problem-solver.html' },
        { source: '/resources/the-podcast-scaling-roadmap', destination: '/resources/the-podcast-scaling-roadmap.html' },
        { source: '/resources/the-viral-hook-generator', destination: '/resources/the-viral-hook-generator.html' },
        { source: '/resources/why-your-podcast-clips-get-ignored-and-the-simple-fix', destination: '/resources/why-your-podcast-clips-get-ignored-and-the-simple-fix.html' },

        // Toolkit
        { source: '/toolkits/podcast-strategy-report', destination: '/toolkits/podcast-strategy-report.html' },
      ],
    };
  },
};

export default nextConfig;
