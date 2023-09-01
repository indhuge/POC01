import Newsletter from "@/pages/components/Newsletter";

/**
 * @typedef {import("@prismicio/client").Content.NewsletterSlotSlice} NewsletterSlotSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsletterSlotSlice>} NewsletterSlotProps
 * @param {NewsletterSlotProps}
 */
const NewsletterSlot = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Newsletter
        mainText={slice.primary.maintext}
        inputPlaceholder={slice.primary.placeholdertext}
        buttonText={slice.primary.buttontext}
      />
    </section>
  );
};

export default NewsletterSlot;
