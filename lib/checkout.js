// The ONE place for checkout and booking links on the website (per-episode
// pricing, Samuel, 25 November 2026). /pricing, the calculator and /thank-you all
// read from here.
//
// Samuel creates the two Myfundbox checkouts. Paste each link between the
// quotes below, exactly as Myfundbox gives it (https://pay.myfundbox.com/...).
// While a link is empty, every "buy" button for that plan goes to the strategy
// call instead, and its label changes to say so, so nothing on the site breaks.
//
// Do not paste the old $997 checkout (its link is in docs/pricing-promotion-spec.md) here
// without Samuel's yes: it charges $997 but its page reads "Done With You".
// Weekly Show has no checkout on purpose: it is sold on a call.

export const BOOK_URL = 'https://link.slkmediaagency.com/strmeet';

export const CHECKOUT = {
  // Monthly Show, $597 a month (Samuel, 25 Nov 2026).
  monthly: 'https://pay.myfundbox.com/OVP/?token=1DDrjflsY6e2JMpnU6jKzA',
  // Biweekly Show, $997 a month (Samuel, 25 Nov 2026).
  biweekly: 'https://pay.myfundbox.com/OVP/?token=IXcC8MsKeFTU-UGVJfv9ig',
};

// The Waybook onboarding instructions every new client follows (Samuel, 25 Nov
// 2026). Also linked from the welcome email. Shown on /thank-you.
export const ONBOARDING_URL = 'https://slkgenix.waybook.com/l/1Tqcsta5';

export const CONTACT_EMAIL = 'hello@slkmediaagency.com';

// Only real Myfundbox links count, so a typo or a leftover note can never
// become a broken button.
function isCheckout(url) {
  return typeof url === 'string' && url.startsWith('https://pay.myfundbox.com/');
}

// Where a plan's buy button goes, and whether that is a real checkout.
export function buyLink(plan) {
  const url = CHECKOUT[plan];
  return isCheckout(url) ? { href: url, checkout: true } : { href: BOOK_URL, checkout: false };
}
