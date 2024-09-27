import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import ButtonRef from "../buttons-ref/ButtonRef";

const Header = () => {

  const scrollToPromotions = () => {
    const section = document.getElementById('promotions'); // Seleccionar la sección por su id
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll suave a la sección
    }
  };
  return (
    <header className="header-container">
      <div className="logo-placeholder">
        {/* Aquí puedes agregar el logo o dejar un espacio en blanco */}
      </div>
      <nav className="nav-links">
        <a href="/home">Inicio</a>
        <a onClick={scrollToPromotions}>Promociones</a>
        <a href="/catalog">Catálogo</a>
      </nav>
      <div className="header-icons">
        <ButtonRef icon={faCar} className="custom-car" onClick={() => alert("Car")}/>
        <ButtonRef icon={faUser} className="custom-user" onClick={() => alert("User")}/>
        <ButtonRef icon={faShoppingCart} className="custom-shopping-cart" onClick={() => alert("Shopping Cart")}/>
      </div>
    </header>
  );
};

export default Header;
