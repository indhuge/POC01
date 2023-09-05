import Styles from "./Blog.module.scss";
import BlogNewPost from "../components/BlogNewPost";
import BlogCards from "../components/BlogCards";

export default function Blog() {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}></div>
      <div className={Styles.content}>
        <BlogNewPost />
        <BlogCards />
      </div>
    </div>
  );
}
