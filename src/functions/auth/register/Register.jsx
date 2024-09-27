import React from "react";
import "./Register.css";
import Title from "../../../components/texts/Title";
import InputField from "../../../components/inputs/InputField";
import TextMix from "../../../components/texts/TextMix";
import Button from "../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="containerPrincipal">
      <div className="body">
        <Title text="REGÍSTRATE" />
        <InputField label="Nombre:" type="nombre" />
        <InputField label="Correo:" type="correo" />
        <InputField label="Celular:" type="celular" />
        <InputField label="Contraseña:" type="contraseña" />
        <InputField label="Repetir contraseña:" type="repetir-contraseña" />
        <Button text="REGISTRAR" />
        <TextMix
          mainText="¿Ya tienes una cuenta? "
          linkText="Inicia Sesión"
          onLinkClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default Register;
