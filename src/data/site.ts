const env = (key: string, fallback: string) => process.env[key] ?? fallback;

export const site = {
  title: env("PUBLIC_SITE_TITLE", "Daychan Notes"),
  description: env(
    "PUBLIC_SITE_DESCRIPTION",
    "An English technical blog about frontend engineering, AI tooling, and building practical software."
  ),
  author: env("PUBLIC_SITE_AUTHOR", "Daychan"),
  siteUrl: env("SITE_URL", "https://example.com"),
  nav: [
    { href: "/", label: "Home" },
    { href: "/posts", label: "Posts" },
    { href: "/about", label: "About" }
  ],
  social: {
    github: env("PUBLIC_GITHUB_URL", "https://github.com/yourname"),
    x: env("PUBLIC_X_URL", "https://x.com/yourname")
  },
  giscus: {
    repo: env("PUBLIC_GISCUS_REPO", "yourname/your-repo"),
    repoId: env("PUBLIC_GISCUS_REPO_ID", "REPO_ID"),
    category: env("PUBLIC_GISCUS_CATEGORY", "Announcements"),
    categoryId: env("PUBLIC_GISCUS_CATEGORY_ID", "CATEGORY_ID"),
    mapping: env("PUBLIC_GISCUS_MAPPING", "pathname"),
    strict: env("PUBLIC_GISCUS_STRICT", "0"),
    reactionsEnabled: env("PUBLIC_GISCUS_REACTIONS_ENABLED", "1"),
    emitMetadata: env("PUBLIC_GISCUS_EMIT_METADATA", "0"),
    inputPosition: env("PUBLIC_GISCUS_INPUT_POSITION", "top"),
    theme: env("PUBLIC_GISCUS_THEME", "light"),
    lang: env("PUBLIC_GISCUS_LANG", "en")
  },
  giscusSetup: {
    repoExample: "yourname/your-repo",
    notes: [
      "Enable GitHub Discussions in the repository settings first.",
      "Install Giscus for that repository at https://giscus.app.",
      "Copy repo, repoId, category, and categoryId from the generated embed config.",
      "Keep mapping as pathname unless you want multiple URLs to share one thread."
    ]
  }
};
