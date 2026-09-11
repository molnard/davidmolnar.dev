# Site verification — 2026-09-11

The original visual design is retained. Project listings, individual project
pages, case studies and their images are removed in both languages.

## Final changes

- Fixed responsive text clipping, contrast, mobile navigation and keyboard focus.
- Separated visible page headings from browser titles.
- Shared contact configuration, email writing/copying in one row, Signal/QR and Telegram.
- Updated footer, vCard, local NFC redirects and social preview image.
- Open-source highlight: 27,231 GitHub contributions through 2026 and a profile link.
  Annual source counts are recorded in src/config/github-stats.json.
- Added the bilingual smart-home platform, device and network stack.
- Privacy copy reflects optional analytics and removal of video embeds.

## Verification

- npm run build: passed, 18 HTML pages.
- npm run check:site: passed, 49 generated files.
- TypeScript tsc --noEmit: passed.
- Earlier local HTTP checks verified project URLs and sampled removed images
  return 404, and retained pages and contact assets return 200.
- HU/EN home and work-area layouts checked at 390, 768 and 1440 px.
- Language switching, email disclosure, copy behaviour, QR open/close,
  keyboard focus and local NFC navigation checked during implementation.
- Final text and smart-home stack additions verified in localized local HTML.
- Final email/footer layout inspected at mobile and desktop widths.
- Physical phone contact import and camera scanning were not tested.

Local screenshots and intermediate experiments remain in the ignored
 design-previews directory and are not included in the commit or build.
