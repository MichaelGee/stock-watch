import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const Apple = ({ data: { price, open, close, high, low, volume, vwap } }) => {
  /*  console.log(data.price); */
  const card = {
    borderRadius: "5px",
    // backgroundColor: "#E1F8EF",
    boxShadow:
      "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
    width: "80vw",
    padding: "0px",
    textAlign: "left",
  };

  return (
    <div>
      <CardWrapper>
        <Card style={card} title='Apple'>
          <Card.Grid hoverable={false}>Price: ${price}</Card.Grid>
          <Card.Grid hoverable={false}>Open: {open}</Card.Grid>
          <Card.Grid hoverable={false}>Close: {close}</Card.Grid>
          <Card.Grid hoverable={false}>High: {high}</Card.Grid>
          <Card.Grid hoverable={false}>Low: {low}</Card.Grid>
          <Card.Grid hoverable={false}>Volume: {volume}</Card.Grid>
        </Card>
      </CardWrapper>
    </div>
  );
};

export default Apple;
