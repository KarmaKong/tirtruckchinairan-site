# Verification: October 8, 2026

## Static checks
All 15 content pages checked: internal files and anchors, language direction, navigation, unique IDs, one H1, transit/capacity facts and section enquiry CTAs. Organization and Service are present. FAQPage matches visible questions/answers exactly and is absent where no FAQ is rendered. Three alternates plus x-default preserved. Open Graph points to the truck image. CPT/DAP scope occurs once per page. Carnet/seal explanation is confined to the homepage export step.

## Browser checks
15 pages at 1440, 768, 390, 375 and 320 pixels: 75 states, no document overflow, off-screen inspected content or failed images. Menu open, Escape close and keyboard FAQ activation checked in all languages. No console warnings/errors during testing.

Six full-page homepage screenshots: three languages at 1440 and 390 pixels. Persian screenshots use a same-origin full-height frame to avoid the screenshot tool's RTL stitching issue; the underlying page is unchanged. Reviewed whole-page hierarchy plus desktop/mobile heroes. Obsolete educational cards are removed, resolving the reported icon/number overlap.

## Performance and accessibility scope
Native JS 743 bytes; shared CSS approximately 16 KB; hero AVIF 27,818 bytes. No runtime framework, external fonts or third-party scripts. Semantic tables, ordered routes, native FAQ, dimensions, focus, skip links, RTL isolation and reduced motion retained. White on #C2410C exceeds AA normal-text contrast; #E8590C is decorative.

These are structural, functional and visual checks, not a Lighthouse score or complete assistive-technology audit.

## Remaining limitation
The supplied truck illustration is 720 × 574 and contains a baked-in stamp. It matches the requested truck-on-road subject but is soft on high-density displays. No unapproved replacement photography was introduced.

## Hosting
Pages uses main at repository root. Custom domain is not configured, so metadata uses the actual Pages origin.

# Verification: October 24, 2026

## First long-form article
Added articles/tir-truck-explained/ in fa, en and zh, a first-position card on all three guide hubs, and sitemap entries 15→18. Copy follows the approved draft; the fa draft's three "تیر" typos were corrected to `<bdi dir="ltr">TIR</bdi>`.

## Static checks
New pages parse, IDs are unique, one H1 each. JSON-LD carries Organization plus Article (published/modified 2026-10-24) plus FAQPage; FAQ questions and answers match the visible text word for word after tag stripping. hreflang clusters of four interlink correctly including x-default. Relative asset, cross-language and hub paths all resolve to existing files. og:type=article. Fact-scope checks pass: transit figures match the site tables, no day count claimed for Khorgos, currently qualifiers present in all three languages, CPT/DAP once per page, no Telegram links or unapproved services. The carnet/seal explanation now also appears on the article page, per approved copy (previously homepage-only).

## Rendering fix
Shared CSS lays out summary as flex; bare inline elements inside become separate flex items and tore the Persian question text. All 12 summaries on the new pages wrap their content in a span. Existing pages are unaffected because their summaries contain no child elements.

## Browser checks
Desktop 1440: full pages and FAQ sections reviewed in all three languages; guide hubs show the new card first with intact grids (fa, en reviewed visually). Persian mobile 390 re-verified through the same-origin frame method; the raw screenshot tool shows the known RTL stitching artifact, reproduced identically on the unmodified homepage, confirming a tool artifact rather than a page defect. Local server: all six touched pages and the sitemap return 200.

## Hosting
Pages deploys from main at the repository root. Live URLs after this deploy: https://tirtruckchinairan.com/articles/tir-truck-explained/ with /en/ and /zh/ variants, canonical domain per CNAME (set in 05c5d72).
