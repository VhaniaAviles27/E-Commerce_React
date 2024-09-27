import React from 'react';
import './SimpleText.css'; 

function SimpleText({ text, className }) {
  return (
    <div className={`ordinaryText ${className}`}>
      <h2 className="simpleText">{text}</h2>
    </div>
  );
}

export default SimpleText;
