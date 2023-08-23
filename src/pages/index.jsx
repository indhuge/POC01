import styles from "./Home.module.scss";
import Header from "./components/header";
import Welcome from "./components/header/welcome";
import Features from "./components/features";
import Contato from "./components/contato";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.botpressWebChat.init({
      composerPlaceholder: "Chat with IndHelp",
      botConversationDescription: "Tire suas duvidas",
      botId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
      hostUrl: "https://cdn.botpress.cloud/webchat/v0",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
      botName: "IndHelp",
    });
  });

  return (
    <div className={styles.description}>
      <Header />
      <Welcome />
      <Features />
      <Contato />
      <Footer />

      <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
    </div>
  );
}
