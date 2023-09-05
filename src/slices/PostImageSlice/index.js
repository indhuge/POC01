/**
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
      Placeholder component for post_image_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PostImageSlice;
