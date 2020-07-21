import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const Title = styled.div`
  background: #e8ecef;
  padding: 10px 18px;
  font-weight: 600;
  color: black;
`;

const Tesla = ({ data: { price, open, close, high, low, volume, vwap } }) => {
  return (
    <div>
      <CardWrapper>
        <Card className='card'>
          <Title>Tesla</Title>
          <Card.Grid className='card-grid' hoverable={false}>
            Price: ${price}
          </Card.Grid>
          <Card.Grid className='card-grid' hoverable={false}>
            Open: {open}
          </Card.Grid>
          <Card.Grid className='card-grid' hoverable={false}>
            Close: {close}
          </Card.Grid>
          <Card.Grid className='card-grid' hoverable={false}>
            High: {high}
          </Card.Grid>
          <Card.Grid className='card-grid' hoverable={false}>
            Low: {low}
          </Card.Grid>
          <Card.Grid className='card-grid' hoverable={false}>
            Volume: {volume}
          </Card.Grid>
        </Card>
      </CardWrapper>
    </div>
  );
};

export default Tesla;
