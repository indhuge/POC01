import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.scss";
import Button from "../button";
import menuIcon from "/public/icons/menu-outline.svg";

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

const Header = ({ logoUrl, callToActionText, navLinks }) => {
  return (
    <div className={Styles.main} id="main">
      <div className={Styles.container}>
        <div className={Styles.logotipo}>
          <img src={logoUrl} />
        </div>
        <div className={Styles.menu} id="menu">
          {navLinks?.map((n, index) => {
            return (
              <Link key={index} href={n.link}>
                {n.link_title}
              </Link>
            );
          })}
          <Button
            title={callToActionText}
            onClick={() => {
              location.href = "#form";
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
