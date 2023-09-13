import Input from "@/components/input";
import TextArea from "@/components/textarea";
import { useEffect, useState } from "react";
import Styles from "./BlogComments.module.scss";

async function fetchComments(post_id) {
  const resp = await fetch(`/api/comment/${post_id}`, {
    method: "GET",
  });
  const j = await resp.json();
  return j;
}
async function addComment(message, post_id) {
  const b = {
    message: message,
    post_id: post_id,
  };
  fetch("/api/comment/addComment", {
    method: "POST",
    body: JSON.stringify(b),
  });
}

export default function BlogComments({ post_id }) {
  const [comments, setComments] = useState([]);
  const state = useState({
    comment: "",
  });

  let onCommentChanged = (e) => {
    state.comment = e.target.value;
    console.log(state.comment);
  };

  let onSubmit = (e) => {
    e.preventDefault();
    addComment(state.comment, post_id);
    state.comment = "";
  };

  useEffect(() => {
    fetchComments(post_id).then((j) => {
      setComments(j);
    });
  }, []);

  console.log(comments);
  return (
    <div className={Styles.wrapper}>
      <form onSubmit={onSubmit}>
        <TextArea onChange={onCommentChanged} />
        <Input type="submit" />
      </form>
      <ul>
        {comments.map((c, index) => {
          return (
            <li key={index}>
              <div className={Styles.card}>
                <p>{c.cmt}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
