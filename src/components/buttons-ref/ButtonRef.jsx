import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonRef.css";

function ButtonRef({ icon, className = "", onClick }) {
  return (
    <div className={`circle ${className}`}>
      <button className="icon-button" onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
}

export default ButtonRef;
