import React from 'react';

import { Link } from 'react-router-dom';

import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from '../../utils/mapIcon';

import mapMarker from '../../images/map-marker.svg';
import yellowAlertCircle from '../../images/yellow-alert-circle.svg';
import mapPin from '../../images/map-pin-pending.svg';
import logOut from '../../images/log-out.svg';
import edit from '../../images/edit.svg';
import trash from '../../images/trash.svg';

import '../../styles/global.css';
import '../../styles/pages/dashboard.css';

const DashboardPending: React.FC = () => {
  return (
    
    <div className="container">

      <aside>
        <Link to="/"><img src={mapMarker}   alt="map-marker"  id="map-marker" />   </Link>
        <Link to="/"><img src={mapPin}      alt="map-pin"     id="map-pin" />      </Link>
        <Link to="/"><img src={yellowAlertCircle} alt="alert-circle"id="alert-circle" /> </Link>
        <Link to="/"><img src={logOut}      alt="log-out"     id="log-out" />      </Link>
      </aside>

      <main>  
        
        <header>
          <h1>Cadastros pendentes</h1>
          <p>2 orfanatos</p>
        </header>
        
        <div className="orphanage-grid">

          <div className="orphanage-item">
            <Map  className="map-styles"
              center={[-1.3225683,-48.3735674]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[-1.3225683,-48.3735674]} />
            </Map>
            
            <div className="orphanage-item-footer">
              <p>Orf. Esperança</p>
              <div className="buttons">
                <button type="button"><img src={edit} alt="edit button"/></button>
                <button type="button"><img src={trash} alt="trash button"/></button>
              </div>
            </div>
          </div>

          <div className="orphanage-item">
            <Map 
              className="map-styles"
              center={[-1.3225683,-48.3735674]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[-1.3225683,-48.3735674]} />
            </Map>

            <div className="orphanage-item-footer">
              <p>Melhores Amigos</p>
              <div className="buttons">
                <button type="button"><img src={edit} alt="edit button"/></button>
                <button type="button"><img src={trash} alt="trash button"/></button>
              </div>
            </div>

          </div>

          <div className="orphanage-item">
            <Map  className="map-styles"
              center={[-1.3225683,-48.3735674]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[-1.3225683,-48.3735674]} />
            </Map>
            
            <div className="orphanage-item-footer">
              <p>Outro</p>
              <div className="buttons">
                <button type="button"><img src={edit} alt="edit button"/></button>
                <button type="button"><img src={trash} alt="trash button"/></button>
              </div>
            </div>
          </div>

          <div className="orphanage-item">
            <Map  className="map-styles"
              center={[-1.3225683,-48.3735674]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[-1.3225683,-48.3735674]} />
            </Map>
            
            <div className="orphanage-item-footer">
              <p>Mais outro</p>
              <div className="buttons">
                <button type="button"><img src={edit} alt="edit button"/></button>
                <button type="button"><img src={trash} alt="trash button"/></button>
              </div>
            </div>
          </div>

          <div className="orphanage-item">
            <Map  className="map-styles"
              center={[-1.3225683,-48.3735674]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[-1.3225683,-48.3735674]} />
            </Map>
            
            <div className="orphanage-item-footer">
              <p>Quinto</p>
              <div className="buttons">
                <button type="button"><img src={edit} alt="edit button"/></button>
                <button type="button"><img src={trash} alt="trash button"/></button>
              </div>
            </div>
          </div>

          <div className="orphanage-item">
            <Map  className="map-styles"
              center={[-1.3225683,-48.3735674]} 
              zoom={16} 
              style={{ width: '100%', height: 280 }}
              dragging={false}
              touchZoom={false}
              zoomControl={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker interactive={false} icon={mapIcon} position={[-1.3225683,-48.3735674]} />
            </Map>
            
            <div className="orphanage-item-footer">
              <p>Sexto</p>
              <div className="buttons">
                <button type="button"><img src={edit} alt="edit button"/></button>
                <button type="button"><img src={trash} alt="trash button"/></button>
              </div>
            </div>
          </div>

        </div>
        
      </main>

    </div>

  );
}

export default DashboardPending;