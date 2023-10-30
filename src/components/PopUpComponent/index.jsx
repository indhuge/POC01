import { useState } from "react";
import styles from "./PopUpComponent.module.scss";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Popup = ({header, text, image , closeText}) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <div className={styles.fundo} style={{ display: isClosed ? "none" : "flex" }}>
      <div className={styles.container}>
        <div className={styles.header}>
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.text}>
            {header}
          </h2>
          <PrismicRichText className={styles.text} field={text} />
          <PrismicNextImage  
            field={image}
            alt=""  
            width={300}
            height={300}
            className={styles.image}
          />
          <button className={styles.button} onClick={handleClose}>{closeText}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

