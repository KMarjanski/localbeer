import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup } from "react-bootstrap";

const StyledCard = styled(Card)`
  background: darkgreen;
  max-width: 13rem;
  min-width: 13rem;
`;

const StyledCardImg = styled(Card.Img)`
  max-height: 60vh;
  min-height: 60vh;
  background: transparent;
  object-fit: cover;
`;

const StyledCardText = styled(StyledCard.Text)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    text-overflow: clip;
    overflow: auto;
  }
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background: lightgreen;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: green;
  }
`;

const StyledCardTitle = styled(StyledCard.Title)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:hover {
    text-overflow: clip;
    overflow: auto;
  }
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background: lightgreen;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: green;
  }
`;

const StyledListGroup = styled(ListGroup)``;

const StyledListGroupItem = styled(ListGroup.Item)`
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  &.last {
    border-bottom: none;
  }
`;

const StyledLoading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledBeers = {
  StyledCard,
  StyledCardImg,
  StyledCardText,
  StyledCardTitle,
  StyledListGroup,
  StyledListGroupItem,
  StyledLoading,
};

export default StyledBeers;
