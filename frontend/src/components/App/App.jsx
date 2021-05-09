import React from "react";

import StyledApp from "./styles";

import { Container } from "react-bootstrap";

import Navigation from "../Nav/Nav";
import Beers from "../Beers/Beers";

const App = () => {
  const { StyledRow } = StyledApp;
  return (
    <>
      <StyledRow className="d-flex justify-content-center justify-content-sm-between">
        <Navigation />
      </StyledRow>
      <Container style={{ marginTop: "5rem" }}>
        <Beers />
      </Container>
    </>
  );
};

export default App;
