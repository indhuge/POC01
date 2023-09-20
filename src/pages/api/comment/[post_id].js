import { getCommentsByPostId } from "@/DataBase/Controller/commentController";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { post_id } = req.query;
    const ret = await getCommentsByPostId(post_id);
    res.status(200).json(ret);
  }
}
