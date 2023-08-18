import Styles from "./input.module.scss";

const Input = ({ type, placeholder, pattern, required, onBlur }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={Styles.input}
      onBlur={onBlur}
    />
  )
}

export default Input;