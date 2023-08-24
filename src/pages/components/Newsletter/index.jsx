import axios from "axios";
import Styles from "./Newsletter.module.scss";
import { useState } from "react";
import Input from "../input";

async function register(_email) {
  const res = await fetch("/api/mailChimp", {
    body: JSON.stringify({
      email: _email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const { error } = await res.json();
  if (error) console.log(error);

}

export default function Newsletter() {
  let state = useState({
    email: ""
  });

  let onEmailChaged = (e) => {
    let upEmail = e.target.value;
    state.email = upEmail;
  };

  let submit = async (e) => {
    e.preventDefault();
    console.log(state.email);
    register(state.email);
    state.email = "";
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <h1>Fique por dentro das novidades!</h1>
        <form onSubmit={submit}>
          <input
            type="email"
            name="email"
            placeholder="Insira seu email"
            value={state.email}
            onChange={onEmailChaged}
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
