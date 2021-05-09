import styled from "styled-components";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const StyledModal = styled(Modal)`
  background: green;
  width: 20vw;
  max-width: 50rem;
  min-width: 10rem;
  height: 10vh;
  min-height: 10rem;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  &:focus-visible {
    outline: none !important;
  }
`;

const Center = styled.div`
  text-align: center;
  margin-top: 0.5rem;
`;

const StyledButton = styled(Button)`
  background: transparent;
  border-color: white;
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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

const StyledDeleteBeer = {
  Center,
  StyledButton,
  StyledModal,
};

export default StyledDeleteBeer;
