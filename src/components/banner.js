import React from "react";
import styled from "styled-components";

const Brand = styled.h1`
  color: white;
  text-align: left;
  padding: 1rem;
  margin-left: 2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const BlueBanner = styled.div`
  background-color: #015abe;
  height: 15rem;
  @media (max-width: 576px) {
    height: 10rem;
  }
`;

const BannerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Banner = () => {
  return (
    <div>
      <BlueBanner>
        <Brand>Stock Watch</Brand>
        <BannerText>Realtime update for NYSE companies.</BannerText>
      </BlueBanner>
    </div>
  );
};

export default Banner;
