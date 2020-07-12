import React from "react";
import styled from "styled-components";
const Banner = () => {
  const Banner = styled.div`
    background-color: #184df1;
    height: 20rem;
  `;

  const Brand = styled.h1`
    color: white;
    text-align: left;
    padding: 1rem;
  `;
  return (
    <div>
      <Banner>
        <Brand>Stock Watch</Brand>
      </Banner>
    </div>
  );
};

export default Banner;
