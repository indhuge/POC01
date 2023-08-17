import Button from "../botton";
import Styles from "./welcome.module.scss";
import Image from "next/image";
import BannerWelcome from "public/Leads.svg";
const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Melhor agência de marketing do bairro</h1>
            <p>Somos uma agencia de performance digital,
                aceleramos vendas e aquisição de leads para grandes marcas</p>
            <Button title="Aumentar vendas" kind="secundary" />
        </div>
        <div className={Styles.image}>
            <Image src={BannerWelcome} alt="Banner Welcome" />
        </div>
    </div>;
};

export default Welcome;