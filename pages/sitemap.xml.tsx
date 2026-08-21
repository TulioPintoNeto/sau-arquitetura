import { ServerResponse } from "http";
import { content } from "src/data/contentful";

const BASE_URL = "https://sauarquitetura.com.br";

function generateSiteMap(routes: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        return `
      <url>
          <loc>${`${BASE_URL}${route}`}</loc>
      </url>
      `;
      })
      .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }: { res: ServerResponse }) {
  const [numberOfPages, slugs] = await Promise.all([
    content.getBlogPages(),
    content.getAllPostSlugs(),
  ]);

  const blogPageRoutes = Array.from(
    { length: numberOfPages },
    (_, i) => `/blog/${i + 1}`,
  );
  const postRoutes = slugs.map((slug) => `/blog/post/${slug}`);

  const sitemap = generateSiteMap(["/", ...blogPageRoutes, ...postRoutes]);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=240, stale-while-revalidate=299",
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SiteMap;
