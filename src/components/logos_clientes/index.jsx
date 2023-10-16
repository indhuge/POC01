
import React from 'react';
import Image from 'next/image';

import styles from './ClientLogosSection.module.scss'; // Importando o arquivo SCSS

import logo1 from 'public/images/demo/JLL.png';
import logo2 from 'public/images/demo/logo.png';
import logo3 from 'public/images/demo/mcdonalds.png';
import logo4 from 'public/images/demo/workers.jpeg';

const ClientLogosSection = () => {
    return (

        <section className={styles['client-logos-section']}>
            <div className={styles['logo-container']}>
                <Image src={logo1} alt="Logo Cliente 1" width={150} height={75} />
            </div>
            <div className={styles['logo-container']}>
                <Image src={logo2} alt="Logo Cliente 2" width={150} height={75} />
            </div>
            <div className={styles['logo-container']}>
                <Image src={logo3} alt="Logo Cliente 3" width={150} height={75} />
            </div>
            <div className={styles['logo-container']}>

                <Image src={logo4} alt="Logo Cliente 4" width={150} height={75} />
            </div>
        </section>
    );
}

export default ClientLogosSection;
