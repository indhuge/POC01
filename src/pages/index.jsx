import styles from "./Home.module.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Newsletter from "./components/Newsletter";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

function queryContent() {
  const client = createClient();
  return client.getSingle("homepage");
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState();

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

  if (!page) {
    queryContent().then((p) => {
      setIsLoading(false);
      setPage(p);
    });
  }

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
      <Header
        logoUrl={page.data.logo.url}
        callToActionText={page.data.call_to_action_text}
        navLinks={page.data.menuitens}
      />
      <SliceZone slices={page.data.slices} components={components} />
      <Footer
        logoUrl={page.data.logo.url}
        menuFooterTitle={page.data.menu_footer_title}
        navLinks={page.data.menuitens}
        contentTitle={page.data.content_footer_title}
        contentLinks={page.data.content_menu_options}
        phoneNumber={page.data.phone_number}
        email={page.data.email}
        socialTitle={page.data.social_footer_title}
        socialLinks={page.data.social_links}
        copyright={page.data.copyright_text}
      />

      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=indhugep1t1"
      ></script>
    </div>
  );
}
