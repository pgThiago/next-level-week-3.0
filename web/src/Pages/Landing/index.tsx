import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../styles/global.css';
import '../../styles/pages/landing.css';

import logoImg from '../../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';

const Landing: React.FC = () => {

  const [ initialLocation, setInitialLocation ] = useState({
    initialLatitude: 0,
    initialLongitude: 0,
  });

  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {
      
      const { latitude, longitude } = position.coords;
      setInitialLocation({
        initialLatitude: latitude,
        initialLongitude: longitude,
      })

    });


  }, []);

  useEffect(() => {
    
    async function getUserCityName(){
      const userLocationInfo = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${initialLocation.initialLatitude}&longitude=${initialLocation.initialLongitude}&localityLanguage=pt-br`);
      const { administrative } = userLocationInfo.data.localityInfo;
      
      const city = administrative[6].name;
      const state = administrative[2].name;
      
      setCity(city);
      setState(state);

    }

    if(initialLocation.initialLatitude !== 0){
      getUserCityName();
    }

  });

  useEffect(() => {
    localStorage.clear();
  });

  return (
    <div id="page-landing">
      
      <div className="content-wrapper">

        <div className="logo">
          
          <img src={logoImg} alt="Happy"/>
          
          <div className="place">
            <strong>{city}</strong>
            <span>{state}</span>
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
