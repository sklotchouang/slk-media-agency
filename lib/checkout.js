// The ONE place for checkout and booking links on the website (per-episode
// pricing, Samuel, 25 November 2026). /pricing, the calculator and /welcome all
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
  // PLACEHOLDER: Monthly Show, $597 a month. Paste the Myfundbox link here.
  monthly: '',
  // PLACEHOLDER: Biweekly Show, $997 a month. Paste the Myfundbox link here.
  biweekly: '',
};

// PLACEHOLDER: the public link of the Formaloo "Onboarding Intake Form" that a
// new client fills in. No public link was found on 25 Nov 2026 (the old form id
// twq9WSVp returns "page not found"). Paste the share link from Formaloo here.
// While it is empty, /welcome tells the client to email hello@ to get the form
// instead of showing a button.
export const ONBOARDING_FORM_URL = '';

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

// The onboarding form button on /welcome, or null while no real link is set.
export function onboardingFormUrl() {
  return typeof ONBOARDING_FORM_URL === 'string' && ONBOARDING_FORM_URL.startsWith('https://') ? ONBOARDING_FORM_URL : null;
}
