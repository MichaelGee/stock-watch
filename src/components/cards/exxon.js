import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  @media (max-width: 576px) {
    margin: 1rem;
  }
`;

const Title = styled.div`
  background: #e8ecef;
  padding: 10px 18px;
  font-weight: 600;
  color: black;
  @media (max-width: 576px) {
    font-size: 0.6rem;
  }
`;
// If you want the number at 3DPs, change the two "100s" to "1000s"
const modifyPrice = (price) => {
  return Math.round((price + Number.EPSILON) * 100) / 100;
};
const Exxon = ({ data: { open, close, high, low, volume, adj_high } }) => {
  return (
    <div>
      <CardWrapper>
        <Card className='card'>
          <Title>Apple</Title>
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
          <Card.Grid className='card-grid' hoverable={false}>
            Adjusted High: ${modifyPrice(adj_high)}
          </Card.Grid>
        </Card>
      </CardWrapper>
    </div>
  );
};
export default Exxon;
