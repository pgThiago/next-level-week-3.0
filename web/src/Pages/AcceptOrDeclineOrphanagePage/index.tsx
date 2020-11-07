import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiXCircle, FiCheck } from "react-icons/fi";
import mapIcon from '../../utils/mapIcon';
import '../../styles/pages/create-orphanage.css';
import '../../styles/pages/accept-or-decline-orphanage-page.css';
import Sidebar from "../components/Sidebar";

import api from '../../services/api';
import { useLocation, Link, useHistory } from "react-router-dom";

const AcceptOrDeclineOrphanagePage: React.FC = () => {

  const history = useHistory();
  const location = useLocation<any>();
  
  const token = localStorage.getItem('token');

  if(!token)
    history.push('/');  
  
  const { 
    id, 
    latitude, 
    longitude, 
    name, 
    whatsapp, 
    instructions, 
    open_on_weekends, 
    opening_hours, 
    images, about } = location.state.data;
  
  async function acceptOrphanage(){
    
    try{
      await api.post('accept_orphanage/', {
        id
      },{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      );
    }
    catch(error){            
      console.error(error);
    }
    
  }

  
  return (
    
    <div id="page-create-orphanage">
    
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

              <Map 
                center={[latitude, longitude]} 
                style={{ width: '100%', height: 280 }}
                zoom={15}
                >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                
                
                <Marker 
                key={id}
                interactive={false} 
                icon={mapIcon} 
                position={[latitude, longitude]} /> 
                

              </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name"
              value={name}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} 
              value={about}
              />
            </div>

            <div className="input-block">
              <label htmlFor="whatsapp">Número de Whatsapp</label>
              <input id="Whatsapp"
              value={whatsapp}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">

                { images.map((image: any) => {
                  return (
                    <img key={image} src={image.url} alt={name}/>
                  )
                }) }

              </div>

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea 
              id="instructions"
              value={instructions}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours"
              value={opening_hours}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
               
                <button 
                type="button" 
                className={ open_on_weekends ? 'active' : '' }
                >
                  Sim
                </button>
                
                <button 
                type="button"
                className={ !open_on_weekends ? 'active' : '' }
                >
                  Não
                </button>

              </div>
            </div>
          </fieldset>

          <div className="buttons">
            <Link to="/dashboard/pending-orphanages" className="decline-button">
              <FiXCircle size={24} color="#FFF" />
                Recusar
            </Link>
            <Link to="/dashboard/pending-orphanages" onClick={acceptOrphanage} className="accept-button">
              <FiCheck size={24} color="#FFF" />
                Aceitar
            </Link>
          </div>
        </form>
      </main>
    </div>
    
  );
}

export default AcceptOrDeclineOrphanagePage;
/* return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`; */
