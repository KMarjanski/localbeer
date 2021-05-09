import React, { useContext } from "react";
import imageCompression from "browser-image-compression";

import { Col, Row } from "react-bootstrap";

import { StoreContext } from "../../../store/StoreProvider";

import StyledAddBeer from "./styles";

const AddBeer = () => {
  const {
    Center,
    StyledButton,
    StyledForm,
    StyledFormControl,
    StyledModal,
    StyledParagraph,
  } = StyledAddBeer;
  const {
    newBeer,
    user,
    isAddBeerModalOpen,
    setIsAddBeerModalOpen,
    setNewBeer,
    convertMsg,
    setConvertMsg,
    uploadStatus,
    setUploadStatus,
    passImg,
    setPassImg,
  } = useContext(StoreContext);

  let formData = new FormData();

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
        return formData;
      })
      .catch((err) => {
        setUploadStatus(false);
        clearInterval(uploading);
        setConvertMsg("");
        console.log("Error: " + err);
      });
    return formData;
  };

  const handleAddBeer = (e) => {
    e.preventDefault();
    formData.append("Image", passImg);
    formData.append("brN", e.target[0].value);
    formData.append("bN", e.target[1].value);
    if (e.target[2].value) formData.append("bT", e.target[2].value);
    if (e.target[3].value) formData.append("dsc", e.target[3].value);
    setPassImg(false);
    fetch(`/postdata/${user}`, {
      method: "POST",
      body: formData,
    })
      .then((formData = new FormData()))
      .then(() => {
        setNewBeer(!newBeer);
      })
      .then(() => {
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        setIsAddBeerModalOpen(false);
      });
  };

  return (
    <StyledModal
      isOpen={isAddBeerModalOpen}
      ariaHideApp={false}
      onRequestClose={() => {
        setIsAddBeerModalOpen(false);
      }}
      overlayClassName="Overlay"
    >
      <Center>
        <h2>Add Beer</h2>
      </Center>
      <StyledForm
        method="post"
        encType="multipart/form-data"
        onSubmit={handleAddBeer}
      >
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl
              required
              type="text"
              placeholder="Brewery name..."
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl
              required
              type="text"
              placeholder="Beer name..."
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl type="text" placeholder="Beer type..." />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledFormControl as="textarea" placeholder="Description..." />
          </Col>
        </Row>
        <Row className="d-flex justify-content-start">
          <Col xs="auto" className="p-1">
            <StyledForm.File
              required
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
              Add beer
            </StyledButton>
          </Col>
        </Row>
        <StyledParagraph>{convertMsg}</StyledParagraph>
      </StyledForm>
    </StyledModal>
  );
};

export default AddBeer;
