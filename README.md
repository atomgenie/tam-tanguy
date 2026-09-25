# tam-tanguy

Personal website, built with [Hugo](https://gohugo.io/) and the [Hugo ʕ•ᴥ•ʔ Bear Blog](https://github.com/janraasch/hugo-bearblog) theme.

## Development

Hugo is installed as a dev dependency through the [`hugo-extended`](https://www.npmjs.com/package/hugo-extended) package, so no global install is needed.

```sh
bun install      # downloads the Hugo binary (postinstall)
bun run dev      # http://localhost:1313, with live reload
bun run build    # production build into public/
```

## Content

| What                   | Where                                   |
| ---------------------- | --------------------------------------- |
| Home page (bio)        | `content/_index.md`                     |
| Projects page          | `content/projects.md`                   |
| Projects list          | `data/projects.yaml`                    |
| Skills                 | `data/skills.yaml`                      |
| Images, favicon, etc.  | `static/`                               |
| Fonts, colors, styles  | `layouts/partials/custom_head.html`     |
| Chat widget + button   | `layouts/partials/custom_body.html`     |
| Contact form           | `layouts/shortcodes/contact-form.html`  |

## Theme

The theme is vendored as plain files in `themes/hugo-bearblog/` (no submodule), from
commit [`87142ec`](https://github.com/janraasch/hugo-bearblog/tree/87142ecb5fe7f326065a9c25cd7e2cf21e840baa).
Don't edit it: override templates from the root `layouts/` directory instead.

To update it, replace the folder with a newer snapshot and remove the parts not needed to build the site:

```sh
SHA=<commit sha>
rm -rf themes/hugo-bearblog && mkdir -p themes/hugo-bearblog
curl -sL "https://github.com/janraasch/hugo-bearblog/archive/$SHA.tar.gz" \
  | tar -xz --strip-components=1 -C themes/hugo-bearblog
cd themes/hugo-bearblog && rm -rf exampleSite images .github .gitignore .jsbeautifyrc CONTRIBUTING.md package.json package-lock.json
```

## Deployment

Deployed on Vercel. `vercel.json` runs `bun install` and `bun run build`, and serves `public/`.
