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

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState();
  const [category, setCategories] = useState();

  useEffect(
    () => {
      if (pages && category) {
        setIsLoading(false);
      }
    },
    pages,
    category
  );

  if (!pages) {
    getBlogContent().then((o) => {
      setPages(o);
      console.log(o);
    });

    getTags().then((o) => {
      setCategories(o);
    });
  }

  if (isLoading) {
    return <h1>Carregando</h1>;
  }

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
