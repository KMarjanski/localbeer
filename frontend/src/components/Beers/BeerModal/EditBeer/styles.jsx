import styled from "styled-components";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

const Center = styled.div`
  text-align: center;
  margin-top: 0.3rem;
`;

const StyledButton = styled(Button)`
  background: transparent;
  border-color: white;
  margin-top: 0.5rem;
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
  &:disabled {
    background: transparent !important;
    border: none !important;
  }
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 63%;
  left: 43%;
`;

const StyledModal = styled(Modal)`
  background: green;
  width: 30vw;
  height: 40vh;
  min-height: 25rem;
  min-width: 18rem;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  opacity: 1;
  &:focus-visible {
    outline: none !important;
  }
`;

const StyledForm = styled(Form)`
  display: inline;
  position: absolute;
  top: 12%;
  left: 12%;
`;

const StyledFormControl = styled(Form.Control)`
  background: transparent;
  border-color: white;
  color: white;
  width: 24vw;
  min-width: 15rem;
  border-radius: 5px;
  padding: 0.4rem;
  &:focus {
    background: transparent;
    color: white;
  }
  &::placeholder {
    color: white;
  }
`;

const StyledEditBeer = {
  Center,
  StyledButton,
  StyledForm,
  StyledFormControl,
  StyledModal,
  StyledParagraph,
};

export default StyledEditBeer;
