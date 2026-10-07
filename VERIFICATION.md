# Brand refresh verification · 2026-10-08

## Scope and baseline
15 content pages across Persian, English and Chinese, plus the existing noindex 404. Baseline: `fd266cb51ec2f21b1c1f68c373fc40914006b45e`. Approved source: the user's brand-refresh ZIP, including the SVG lockups and the reference halves of desktop/mobile comparisons.

## Content and SEO
All original main-content text nodes and figures are preserved on all 15 pages. Titles, descriptions, canonical, reciprocal hreflang and Open Graph metadata match the baseline. JSON-LD is unchanged except Organization.logo now points to `assets/logo.svg`; FAQPage remains intact. No local link or asset target is missing. All content pages have one H1; tables retain captions and scoped headers; images have alt text and dimensions. WhatsApp links remain `https://wa.me/8613454701600`; no Telegram is added.

## Browser verification
Actual browser renders checked across all 15 pages at 1440px, 768px, 390px and 375px: 60 page/viewport cases, no document overflow, no empty headings, no broken eager images. Persian is RTL, English/Chinese LTR. Mobile route nodes share one x-coordinate (51px at 390px). Both cold desktop loading and mobile-to-desktop resizing retain the original headings and content.

Mobile menu opens, Escape closes and returns focus. All ten Persian homepage disclosure buttons were activated with Enter and expose their controlled content; native FAQ was opened with Space. At desktop widths the buttons are removed and all panels visible. A fixture with the enhancement script removed confirmed that mobile navigation and content remain visible without JavaScript. These checks do not constitute a complete assistive-technology audit.

## Colour and payload
White on CTA #C2410C: 5.18:1. CTA-coloured status text on paper: 4.67:1. Muted text on paper: 4.86:1. Ink on paper: 13.88:1. Ordinary decoration remains #E8590C.

Raw homepage HTML + shared CSS + JS + primary language font + mono font, excluding image/SVG assets: Persian 101,033 bytes; English 88,937 bytes; Chinese 132,389 bytes. All are below 150KB. Chinese supplemental glyph subset remains available for subpages. No external runtime or font requests. Lighthouse/LCP is not certified by these checks: the local headless Chromium launcher was unavailable under the host sandbox.

## Remaining differences from the supplied mockup
- Original headings, route labels and CTA wording differ from the mockup and are intentionally retained. The Persian H1 uses three lines. The header therefore retains the existing “WhatsApp ↗” wording.
- Existing terminal-delivery, Incoterms and pricing qualifications remain as additional desktop sections, so the page is longer than the reference. On phones these are accessible disclosures.
- CTA orange is intentionally darker than the mockup to meet AA for white text; no Telegram row appears.
- The supplied vector lockup retains its seal-number line; Persian footer uses the supplied Persian variant. Lettering differs slightly from the raster mockup. UI document icons are geometric SVGs rather than exact raster traces.
- The supplied hero/truck assets and their baked-in stamps are used; the mobile crop is close but not pixel-identical. The original illustration caption stays visible. An unverified “13.6 M” trailer label in the mockup is not introduced.
- Existing semantic tables, heading structure, six FAQs, and copyright year are retained. Spacing follows their actual copy rather than reproducing the mockup's differing content.

## Deployment
GitHub Pages serves `main` at https://karmakong.github.io/tirtruckchinairan-site/ . There is no custom-domain CNAME configured; this change does not claim that tirtruckchinairan.com is bound. Exact deployed commit and build result are recorded in the delivery report after publishing.
