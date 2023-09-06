import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PostTitleSliceSlice} PostTitleSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PostTitleSliceSlice>} PostTitleSliceProps
 * @param {PostTitleSliceProps}
 */
const PostTitleSlice = ({ slice }) => {
  console.log(slice.items);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      {slice.items.map((e, index) => {
        return (
          <div key={index}>
            <PrismicRichText field={e.content} />
          </div>
        );
      })}
    </section>
  );
};

export default PostTitleSlice;
