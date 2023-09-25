import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Page from "@/components/page";

function queryContent() {
  const client = createClient();
  return client.getSingle("homepage");
}

export async function getStaticProps() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const metadata = {
    meta_description: page.data.meta_description,
    meta_image: page.data.meta_image,
    meta_title: page.data.meta_title,
    /// TODO: Check compatibility to commit: bedf52541aa4051a40016b03ebc919a2f40b8007
    meta_url: page.url,
  };

  return {
    props: {
      page,
      metadata,
    },
  };
}

export default function Home({ page, metadata }) {
  // const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState();

  function cookies() {
    var _hsp = window._hsp = window._hsp || [];
    _hsp.push(['showBanner']);
  }

  useEffect(() => {
    async function loadBotpress() {
      await window.botpressWebChat?.init({
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

  // if (!page) {
  //   queryContent().then((p) => {
  //     setIsLoading(false);
  //     setPage(p);
  //   });
  // }

  // if (isLoading) {
  //   return (
  //     <>
  //       <script
  //         src="https://cdn.botpress.cloud/webchat/v0/inject.js"
  //         async
  //       ></script>
  //       <div className={styles.Loading}>
  //         <h1>Carregando</h1>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <Page metaData={metadata}>
      <div className={styles.description}>
        <SliceZone slices={page.data.slices} components={components} />


        <button type="button" id="hs_show_banner_button"
          style={{
            backgroundColor: '#425b76', border: '1px solid #425b76',
            borderRadius: '3px', padding: '10px 16px', textDecoration: 'none', color: '#fff',
            fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'normal', lineHeight: 'inherit',
            textAlign: 'left', textShadow: 'none'
          }}
          onClick={cookies}
        >
          Configurações de cookies
        </button>
        
      </div>
    </Page>
  );
}
