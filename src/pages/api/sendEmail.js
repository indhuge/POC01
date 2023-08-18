import { SMTPClient } from "emailjs";

export default async function handler(req, res) {
    const { messageBody } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.EMAIL,
        host: "smtp.hotmail.com",
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: "gabrielabarbieri09@gmail.com",
            to: "gabrielabarbieri09@gmail.com",
            subject: "Lead - Landingpage",
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({ message: "Send Mail" });
}