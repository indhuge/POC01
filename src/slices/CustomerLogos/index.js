import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import ClientLogosSection from "@/components/logos_clientes";

/**
 * @typedef {import("@prismicio/client").Content.CustomerLogosSlice} CustomerLogosSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomerLogosSlice>} CustomerLogosProps
 *
 * @param {CustomerLogosProps}
 */
const CustomerLogos = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="es-bounded es-customer-logos"
    >
      <ClientLogosSection
        images={slice.items.map((i) => {
          return { image: i.image };
        })}
      />
    </section>
  );
};

export default CustomerLogos;
