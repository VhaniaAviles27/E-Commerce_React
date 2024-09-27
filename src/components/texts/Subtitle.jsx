import React from 'react';
import './Subtitle.css'; 

function Subtitle({ text, className }) {
  return (
    <div className={`normalText ${className}`}>
      <h2 className="subtitleText">{text}</h2>
    </div>
  );
}

export default Subtitle;
