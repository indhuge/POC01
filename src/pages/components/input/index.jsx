import Styles from "./input.module.scss";

const Input = ({ id, type, placeholder, pattern, required, onBlur, onChange, name }) => {
  return (
    <input
      id={id}
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