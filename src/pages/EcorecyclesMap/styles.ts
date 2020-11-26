import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vh;

  position: relative;
  display: flex;
`;

export const ContentWrapper = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29d183 0%, #00c77b 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }
  }

  footer{
    display: flex;
    flex-direction: column;
    line-height: 24px;

    strong {
      font-weight: 800;
    }
  }
`;
