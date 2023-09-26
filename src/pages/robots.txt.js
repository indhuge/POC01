import { createClient } from "@/prismicio";
import { host } from "@/utils/SiteProps";

const robots_content = (disallowUrls) => `User-agent: *
Allow: /
${disallowUrls.map((u) => `Disallow: ${u}/\n`)}
sitemap: ${host}/sitemap.xml
`;

export async function getServerSideProps({ res }) {
  const client = createClient();
  const pages = await client.getAllByTag("disallow");

  res.setHeader("Content-Type", "text/plain");
  res.write(robots_content(pages.map((e) => e.url)));
  res.end();

  return {
    props: {},
  };
}

export default function Robots() {}
