/**
 * @typedef {import("@prismicio/client").Content.PostTitleSliceSlice} PostTitleSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PostTitleSliceSlice>} PostTitleSliceProps
 * @param {PostTitleSliceProps}
 */
const PostTitleSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for post_title_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PostTitleSlice;
