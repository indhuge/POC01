import Styles from "./textarea.module.scss";

const TextArea = ({ id, type, placeholder, pattern, required, onBlur, onChange, name, value }) => {
  return (
    <textarea
      id={id}
      type={type}
      name={name}
      rows="3"
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={Styles.textarea}
      onBlur={onBlur}
      value={value}
    />
  )
}

export default TextArea;