import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.scss";
import Button from "../button";
import menuIcon from "/public/icons/menu-outline.svg";
import { PrismicNextImage } from "@prismicio/next";

var isOpen = false;
var inMobile = false;

function closeMenu() {
  console.log("close");
  menu.style = [];
  isOpen = false;
}

function toggleMenu() {
  var menu = document.getElementById("menu");

  if (isOpen) {
    closeMenu();
  } else {
    menu.style.display = "flex";
    isOpen = true;
  }
}

var captalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Header = ({
  logoUrl,
  callToActionText,
  navLinks,
  onCallToActionClicked,
}) => {
  return (
    <div className={Styles.main} id="main">
      <div className={Styles.container}>
        <div className={Styles.logotipo}>
          <Link href={"/"} prefetch={true} shallow={true}>
            <PrismicNextImage
              field={logoUrl}
              alt="IndHuge logo"
              width={160}
              height={160}
            />
          </Link>
        </div>
        <div className={Styles.menu} id="menu">
          {navLinks?.map((n, index) => {
            return (
              <Link key={index} href={n.link} prefetch={true} shallow={true}>
                {n.link_title}
              </Link>
            );
          })}
          <Button
            title={callToActionText}
            onClick={() => {
              onCallToActionClicked();
            }}
          />
        </div>
        <Image
          alt="Menu Icon"
          className={Styles.icon}
          src={menuIcon}
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};
export default Header;
