import Styles from "./Blog.module.scss";
import BlogNewPost from "../components/BlogNewPost";
import BlogCards from "../components/BlogCards";
import { createClient } from "@/prismicio";
import { useState } from "react";
import Page from "@/components/page";

async function getBlogContent() {
  const client = createClient();
  return client.getAllByType("blog_post");
}

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState();

  if (!pages) {
    getBlogContent().then((o) => {
      setIsLoading(false), setPages(o);
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
            <BlogCards cards={pages} />
          </div>
        </div>
      </Page>
    );
  }
}
