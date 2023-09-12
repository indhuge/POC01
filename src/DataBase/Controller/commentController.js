export async function addComment(text, postId) {
  const model = require("../model/comment");
  const result = await model.create({
    post_id: postId,
    cmt: text,
  });

  return result;
}
