import styled from "styled-components";
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
`;

const StyledForm = styled(Form)`
  display: inline;
  position: absolute;
  top: 25%;
  left: 17%;
`;

const StyledFormControl = styled(Form.Control)`
  background: transparent;
  border-color: white;
  color: white;
  &:focus {
    background: transparent;
    color: white;
  }
  &::placeholder {
    color: white;
  }
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: fixed;
  top: 85%;
  left: 31%;
  &.visible {
    opacity: 1;
  }
`;

const StyledLoginForm = {
  Center,
  StyledButton,
  StyledForm,
  StyledFormControl,
  StyledParagraph,
};

export default StyledLoginForm;
