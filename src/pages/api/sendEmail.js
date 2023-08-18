import { SMTPClient } from "emailjs";

export default async function handler(req, res) {
    const { messageBody } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL,
        host: "smtp.tuamaeaquelaursa.com",
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: "software_grupo1@tuamaeaquelaursa.com",
            to: "software_grupo1@tuamaeaquelaursa.com",
            subject: "Lead - Landingpage",
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200).json({ message: "Send Mail" });
}