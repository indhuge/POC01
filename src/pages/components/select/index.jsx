import React from 'react';
import Style from './select.module.scss';

const Select = ({ placeholder, required, options, onChange, name }) => {
  return (
    <select required={required} className={Style.select} onChange={onChange} name={name}>
      <option value="" disabled hidden>{placeholder}</option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
