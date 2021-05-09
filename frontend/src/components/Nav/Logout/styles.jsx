import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
  background: transparent;
  border-color: white;
  margin-left: 0.5rem;
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

const StyledLogout = {
  StyledButton,
};

export default StyledLogout;
