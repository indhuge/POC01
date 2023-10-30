import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { PrismicNextImage } from "@prismicio/next";

const TestimonialsSection = ({ testimonials, mainTitle }) => {
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: "Empresa Agrozil",
  //     content:
  //       "Estamos incrivelmente satisfeitos com a IndHUGE. Sua tecnologia inovadora tem sido fundamental para prevenir danos em nossos equipamentos. Agora, podemos operar com confiança sabendo que temos a melhor proteção disponível.",
  //   },
  //   {
  //     id: 2,
  //     name: "Empresa TrigoTech",
  //     content:
  //       "A abordagem inovadora da IndHUGE para a prevenção de danos em equipamentos é verdadeiramente impressionante. Sua tecnologia avançada tem se mostrado uma solução eficaz para proteger nossos ativos valiosos.",
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="testimonials-section">
      <style jsx>{`
        .testimonials-section {
          text-align: center;
        }

        .slick-slide {
          text-align: center; /* Centralizar o conteúdo dentro do slide */
        }

        .testimonial {
          background-color: #ffffff;
          color: #000;
          padding: 10px; /* Reduzir o padding para tornar o depoimento um pouco menor */
          border-radius: 10px;
          display: inline-block; /* Centralizar o depoimento */
          max-width: 48%; /* Reduzir a largura do depoimento */
          margin: 0 auto; /* Centralizar o depoimento na página */
        }

        .testimonial-image {
          max-width: 100%;
          max-height: 400px;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <h2>{mainTitle}</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id}>
            <div className="testimonial">
              <div className="testimonial-image">
                <PrismicNextImage
                  field={testimonial.image}
                  style={{ maxWidth: "100%", width: "350px", height: "300px" }}
                  alt="Testimonial owner image"
                />
              </div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;
