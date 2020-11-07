import React, { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import '../../styles/global.css';
import '../../styles/pages/login.css';
import '../../styles/pages/forgot-password.css';

import logoLoginImg from '../../images/logo-login.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

const ForgotPassword: React.FC = () => {

  const history = useHistory();

  const [ email, setEmail ] = useState('');

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    await api.post('forgot_password', {
      email
    })
    history.push('/new_password');
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
          
          <h2>Esqueci a senha</h2>
          <span>Sua redefinição de senha será enviada para o e-mail cadastrado.</span>
          
          <label htmlFor="e-mail">E-mail</label>
          <input 
          type="text" 
          name="e-mail" 
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
          />         

          <button type="submit" className="submit-button">Enviar</button>

        </form>

      </aside>

    </div>
  );
}

export default ForgotPassword;
