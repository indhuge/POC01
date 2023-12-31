import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import Head from "next/head";
import TestimonialsSection from "src/components/depoimentos/testimonials-section.jsx";
import ClientLogosSection from "src/components/logos_clientes/index.jsx";
import Popup from "@/components/PopUpComponent";
import { useRouter } from "next/router";
import Hotjar from "@hotjar/browser";
import LanguageSelector from "./LanguageSelector/LanguageSelector";

const siteId = 3706274;
const hotjarVersion = 6;

function processTags(tags) {
  let s = "";
  tags.forEach((e, index) => {
    s = s.concat(index == tags.lenght ? `${e}` : `${e},`);
  });
  return s;
}

export default function Page({ metaData, children, StaticContent }) {
  const router = useRouter();

  return (
    <main className="page">
      <Popup
        header={StaticContent?.popuptitle}
        text={StaticContent?.popuptext}
        image={StaticContent?.popupimage}
        closeText={StaticContent?.popupclosetext}
      />
      <Head>
        <title>{metaData?.meta_title}</title>
        <link
          rel="canonical"
          href={`http://localhost:3000${metaData?.meta_url}`}
        />
        <meta name="description" content={metaData?.meta_description} />
        <meta property="og:image" content={metaData?.meta_image.url} />
        <meta
          name="robots"
          content="max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
        />
        <meta
          name="keywords"
          content={processTags(metaData?.meta_tags ?? [])}
        />
      </Head>
      <Header
        logoUrl={StaticContent?.logo}
        callToActionText={StaticContent?.call_to_action_text}
        navLinks={StaticContent?.menuitens}
        onCallToActionClicked={() => {
          router.push("/appointment");
        }}
      />
      {children}
      <Footer
        logoUrl={StaticContent?.logo?.url}
        menuFooterTitle={StaticContent?.menu_footer_title}
        navLinks={StaticContent?.menuitens}
        contentTitle={StaticContent?.content_footer_title}
        contentLinks={StaticContent?.content_menu_options}
        phoneNumber={StaticContent?.phone_number}
        email={StaticContent?.email}
        socialTitle={StaticContent?.social_footer_title}
        socialLinks={StaticContent?.social_links}
        copyright={StaticContent?.copyright_text}
      />
      {Hotjar.init(siteId, hotjarVersion)}
      {console.log("hotjar")}
    </main>
  );
}
