import Styles from "./textarea.module.scss";

const TextArea = ({ type, placeholder, pattern, required, onBlur, onChange, name }) => {
  return (
    <textarea
      type={type}
      name={name}
      rows="3"
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={Styles.textarea}
      onBlur={onBlur}
    />
  )
}

export default TextArea;