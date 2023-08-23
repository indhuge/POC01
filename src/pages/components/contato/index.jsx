import Styles from "./contato.module.scss";
import axios from "axios";
import Button from "../../components/button";
import Input from "../input";
import Select from "../select";
import ParticleBackground from "../ParticleBackground";
import React from "react";
import TextArea from "../textarea";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const Contato = () => {
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
        const response = await axios.post('/api/sendEmail', values);
        console.log('res', response.data);
      } catch (error) {
        console.error("api error", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        {/* ... */}
        <div className={Styles.forms}>
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

            <Button type="submit" title="Enviar" disabled={formik.isSubmitting} />

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
