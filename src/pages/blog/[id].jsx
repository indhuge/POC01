import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Styles from "./BlogPost.module.scss";
import * as prismic from "@prismicio/client";
import Page from "@/components/page";
import StaticContent from "@/utils/StaticContent";
import BlogComments from "../../components/BlogComments";

export async function getStaticProps({ params }) {
  const client = createClient();
  const page = await client.getByUID("blog_post", params.id);

  const metadata = {
    meta_description: page.data.meta_description,
    meta_image: page.data.meta_image,
    meta_title: page.data.meta_title,
    meta_url: page.url,
  };

  return {
    props: { page, metadata },
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

export default function BlogPage({ page, metadata }) {
  //TODO: Add a loading state
  console.log(metadata);
  return !page ? (
    <h1>404</h1>
  ) : (
    <Page metaData={metadata}>
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
            <BlogComments post_id={page?.uid} />
          </div>
        </div>
      </div>
    </Page>
  );
}
