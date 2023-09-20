import {
  addComment,
  getCommentsByPostId,
} from "@/DataBase/Controller/commentController";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message, post_id } = JSON.parse(req.body);

    addComment(message, post_id);
    res.status(200).json({ ok: message });
  }
}
