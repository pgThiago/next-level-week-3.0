import React from 'react';

import { Link } from 'react-router-dom';

import logoDeleteOrphanage from '../../images/logo-delete-orphanage.svg';

import '../../styles/pages/delete-orphanage-page.css';

const DeleteOrphanagePage: React.FC = () => {
  return (
    <div className="delete-page-container">

      <div className="text-side">
        <Link to="dashboard" onClick={ () => {} } className="delete-button">
          Excluir!
        </Link>

        <span>Você tem certeza que quer excluir orphanage.name?</span>

        <Link to="dashboard" onClick={ () => {} } className="back-to-map-button">
          Voltar para o mapa
        </Link>
      </div>

      <div>
        <img src={logoDeleteOrphanage} alt="logo delete orphanage image"/>
      </div>

    </div>
  );
}

export default DeleteOrphanagePage;
