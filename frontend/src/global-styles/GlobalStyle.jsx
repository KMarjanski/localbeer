import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    overflow-x: hidden;
    background: green;
    color: white;
}

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(95, 168, 0, 0.3);
  }
`;
export default GlobalStyle;
