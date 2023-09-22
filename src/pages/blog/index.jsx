import Styles from "./Blog.module.scss";
import BlogNewPost from "../components/BlogNewPost";
import BlogCards from "../components/BlogCards";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import Page from "@/components/page";

async function getBlogContent() {
  const client = createClient();
  return client.getAllByType("blog_post");
}

async function getTags() {
  const client = createClient();
  return client.getAllByType("category");
}

export async function getServerSideProps() {
  const category = getTags();
  const pages = getBlogContent();

  return {
    props: {
      category: await category,
      pages: await pages,
    },
  };
}

export default function Blog({ category, pages }) {
  if (pages) {
    return (
      <Page>
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <BlogNewPost post={pages[0]} />
            <div>
              {category.map((c, index) => {
                return (
                  <BlogCards
                    key={index}
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
