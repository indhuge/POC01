import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

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

export default function Page({ page }) {
  //TODO: Add a loading state
  console.log(page);
  return (
    <>
      <PrismicNextImage field={page?.data?.main_image} />
      <h1>{page?.data.post_title}</h1>
      <p>
        {page?.data.post_author} <span>{page?.data?.publish_date}</span>
      </p>
      <SliceZone slices={page?.data?.slices} components={components} />
    </> 
  );
}
