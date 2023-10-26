import Styles from "./Blog.module.scss";
import BlogNewPost from "../../components/BlogNewPost";
import BlogCards from "../../components/BlogCards";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import Page from "@/components/page";
import { getStaticContent } from "@/utils/StaticContent";

export async function getServerSideProps({locale}) {
  const client = createClient();
  const staticContent = getStaticContent(client,locale);
  const category = client.getAllByType("category",{lang : locale});
  const pages = client.getAllByType("blog_post",{lang : locale});
  const rMeta = await client.getSingle("blog_home",{lang : locale});

  const meta_data = {
    meta_description: rMeta.data.meta_description,
    meta_image: rMeta.data.meta_image,
    meta_title: rMeta.data.meta_title,
    meta_url: rMeta.url,
    meta_tags: rMeta.tags.filter((e) => e != "robots.disallow"),
  };

  return {
    props: {
      category: await category,
      pages: await pages,
      meta_data,
      staticContent: await staticContent,
    },
  };
}

export default function Blog({ category, pages, meta_data, staticContent }) {
  if (pages) {
    console.log(pages.map((e) => e.url));
    return (
      <Page metaData={meta_data} StaticContent={staticContent}>
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <BlogNewPost post={pages[0]} />
            <div>
              {category.map((c, index) => {
                return (
                  <BlogCards
                    key={index}
                    Key={index}
                    category={c.data.name}
                    cards={pages.filter((p) => p.data.categoty.uid == c.uid)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
