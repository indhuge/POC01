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

const Header = ({ logoUrl, callToActionText, navLinks }) => {
  return (
    <div className={Styles.main} id="main">
      <div className={Styles.container}>
        <div className={Styles.logotipo}>
          <img src={logoUrl} />
        </div>
        <div className={Styles.menu} id="menu">
          {
            Object.keys(navLinks[0]).map((e) => {
              return (
                <Link href={navLinks[0][e].url}>{e}</Link>
              )
            })
          }
          <Button
            title={callToActionText}
            onClick={() => {
              location.href = "#form";
            }}
          />
        </div>
        <Image className={Styles.icon} src={menuIcon} onClick={toggleMenu} />
      </div>
    </div>
  );
};
export default Header;
