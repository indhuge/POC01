import nodemailer from "nodemailer";
// import insertClient  from "./mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message, budget } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "gabrielabarbieri09@gmail.com",
        pass: "asjxbmuxcceatueo",
      },
    });

    const mailOptions = {
      from: "gabrielabarbieri09@gmail.com",
      to: "gabrielabarbieri09@gmail.com",
      subject: "Novo formulário de contato",
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}\nOrcamento: ${budget}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email enviado com sucesso!" });

      let obj = {
        name: name,
        email: email,
        phone: phone,
        budget: budget,
      };
      insertClient(obj);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao enviar o email." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
// export const runtime = "edge";
