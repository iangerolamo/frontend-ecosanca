import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../assets/logoSide.png';

import { Container, ContentWrapper } from './styles';

const mapBoxURL = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

const EcorecyclesMap: React.FC = () => (
  <>
    <Container>
      <ContentWrapper>
        <header>
          <img src={mapMarkerImg} alt="ecosanca" />
          <h2>Escolha um ponto de coleta no mapa</h2>
          <p>Quando for jogar algo fora, repense. Não existe fora.</p>
        </header>

        <footer>
          <strong>São Carlos</strong>
          <span>São Paulo</span>
        </footer>
      </ContentWrapper>

      <MapContainer
        center={[-21.9993935, -47.8919809]}
        zoom={15.5}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={mapBoxURL} />
      </MapContainer>

      <Link to="/" className="create-ecorecycle">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </Container>
  </>
);

export default EcorecyclesMap;
