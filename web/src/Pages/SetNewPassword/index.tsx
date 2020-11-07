import React, { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import '../../styles/global.css';
import '../../styles/pages/set-new-password.css';

import logoLoginImg from '../../images/logo-login.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

const SetNewPassword: React.FC = () => {

  const history = useHistory();

  const [ token, setToken ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');


  async function handleSubmit(event: FormEvent){

    if(password === confirmPassword){
      await api.post('new_password', {
        token,
        password
      })
      history.push('/login');
    }
    else{
      alert('Type the same password to confirm!');
      history.push('/new_password');
      window.location.reload();
    }
  }

  return (
    <div className="new-password-container">

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

          
        <form onSubmit={handleSubmit} className="form-new-password-container">
          
          <h2>Redefinição de senha</h2>
          <span>Escolha uma nova senha para você acessar o dashboard do Happy.</span>

          <label htmlFor="token">Token enviado para o seu email</label>
          <input 
          type="text" 
          name="token" 
          required
          value={token}
          onChange={event => setToken(event.target.value)}
          />

          <label htmlFor="password">Nova senha</label>
          <input 
          type="password" 
          security="password"
          name="password" 
          required
          value={password}
          onChange={event => setPassword(event.target.value)}
          />
          
          <label htmlFor="password">Repetir senha</label>
          <input 
          type="password" 
          security="password"
          name="password" 
          required 
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          />

          <button type="submit" className="submit-button">Enviar</button>

        </form>

      </aside>

    </div>
  );
}

export default SetNewPassword;
