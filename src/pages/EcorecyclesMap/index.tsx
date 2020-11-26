import React from 'react';
import { Container, ContentWrapper } from './styles';
import mapMarkerImg from '../../assets/logoSide.png';

const EcorecyclesMap: React.FC = () => (
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
  </Container>
);

export default EcorecyclesMap;
