# DS² Lab website

Source for <https://ds2-lab.github.io>, built with [Astro](https://astro.build).
Adapted from the Astro/Lumina source of [luomai.github.io](https://github.com/luomai/luomai.github.io) (MIT).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321, reloads on save
npm run build    # writes the static site to dist/
```

## Editing content

All content lives in YAML files in `src/data/`. Text fields accept Markdown links and **bold**.

| What | File | Notes |
|---|---|---|
| Welcome text, research mission | `site.yml` | `home:` sets how many news months / projects the homepage shows |
| News | `news.yml` | Add a new `- date: YYYY-MM` block at the top |
| Team | `team.yml` | Photos go in `public/images/`. Move graduates to `group: alumni` |
| Publications | `papers.bib` | Same format as tddg.github.io. `selected = {true}` puts an entry on the homepage; `display = {false}` hides it everywhere. Buttons come from `arxiv`, `pdf` (else `html`/`url`/`doi`), `code`, `website` |
| Projects | `projects.yml` | One box per GitHub project. The first 8 with `featured: true` appear on the homepage. `github_stars` is a manual snapshot |
| Funded research | `grants.yml` | `featured: true` shows the grant on the homepage; `start` orders the list |

PDFs go in `public/pdfs/` and are linked as `/pdfs/<file>.pdf`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes the site on every push to `master`.
In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** (the old MkDocs site
was published from the `gh-pages` branch).
