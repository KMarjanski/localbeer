import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import GlobalStyle from "./global-styles/GlobalStyle";
import StoreProvider from "./store/StoreProvider";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <GlobalStyle />
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
