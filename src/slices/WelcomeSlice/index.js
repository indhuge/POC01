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
      Placeholder component for welcome_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default WelcomeSlice;
