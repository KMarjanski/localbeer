import React, { useContext } from "react";

import AddBeer from "../AddBeer/AddBeer";

import { StoreContext } from "../../../store/StoreProvider";

import StyledLogout from "./styles";

const Logout = () => {
  const { StyledButton } = StyledLogout;
  const {
    setLogged,
    setUser,
    isAddBeerModalOpen,
    setIsAddBeerModalOpen,
  } = useContext(StoreContext);

  const handleLogout = () => {
    setLogged(false);
    setUser("nouser");
  };

  const handleAddBeer = () => {
    setIsAddBeerModalOpen(true);
  };

  const displayAddModal = isAddBeerModalOpen ? <AddBeer /> : "";

  return (
    <>
      <StyledButton onClick={handleAddBeer}>Add beer</StyledButton>
      <StyledButton onClick={handleLogout}>Logout</StyledButton>
      {displayAddModal}
    </>
  );
};

export default Logout;
