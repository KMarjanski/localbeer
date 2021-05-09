import React, { useContext } from "react";

import { Col, Row } from "react-bootstrap";
import { StoreContext } from "../../../store/StoreProvider";

import StyledLoginFrom from "./styles";

const LoginForm = () => {
  const {
    Center,
    StyledButton,
    StyledForm,
    StyledFormControl,
    StyledParagraph,
  } = StyledLoginFrom;

  const {
    errMsg,
    setErrMsg,
    setLogged,
    setUser,
    setIsLoginModalOpen,
    setIsRegisterModalOpen,
  } = useContext(StoreContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const pass = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    }).then((res) => {
      if (res.status === 200) {
        setLogged(true);
        setUser(user);
        setIsLoginModalOpen(false);
      } else if (res.status === 404) {
        setErrMsg(true);
        setTimeout(() => {
          setErrMsg(false);
        }, 1000);
      }
    });
    // if (user === "KM" && pass === "123") {
    //   setLogged(true);
    //   setUser(user);
    //   setIsLoginModalOpen(false);
    // } else {
    //   setErrMsg(true);
    //   setTimeout(() => {
    //     setErrMsg(false);
    //   }, 1000);
    // }
  };

  const showErr = errMsg ? "visible" : "";

  const handleRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <Center>
        <h2>Login</h2>
      </Center>
      <StyledForm method="post" onSubmit={handleLogin}>
        <Row className="d-flex justify-content-center">
          <Col xs="auto" className="p-1">
            <StyledFormControl type="text" placeholder="User..." />
          </Col>
          <Col xs="auto" className="p-1">
            <StyledFormControl type="password" placeholder="Password..." />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="auto" sm={6} className="p-1 text-center">
            <StyledButton type="submit">Login</StyledButton>
          </Col>
          <Col xs="auto" sm={6} className="p-1 text-center">
            <StyledButton type="button" onClick={handleRegister}>
              Register
            </StyledButton>
          </Col>
        </Row>
      </StyledForm>
      <Row className="d-flex justify-content-center">
        <Col xs="auto" className="p-1 my-auto">
          <StyledParagraph className={showErr}>
            Wrong username or password
          </StyledParagraph>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
