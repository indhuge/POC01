import Styles from "./Newsletter.module.scss";
import { useState } from "react";

async function register(email) {
  try {
    const res = await fetch("../api/mailChimp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.error) {
      console.error(data.error);
    } else {
      console.log("Registration successful!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    await register(email);
    setEmail(""); // Reset the email field after submission
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.content}>
        <h1>Fique por dentro das novidades!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Insira seu email"
            value={email}
            onChange={onEmailChanged}
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
