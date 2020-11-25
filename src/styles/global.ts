import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background: #ebf2f5;
  }

  body, input, button, textarea {
    font: 600 18px Roboto, sans-serif;
  }

  /* #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  } */

  button {
    cursor: pointer;
  }
`;
