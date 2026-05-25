# bewoners-info

Static single-page app for the Barnstijn Beheer B.V. tenant initiative.

## Files

- `index.html` - GitHub Pages entry point
- `styles.css` - responsive UI styling
- `app.js` - bilingual wizard, tooltips, OpenPGP encryption, and Web3Forms submission

## Before publishing

In `app.js`, replace:

- `PUBLIC_KEY` with the real armored PGP public key
- `WEB3FORMS_ACCESS_KEY` with the Web3Forms access key

Add the real `servicekosten.png` image next to `index.html` if you want the service-cost clause screenshot to appear in step 3.

## GitHub Pages

Publish from the repository root. No build step is required.
