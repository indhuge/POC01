import Header from "./header";
import Footer from "./footer";
import { StaticContent, setContentAndReturnPage } from "@/utils/StaticContent";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Page({ metaData, children }) {
  const [rrnd, reqRrnd] = useState(false);

  if (StaticContent === null) {
    setContentAndReturnPage().then((p) => {
      console.log(StaticContent);
      reqRrnd(!rrnd);
    });
  }

  return (
    <main className="page">
      <Head>
        <title>{metaData?.meta_title}</title>
        <meta name="description" content={metaData?.meta_description} />
        <meta property="og:image" content={metaData?.meta_image.url} />
      </Head>
      <Header
        logoUrl={StaticContent?.logo?.url}
        callToActionText={StaticContent?.call_to_action_text}
        navLinks={StaticContent?.menuitens}
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
    </main>
  );
}
