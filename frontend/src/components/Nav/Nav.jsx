/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import LoginForm from "./LoginForm/LoginForm";
import Register from "./Register/Register";

import { Col } from "react-bootstrap";
import { StoreContext } from "../../store/StoreProvider";

import StyledNav from "./styles";

const Nav = () => {
  const { Header, StyledBeer, StyledModal, StyledReload } = StyledNav;

  const {
    logged,
    user,
    isLoginModalOpen,
    setIsLoginModalOpen,
    newBeer,
    setNewBeer,
  } = useContext(StoreContext);

  const showUser = logged ? ` ${user}` : "";

  const showUI = logged ? <Logout /> : <Login />;

  return (
    <>
      <StyledModal
        isOpen={isLoginModalOpen}
        ariaHideApp={false}
        onRequestClose={() => {
          setIsLoginModalOpen(false);
        }}
        overlayClassName="Overlay"
      >
        <LoginForm />
      </StyledModal>
      <Register />
      <Col xs="auto" className="my-auto ml-3" align="center">
        <Header>
          Welcome to localbeer{showUser} <StyledBeer />
        </Header>
      </Col>
      <Col xs="auto" className="my-auto mr-3">
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            setNewBeer(!newBeer);
          }}
        >
          <StyledReload />
        </a>
        {showUI}
      </Col>
    </>
  );
};

export default Nav;
