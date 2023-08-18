import Styles from "./contato.module.scss";
import Button from "../../components/button";
import Input from "../input";
import Select from "../select";
import { useState } from "react";
import axios from "axios";
const Contato = () => {
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [site, setSite] = useState(null);
  const [midia, setMidia] = useState(null);
  const SendEmail = () => {
    axios.post("/api/sendEmail",
      { messageBody: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}, Site: ${site}, Midia: ${midia}`, })
      .then(() => console.log("Uhuuu")).catch(() => console.log("Opsss"));
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.texts}>
        <span>Entre em contato</span>
        <h1>Aumente seu resultado de vendas e performance</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      </div>
      <div className={Styles.forms}>

        <h1>Fale com um especialista</h1>

        <form>
          <Input type="text" placeholder="Nome completo" onBlur={(e) => setNome(e.target.value)} required />
          <Input type="email" placeholder="E-mail profissional" onBlur={(e) => setEmail(e.target.value)} required />
          <Input type="tel" placeholder="Celular/Whatsapp" pattern="^(?:\+55\s?)?(?:\(\d{2}\)\s?)?\d{1,2}\s?\d{4,5}-?\d{4}$" onBlur={(e) => setTelefone(e.target.value)} required />
          <Input type="text" placeholder="Site" onBlur={(e) => setSite(e.target.value)} required />
          <Select placeholder="Orçamento para mídia"
            options=
            {[
              { label: "Orçamento para mídia", value: 0 },
              { label: "Instagram", value: 1 },
              { label: "Facebook", value: 2 },
            ]}
            onChange={(e) => setMidia(e.target.value)}
            required
          />

          <Button title="Enviar" onClick={() => SendEmail()} />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Contato;
