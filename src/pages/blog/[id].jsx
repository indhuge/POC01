import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Styles from "./BlogPost.module.scss";
import * as prismic from "@prismicio/client";

export async function getStaticProps({ params }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.id);

  return {
    props: { page },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  };
}

export default function Page({ page }) {
  //TODO: Add a loading state
  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.heroImage}>
          <PrismicNextImage field={page?.data?.main_image} />
          <div className={Styles.heroCover}></div>
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <div className={Styles.title}>
              <h1>{page?.data.post_title}</h1>
              <p>
                Autor: {page?.data.post_author}{" "}
                <span>{page?.data?.publish_date}</span>
              </p>
            </div>
            <div className={Styles.sliceZone}>
              <SliceZone slices={page?.data?.slices} components={components} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
