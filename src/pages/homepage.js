import React from "react";
import Banner from "../components/banner";
import Apple from "../components/cards/apple";
import Ali from "../components/cards/ali";
import Amazon from "../components/cards/amazon";
import ATT from "../components/cards/att";
import Facebook from "../components/cards/facebook";
import JP from "../components/cards/jp";
import Master from "../components/cards/master";
import Microsoft from "../components/cards/microsoft";
import Tesla from "../components/cards/tesla";
import Walmart from "../components/cards/walmart";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Apple />
      <Ali />
      <Amazon />
      <ATT />
      <Facebook />
      <JP />
      <Master />
      <Microsoft />
      <Tesla />
      <Walmart />
    </div>
  );
};

export default Homepage;
