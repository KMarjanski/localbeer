import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoBeerOutline, IoReload } from "react-icons/io5";
import Modal from "react-modal";

const Header = styled.h1`
  display: inline;
  color: white;
`;

const StyledBeer = styled(IoBeerOutline)`
  margin-bottom: 0.95rem;
  stroke-dasharray: 760;
  stroke-dashoffset: 0;
  &:hover {
    animation: animate-beer 2s linear forwards;
  }
  @keyframes animate-beer {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 760;
    }
    100% {
      stroke-dashoffset: 1520;
    }
  }
`;

const StyledReload = styled(IoReload)`
  margin-right: 1rem;
  font-size: 2rem;
  stroke-dasharray: 1030;
  stroke-dashoffset: 0;
  &:active {
    animation: animate-reload 0.3s linear forwards;
  }
  @keyframes animate-reload {
    0% {
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dashoffset: 1030;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

const StyledModal = styled(Modal)`
  background: green;
  width: 30vw;
  min-height: 14rem;
  min-width: 20rem;
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

const StyledNav = {
  Header,
  StyledBeer,
  StyledModal,
  StyledReload,
};

export default StyledNav;
