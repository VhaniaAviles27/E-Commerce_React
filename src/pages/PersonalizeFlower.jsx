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

const PersonalizeFlower = () => {
  const optionsFlowers = ["Rosas", "Margaritas", "Girasoles", "Tulipanes"];
  const optionsSize = [
    "Pequeño (largo: 10cm)",
    "Mediano (largo: 20cm)",
    "Grande (largo: 30cm)",
  ];
  const handleSelect = (valorSeleccionado) => {
    console.log("Opcion selecionada: ", valorSeleccionado);
  };
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

        <div className="containerFlowers">
          <Dropdown
            label="Seleccione el tipo de flor:"
            options={optionsFlowers}
            onSelect={handleSelect}
          />

          <Dropdown
            label="Seleccione el tamaño:"
            options={optionsSize}
            onSelect={handleSelect}
          />

          <InputField label="Cantidad (max. 10):" type="quantity" />
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

export default PersonalizeFlower;
