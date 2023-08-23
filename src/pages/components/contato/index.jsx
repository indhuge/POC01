import Styles from "./contato.module.scss";
import axios from "axios";
import Button from "../../components/button";
import Input from "../input";
import Select from "../select";
import ParticleBackground from "../ParticleBackground";
import React, { useState } from "react";
import TextArea from "../textarea";
const Contato = () => {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    orcamento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('sending...')
    console.log(formData)
    try {
      const response = await axios.post('/api/sendEmail', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.texts}>
          <span>Entre em contato</span>
          <h1>Amplie os Horizontes das suas Vendas e Alavanque a Performance da sua Indústria!</h1>
          <div>
            <p>
              Somos o parceiro estratégico ideal para impulsionar suas operações industriais.
              Nossos especialistas altamente qualificados oferecem soluções inovadoras baseadas
              em nosso avançado software de monitoramento.
            </p>
            <p>
              Compreendemos as nuances do setor industrial e personalizamos nossas soluções para atender às suas necessidades específicas.
              De produção à logística, nosso software fornece visibilidade em tempo real e insights valiosos para otimização.
            </p>
            <p>
              Ao nos contatar, você terá acesso a ferramentas que:
            </p>
            <ul>
              <li>Aumentarão a eficiência.</li>
              <li>Reduzirão custos.</li>
              <li>Melhorarão a qualidade.</li>
            </ul>
            <p>
              Estamos prontos para:
            </p>
            <ul>
              <li>Moldar um futuro industrial de sucesso junto com você.</li>
              <li>O próximo passo está a apenas um clique de distância.</li>
            </ul>
          </div>
        </div>
        <div className={Styles.forms} id="form">
          <h1>Fale com um especialista</h1>

          <form onSubmit={handleSubmit}>
            <Input type="text" name="nome" onChange={handleChange} placeholder="Nome completo" required />
            <Input type="email" name="email" onChange={handleChange} placeholder="E-mail profissional" required />
            <Input
              name="telefone"
              type="tel" onChange={handleChange}
              placeholder="Celular/Whatsapp"
              pattern="^(?:\+55\s?)?(?:\(\d{2}\)\s?)?\d{1,2}\s?\d{4,5}-?\d{4}$"
              required
            />
            <TextArea name="mensagem" type="text" onChange={handleChange} placeholder="Mensagem" required />
            <Select
              onChange={handleChange}
              placeholder="Orçamento para mídia"
              name="orcamento"
              options={[
                { label: "Orçamento de produto", value: 0 },
                { label: "Empresa pequena", value: "Empresa pequena" },
                { label: "Empresa média", value: "Empresa média" },
                { label: "Empresa grande", value: "Empresa grande", },
              ]}
              required
            />

            <Button type="submit" title="Enviar" />

          </form>
        </div>
      </div>
      <div className={Styles.particles}>
        <ParticleBackground />
      </div>
    </div>
  );
};
//>>>>>>> merge-dev-gabi2

export default Contato;