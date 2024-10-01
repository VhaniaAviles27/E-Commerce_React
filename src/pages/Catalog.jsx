import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/texts/Title";
import Card from "../components/cards/Card";
import "./Pages.css";
import Dropdown from "../components/dropdown/Dropdown";
import ButtonRef from "../components/buttons-ref/ButtonRef";
import { fa1, fa2, fa3} from "@fortawesome/free-solid-svg-icons";

const Catalog = () => {
  const options = [
    "Precio mayor a menor",
    "Precio menor a mayor",
    "Lo más vendido",
    "Nuevos productos",
    "Productos de temporada",
  ];
  const handleSelect = (valorSeleccionado) => {
    console.log("Opcion selecionada: ", valorSeleccionado);
  };

  return (
    <div className="containerPrincipal">
      <div className="body">
        
        <Header />
        <Title text="CATÁLOGO" />
        <div className="containerTop">
          <div className="containerDropdown">
          <Dropdown
            label="Ordenar por:"
            options={options}
            onSelect={handleSelect}
          />
          </div>
          
          <div className="containerNumbers">
            <ButtonRef
              icon={fa1}
              className="custom-1"
              onClick={() => alert("Page One")}
            />
            <ButtonRef
              icon={fa2}
              className="custom-2"
              onClick={() => alert("Page Two")}
            />
            <ButtonRef
              icon={fa3}
              className="custom-3"
              onClick={() => alert("Page Three")}
            />
          </div>
        </div>

        
        <div className="folioContainer">
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Girasoles"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-rosas.jpg"
            title="Rosas"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-tulipanes.jpg"
            title="Tulipanes"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-orquideas.jpg"
            title="Orquideas"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
        </div>
        <div className="folioContainer">
          <Card
            imageSrc="src/assets/images/foto-claveles.jpg"
            title="Claveles"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-lirios.jpg"
            title="Lirios"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-stitch.jpg"
            title="Stitch"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-oso.png"
            title="Oso"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
        </div>
        <div className="folioContainer">
          <Card
            imageSrc="src/assets/images/foto-pikachu.jpg"
            title="Pikachu"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-clubpenguin.jpg"
            title="Club Penguin"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-creeper.jpg"
            title="Creeper"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-osito.jpeg"
            title="Pop col"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
        </div>

        
        

        <Footer />
      </div>
    </div>
  );
};

export default Catalog;
