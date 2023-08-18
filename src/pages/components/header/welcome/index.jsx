import ParticleBackground from "../../ParticleBackground";
import Button from "../botton";
import Styles from "./welcome.module.scss";
import Teste from "../../teste";
const Welcome = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.text}>
          <h1>Melhor agência de marketing do bairro</h1>
          <p>
            Somos uma agencia de performance digital, aceleramos vendas e
            aquisição de leads para grandes marcas
          </p>
          <Button title="Aumentar vendas" kind="secundary" />
        </div>
        <div className={Styles.image}>
            <Teste />
        </div>
      </div>
      <div className={Styles.particles}>
        <ParticleBackground/>
      </div>
    </div>
  );
};

export default Welcome;
