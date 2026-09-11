# davidmolnar.dev

Personal professional contact site, built with Astro and Tailwind CSS.
English is available at `/`, Hungarian at `/hu/`.

## Local development

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4322
```

Open http://127.0.0.1:4322/hu/ to review the Hungarian version.
Development stays local; these commands do not publish the site.

## Build and verification

```sh
npm run build
npm run check:site
npm run preview -- --host 127.0.0.1 --port 4323
```

For HTTP checks in PowerShell, with the preview running:

```powershell
$env:CHECK_BASE_URL = 'http://127.0.0.1:4323'
npm run check:site
Remove-Item Env:CHECK_BASE_URL
```

`check:site` checks the generated output for removed content and routes, internal
links, the initially collapsed email control, contact links, vCard formatting,
local NFC redirects and (optionally) HTTP status codes. Visual and interaction
checks are recorded in `design-qa.md`. Local comparison images are in the ignored
`design-previews/` directory and are never copied into the published output.

## Content

- Shared contact details and payment addresses: `src/config/contact.ts`.
- Original hero, numbered illustrated work-area rows and full-width page headers are retained.
- Localized text: `src/i18n/ui.ts`; original page-specific technical content remains in `src/pages/`.
- Original styling: `src/styles/global.css`; contact and utility-page styles: `src/styles/contact.css`.
- Native disclosure controls reveal the email, Nostr and PGP details.
- Four work areas: `/bitcoin/`, `/software/`, `/firmware/`, `/smarthome/`, with Hungarian equivalents.
- Project listing, individual project pages, related-project blocks and project images are removed.
- Previously agreed privacy exclusions and removal of 3D printing remain in effect.
- Contact-card, vCard, payment and privacy routes remain. NFC redirects keep the current origin.
- The rejected redesign is not generated. A local source backup is kept in ignored `design-previews/`.

All fonts, images and icons are served locally. There are no forms or embeds.
Analytics is disabled by default, including production previews. Enabling the
existing Cloudflare integration for a future live build requires both variables
in `.env.example`; the privacy notice reflects that build setting.

## Assets and licenses

- Icons: [Tabler Icons](https://github.com/tabler/tabler-icons), MIT; imported from the package at build time.
- Code: [MIT](./LICENSE).
- Personal text and images: [CC BY-NC 4.0](./CONTENT-LICENSE).
