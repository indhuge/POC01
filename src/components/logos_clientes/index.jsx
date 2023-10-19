// ClientLogosSection.js

import React from "react";
import Image from "next/image";

import { PrismicNextImage } from "@prismicio/next";

const ClientLogosSection = ({ images }) => {
  return (
    <section className="client-logos-section">
      <style jsx>{`
        .client-logos-section {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 50px 0;
        }

        .logo-container {
          margin: 0 10px;
        }
      `}</style>
      <div className="container flex flex-row gap-4 bg-white px-4 py-4 rounded">
        {images.map((e, i) => {
          return (
            <PrismicNextImage
              key={i}
              className="object-scale-down h-20"
              field={e.image}
              alt="Logo Cliente 1"
            />
          );
        })}
      </div>
    </section>
  );
};

export default ClientLogosSection;
