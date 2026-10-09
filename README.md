# Edi Rodin

Personal site for **Edi Rodin**. A lab, not a company.

This is a static site (Astro + Markdown). The public pages are Home, System Model, Help, and Contact.

Live URL, once the custom domain is attached: [https://edirodin.me/](https://edirodin.me/)

Notes, the stack page, and earlier project writeups are still in the repo. They are not linked from the navigation or the home page. Older project URLs redirect to System Model or are not built. Notes and the stack page stay reachable by their old URLs, with `noindex`, and they are left out of the sitemap.

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev
```

Astro serves the site at the domain root, so open:

[http://localhost:4321/](http://localhost:4321/)

```bash
npm run build    # writes static files to dist/
npm run preview  # serve the production build locally
```

## Add a note

1. Create a Markdown file in `src/content/notes/`.
2. Use a kebab-case filename. That becomes the URL: `src/content/notes/my-note.md` → `/notes/my-note/`.
3. Front matter:

```yaml
---
title: The title
description: One or two sentences for the index and RSS.
pubDate: 2026-09-10
status: published   # or coming
listing: full       # full | abstract | title
---
```

- `status: published` and `listing: full` puts the note on `/notes`, in the RSS feed, and renders the Markdown body.
- `status: coming` and `listing: abstract` shows the title plus description with a Draft label.
- `status: coming` and `listing: title` lists the title only on `/notes`.

Write the note in Markdown below the front matter. Do not use em dashes.

## Add a project

1. Create a Markdown file in `src/content/projects/`.
2. Filename is the slug: `src/content/projects/new-thing.md` → `/projects/new-thing/`.
3. Front matter:

```yaml
---
title: Project name
summary: One paragraph for cards and the home page.
status: Built / in use
kind: project       # project | lab-note
featured: false     # true to show on the home page
order: 6            # lower numbers first
---
```

Use `kind: lab-note` for household experiments that are not products for sale.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Astro site on every push to `main` and deploys with GitHub Actions. It does not publish from a branch.

`public/CNAME` contains `edirodin.me`. The build copies it to the root of `dist/`, which is what the Actions deploy publishes. After this lands on `main`, confirm **Settings → Pages** shows the custom domain `edirodin.me`. The apex also needs DNS pointed at GitHub Pages.

`astro.config.mjs` has:

- `site: 'https://edirodin.me'`
- `base: '/'`

Internal links use `withBase()`, so they follow that base. A single build cannot also be correct at `https://machinedi.github.io/lab/`, because those asset and page URLs are rooted at `/lab/`.

## Stack

- Astro static output
- Markdown content collections (`src/content/notes`, `src/content/projects`)
- RSS at `/rss.xml` (published notes only)
- No auth, CMS, comments, or analytics
