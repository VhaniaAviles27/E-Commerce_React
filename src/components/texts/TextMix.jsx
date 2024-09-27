import React from 'react';
import './TextMix.css'; 

function TextMix({ mainText, linkText, onLinkClick, className }) {
  return (
    <div className={`textMix ${className}`}>
      <span className="textSecondary">{mainText}</span>
      <a className="textRed" href="#" onClick={onLinkClick}>
        {linkText}
      </a>
    </div>
  );
}

export default TextMix;
