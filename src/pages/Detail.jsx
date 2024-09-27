import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/texts/Title";
import "./Pages.css";
import Card from "../components/cards/Card";
import ButtonRef from "../components/buttons-ref/ButtonRef";
import Button from "../components/buttons/Button";
import TextMix from "../components/texts/TextMix";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SimpleText from "../components/texts/SimpleText";
import Subtitle from "../components/texts/Subtitle";

const Detail = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <div className="containerPrincipal">
      <div className="body">
        <Header />
        <div className="detailContainer">
          <div className="photosContainer">
            <div className="columnContainer">
              <Card
                imageSrc="src/assets/images/foto-girasoles.png"
                width="130px"
                height="130px"
              />
              <Card
                imageSrc="src/assets/images/foto-girasoles.png"
                width="130px"
                height="130px"
              />
              <Card
                imageSrc="src/assets/images/foto-girasoles.png"
                width="130px"
                height="130px"
              />
            </div>
            <Card
              imageSrc="src/assets/images/foto-girasoles.png"
              width="420px"
              height="420px"
            />
          </div>
          <div className="productDetail">
            <div className="productPrice">
            <Subtitle text = "Precio Unitario"/>
              <text className = "unitaryPrice">S/.40</text>
            </div>
            <div className="productAdd">
              <ButtonRef
                icon={faMinus}
                className="custom-less"
                onClick={() => alert("Añadir")}
              />
              <SimpleText text = "1"/>
              <ButtonRef
                icon={faPlus}
                className="custom-plus"
                onClick={() => alert("Añadir")}
              />
              <SimpleText text = "Máximo 10 unidades"/>
            
            </div>

            <Button text="AÑADIR AL CARRITO" />
            <TextMix
              mainText="¿Desea personalizar su pedido? "
              linkText="Inicie Sesión"
              onLinkClick={handleLogin}
            />
          </div>
        </div>

        <Title text="PRODUCTOS SIMILARES" />

        <div className="folioContainer">
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="283px"
            height="283px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
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

export default Detail;
