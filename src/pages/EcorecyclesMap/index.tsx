import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import logoSide from '../../assets/logoSide.png';
// import mapMarkerImg from '../../assets/map-marker.svg';

import mapIcon from '../../utils/mapIcon';

import { Container, ContentWrapper } from './styles';

import api from '../../services/api';

const mapBoxURL = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

interface Recycle {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const EcorecyclesMap: React.FC = () => {
  const [recycles, setRecycles] = useState<Recycle[]>([]);

  useEffect(() => {
    api.get('/ecorecycles').then((response) => {
      setRecycles(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <ContentWrapper>
          <header>
            <img src={logoSide} alt="ecosanca" />
            <h2>Escolha um ponto de coleta no mapa</h2>
            <p>Quando for jogar algo fora, repense. Não existe fora.</p>
          </header>

          <footer>
            <strong>São Carlos</strong>
            <span>São Paulo</span>
          </footer>
        </ContentWrapper>

        <Map
          center={[-21.9993935, -47.8919809]}
          zoom={15.5}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url={mapBoxURL} />

          {recycles.map((recycle) => (
            <Marker
              key={recycle.id}
              icon={mapIcon}
              position={[recycle.latitude, recycle.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {recycle.name}
                <Link to={`/ecorecycle/${recycle.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          ))}
        </Map>

        <Link to="/ecorecycle/create" className="create-ecorecycle">
          <FiPlus size={32} color="#FFF" />
        </Link>
      </Container>
    </>
  );
};

export default EcorecyclesMap;
