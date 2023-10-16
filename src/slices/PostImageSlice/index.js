import { PrismicNextImage } from "@prismicio/next";
import Styles from "./PostImageSlice.module.scss";
/**
 *
 * @typedef {import("@prismicio/client").Content.PostImageSliceSlice} PostImageSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PostImageSliceSlice>} PostImageSliceProps
 * @param {PostImageSliceProps}
 */
const PostImageSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.items.map((e, index) => {
        return (
          <div key={index} className={Styles.imageHolder}>
            <PrismicNextImage field={e.image} alt=""/>
            <p>{e.image_legend}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostImageSlice;
