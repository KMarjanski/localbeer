import React, { useContext } from "react";
import imageCompression from "browser-image-compression";

import { Col, Row } from "react-bootstrap";

import { StoreContext } from "../../../../store/StoreProvider";

import StyledEditBeer from "./styles";

const EditBeer = () => {
  const {
    Center,
    StyledButton,
    StyledForm,
    StyledFormControl,
    StyledModal,
    StyledParagraph,
  } = StyledEditBeer;
  const {
    user,
    activeData,
    newBeer,
    uploadStatus,
    isEditBeerModalOpen,
    setIsEditBeerModalOpen,
    setIsBeerModalOpen,
    setNewBeer,
    setUploadStatus,
    setConvertMsg,
    convertMsg,
    passImg,
    setPassImg,
  } = useContext(StoreContext);

  let formEditData = new FormData();

  const handleGetImg = (e) => {
    const imageFile = e.target.files[0];

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    setUploadStatus(true);
    setConvertMsg("Uploading");
    let loop = 0;

    const uploading = setInterval(() => {
      if (loop === 3) {
        loop = 0;
        setConvertMsg("Uploading");
      } else {
        loop++;
        setConvertMsg((prevState) => {
          return prevState + ".";
        });
      }
    }, 1000);

    imageCompression(imageFile, options)
      .then((compressedFile) => {
        clearInterval(uploading);
        setUploadStatus(false);
        setConvertMsg("");
        setPassImg(compressedFile);
        return formEditData;
      })
      .catch((err) => {
        setUploadStatus(false);
        clearInterval(uploading);
        setConvertMsg("");
        console.log("Error: " + err);
      });
    return formEditData;
  };

  const handleEditBeer = (e) => {
    e.preventDefault();
    formEditData.append("Image", passImg);
    formEditData.append("brN", e.target[0].value);
    formEditData.append("bN", e.target[1].value);
    if (e.target[2].value) formEditData.append("bT", e.target[2].value);
    if (e.target[3].value) formEditData.append("dsc", e.target[3].value);
    setPassImg(false);
    fetch(`/edit/${activeData._id}/${user}`, {
      method: "POST",
      body: formEditData,
    })
      .then((formEditData = new FormData()))
      .then(() => {
        setNewBeer(!newBeer);
      })
      .then(() => {
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        setIsEditBeerModalOpen(false);
        setIsBeerModalOpen(false);
      });
  };

  return (
    <StyledModal
      isOpen={isEditBeerModalOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        setIsEditBeerModalOpen(false);
      }}
      overlayClassName="Overlay"
    >
      <Center>
        <h2>Edit Beer</h2>
      </Center>
      <StyledForm
        method="post"
        encType="multipart/form-data"
        onSubmit={handleEditBeer}
      >
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl
              required
              type="text"
              defaultValue={activeData.breweryName}
              placeholder="Brewery name..."
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl
              required
              type="text"
              defaultValue={activeData.beerName}
              placeholder="Beer name..."
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl
              type="text"
              defaultValue={activeData.type ? activeData.type : ""}
              placeholder="Beer type..."
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl
              as="textarea"
              defaultValue={activeData.desc ? activeData.desc : ""}
              placeholder="Description..."
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledForm.File
              onChange={handleGetImg}
              name="photo"
              label="Select photo:"
              accept="image/*"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs="auto" className="p-1">
            <StyledButton type="submit" disabled={uploadStatus}>
              Edit beer
            </StyledButton>
          </Col>
        </Row>
        <StyledParagraph>{convertMsg}</StyledParagraph>
      </StyledForm>
    </StyledModal>
  );
};

export default EditBeer;
