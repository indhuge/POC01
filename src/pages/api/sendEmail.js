const { emailHandler } = require("../../utils/emailHandler");

export default async function handler(req, res) {
  const contactInfo = req.body;

  if (req.method === "POST") {
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
