import React from 'react';

export default function Textfield(props) {
  const { type, handleChange, valueProp, name } = props;
  return (
    <div>
      <input name={name} type={type} value={valueProp} placeholder={type} onChange={handleChange} />
    </div>
  );
}
