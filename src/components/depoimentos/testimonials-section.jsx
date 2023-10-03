import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

import styles from './TestimonialsSection.module.scss';

import test from './empresa.jpeg'
import test2 from './workers.jpeg'

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Empresa Agrozil',
            content: 'Estamos incrivelmente satisfeitos com a IndHUGE. Sua tecnologia inovadora tem sido fundamental para prevenir danos em nossos equipamentos. Agora, podemos operar com confiança sabendo que temos a melhor proteção disponível.',
        },
        {
            id: 2,
            name: 'Empresa TrigoTech',
            content: 'A abordagem inovadora da IndHUGE para a prevenção de danos em equipamentos é verdadeiramente impressionante. Sua tecnologia avançada tem se mostrado uma solução eficaz para proteger nossos ativos valiosos.',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className={styles['testimonials-section']}>
            <h2>Histórias de sucesso</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id}>
                        <div className={styles['testimonial']}>
                            <div className={styles['testimonial-image']}>
                                <Image
                                    src={index === 0 ? test : test2}
                                    style={{ maxWidth: '100%', width: '350px', height: '300px' }}
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
}

export default TestimonialsSection;