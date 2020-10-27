import React from 'react';

import { Link } from 'react-router-dom';

import '../../styles/global.css';
import '../../styles/pages/landing.css';

import logoImg from '../../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

const Landing: React.FC = () => {

  return (
    <div id="page-landing">
      
      <div className="content-wrapper">

        <div className="logo">
          
          <img src={logoImg} alt="Happy"/>
          
          <div className="place">
            <strong>Ananindeua</strong>
            <span>Pará</span>
          </div>

        </div>

        <main>

          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite orfanatos e mude o dia
            de muitas crianças.
          </p>


        </main> 

        <div className="location">

          <Link to="/login" className="go-to-login-button">
            Acesso restrito
          </Link>

        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
        </Link>

      </div>

    </div>
  );
}

export default Landing;
