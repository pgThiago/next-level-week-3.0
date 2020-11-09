import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoDeleteOrphanage from '../../images/logo-delete-orphanage.svg';
import '../../styles/global.css';
import '../../styles/pages/delete-orphanage-page.css';
import api from '../../services/api';

const DeleteOrphanagePage: React.FC = () => {

  const location = useLocation<any>();

  const token = localStorage.getItem('token');
  const { id, name } = location.state;

  async function handleDeleteOrphanage(){
    await api.delete(`orphanage/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  return (
    <div className="delete-page-container">

      <div className="text-side">
        <Link to="/dashboard" onClick={handleDeleteOrphanage} className="page-delete-button">
          Excluir!
        </Link>

        <span>Você tem certeza que quer excluir {name}?</span>

        <Link to="/app" className="back-to-map-button">
          Voltar para o mapa
        </Link>
      </div>

      <div>
        <img src={logoDeleteOrphanage} alt="logo delete orphanage"/>
      </div>

    </div>
  );
}

export default DeleteOrphanagePage;
