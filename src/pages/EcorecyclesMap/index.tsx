import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../../assets/logoSide.png';

import { Container, ContentWrapper } from './styles';

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

      <Link to="/" className="create-ecorecycle">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </Container>
  </>
);

export default EcorecyclesMap;
