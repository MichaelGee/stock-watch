import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const BasicCard = () => {
  const card = {
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    borderColor: "transparent",
    boxShadow:
      "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
    width: "80vw",
    padding: "12px",
  };

  const FirstRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const SecondRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const CardContent = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <div>
      <div className='site-card-wrapper'>
        <Card style={card} bordered={false}>
          <FirstRow>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
          </FirstRow>
          <SecondRow>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
          </SecondRow>
        </Card>
      </div>
    </div>
  );
};

export default BasicCard;
