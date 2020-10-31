import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/global.css';
import '../../styles/pages/login.css';
import '../../styles/pages/set-new-password.css';

import logoLoginImg from '../../images/logo-login.svg';
import { FiArrowLeft } from 'react-icons/fi';

const SetNewPassword: React.FC = () => {

  function handleSubmit(){

  }

  return (
    <div className="container">

      <main>

        <img src={logoLoginImg} alt="Happy"/>

        <div className="place">
            <strong>Ananindeua</strong>
            <span>Pará</span>
        </div>

      </main>

      <aside>
        
        <Link to="/" className="back-icon">
          <FiArrowLeft size={20} color="#12D4E0" />
        </Link>

        <form onSubmit={handleSubmit} className="form-container">
          
          <h2>Redefinição de senha</h2>
          <span>Escolha uma nova senha para você acessar o dashboard do Happy.</span>
          
          <label htmlFor="password">Nova senha</label>
          <input type="password" name="password" required />
          
          <label htmlFor="password">Repetir senha</label>
          <input type="password" name="password" required />

          <button type="submit" className="submit-button">Enviar</button>

        </form>

      </aside>

    </div>
  );
}

export default SetNewPassword;
