/**
 * @typedef {import("@prismicio/client").Content.QuizQustionSliceSlice} QuizQustionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuizQustionSliceSlice>} QuizQustionSliceProps
 * @param {QuizQustionSliceProps}
 */
const QuizQustionSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for quiz_qustion_slice (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default QuizQustionSlice;
