import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Title from "../components/texts/Title";
import "./Pages.css";
import Button from "../components/buttons/Button";
import SimpleText from "../components/texts/SimpleText";
import Card from "../components/cards/Card";
import ButtonRef from "../components/buttons-ref/ButtonRef";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import InputField from "../components/inputs/InputField";

const Cart = () => {
  return (
    <div className="containerPrincipal">
      <div className="body">
        <Header />

        <Title text="CARRITO" />
        <div className="containerProductCart">
          <div className="containerView">
            <SimpleText text="VISTA PREVIA" />
            <Card
              imageSrc="src/assets/images/foto-girasoles.png"
              width="320px"
              height="320px"
            />
          </div>
          <div className="containerDetail">
            <SimpleText text="DESCRIPCIÓN DEL PEDIDO" />
            <div className="details">
            <text>Tipo de flor:</text>
            <text>Tamaño:</text>
            <text>Cantidad:</text>
            <text>Peluche:</text>
            <text>Texto de la dedicatoria:</text>
            </div>
            
            <div className="productFinalCost">
              <div className="productAdd">
                <SimpleText text="Cantidad: " />
                <ButtonRef
                  icon={faMinus}
                  className="custom-less"
                  onClick={() => alert("Añadir")}
                />
                <SimpleText text="1" />
                <ButtonRef
                  icon={faPlus}
                  className="custom-plus"
                  onClick={() => alert("Añadir")}
                />
              </div>

              <div className="containerPrice">
                <SimpleText text="Price: " />
                <InputField type="price" />
              </div>
            </div>
          </div>
        </div>
        <Button text="COMPRAR" />

        <Footer />
      </div>
    </div>
  );
};

export default Cart;
