import React from 'react';
import './InputField.css'; 

function InputField({ label, type = "text", className }) {
  return (
    <div className={`inputData ${className}`}>
      <label className="textPrimary">{label}</label>
      <input type={type} className="inputContainer" />
    </div>
  );
}

export default InputField;
