import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    overflow-x: hidden;
  }
  body {
    background-color: #546E7A;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #root {
    width: 100vw;
  }
`;

export default GlobalStyle;
