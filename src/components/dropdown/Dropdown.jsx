import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ label, options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    if (onSelect) {
      onSelect(event.target.value);
    }
  };

  return (
    <div className="comboBox">
      <label className="subtitle">{label}</label>
      <select value={selectedOption} onChange={handleChange} className="dropdown">
        <option value="" disabled>
          -- Selecciona una opción --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
