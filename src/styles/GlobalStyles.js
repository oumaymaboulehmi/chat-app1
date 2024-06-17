import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #343a40;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  input, button {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
