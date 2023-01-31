import React, { useState } from 'react';
import './Input.scss';

export const Input = ({ placeholder, title, isDate, value, onChange, name }) => {
  const [inputType, setInputType] = useState('text');

  return (
    <div className="input-component">
      <label>
        <span>{title}</span>
        <input
          type={isDate && inputType}
          placeholder={placeholder}
          onFocus={() => isDate && setInputType('date')}
          onBlur={() => isDate && setInputType('text')}
          value={value}
          onChange={onChange}
          name={name}
          required
        />
      </label>
    </div>
  );
};
