import React from "react";
import styled from "styled-components";

const Brand = styled.h1`
  color: white;
  text-align: left;
  padding: 1rem;
`;

const BlueBanner = styled.div`
  background-color: #015ABE;
  height: 20rem;
`;

const Banner = () => {
  return (
    <div>
      <BlueBanner>
        <Brand>Stock Watch</Brand>
      </BlueBanner>
    </div>
  );
};

export default Banner;
