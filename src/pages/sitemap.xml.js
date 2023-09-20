import { createClient } from "@/prismicio";

export const host = "http://localhost:8080/";

function compileSitemap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!--We manually set the two URLs we know already-->
    <url>
      <loc>${host}</loc>
    </url>
    <url>
      <loc>${host}/blog</loc>
    </url>
    ${pages.map(({ url, date }) => {
      return `<url>
                <loc>${`${host}/${url}`}</loc>
                <lastmod>${date}</lastmod>
            </url>`;
    })}
  </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  const pPages = pages.map((p) => {
    return { url: p.url, date: p.last_publication_date };
  });

  const sitemap = compileSitemap(pPages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
