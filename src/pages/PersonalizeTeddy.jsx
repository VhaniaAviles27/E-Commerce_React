import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/texts/Title";
import "./Pages.css";
import Button from "../components/buttons/Button";
import Dropdown from "../components/dropdown/Dropdown";
import InputField from "../components/inputs/InputField";
import Card from "../components/cards/Card";
import SimpleText from "../components/texts/SimpleText";

const PersonalizeTeddy = () => {
  return (
    <div className="containerPrincipal">
      <div className="body">
        <Header />

        <Title text="PERSONALICE SU PEDIDO" />

        <div className="containerOptions">
          <Button text="FLORES" />
          <Button text="PELUCHE" />
          <Button text="DEDICATORIA" />
        </div>

        <SimpleText text="Escoja el peluche de su preferencia" />
        <div className="selectTeddy">
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
          <Card
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="150px"
            height="150px"
          />
        </div>

        <Button text="MOSTRAR" />
        <Card
          imageSrc="src/assets/images/foto-girasoles.png"
          width="600px"
          height="600px"
        />
        <div className="containerPriceSave">
          <div className="containerPrice">
            <SimpleText text="Price: " />
            <InputField type="price" />
          </div>

          <Button text="GUARDAR" />
        </div>
        <Button text="AÑADIR AL CARRITO" />

        <Footer />
      </div>
    </div>
  );
};

export default PersonalizeTeddy;
