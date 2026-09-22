// Builds 01-base-prompt.md, the exact text pasted into re:tune's Base Prompt field.
// Persona first, then a KNOWLEDGE BASE divider, then the five kb files, each
// separated by one blank line. The divider and the spacing match what is live in
// re:tune (confirmed 2026-09-22), so a paste never silently drops them.
// Usage: node docs/chatbot/build-prompt.js
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), 'utf8').trim();
const rule = '='.repeat(69);
const divider = `${rule}\nKNOWLEDGE BASE\n${rule}`;

const kb = [
  'kb-01-offers-and-pricing.md',
  'kb-02-delivery.md',
  'kb-03-proof.md',
  'kb-04-common-questions.md',
  'kb-05-next-steps-and-contact.md',
];

const out = [read('_persona.md'), divider, ...kb.map(read)].join('\n\n');
fs.writeFileSync(path.join(dir, '01-base-prompt.md'), out);
console.log(`01-base-prompt.md: ${out.length} characters`);
