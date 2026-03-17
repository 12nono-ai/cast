import { site } from "../data/site";

export function GET({ site: contextSite }) {
  const base = (contextSite?.toString() ?? site.siteUrl).replace(/\/$/, "");
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
