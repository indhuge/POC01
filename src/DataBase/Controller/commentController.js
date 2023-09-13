export async function addComment(text, postId) {
  const model = require("../model/comment");
  const result = await model.create({
    post_id: postId,
    cmt: text,
  });

  return result;
}

export async function getCommentsByPostId(postId) {
  const model = require("../model/comment");
  return await model.findAll({
    where: {
      post_id: postId,
    },
  });
}
