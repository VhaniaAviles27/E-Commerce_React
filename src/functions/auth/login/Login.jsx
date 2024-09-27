import React from "react";
import "./Login.css";
import InputField from "../../../components/inputs/InputField";
import Title from "../../../components/texts/Title";
import TextMix from "../../../components/texts/TextMix";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/buttons/Button";

function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="containerPrincipal">
      <div className="body">
        <Title text="INICIA SESIÓN" />
        <InputField label="Correo:" type="email" />
        <InputField label="Contraseña:" type="password" />
        <Button text="INGRESAR" />
        <TextMix
          mainText="¿No tienes una cuenta? "
          linkText="Regístrate"
          onLinkClick={handleRegister}
        />
      </div>
    </div>
  );
}

export default Login;
