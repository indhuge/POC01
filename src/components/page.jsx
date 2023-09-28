import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Page({ metaData, children, StaticContent }) {
  return (
    <main className="page">
      <Head>
        <title>{metaData?.meta_title}</title>
        <link
          rel="canonical"
          href={`http://localhost:3000${metaData?.meta_url}`}
        />
        <meta name="description" content={metaData?.meta_description} />
        <meta property="og:image" content={metaData?.meta_image.url} />
      </Head>
      <Header
        logoUrl={StaticContent?.logo}
        callToActionText={StaticContent?.call_to_action_text}
        navLinks={StaticContent?.menuitens}
      />
      <div>{children}</div>
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
