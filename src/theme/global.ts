import { createGlobalStyle } from 'styled-components';

import 'typeface-montserrat';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: Montserrat, sans-serif;

    outline: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;

    font-size: 62.5%;

    background: ${({ theme }) => theme.colors.background};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  p, span {
    backface-visibility: hidden;
  }
`;
