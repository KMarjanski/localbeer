/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";

import BeerModal from "./BeerModal/BeerModal";

import { StoreContext } from "../../store/StoreProvider";

import { Col, Row } from "react-bootstrap";
import StyledBeers from "./styles";

const Beers = () => {
  const {
    StyledCard,
    StyledCardImg,
    StyledCardText,
    StyledCardTitle,
    StyledListGroup,
    StyledListGroupItem,
    StyledLoading,
  } = StyledBeers;
  const {
    activeData,
    data,
    user,
    newBeer,
    scrollStatus,
    setActiveData,
    setData,
    setScrollStatus,
    setIsBeerModalOpen,
  } = useContext(StoreContext);

  let timeout = null;

  useEffect(() => {
    fetch(`/getdata/${user}`, {
      method: "GET",
      "Content-type": "application/json",
    })
      .then((response) => response.json())
      .then((thisData) => {
        setData(thisData);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, newBeer]);

  let displayBeers;

  if (data) {
    const rows = [...Array(Math.ceil(data.length / 4))];
    const beerRows = rows.map((row, id) => {
      return data.slice(id * 4, id * 4 + 4);
    });
    displayBeers = beerRows.map((beerRow, i) => {
      return (
        <Row key={i}>
          {beerRow.map((beer, idx) => {
            const bytes = beer.img.data.data;
            let base64 = null;
            if (bytes) {
              base64 = Buffer.from(bytes).toString("base64");
            }
            let index = i * 4 + idx;
            return (
              <Col align="center" key={index}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsBeerModalOpen(true);
                    setActiveData(data[index]);
                  }}
                >
                  <StyledCard className="rounded-pill m-3">
                    <StyledCardImg
                      variant="top"
                      src={`data:image/${beer.img.contentType};base64, ${
                        bytes ? base64 : beer.img.data.$binary.base64
                      }`}
                      className="rounded-pill"
                    />
                    <StyledCard.Body>
                      <StyledListGroup>
                        <StyledListGroupItem>
                          <StyledCardTitle
                            onMouseOver={() => {
                              setScrollStatus("scrolling");
                            }}
                            onScroll={() => {
                              if (timeout) {
                                clearTimeout(timeout);
                              }
                              timeout = setTimeout(() => {
                                timeout = null;
                                setScrollStatus("scroll stopped");
                              }, 500);
                              if (scrollStatus !== "scrolling") {
                                setScrollStatus("scrolling");
                              }
                            }}
                          >
                            {beer.beerName}
                          </StyledCardTitle>
                        </StyledListGroupItem>
                        <StyledListGroupItem className="last">
                          <StyledCardText
                            className="p-2"
                            onMouseOver={() => {
                              setScrollStatus("scrolling");
                            }}
                            onScroll={() => {
                              if (timeout) {
                                clearTimeout(timeout);
                              }
                              timeout = setTimeout(() => {
                                timeout = null;
                                setScrollStatus("scroll stopped");
                              }, 500);
                              if (scrollStatus !== "scrolling") {
                                setScrollStatus("scrolling");
                              }
                            }}
                          >
                            {beer.breweryName}
                          </StyledCardText>
                        </StyledListGroupItem>
                      </StyledListGroup>
                    </StyledCard.Body>
                  </StyledCard>
                </a>
              </Col>
            );
          })}
        </Row>
      );
    });
  }

  const displayLoading = !data ? (
    <StyledLoading>Connecting to data base...</StyledLoading>
  ) : (
    ""
  );

  const displayModal = activeData ? <BeerModal /> : "";

  const isData = data ? data.toString() : "NoData";

  const displayMain =
    isData === "" && !displayLoading ? (
      <StyledLoading>Add new beer dude...</StyledLoading>
    ) : (
      displayBeers
    );

  return (
    <>
      {displayLoading}
      {displayMain}
      {displayModal}
    </>
  );
};

export default Beers;
