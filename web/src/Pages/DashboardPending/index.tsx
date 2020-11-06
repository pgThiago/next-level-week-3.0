import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from '../../utils/mapIcon';

import mapMarker from '../../images/map-marker.svg';
import yellowAlertCircle from '../../images/yellow-alert-circle.svg';
import mapPin from '../../images/map-pin-pending.svg';
import logOut from '../../images/log-out.svg';
import emptyIcon from '../../images/empty-icon.svg';

import '../../styles/global.css';
import '../../styles/pages/dashboard-pending.css';
import { FiArrowRight } from 'react-icons/fi';

import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const DashboardPending: React.FC = () => {
  
  const history = useHistory();

  const [ orphanages, setOrphanages ] = useState<Orphanage[]>([]);

  const token = localStorage.getItem('token');
  if(!token)
    history.push('/');

  useEffect(() => {
    async function getOrphanages(){
      
      const response = await api.get('orphanages_pending');
      setOrphanages(response.data);

    }

    getOrphanages();

  }, []);

  return (
    
    <div className="pending-container">

      <aside>
        <Link to="/orphanagesmap"><img src={mapMarker}   alt="map-marker"  id="map-marker" />   </Link>
        <Link to="/dashboard"><img src={mapPin}      alt="map-pin"     id="map-pin" />      </Link>
        <Link to="/dashboard/pending-orphanages"><img src={yellowAlertCircle} alt="alert-circle"id="alert-circle" /> </Link>
        <Link to="/"><img src={logOut}      alt="log-out"     id="log-out" />      </Link>
      </aside>

      <main>  
        
        <header>
          <h1>Cadastros pendentes</h1>
          <p>{orphanages.length} orfanatos</p>
        </header>
        
        <div className="orphanage-grid">

          {
            orphanages.length !== 0 ? (
            orphanages.map(orphanage => (
            <div className="orphanage-item">
              <Map 
                className="map-styles"
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                key={orphanage.id}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker key={orphanage.id} interactive={false} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <div className="orphanage-item-footer">
              <p>{orphanage.name}</p>
                <div className="buttons">
                  <Link to={{ pathname: '/dashboard/accept-or-decline', state: { data: orphanage } }} className="next-icon" >
                    <FiArrowRight size={20} color="#12D4E0"/>
                  </Link>
                </div>
              </div>
            </div>
            ))
            ) : (
              <div className="empty-area-container">
                <img src={emptyIcon} alt="icon" />
                <span>Nenhum no momento</span>
              </div>
            )
          }          

        </div>
        
      </main>

    </div>

  );
}

export default DashboardPending;