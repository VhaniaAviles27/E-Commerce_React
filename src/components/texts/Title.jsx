import React from 'react';
import './Title.css'; 

function Title({ text, className }) {
  return (
    <div className={`principalTitle ${className}`}>
      <h2 className="textTitle">{text}</h2>
      <hr className="separator" />
    </div>
  );
}

export default Title;
