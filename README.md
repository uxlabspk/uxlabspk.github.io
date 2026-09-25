# uxlabspk.github.io

Personal site: CS journey blog and projects. Built with Jekyll + Tailwind CSS 4, hosted on GitHub Pages.

## Setup

1. Install dependencies:
   ```bash
   bundle install
   npm install
   ```
2. Edit `_config.yml` if the deployment URL changes
3. Edit `about.md` as your profile evolves
4. Add new content in `_posts/` and `_projects/`

## Run locally (optional but recommended)

```bash
npm run watch:css &
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

To build CSS once (without watching): `npm run build:css`

## Add content

- **Blog post**: add a file to `_posts/` named `YYYY-MM-DD-title.md` with front matter:
  ```yaml
  ---
  title: "Post Title"
  date: 2026-01-01
  tags: [tag1, tag2]
  ---
  ```
- **Project**: add a file to `_projects/`:
  ```yaml
  ---
  title: "Project Name"
  tech: [Python, React]
  github: https://github.com/you/repo
  ---
  ```

## Deploy

Just push to `main`. GitHub Pages builds and deploys automatically (enable it in repo **Settings → Pages**, source = `main` branch, root).

Site will be live at `https://uxlabspk.github.io`.
