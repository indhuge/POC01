import Styles from "./input.module.scss";

const Input = ({ type, placeholder, pattern, required, onBlur, onChange }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={Styles.input}
      onBlur={onBlur}
    />
  )
}

export default Input;