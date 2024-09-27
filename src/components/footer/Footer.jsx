import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import ButtonRef from "../buttons-ref/ButtonRef";

const Footer = () => {
  return (
    <header className="header-container">
      <div className="copyright">
        <p>Copyrigth | All rights reserved Mrs. Moon Design Company</p>
      </div>
      <div className="header-icons">
        <ButtonRef icon={faFacebook} className="custom-fb" onClick={() => alert("Facebook")}/>
        <ButtonRef icon={faInstagram} className="custom-ig" onClick={() => alert("Instagram")}/>
        <ButtonRef icon={faTiktok} className="custom-tk" onClick={() => alert("TikTok")}/>
      </div>
    </header>
  );
};

export default Footer;
