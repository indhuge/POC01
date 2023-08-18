const Select = ({ placeholder, required, options, onChange }) => {
  return (
    <select required={required} placeholder={placeholder} onChange={onChange}>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select >
  )
}

export default Select;