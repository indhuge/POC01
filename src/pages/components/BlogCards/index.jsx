import { PrismicNextImage } from "@prismicio/next";
import Styles from "./BlogCards.module.scss";
import { useRouter } from "next/router";

function _onClick(id, router) {
  console.log(id);
  //window.location.href = window.location.href + `/${id}`;
  router.push(`/blog/${id}`);
}

export default function Component({ category, cards }) {
  const router = useRouter();

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <h1>{category}</h1>
        <div className={Styles.cardHolder}>
          {cards?.map((c, index) => {
            return (
              <div
                className={Styles.card}
                key={index}
                onClick={() => _onClick(c.uid, router)}
              >
                <div className={Styles.cardText}>
                  <h2>{c?.data.post_title}</h2>
                  <p>{c?.data.post_description}</p>
                </div>
                <div className={Styles.imageContainer}>
                  <PrismicNextImage field={c?.data.main_image} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
