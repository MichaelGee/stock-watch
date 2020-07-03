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

  const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 0px;
    @media (max-width: 1214px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    @media (max-width: 714px) {
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    }
  `;
  const CardContent = styled.div`
    padding: 1rem;
  `;
  return (
    <div>
      <div className='site-card-wrapper'>
        <Card style={card} bordered={false}>
          <ContentContainer>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
            <CardContent>Card Content</CardContent>
          </ContentContainer>
        </Card>
      </div>
    </div>
  );
};

export default BasicCard;
