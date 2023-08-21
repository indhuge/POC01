import Styles from "./contato.module.scss";
import { useState } from "react";
import axios from "axios";
const Formulario = () => {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
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
    try {
      const response = await axios.post('/api/sendEmail', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <div className={Styles.container} id="formulario">
    <form onSubmit={handleSubmit}>
      <h2>ENTRE EM CONTATO E TRANSFORME A SUA PRODUÇÃO</h2>
      <input type="text" name="nome" onChange={handleChange} placeholder=" NOME" required />
      <input type="email" name="email" onChange={handleChange} placeholder=" EMAIL" required />
      <input type="text" name="telefone" onChange={handleChange} placeholder=" TELEFONE" pattern="^(?:\+55\s?)?(?:\(\d{2}\)\s?)?\d{1,2}\s?\d{4,5}-?\d{4}$" required />
      <input type="text" name="mensagem" onChange={handleChange} className={Styles.msg} placeholder=" MENSAGEM" required />
      <input type="submit" placeholder=" ENVIAR" />
    </form>
  </div>
}

export default Formulario