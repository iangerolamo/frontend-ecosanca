import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logoimg.png';

import { Container, ContentWrapper } from './styles';

const Landing: React.FC = () => (
  <Container>
    <ContentWrapper>
      <img src={logoImg} alt="ecosanca" />

      <main>
        <h1>Recicle o seu lixo e ajude o meio ambiente</h1>
        <p>Descubra os pontos de coleta da sua cidade.</p>
      </main>

      <div className="location">
        <strong>São Carlos</strong>
        <span>São Paulo</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </ContentWrapper>
  </Container>

);

export default Landing;
