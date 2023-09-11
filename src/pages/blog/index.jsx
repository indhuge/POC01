import Styles from "./Blog.module.scss";
import BlogNewPost from "../components/BlogNewPost";
import BlogCards from "../components/BlogCards";
import { createClient } from "@/prismicio";
import { useState } from "react";

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

  console.log(pages);

  if (pages) {
    return (
      <div className={Styles.wrapper}>
        <div className={Styles.header}></div>
        <div className={Styles.content}>
          <BlogNewPost post={pages[0]} />
          <BlogCards cards={pages} />
        </div>
      </div>
    );
  }
}
