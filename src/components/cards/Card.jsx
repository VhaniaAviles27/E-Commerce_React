import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, description, width, height }) => {
  return (
    <div className="folioCard" style={{ width, height }}>
      <img src={imageSrc} alt={title} className="folioImage" />
      <div className="folioDetails">
        <h3 className="folioTitle">{title}</h3>
        <span className="folioDescription">{description}</span>
      </div>
    </div>
  );
};

export default Card;
