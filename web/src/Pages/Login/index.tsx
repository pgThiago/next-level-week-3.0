import React, { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import '../../styles/global.css';
import '../../styles/pages/login.css';

import logoLoginImg from '../../images/logo-login.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

const Login: React.FC = () => {

  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    try{
      const response = await api.post('authenticate', {
        email, password
      });

      const { token } = response.data;

      localStorage.setItem('token', token);

      history.push('/dashboard');
    }
    catch(error){
      console.log(error);
    }

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
          
          <h2>Fazer login</h2>
          
          <label htmlFor="e-mail">E-mail</label>
          <input 
          type="text" 
          name="e-mail" 
          value={email}
          onChange={event => setEmail(event.target.value)}
          required />

          <label htmlFor="password">Senha</label>
          <input 
          type="current-password" 
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required />

            <div className="checkbox-container">   
              <input type="checkbox" name="checkbox" className="checkbox" />
              <p>Lembrar-me</p>
              <Link to="forgot-password" className="forgot-password">Esqueci minha senha</Link>
            </div>            

          <button type="submit" className="submit-button">Entrar</button>

        </form>

      </aside>

    </div>
  );
}

export default Login;
