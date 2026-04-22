# davidmolnar.dev

Source of my personal site. Built with Astro, deployed on Cloudflare Pages.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting + CDN
- [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) — privacy-respecting analytics

Bilingual: **English** (default, `/`) and **Magyar** (`/hu/`).

## Dev

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploy

Push to `main` — Cloudflare Pages auto-builds and deploys. Branch pushes get a preview URL.

## License

- **Code** (`src/` components, layouts, configs): [MIT](./LICENSE)
- **Content** (copy, bio, images): [CC BY-NC 4.0](./CONTENT-LICENSE)

Copy the code, not the content. Attribution to `https://davidmolnar.dev` appreciated.
