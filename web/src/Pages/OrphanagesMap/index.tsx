import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import mapMarkerImg from '../../images/map-marker.svg';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../styles/pages/orphanages-map.css';
import mapIcon from '../../utils/mapIcon';

import api from '../../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {

  const [ orphanages, setOrphanages ] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function getOrphanages(){
      
      const response = await api.get('orphanages');
      console.log(response.data)
      setOrphanages(response.data);

    }

    getOrphanages();

  }, []);

  return (

    <div id="page-map">
      <aside>
        
        <header>
          
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>

        </header>

        <footer>
          <strong>Ananindeua</strong>
          <span>Pará</span>
        </footer>

      </aside>

      <Map 
        center={[ -1.3650306, -48.4431841]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        
        { orphanages.map(orphanage => (
          <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={mapIcon}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            {orphanage.name}
            <Link to={`orphanages/${orphanage.id}`}>
              <FiArrowRight size={32} color="#333" />
            </Link>
          </Popup>
        </Marker>
        
        )) }

      </Map>

      <Link to="orphanages/create" className="create-orphanage">

        <FiPlus size={32} color="#FFF" />

      </Link>
    </div>

  );
}

export default OrphanagesMap;
