import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "./botton";
import menuIcon from "/public/icons/menu-outline.svg"
import {useEffect, useState} from "react"

var isExpanded = true
var inMobile = false

function onSizeChanged()
{
    let menu = document.getElementById("menu")
    let header = document.getElementById("header")
    if(header.offsetWidth <= 731 && isExpanded)
    {
        toogleMenu()
    }
    else if((header.offsetWidth >= 731) && !isExpanded)
    {
        menu.classList.remove(Styles.hidden)
        menu.classList.remove(Styles.expanded)
        isExpanded = false
    }
}

function toogleMenu() {
    let header = document.getElementById("header")
    let menu = document.getElementById("menu")
    if(!isExpanded)
    {
        menu.classList.add(Styles.expanded)
        menu.classList.remove(Styles.hidden)
        isExpanded = true
    }
    else
    {
        menu.classList.add(Styles.hidden)
        menu.classList.remove(Styles.expanded)
        isExpanded = false
    }    
}

const Header = () => {
    
    useEffect(() => {
        window.addEventListener("resize", onSizeChanged)
        window.addEventListener
        onSizeChanged()
    })    


    return (
        <div className={Styles.main} id="header">
            <div className={Styles.container}>
                <div className={Styles.logotipo}>
                    <Image src={Logo} />
                </div>
                <div className={Styles.menu} id="menu">

                    <Link href="https://google.com">Home</Link>
                    <Link href="/">O que fazemos</Link>
                    <Link href="/">Cases</Link>
                    <Button title="Fale conosco" />
                </div>
                <Image className={Styles.icon} src={menuIcon} onClick={toogleMenu}/>
            </div >
        </div>
    )
}
export default Header