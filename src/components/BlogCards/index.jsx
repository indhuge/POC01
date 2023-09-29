import { PrismicNextImage } from "@prismicio/next";
import Styles from "./BlogCards.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function _onClick(id, router) {
  console.log(id);
  router.push(`/blog/${id}`, null, {
    shallow: true,
  });
}

const prefetchPath = (id, router) => {
  router.prefetch(`/blog/${id}`);
};

export default function Component({ category, cards, Key }) {
  const router = useRouter();

  useEffect(() => {
    cards?.map(
      (c) => {
        prefetchPath(c.uid, router);
      },
      [router]
    );
  });

  const slideLeft = () => {
    var slider = document.getElementById(`blog_card_holder-${Key}`);
    slider.scrollLeft -= window.innerWidth / 2;

    slider.addEventListener("scrollend", (e) => {
      if (slider.scrollLeft == 0) {
        var arrowL = document.getElementById(`left_arrwow-${Key}`);
        arrowL.classList.add(Styles.display_none);
        console.log(e);
      }
    });
  };

  const slideRight = () => {
    var slider = document.getElementById(`blog_card_holder-${Key}`);
    var arrowL = document.getElementById(`left_arrwow-${Key}`);
    slider.scrollLeft += window.innerWidth / 2;
    arrowL.classList.remove(Styles.display_none);
  };

  const toggleShowAll = () => {
    var slider = document.getElementById(`blog_card_holder-${Key}`);
    var arrowL = document.getElementById(`left_arrwow-${Key}`);
    var arrowR = document.getElementById(`right_arrwow-${Key}`);
    if (slider.classList.contains(Styles.showAll)) {
      slider.classList.remove(Styles.showAll);
      arrowR.classList.remove(Styles.display_none);
    } else {
      slider.classList.add(Styles.showAll);
      arrowL.classList.add(Styles.display_none);
      arrowR.classList.add(Styles.display_none);
    }
  };

  const deactivateArrows = () => {
    var slider = document.getElementById(`blog_card_holder-${Key}`);
    if (slider.offsetWidth != slider.scrollWidth) return;

    var arrowL = document.getElementById(`left_arrwow-${Key}`);
    var arrowR = document.getElementById(`right_arrwow-${Key}`);
    var showAll = document.getElementById(`show_all-${Key}`);

    arrowL.classList.add(Styles.display_none);
    arrowR.classList.add(Styles.display_none);
    showAll.classList.add(Styles.display_none);
  };

  useEffect(() => deactivateArrows(), []);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.titleWrapper}>
          <h2>{category}</h2>
          <p onClick={toggleShowAll} id={`show_all-${Key}`}>
            Mostrar tudo
          </p>
        </div>
        <div className={Styles.slideWrapper}>
          <MdChevronLeft
            className={` ${Styles.arrow} ${Styles.display_none}`}
            onClick={slideLeft}
            size={35}
            id={`left_arrwow-${Key}`}
          />
          <div className={Styles.cardHolder} id={`blog_card_holder-${Key}`}>
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
          <MdChevronRight
            className={Styles.arrow}
            onClick={slideRight}
            size={35}
            id={`right_arrwow-${Key}`}
          />
        </div>
      </div>
      {}
    </div>
  );
}
