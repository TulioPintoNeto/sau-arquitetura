import { ServerResponse } from "http";
import { getPortfolio } from "src/data/endpoints/getPortfolio";
import { getPortfolioIds } from "src/data/endpoints/getPortfolioIds";
import { PortfolioService } from "src/domain/entities/PortfolioService";

const BASE_URL = "https://sauarquitetura.com.br";
const routes = ["/", "/portfolio"];

function generateSiteMap(portfolio: string[]) {
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
     ${portfolio
       .map((id) => {
         return `
       <url>
           <loc>${`${BASE_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }: { res: ServerResponse }) {
  const ids = await getPortfolioIds();
  const sitemap = generateSiteMap(ids);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=240, stale-while-revalidate=299"
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SiteMap;
