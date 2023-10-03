import Button from "../../button";
import Styles from "./welcome.module.scss";
import Teste from "../../teste";


const Welcome = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.text}>
          <h1>Geramos impacto positivo no planeta</h1>
          <p>
            Na IndHuge sabemos que a Manutenção Inteligente é sustentável.
            Veja como ajudamos nossos clientes a alcançar maior
            sustentabilidade social, econômica e ambiental.
          </p>
          <Button title="Saber Mais" kind="secundary" onClick={() => { location.href = "https://google.com" }} />
        </div>
        <div className={Styles.image}>
          <Teste />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
