# Documents & Seals

## 1. Approved visual reference
The user-supplied brand-refresh package contains the approved vector lockups and desktop/mobile mockups in the left halves of its comparison images. Those assets are the visual reference. This implementation preserves the repository's existing copy and numbers, even where the mockup contains different wording. No alternative brand direction was introduced.

## 2. Palette
Paper `#F6F3EC`, ink `#0B2545`, ordinary seal accents `#E8590C`, white-text CTA backgrounds `#C2410C`, secondary text `#646B75`. Orange status text uses the darker accessible CTA colour. White/CTA contrast is 5.18:1; muted/paper is 4.86:1.

## 3. Typography
Self-hosted Vazirmatn for Persian, IBM Plex Sans for English, Source Han Sans SC for Chinese, IBM Plex Mono for codes and figures. All fonts use swap. Preserve the Chinese extra-glyph subset and language-chip system fallbacks. Desktop Persian hero is 64px at 1440px; mobile 32.8px. Body copy and legal qualifications are unchanged.

## 4. Components
Use the supplied path-based `logo.svg` in headers, `logo-fa.svg` in Persian footers, `logo-mono.svg` in other footers and 404. Organization metadata uses `logo.svg`; OG uses the refreshed composition. Favicon is only the seal icon, without lock or TIR letters. Square CTA buttons, fine table rules, native FAQ details, small outline UI icons.

## 5. Layout
Shared logical-property CSS, maximum outer width 1392px, 40px desktop and 24px mobile gutters. Persian desktop hero keeps copy left and photograph right; desktop routes run left to right in geographical sequence. Text inside route nodes follows the document language. Enquiry uses checklist/contact/truck columns. Named section classes avoid styling unrelated subpages by their ordinal position.

## 6. Decoration
One independent seal-number strip under the hero. Two circular stamps already appear inside the supplied hero/truck images; do not overlay additional stamps. Subpage intros use one supplied stamp. One carnet group has two perforated edges. At most two coordinate annotations per page, on the route sections only. Header/footer lockups retain their integral brand seal lines.

Coordinate annotations are approximate border-area locations, never loading or transload points: Irkeshtam ≈39.70 N / 73.93 E; Khorgos ≈44.21 N / 80.40 E. Sources: [Irkeshtam](https://mapcarta.com/N273356521), [Khorgos](https://mapcarta.com/N243659742), both based on OpenStreetMap. Rounding is deliberate; do not treat the labels as dispatch navigation.

## 7. Content constraints
Keep WhatsApp `+86 134 5470 1600` and existing email; no Telegram. Wuqia direct configuration marks the existing Bukhara transload. Khorgos nodes denote geography only, with `مورد به مورد` / `case by case` / `一单一询`; do not invent handling points. Never replace the original route caveats, transit numbers, customs conditions or scope limitations with text from the mockup. The illustrative photograph's existing AI-generated caption remains visible.

## 8. Responsive and interaction
Below 760px the hero image precedes the text and Wuqia becomes a vertical route. Mobile navigation and selected sections use native buttons with expanded/control attributes, including Enter/Space activation; Escape in the navigation returns focus to its menu button. Breakpoint changes restore desktop headings and all content. Without JavaScript all navigation and content remain available. FAQ items retain native details/summary. No animation except optional pointer press feedback; respect reduced motion and forced colours.

## 9. Editing guidance
Keep HTML static, preserve SEO and language alternates, and use one shared stylesheet plus the small progressive-enhancement script. Do not add a framework or external font service. Match the supplied photo crops, document borders, warm paper and seal accents. Preserve text when adjusting density. Screenshot both 1440px and 390px, and also check every language at 375px. Any difference retained to protect existing copy must be identified in the verification notes.
