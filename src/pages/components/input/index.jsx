import Styles from "./input.module.scss";

const Input = ({ type, placeholder, pattern, required, onBlur, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
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