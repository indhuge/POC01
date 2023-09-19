const { emailHandler } = require("../../utils/emailHandler");

export default async function handler(req, res) {
  const contactInfo = req.body;
  if (req.method === "POST") {
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
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}\nOrcamento: ${budget}`,
    };

    try {
      const response = await emailHandler(contactInfo);
      console.log(response);
      res.status(200).json({ message: response });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao enviar o email." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
