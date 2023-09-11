import nodemailer from "nodemailer";
// import insertClient  from "./mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message, budget } = req.body;

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
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao enviar o email." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
// export const runtime = "edge";
