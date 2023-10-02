// ClientLogosSection.js

import React from 'react';
import Image from 'next/image';

import logo1 from './JLL.png';
import logo2 from './logo.png';
import logo3 from './mcdonalds.png';
import logo4 from './mercadolivre.png';

const ClientLogosSection = () => {
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
            <div className="logo-container">
                <Image src={logo1} alt="Logo Cliente 1" width={150} height={75} />
            </div>
            <div className="logo-container">
                <Image src={logo2} alt="Logo Cliente 2" width={150} height={75} />
            </div>
            <div className="logo-container">
                <Image src={logo3} alt="Logo Cliente 3" width={150} height={75} />
            </div>
            <div className="logo-container">
                <Image src={logo4} alt="Logo Cliente 4" width={150} height={75} />
            </div>
        </section>
    );
}

export default ClientLogosSection;
