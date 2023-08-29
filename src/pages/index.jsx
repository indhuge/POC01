import styles from "./Home.module.scss";
import Header from "./components/header";
import Welcome from "./components/header/welcome";
import Features from "./components/features";
import Contato from "./components/contato";
import Footer from "./components/footer";
import Newsletter from "./components/Newsletter";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

function queryContent() {
  const client = createClient();
  return client.getSingle("homepage");
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState();

  // useEffect(() => {
  //   window.botpressWebChat.init({
  //     composerPlaceholder: "Chat with IndHelp",
  //     botConversationDescription: "Tire suas duvidas",
  //     botId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
  //     hostUrl: "https://cdn.botpress.cloud/webchat/v0",
  //     messagingUrl: "https://messaging.botpress.cloud",
  //     clientId: "a65625bb-64c9-4a57-b4db-a7bd2aa1270b",
  //     botName: "IndHelp",
  //   });
  // });
  if (!page) {
    queryContent().then((p) => {
      setIsLoading(false);
      setPage(p);
      console.log(p);
    });
  }

  if (isLoading) {
    return <h1>Is Loading</h1>;
  }

  return (
    <div className={styles.description}>
      <Header logoUrl={page.data.logo.url} callToActionText={page.data.call_to_action_text}/>
      <Welcome />
      <Features />
      <Newsletter />
      <Contato />
      <Footer />
      <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
    </div>
  );
}
