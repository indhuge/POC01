import Styles from "./contato.module.scss";
import Button from "../../components/button";
import Input from "../input";
import Select from "../select";

const Contato = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.texts}>
        <span>Entre em contato</span>
        <h1>Aumente seu resultado e sua performance</h1>
        <p>Fale com nossos consultores e conheça todas as possibilidades</p>
      </div>
      <div className={Styles.forms}>

        <h1>Fale com um especialista</h1>

        <form>
          <Input type="text" placeholder="Nome completo" required />
          <Input type="email" placeholder="E-mail profissional" required />
          <Input type="tel" placeholder="Celular/Whatsapp" pattern="^(?:\+55\s?)?(?:\(\d{2}\)\s?)?\d{1,2}\s?\d{4,5}-?\d{4}$" required />
          <Input type="text" placeholder="Site" required />
          <Select placeholder="Orçamento para mídia" 
            options=
            {[
              { label: "Orçamento de produto", value: 0 },
              { label: "Empresa pequena", value: 1 },
              { label: "Empresa média", value: 2 },
              { label: "Empresa grande", value: 3 },
            ]}
            required
          />

          <Button title="Enviar" />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Contato;
