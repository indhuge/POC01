/**
 * @typedef {import("@prismicio/client").Content.ContactFormSliceSlice} ContactFormSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSliceSlice>} ContactFormSliceProps
 * @param {ContactFormSliceProps}
 */
const ContactFormSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_form_slice (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default ContactFormSlice;
