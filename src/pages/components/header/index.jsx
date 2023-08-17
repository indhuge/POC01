import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Styles from "./header.module.scss";
import Button from "./botton";

const Header = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.logotipo}>
                <Image src={Logo} />
            </div>
            <div className={Styles.menu}>

                <Link href="https://google.com">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
                <Button title="Fale conosco" />
            </div>

        </div >
    )
}
export default Header