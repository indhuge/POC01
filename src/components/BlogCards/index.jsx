import { PrismicNextImage } from "@prismicio/next";
import Styles from "./BlogCards.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

function _onClick(id, category, router) {
  console.log(id);
  router.push(`/blog/${category}/${id}`, null, {
    shallow: true,
  });
}

const prefetchPath = (id, category, router) => {
  router.prefetch(`/blog/${category}/${id}`);
};

export default function Component({ category, cards }) {
  const router = useRouter();

  useEffect(() => {
    cards?.map(
      (c) => {
        prefetchPath(c.uid, c.data.categoty.uid, router);
      },
      [router]
    );
  });

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <h2>{category}</h2>
        <div className={Styles.cardHolder}>
          {cards?.map((c, index) => {
            return (
              <div
                className={Styles.card}
                key={index}
                onClick={() => _onClick(c.uid, c.data.categoty.uid, router)}
              >
                <div className={Styles.cardText}>
                  <h3>{c?.data.post_title}</h3>
                  <p>{c?.data.post_description}</p>
                </div>
                <div className={Styles.imageContainer}>
                  <PrismicNextImage
                    width={530}
                    height={298.13}
                    sizes={1.6}
                    field={c?.data.main_image}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
