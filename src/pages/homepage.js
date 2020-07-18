import React from "react";
import Banner from "../components/banner";
import Apple from "../components/cards/apple";
import Exxon from "../components/cards/exxon";

import ATT from "../components/cards/att";
import Facebook from "../components/cards/facebook";

import Disney from "../components/cards/disney";
import Microsoft from "../components/cards/microsoft";
import Tesla from "../components/cards/tesla";
import Netflix from "../components/cards/netflix";
import moment from "moment";
import "moment-timezone";
import { fetchData } from "../services/apicall";

//

const Homepage = () => {
  const [apple, setApple] = React.useState([]);
  const [exxon, setExxon] = React.useState([]);
  const [att, setAtt] = React.useState([]);
  const [facebook, setFacebook] = React.useState([]);
  const [disney, setDisney] = React.useState([]);
  const [microsoft, setMicrosoft] = React.useState([]);
  const [tesla, setTesla] = React.useState([]);
  const [netflix, setNetflix] = React.useState([]);

  React.useEffect(() => {
    // let newYorkTime = moment().tz("America/New_York").format("hh:mm");
    // let newYorkDate = moment().tz("America/New_York").format("YYYY-MM-DD");
    let localDay = moment().format("YYYY-MM-DD");
    let localTime = moment().format("hh:mm");
    const getData = async () => {
      try {
        // World
        const ap = await fetchData("AAPL");
        const ex = await fetchData("XOM");
        const t = await fetchData("T");
        const fb = await fetchData("FB");
        const dis = await fetchData("DIS");
        const ms = await fetchData("MSFT");
        const tl = await fetchData("TSLA");
        const nf = await fetchData("NFLX");
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    //   if (localTime >= "04:04" && localTime <= "11:50") {
    //     //Make call at 9:30am
    //     setInterval(() => {
    //       getData();
    //     }, 30000);
    //   }
  }, []);

  // setInterval(() => {
  //   if (localTime >= "04:04" && localTime <= "11:50") {
  //     //Make call at 9:30am
  //     axios.get(
  //       url,

  //       {
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: "Bearer Vy8fLhiAyRiTTaJLbPWPlAppg2hu",
  //         },
  //       }
  //     );
  //   }
  // }, 10000);

  // let newYorkTime = moment().tz("America/New_York").format("hh:mm");

  //  900000
  // let newYorkTime = moment().tz("America/New_York").format("YYYY-MM-DD");
  //let localDay = moment().format("YYYY-MM-DD hh:mm");
  // let localTime = moment().format("hh:mm");

  // console.log(newYorkTime);
  //console.log(localDay);
  // console.log(localTime);

  return (
    <div>
      <Banner />
      <Apple />
      <Exxon />
      <ATT />
      <Facebook />
      <Disney />
      <Microsoft />
      <Tesla />
      <Netflix />
    </div>
  );
};

export default Homepage;
