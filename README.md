# uxlabspk.github.io

Personal site: CS journey blog, courses I teach, and projects. Built with Jekyll, hosted on GitHub Pages.

## Setup

1. Edit `_config.yml` if the deployment URL changes
2. Edit `about.md` as your profile evolves
3. Add new content in `_posts/`, `_courses/`, and `_projects/`

## Run locally (optional but recommended)

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000`.

## Add content

- **Blog post**: add a file to `_posts/` named `YYYY-MM-DD-title.md` with front matter:
  ```yaml
  ---
  title: "Post Title"
  date: 2026-01-01
  tags: [tag1, tag2]
  ---
  ```
- **Course**: add a file to `_courses/`:
  ```yaml
  ---
  title: "Course Name"
  term: "Spring 2027"
  level: "Graduate"
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
