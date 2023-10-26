import TestimonialsSection from "@/components/depoimentos/testimonials-section";
import { asText } from "@prismicio/client";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSliceSlice} TestimonialsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSliceSlice>} TestimonialsSliceProps
 * @param {TestimonialsSliceProps}
 */
const TestimonialsSlice = ({ slice }) => {
  const t = slice.items.map((e, index) => {
    return {
      id: index,
      name: e.company_name,
      content: asText(e.content),
      image: e.customerimage,
    };
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TestimonialsSection testimonials={t} />
    </section>
  );
};

export default TestimonialsSlice;
