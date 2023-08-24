import React from 'react';
import Style from './select.module.scss';

const Select = ({ id, placeholder, required, options, onChange, onBlur, name , value}) => {
  return (
    <select
      id={id}
      required={required}
      className={Style.select}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      value={value}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
