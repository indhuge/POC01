import { addComment } from "@/DataBase/Controller/commentController";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { message } = JSON.parse(req.body);

    addComment(message, "NONE");
    res.status(200).json({ ok: message });
  }
}
