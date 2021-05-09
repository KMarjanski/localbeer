import React, { useContext } from "react";
import { StoreContext } from "../../../../store/StoreProvider";

import StyledDeleteBeer from "./styles";

const DeleteBeer = () => {
  const {
    activeData,
    isDeleteBeerModalOpen,
    newBeer,
    setIsBeerModalOpen,
    setIsDeleteBeerModalOpen,
    setNewBeer,
  } = useContext(StoreContext);
  const { Center, StyledButton, StyledModal } = StyledDeleteBeer;

  const handleDelete = () => {
    const { _id } = activeData;
    fetch(`/delete/${_id}`, {
      method: "POST",
    }).then((res) => {
      if (res.status === 200) {
        setIsDeleteBeerModalOpen(false);
        setIsBeerModalOpen(false);
        setNewBeer(!newBeer);
      } else {
        console.log("Something went wrong");
      }
    });
  };

  return (
    <StyledModal
      isOpen={isDeleteBeerModalOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        setIsDeleteBeerModalOpen(false);
      }}
      overlayClassName="Overlay"
    >
      <Center>Are you sure?</Center>
      <Center>
        <StyledButton
          onClick={() => {
            setIsDeleteBeerModalOpen(false);
          }}
        >
          Cancel
        </StyledButton>
        <StyledButton onClick={handleDelete} className="delete">
          Delete
        </StyledButton>
      </Center>
    </StyledModal>
  );
};

export default DeleteBeer;
