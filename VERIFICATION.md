# Verification · 2026-10-07

## Deployment
Repository: https://github.com/KarmaKong/tirtruckchinairan-site
Pages: https://karmakong.github.io/tirtruckchinairan-site/
GitHub Pages enabled for main branch / root, HTTPS enforced. The first build succeeded. All 15 content URLs returned HTTP 200. No custom domain configured.

## Static checks
All content pages have one H1, title ≤60 characters, description ≤155 characters, canonical, reciprocal fa/en/zh-Hans and x-default hreflang, Open Graph image metadata, and Organization JSON-LD. Home and TIR pages include FAQPage JSON-LD corresponding to the visible six FAQs. All local link targets exist; all images have alt and width/height; all tables have captions. All enquiry CTAs target wa.me or mailto. No forms, runtime scripts, third-party font requests or build step.

## Non-image homepage payload
Raw bytes, HTML + shared CSS + the homepage's text font + IBM Plex Mono. Image/icon files excluded per requested budget. The optional Chinese extra-glyph subset is not needed by the Chinese homepage. Language chips use system fallbacks on other locales.

| Locale | Bytes | Decimal KB | Budget |
| --- | ---: | ---: | --- |
| Persian | 87,588 | 87.59 | ≤150 KB |
| English | 75,496 | 75.50 | ≤150 KB |
| Chinese | 118,923 | 118.92 | ≤150 KB |

## Contrast and interaction
- Ink / paper: 13.88:1
- Secondary text / paper: 4.86:1
- White / orange primary button: 5.18:1
- Orange / paper status text: 4.67:1
- Desktop 1440px Persian hero and horizontal route inspected visually on live Pages.
- Mobile 390px Persian, English and Chinese homepages inspected; measured document width equals viewport width (no horizontal overflow).
- Mobile vertical SVG route inspected, including Bukhara diamond and terminal endpoints.
- Native FAQ expansion tested. Skip link and focus styles present; full assistive-technology audit not performed.
- Desktop and mobile full-page screenshots are included separately in the delivery package.

## Performance measurement limitation
LCP <2 seconds is an implementation target, not a verified result. Local Lighthouse could not start its audit Chrome session (dynamic debugging port timeout). A fallback Google PageSpeed API request returned HTTP 429. No Lighthouse score, LCP result, or complete WCAG conformance is claimed. Repeat a production mobile Lighthouse run when the audit environment is available.
