import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "../button";
import menuIcon from "/public/icons/menu-outline.svg";
import { useEffect, useState } from "react";

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

const Header = () => {
  return (
    <div className={Styles.main} id="main">
      <div className={Styles.container}>
        <div className={Styles.logotipo}>
          <Image alt="Logo" src={Logo} />
        </div>
        <div className={Styles.menu} id="menu">
          <Link href="#footer">Home</Link>
          <Link href="https://google.com">O que fazemos</Link>
          <Link href="https://google.com">Cases</Link>
          <Button title="Fale conosco" onClick={() => { location.href = '#form' }} />
        </div>
        <Image alt="Menu Icon" className={Styles.icon} src={menuIcon} onClick={toggleMenu} />
      </div>
    </div>
  );
};
export default Header;
