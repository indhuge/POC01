import ParticleBackground from "../../ParticleBackground";
import Button from "../botton";
import Styles from "./welcome.module.scss";
import Teste from "../../teste";
const Welcome = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.text}>
          <h1>Geramos impacto positivo no planeta</h1>
          <p>
            Na IndHuge sabemos que a Manutencäo Inteligente é sustentével.
            Veja como ajudamos nossos clientes a alcancar maior
            sustentabilidade social, economica e ambiental.
          </p>
          <Button title="Saber Mais" kind="secundary" />
        </div>
        <div className={Styles.image}>
            <Teste />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
