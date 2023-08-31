import { PrismicRichText } from "@prismicio/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Styles from "./contato.module.scss";
import Button from "@/pages/components/button";
import Input from "@/pages/components/input";
import Select from "@/pages/components/select";
import ParticleBackground from "@/pages/components/ParticleBackground";
import TextArea from "@/pages/components/textarea";

/**
 * @typedef {import("@prismicio/client").Content.ContactFormSliceSlice} ContactFormSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSliceSlice>} ContactFormSliceProps
 * @param {ContactFormSliceProps}
 */
const ContactFormSlice = ({ slice }) => {
  const [buttonStatus, setButtonStatus] = useState("Enviar");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      budget: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("E-mail obrigatório"),
      phone: Yup.string().required("Telefone obrigatório"),
      message: Yup.string(),
      budget: Yup.string().required("Orçamento obrigatório"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("values", values);
      console.log("verificiation", formik.isValid);
      try {
        setButtonStatus("Enviando...");
        const response = await axios.post("/api/sendEmail", values);
        console.log("res", response.data);
        setButtonStatus("Enviado com sucesso!");
        formik.resetForm();
      } catch (error) {
        setButtonStatus("Erro ao enviar");
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
    <section className={Styles.main}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={Styles.wrapper}>
        <div className={Styles.container}>
          <div className={Styles.texts}>
            <span>
              <PrismicRichText field={slice.primary.actionTitle} />
            </span>
            <PrismicRichText field={slice.primary.main_title} />
            <div>
              <PrismicRichText field={slice.primary.text_body} />
            </div>
          </div>
          <div className={Styles.forms} id="form">
             <PrismicRichText field={slice.primary.forms_title} />

            <form onSubmit={formik.handleSubmit}>
              {/* Name */}
              <Input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={slice.primary.name_placeholder}
                required
                value={formik.values.name}
              />
              {/* Email */}
              <Input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={slice.primary.email_placeholder}
                required
                value={formik.values.email}
              />
              {/* Phone */}
              <Input
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={slice.primary.phone_placeholder}
                required
                value={formik.values.phone}
              />
              {/* Message */}
              <TextArea
                name="message"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={slice.primary.message_placeholder}
                required
                value={formik.values.message}
              />
              {/* Budget */}
              <Select
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={slice.primary.contact_placeholder}
                name="budget"
                options={[
                  // { label: "Orçamento de produto", value: 0 },
                  { label: "Empresa pequena", value: "Empresa pequena" },
                  { label: "Empresa média", value: "Empresa média" },
                  { label: "Empresa grande", value: "Empresa grande" },
                ]}
                required
                value={formik.values.budget}
              />
              <Button type="submit" title={slice.primary.send_button_text} />
            </form>
          </div>
        </div>
        <div className={Styles.particles}>
          <ParticleBackground />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSlice;
