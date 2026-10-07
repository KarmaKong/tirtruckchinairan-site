# TIR Truck China–Iran

A trilingual static website. HTML + one CSS file. No framework, build step, runtime JavaScript, backend, form or external font service.

- Website: https://karmakong.github.io/tirtruckchinairan-site/
- Repository: https://github.com/KarmaKong/tirtruckchinairan-site
- Persian root (`dir="rtl"`), English `/en/`, Chinese `/zh/`
- Each locale contains home, `tir/`, `routes/`, `quote/`, `articles/`
- CTA destinations: https://wa.me/8613454701600 and mailto:sales@tirtruckchinairan.com

## Run and deploy
Open a directory through any static HTTP server. GitHub Pages serves the root of the `main` branch. `.nojekyll` disables Jekyll processing. No compilation is necessary. Edit the HTML and CSS directly and push to main.

## Domains and SEO
Canonical, hreflang, Open Graph and sitemap URLs use the actual GitHub Pages URL. No custom-domain binding or DNS change is claimed. When `tirtruckchinairan.com` is ready, configure DNS and Pages, add the CNAME file, and replace the base URL consistently in all HTML, JSON-LD, sitemap and robots.txt. A project-level robots.txt is provided; only the host-root robots.txt controls crawling for github.io, so this file becomes authoritative only on a custom domain.

Organization data identifies the brand and known public sales contacts; it does not invent a legal entity, registered address or TIR authorisation. FAQPage markup appears only on home and TIR pages where the same FAQs are visibly present. Structured data does not promise search-engine rich results.

## Content provenance and corrections
The referenced conversation supplied the Persian copy, English home/TIR copy, contacts, route structures and operating ranges. Its export truncated during the English routes page. Remaining English and Chinese content was completed from those available facts, rather than claimed as a verbatim recovered final draft.

- The 0.4% Kyrgyzstan item is retained as a supplied quotation-brief item, with classification, applicability and assessment basis subject to per-shipment confirmation. Official guidance describes a customs operations fee; the site does not assert a universal TIR transit tax.
- TIR is not portrayed as intrinsically changing neither time nor price in all situations. This service makes no speed or price guarantee.
- The seal-status line is an operational diagram, not a live status feed or an unchanged-seal-number claim.
- Direct Wuqia configuration has one Bukhara transload. The other configuration has Osh and Bukhara transloads, with a possible additional Iran-border transload. Khorgos transload details remain unspecified.
- CPT and DAP have different risk-transfer rules; each shipment's named place and contract govern.
- All transit ranges are brief-supplied references requiring reconfirmation, not real-time verified schedules or commitments.
- Articles lists ten planned editorial topics, not fictitious published articles.
- The homepage seal photograph is an AI-generated illustration and is labelled in all languages. Replace it with an authorised real operating photograph when available.

## Sources
- https://unece.org/transport/tir
- https://unece.org/sites/default/files/2025-01/TIR-6Rev12e_0.pdf
- https://invest.gov.kg/en/invest-compass/taxes/customs

## Assets and licensing
Fonts are redistributed under the adjacent upstream licence files: Vazirmatn and IBM Plex from google/fonts; Source Han Sans SC from adobe-fonts/source-han-sans. Subsets preserve Persian shaping features and contain only needed glyphs. The small Chinese language chip uses system fonts on other locales to avoid downloading the Chinese body font.

Hero illustration was generated for this site. Responsive assets are 480px and 960px square AVIF with WebP fallback. The Open Graph image is a separate 1200×630 PNG for crawler compatibility. The favicon is a simple original seal/document mark.

## Performance and accessibility
Non-image budget is measured as raw HTML + shared CSS + font subsets loaded by that homepage, without relying on compression. Hosting/network conditions affect LCP; report observed audit results, never promise every visitor a sub-two-second load.

Semantic landmarks, a skip link, visible keyboard focus, native FAQ disclosure, language attributes, explicit image dimensions and table captions are provided. Colours are checked against AA contrast. Automated checks do not replace a complete assistive-technology audit.
