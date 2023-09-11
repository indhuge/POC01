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
    to: "poc01.indhuge@gmail.com",
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

module.exports = {
  emailHandler,
};
