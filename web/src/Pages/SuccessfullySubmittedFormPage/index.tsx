import React from 'react';

import { Link } from 'react-router-dom';

import logoSuccessfullySubmittedForm from '../../images/logo-successfully-submitted-form.svg';

import '../../styles/pages/successfully-submitted-form-page.css';

const SuccessfullySubmittedFormPage: React.FC = () => {
  return (
    <div className="successfully-submitted-page-container">

      <div className="text-side">
        <Link to="dashboard" onClick={ () => {} } className="delete-button">
          Ebaaa!
        </Link>

        <span>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</span>

        <Link to="dashboard" onClick={ () => {} } className="back-to-map-button">
          Voltar para o mapa
        </Link>
      </div>

      <div>
        <img src={logoSuccessfullySubmittedForm} alt="logo delete orphanage"/>
      </div>

    </div>
  );
}

export default SuccessfullySubmittedFormPage;
