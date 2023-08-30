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
      Placeholder component for newsletter_slot (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NewsletterSlot;
