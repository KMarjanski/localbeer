import React, { useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import StyledLogin from "./styles";

const Login = () => {
  const { StyledButton } = StyledLogin;

  const { setIsLoginModalOpen } = useContext(StoreContext);

  return (
    <StyledButton
      onClick={() => {
        setIsLoginModalOpen(true);
      }}
    >
      Login / Register
    </StyledButton>
  );
};

export default Login;
