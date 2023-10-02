import Styles from "./welcome.module.scss";
import { PrismicRichText, PrismicImage } from "@prismicio/react";
import Button from "@/components/button";

/**
 * @typedef {import("@prismicio/client").Content.WelcomeSliceSlice} WelcomeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WelcomeSliceSlice>} WelcomeSliceProps
 * @param {WelcomeSliceProps}
 */
const WelcomeSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.text}>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.text} />
            <Button
              title="Saber Mais"
              kind="secundary"
              onClick={() => {
                location.href = "https://google.com";
              }}
            />
          </div>
          <div className={Styles.image}>
            <PrismicImage field={slice.primary.mainimage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSlice;
