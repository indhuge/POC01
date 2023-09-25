import styles from "./Cards.module.scss";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CardsSlice} CardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSlice>} CardsProps
 * @param {CardsProps}
 */
const Cards = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.container}>
        <div className={styles.main}>
          <PrismicRichText field={slice.primary.maintitle} />
          <PrismicRichText field={slice.primary.maintext} />
          <div className={styles.cardHolder}>
            {slice.items.map((i, index) => {
              return (
                <div className={styles.card} key={index}>
                  <PrismicNextImage field={i.cardicon} alt="" />{" "}
                  {/*Colocando o alt="" para não dar erro no console */}
                  <PrismicRichText field={i.cardtitle} />
                  <PrismicRichText field={i.cardtext} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
