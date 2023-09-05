import { createClient } from "@/prismicio";

export async function getStaticProps({ params }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.id);

  return {
    props: { page },
  };
}

export function getStaticPaths() {
  return {
    paths: ["/blog/abc"],
    fallback: true,
  };
}

export default function Page(props) {
  console.log(props);
  return <h1></h1>;
}
