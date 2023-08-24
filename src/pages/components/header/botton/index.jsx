import Styles from "./button.module.scss";
const Button = ({ title, kind , onClick}) => {
    const generationClassByKind = () => {
        if (kind === "secundary") return Styles.secundary;
        return Styles.primary;
    };
    return <button className={`${Styles.button} ${generationClassByKind()}`} onClick={onClick}> {title}</button >

};
export default Button;