const nodemailer = require("nodemailer");

async function emailHandler(contactInfo) {
  const { name, email, phone, message, budget } = contactInfo;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "poc01.indhuge@gmail.com",
      pass: "mzdmkcdqxfiskmbw",
    },
  });

  const mailOptions = {
    from: "poc01.indhuge@gmail.com",
    to: "luanf2003@gmail.com",
    subject: "Novo formulário de contato",
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}\nOrçamento: ${budget}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return "Email enviado com sucesso!";
  } catch (error) {
    console.error(error);
    return "Ocorreu um erro ao enviar o email.";
  }
}

const formatEmail = (
  name,
  day,
  month,
  year,
  hour,
  company,
  link
) => `<div style=" box-sizing: border-box;">
    <header style="width: 100%; background-color: #003459">
      <h1 style="color: white; padding: 2rem; margin: 0">IndHUGE</h1>
    </header>
    <div class="content" style="padding-left: 2rem;">
      <h2>Confime seu email</h2>
      <p style="margin: 0.5rem 0 0.5rem 0; font-size:1rem">
        Olá ${name}, este email foi utilizado na reserva de uma demonstração de
        nossos serviços, seguem os dados:
      </p>
      <div class="data"  style="
          font-size: 1rem;
          display: grid;
          grid-template-columns: 7rem auto;
          margin: 1rem 0 1rem 0;
      ">
        <p style="font-size: 1rem; margin: 0">Data:</p>
        <p style="font-size: 1rem; margin-top: 0;">${day}/${month}/${year}</p>
        <p style="font-size: 1rem; margin: 0">Horario:</p>
        <p style="font-size: 1rem; margin-top: 0;">${hour}:00</p>
        <p style="font-size: 1rem; margin: 0">Empresa:</p>
        <p style="font-size: 1rem; margin-top: 0;">${company}</p>
      </div>
      <a href="${link}" style="
        text-decoration: none;
        color: white;
        width: fit-content;
        padding: 1rem 1.5rem;
        background-color: green;
        border-radius: 10px;
        margin: 1rem 0 0 0;
        display: block;
      " >Confimar agendamento</a>
    </div>
</div>`;

async function sendAppointmentConfirmationEmail(info) {
  const { name, email, link, day, month, year, hour, company } = info;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "poc01.indhuge@gmail.com",
      pass: "mzdmkcdqxfiskmbw",
    },
  });

  const mailOptions = {
    from: "poc01.indhuge@gmail.com",
    to: email,
    subject: "Novo formulário de contato",
    html: formatEmail(name, day, month, year, hour, company, link),
  };

  try {
    await transporter.sendMail(mailOptions);
    return "Email enviado com sucesso!";
  } catch (error) {
    console.error(error);
    return "Ocorreu um erro ao enviar o email.";
  }
}

module.exports = {
  emailHandler,
  sendAppointmentConfirmationEmail,
};
