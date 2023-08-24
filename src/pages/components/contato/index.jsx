import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import Styles from "./contato.module.scss";
import Button from "../../components/button";
import Input from "../input";
import Select from "../select";
import ParticleBackground from "../ParticleBackground";
import TextArea from "../textarea";

const Contato = () => {
  const [buttonStatus, setButtonStatus] = useState("Enviar"); 


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      budget: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nome obrigatório'),
      email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
      phone: Yup.string().required('Telefone obrigatório'),
      message: Yup.string(),
      budget: Yup.string().required('Orçamento obrigatório'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log('values', values);
      console.log('verificiation', formik.isValid);
      try {
        setButtonStatus('Enviando...');
        const response = await axios.post('/api/sendEmail', values);
        console.log('res', response.data);
        setButtonStatus('Enviado com sucesso!');
        formik.resetForm();
      } catch (error) {
        setButtonStatus('Erro ao enviar');
        console.error("api error", error);
      } finally {
        setSubmitting(false);


        setTimeout(() => {
          setButtonStatus("Enviar");
        }, 5000);
      }
    },

  });
  
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

          <form onSubmit={formik.handleSubmit}>
            {/* Name */}
            <Input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Nome completo"
              required
              value={formik.values.name}
            />
            {/* Email */}
            <Input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="E-mail profissional"
              required
              value={formik.values.email}
            />
            {/* Phone */}
            <Input
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Celular/Whatsapp"
              required
              value={formik.values.phone}
            />
            {/* Message */}
            <TextArea
              name="message"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Mensagem"
              required
              value={formik.values.message}
            />
            {/* Budget */}
            <Select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Orçamento para mídia"
              name="budget"
              options={[
                { label: "Orçamento de produto", value: 0 },
                { label: "Empresa pequena", value: "Empresa pequena" },
                { label: "Empresa média", value: "Empresa média" },
                { label: "Empresa grande", value: "Empresa grande" },
              ]}
              required
              value={formik.values.budget}
            />
            <Button type="submit" title={buttonStatus}/>
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
