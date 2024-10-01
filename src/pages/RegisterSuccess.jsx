import React from 'react';
import './Pages.css'; // Asumiendo que usarás CSS externo para estilos
import SimpleText from '../components/texts/SimpleText';
import Subtitle from '../components/texts/Subtitle';

const SuccessRegister = () => {
  return (
    <div className="successRegister">
      <div className="successIcon">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>
      <Subtitle text = "USTED SE HA REGISTRADO CON ÉXITO"/>
      <SimpleText text = "Revise su correo para confirmar su cuenta"/>
    </div>
  );
};

export default SuccessRegister;
