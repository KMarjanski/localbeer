import styled from "styled-components";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";

const Center = styled.div`
  margin-left: 9rem;
  margin-top: 0rem;
  margin-right: 0.5rem;
  @media (min-width: 370px) {
    margin-left: 11rem;
  }
  @media (min-width: 470px) {
    margin-left: 13rem;
  }
  @media (min-width: 570px) {
    margin-left: 15rem;
    margin-top: 0.5rem;
  }
  @media (min-width: 670px) {
    margin-left: 17rem;
  }
  @media (min-width: 770px) {
    margin-left: 19rem;
  }
  @media (min-width: 870px) {
    margin-left: 25rem;
    margin-top: 1rem;
  }
`;

const ToLeft = styled.div`
  position: absolute;
  right: 7%;
  bottom: 10%;
`;

const StyledButton = styled(Button)`
  background: transparent;
  border-color: white;
  margin-top: 0.5rem;
  margin-left: 2rem;
  &:hover {
    background: transparent;
    opacity: 0.5;
  }
  &:focus {
    background: transparent;
  }
  &:active {
    background: transparent !important;
  }
  @media (max-width: 370px) {
    margin-left: 0;
  }
  &.delete {
    color: red;
    border-color: red;
    &:hover {
      color: red !important;
      border-color: red !important;
      background: transparent !important;
      opacity: 0.5 !important;
    }
    &:focus {
      color: red !important;
      border-color: red !important;
      background: transparent !important;
    }
    &:active {
      color: red !important;
      border-color: red !important;
      background: transparent !important;
    }
  }
`;

const StyledImage = styled(Image)`
  height: 95%;
  width: 40%;
  object-fit: contain;
  background: white;
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translate(-2%, -50%);
`;

const StyledHeader = styled.p`
  word-break: all;
  &.h3 {
    color: darkgray;
    font-size: 2rem;
    @media (max-width: 670px) {
      font-size: 1.75rem;
    }
    @media (max-width: 570px), (max-height: 870px) {
      font-size: 1.5rem;
    }
    @media (max-width: 470px), (max-height: 730px) {
      font-size: 1.2rem;
    }
    @media (max-width: 370px), (max-height: 630px) {
      font-size: 1rem;
    }
  }
  &.h4 {
    font-size: 1.5rem;
    @media (max-width: 670px) {
      font-size: 1.3rem;
    }
    @media (max-width: 570px), (max-height: 870px) {
      font-size: 1.1rem;
    }
    @media (max-width: 470px), (max-height: 730px) {
      font-size: 0.9rem;
    }
    @media (max-width: 370px), (max-height: 630px) {
      font-size: 0.7rem;
    }
  }
`;

const StyledModal = styled(Modal)`
  background: green;
  width: 80vw;
  max-width: 50rem;
  height: 60vh;
  min-height: 20rem;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:focus-visible {
    outline: none !important;
  }
`;

const StyledBeerModal = {
  Center,
  StyledButton,
  StyledImage,
  StyledModal,
  StyledHeader,
  ToLeft,
};

export default StyledBeerModal;
