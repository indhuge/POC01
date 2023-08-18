import Styles from "./contato.module.scss";
import Button from "../../components/button";
import Input from "../input";
import Select from "../select";
import ParticleBackground from "../ParticleBackground";

const Contato = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.texts}>
          <span>Entre em contato</span>
          <h1>Aumente seu resultado de vendas e performance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className={Styles.forms}>
          <h1>Fale com um especialista</h1>

          <form>
            <Input type="text" placeholder="Nome completo" required />
            <Input type="email" placeholder="E-mail profissional" required />
            <Input
              type="tel"
              placeholder="Celular/Whatsapp"
              pattern="^(?:\+55\s?)?(?:\(\d{2}\)\s?)?\d{1,2}\s?\d{4,5}-?\d{4}$"
              required
            />
            <Input type="text" placeholder="Site" required />
            <Select
              placeholder="Orçamento para mídia"
              options={[
                { label: "Orçamento para mídia", value: 0 },
                { label: "Instagram", value: 1 },
                { label: "Facebook", value: 2 },
              ]}
              required
            />
            <Button title="Enviar" />
          </form>
        </div>
      </div>
      <div className={Styles.particles}>
        <ParticleBackground />
      </div>
    </div>
  );
};

export default Contato;
