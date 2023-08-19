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
      </div>
      <div className={Styles.particles}>
        <ParticleBackground />
      </div>
    </div>
  );
};

export default Contato;
