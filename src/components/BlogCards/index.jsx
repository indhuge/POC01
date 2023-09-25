import { PrismicNextImage } from "@prismicio/next";
import Styles from "./BlogCards.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

function _onClick(id, router) {
  console.log(id);
  router.push(`/blog/${id}`, null, {
    shallow: true,
  });
}

const prefetchPath = (id, router) => {
  router.prefetch(`/blog/${id}`);
};

export default function Component({ category, cards }) {
  const router = useRouter();

  useEffect(() => {
    cards?.map(
      (c) => {
        prefetchPath(c.uid, router);
      },
      [router]
    );
  });

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
