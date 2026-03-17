# Personal Tech Blog

An English technical blog built with Astro.

## Start

```bash
npm install
npm run dev
```

## Deployment environment variables

Copy `.env.example` to `.env` for local development, or set the same values in Vercel:

- `SITE_URL`
- `PUBLIC_SITE_TITLE`
- `PUBLIC_SITE_DESCRIPTION`
- `PUBLIC_SITE_AUTHOR`
- `PUBLIC_GITHUB_URL`
- `PUBLIC_X_URL`
- `PUBLIC_GISCUS_REPO`
- `PUBLIC_GISCUS_REPO_ID`
- `PUBLIC_GISCUS_CATEGORY`
- `PUBLIC_GISCUS_CATEGORY_ID`

## What to customize

- Replace sample posts in `src/content/posts/`
- Set real values in `.env` locally or in your deployment platform

## Giscus setup

1. Enable GitHub Discussions in the repository you want to use for comments.
2. Open [giscus.app](https://giscus.app) and select that repository.
3. Choose a discussion category, usually `Announcements`.
4. Copy these values into your environment variables:
   - `PUBLIC_GISCUS_REPO`
   - `PUBLIC_GISCUS_REPO_ID`
   - `PUBLIC_GISCUS_CATEGORY`
   - `PUBLIC_GISCUS_CATEGORY_ID`
5. Leave `mapping: "pathname"` if each article should have its own discussion thread.

## Deploy

Deploy to Vercel or Netlify as a static Astro site.

## Included

- RSS feed at `/rss.xml`
- `robots.txt` with the sitemap reference
- Sitemap generated automatically
- Table of contents on post pages
- Shiki code highlighting with GitHub light/dark themes
- Copy buttons for fenced code blocks
- Giscus comments on post pages after configuration
