import { PrismicNextImage } from "@prismicio/next";
import Styles from "./BlogNewPost.module.scss";

export default function Page({ post }) {
  return (
    <div className={Styles.main}>
      <div className={Styles.text}>
        <h1>{post?.data.post_title}</h1>
        <p>{post?.data.post_description}</p>
      </div>
      <PrismicNextImage
        width={720}
        height={405}
        field={post?.data.main_image}
        priority={true}
      />
    </div>
  );
}
