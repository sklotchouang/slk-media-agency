// HTML for the "Tap for sound" button that sits on a muted autoplay clip.
// Put it inside a wrapper that has the data-sound-card attribute, next to the
// <video>, and render <ClipSoundToggles /> once on the page to wire it up.
// Kept out of ClipSoundToggles.js because that is a client module, and a
// server component importing a plain string from it gets a reference, not
// the string.
export const SOUND_BUTTON =
  '<button type="button" class="ao-sound" data-sound-toggle aria-pressed="false"><i class="fas fa-volume-xmark" aria-hidden="true"></i><span class="ao-sound-label">Tap for sound</span></button>';
