import { createClient } from "@/prismicio";
import { host } from "@/utils/SiteProps";

const robots_content = (disallowUrls) => {
  let base = `User-agent: *
Disallow: /api/
Allow: /\n`;

  disallowUrls.forEach((element) => {
    base = base.concat(`Disallow: ${element}/\n`);
  });

  base = base.concat(`\nsitemap: ${host}/sitemap.xml`);

  return base;
};
export async function getServerSideProps({ res }) {
  const client = createClient();
  const pages = await client.getAllByTag("robots.disallow");
  const pages_url = pages.map((e) => e.url);

  res.setHeader("Content-Type", "text/plain");
  res.write(robots_content(pages_url));
  res.end();

  return {
    props: { pages_url },
  };
}

export default function Robots({ pages_url }) {}
