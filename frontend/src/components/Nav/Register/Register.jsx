import React, { useContext } from "react";

import { Col, Row } from "react-bootstrap";
import { StoreContext } from "../../../store/StoreProvider";
import StyledRegister from "./styles";

const Register = () => {
  const {
    Center,
    StyledButton,
    StyledForm,
    StyledFormControl,
    StyledParagraph,
    StyledModal,
  } = StyledRegister;

  const {
    isRegisterModalOpen,
    setIsRegisterModalOpen,
    errMsg,
    setErrMsg,
    setIsLoginModalOpen,
  } = useContext(StoreContext);

  const showErr = errMsg ? "visible" : "";

  const handleRegister = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const pass = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";
    fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    }).then((res) => {
      if (res.status === 200) {
        setIsRegisterModalOpen(false);
        setIsLoginModalOpen(true);
        alert(`Succesfully registered!\nYou can now log in!`);
      } else if (res.status === 404) {
        setErrMsg(true);
        setTimeout(() => {
          setErrMsg(false);
        }, 1000);
      }
    });

    //
    // if (user === "KM" || user === "" || pass === "") {
    //   setErrMsg(true);
    //   setTimeout(() => {
    //     setErrMsg(false);
    //   }, 1000);
    // } else {
    //   setIsRegisterModalOpen(false);
    //   setIsLoginModalOpen(true);
    //   alert(`Succesfully registered!\nYou can now log in!`);
    // }
  };

  return (
    <StyledModal
      isOpen={isRegisterModalOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        setIsRegisterModalOpen(false);
      }}
      overlayClassName="Overlay"
    >
      <Center>
        <h2>Regiter</h2>
      </Center>
      <StyledForm method="post" onSubmit={handleRegister}>
        <Row className="d-flex justify-content-center">
          <Col xs="auto" className="p-1">
            <StyledFormControl type="text" placeholder="User..." />
          </Col>
          <Col xs="auto" className="p-1">
            <StyledFormControl type="password" placeholder="Password..." />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="auto" className="p-1">
            <StyledButton type="submit">Register</StyledButton>
          </Col>
        </Row>
      </StyledForm>
      <Row className="d-flex justify-content-center">
        <Col xs="auto" className="p-1 my-auto">
          <StyledParagraph className={showErr}>Username taken.</StyledParagraph>
        </Col>
      </Row>
    </StyledModal>
  );
};

export default Register;
