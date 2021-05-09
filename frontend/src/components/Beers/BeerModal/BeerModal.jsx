import React, { useContext } from "react";

import DeleteBeer from "./DeleteBeer/DeleteBeer";
import EditBeer from "./EditBeer/EditBeer";

import { StoreContext } from "../../../store/StoreProvider";

import StyledBeerModal from "./styles";

const BeerModal = () => {
  const {
    Center,
    StyledButton,
    StyledImage,
    StyledHeader,
    StyledModal,
    ToLeft,
  } = StyledBeerModal;

  const {
    activeData,
    isBeerModalOpen,
    logged,
    setIsBeerModalOpen,
    setIsEditBeerModalOpen,
    setIsDeleteBeerModalOpen,
  } = useContext(StoreContext);

  const bytes = activeData.img.data.data;
  let base64 = null;
  if (bytes) {
    base64 = Buffer.from(bytes).toString("base64");
  }

  const handleDelete = () => {
    setIsDeleteBeerModalOpen(true);
  };

  const handleEdit = () => {
    setIsEditBeerModalOpen(true);
  };

  const displayButtons = logged ? (
    <ToLeft>
      <StyledButton onClick={handleEdit}>Edit</StyledButton>
      <StyledButton onClick={handleDelete} className="delete">
        Delete
      </StyledButton>
    </ToLeft>
  ) : (
    ""
  );

  return (
    <>
      <StyledModal
        isOpen={isBeerModalOpen}
        ariaHideApp={false}
        onRequestClose={() => {
          setIsBeerModalOpen(false);
        }}
        overlayClassName="Overlay"
      >
        <StyledImage
          src={`data:image/${activeData.img.contentType};base64, ${
            bytes ? base64 : activeData.img.data.$binary.base64
          }`}
          className="rounded-pill"
        ></StyledImage>

        <Center>
          <StyledHeader className="h3">Brewery name: </StyledHeader>
          <StyledHeader className="h4">{activeData.breweryName}</StyledHeader>
        </Center>

        <Center>
          <StyledHeader className="h3">Beer name: </StyledHeader>
          <StyledHeader className="h4">{activeData.beerName}</StyledHeader>
        </Center>

        <Center>
          <StyledHeader className="h3">Beer type: </StyledHeader>
          <StyledHeader className="h4">{activeData.type}</StyledHeader>
        </Center>

        <Center>
          <StyledHeader className="h3">Description: </StyledHeader>
          <StyledHeader className="h4">{activeData.desc}</StyledHeader>
        </Center>

        {displayButtons}
      </StyledModal>
      <EditBeer />
      <DeleteBeer />
    </>
  );
};

export default BeerModal;
