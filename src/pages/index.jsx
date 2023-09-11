import styles from './Home.module.scss'
import Header from './components/header'
import Welcome from './components/header/welcome'
import Features from './components/features'
import Contato from './components/contato'
import Footer from './components/footer'
import Newsletter from './components/Newsletter'
import { useEffect } from "react";
import button from './components/button'

export default function Home() {
  function cookies() {
    var _hsp = window._hsp = window._hsp || [];
    _hsp.push(['showBanner']);
  }
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


  return (
    <div className={styles.description}>
      <Header />
      <Welcome />
      <Features />
      <Newsletter />
      <Contato />
      <Footer />

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


    </div >

  );
}
