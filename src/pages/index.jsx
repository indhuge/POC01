import styles from './Home.module.scss'
import Header from '../components/header'
import Welcome from '../components/header/welcome'
import Features from '../components/features'
import Contato from '../components/contato'
import Footer from '../components/footer'
import Newsletter from '../components/Newsletter'
import { useEffect } from "react";

function queryContent() {
  const client = createClient();
  return client.getSingle("homepage");
}

export default function Home() {
  useEffect(() => {
    async function loadBotpress() {
      await window.botpressWebChat.init({
        composerPlaceholder: "Chat with IndHelp",
        botConversationDescription: "Tire suas duvidas",
        botId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
        hostUrl: "https://cdn.botpress.cloud/webchat/v0",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
        botName: "IndHelp",
      });
    }
    loadBotpress();
  });

  if (isLoading) {
    return (
      <>
        <script
          src="https://cdn.botpress.cloud/webchat/v0/inject.js"
          async
        ></script>
        <div className={styles.Loading}>
          <h1>Carregando</h1>
        </div>
      </>
    );
  }

  return (

    <div className={styles.description}>
      <Header />
      <Welcome />
      <Features />
      <Newsletter />
      <Contato />
      <Footer />
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/43719883.js"></script>
      <script src="https://cdn.botpress.cloud/webchat/v0/inject.js" async></script>
    </div>
  );
}
