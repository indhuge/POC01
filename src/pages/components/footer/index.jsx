import Link from "next/link";
import Image from "next/image";
import Styles from "./footer.module.scss";
import Logo from "/public/images/logo.svg";
import IconInstagram from "/public/icons/icon-instagram.svg";
import IconFacebook from "/public/icons/icon-facebook.svg";
import IconLinkedin from "/public/icons/icon-linkedin.svg";
import IconYoutube from "/public/icons/icon-youtube.svg";
import RotatingGears from "../rotatingGears";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const Footer = ({
  logoUrl,
  menuFooterTitle,
  navLinks,
  contentTitle,
  contentLinks,
  phoneNumber,
  email,
  socialTitle,
  socialLinks,
  copyright
}) => {
  return (
    <div className={Styles.container} id="footer">
      <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
        <Link href="/">
          <img src={logoUrl} alt="Logo" />
        </Link>
        <h1 className={Styles.title}>
          <PrismicRichText field={phoneNumber} />
        </h1>
        <PrismicRichText field={email} />
      </div>
      <div className={Styles.column}>
        <PrismicRichText field={menuFooterTitle} />
        <div>
          {navLinks?.map((n, index) => {
            return (
              <Link key={index} className={Styles.nav_links} href={n.link.url}>
                {n.link_title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={Styles.column}>
        <PrismicRichText field={contentTitle} />
        <div>
          {contentLinks?.map((n, index) => {
            return (
              <Link key={index} className={Styles.nav_links} href={n.link.url}>
                {n.link_title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={`${Styles.column} ${Styles.alignRight}`}>
        <PrismicRichText field={socialTitle} />
        <div className={Styles.icons}>
          {
            socialLinks?.map((l, index) => {
              return (
                <Link key={index} href={l.link.url}>
                  <PrismicNextImage field={l.icon} />
                </Link>
              )
            })
          }
        </div>
        <div>
          <RotatingGears />
        </div>
      </div>
      <div className={Styles.allRightReserved}>
        {copyright}
      </div>
    </div>
  );
};

export default Footer;
