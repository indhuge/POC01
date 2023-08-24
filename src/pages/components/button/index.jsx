import Styles from "./button.module.scss";
// provisorio para testar o botao

const Button = ({ title, kind, onClick, type, disabled }) => {
  const generationClassByKind = () => {
    if (kind === "secundary") return Styles.secundary;
    if (kind === "full") return Styles.full;

    return Styles.primary;
  };

  return (
    <button
      type={type}
      className={`${Styles.button} ${generationClassByKind()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;