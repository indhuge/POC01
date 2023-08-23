import axios from "axios";
import Styles from "./Newsletter.module.scss";
import { useState } from "react";

async function register(_email) {
    const res = await fetch("/api/mailChimp", {
      body: JSON.stringify({
        email: _email,
        name: "none",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) console.log(error);
    else console.log("OK");
//   try {
//     const resp = await axios.post("api/mailChimp", { email: _email });
//     console.log(resp.data);
//   } catch (e) {
//     console.log(e);
//   }
}

export default function Newsletter() {
  let state = useState({
    email: "",
    name: "",
  });

  let onEmailChaged = (e) => {
    let upEmail = e.target.value;
    state.email = upEmail;
  };

  let submit = async (e) => {
    e.preventDefault();
    console.log(state.email);
    register(state.email);
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <h1>Fique por dentro das novidades!</h1>
        <form onSubmit={submit}>
          <input type="text" name="name" placeholder="Insira seu nome" />
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
