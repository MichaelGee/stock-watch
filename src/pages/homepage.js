import React, { Suspense, lazy } from "react";
import Banner from "../components/banner";
import moment from "moment";
import "moment-timezone";
import { fetchData } from "../services/apicall";
import Loader from "../components/loader";

const Apple = lazy(() => import("../components/cards/apple"));
const Exxon = lazy(() => import("../components/cards/exxon"));
const ATT = lazy(() => import("../components/cards/att"));
const Facebook = lazy(() => import("../components/cards/facebook"));
const Disney = lazy(() => import("../components/cards/disney"));
const Microsoft = lazy(() => import("../components/cards/microsoft"));
const Tesla = lazy(() => import("../components/cards/tesla"));
const Netflix = lazy(() => import("../components/cards/netflix"));

const Homepage = () => {
  const [apple, setApple] = React.useState({});
  const [exxon, setExxon] = React.useState([]);
  const [att, setAtt] = React.useState([]);
  const [facebook, setFacebook] = React.useState([]);
  const [disney, setDisney] = React.useState([]);
  const [microsoft, setMicrosoft] = React.useState([]);
  const [tesla, setTesla] = React.useState([]);
  const [netflix, setNetflix] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const ap = await fetchData("AAPL");
        setApple(ap.data);
        const ex = await fetchData("XOM");
        setExxon(ex.data);
        const t = await fetchData("T");
        setAtt(t.data);
        const fb = await fetchData("FB");
        setFacebook(fb.data);
        const dis = await fetchData("DIS");
        setDisney(dis.data);
        const ms = await fetchData("MSFT");
        setMicrosoft(ms.data);
        const tl = await fetchData("TSLA");
        setTesla(tl.data);
        const nf = await fetchData("NFLX");
        setNetflix(nf.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    let newYorkTime = moment().tz("America/New_York").format("HH:mm");
    let newYorkDate = moment()
      .tz("America/New_York")
      .format("YYYY-MM-DD hh:mm");
    let dayName = moment(newYorkDate).format("dddd");
    if (
      newYorkTime >= "09:30" &&
      newYorkTime <= "16:00" &&
      dayName !== "Saturday" &&
      "Sunday"
    ) {
      //Make call at 9:30am
      setInterval(() => {
        getData();
      }, 30000);
    }
  }, []);

  return (
    <div>
      <Banner />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Suspense fallback={<div />}>
            <Apple data={apple} />
          </Suspense>
          <Suspense fallback={<div />}>
            <Exxon data={exxon} />
          </Suspense>
          <Suspense fallback={<div />}>
            <ATT data={att} />
          </Suspense>
          <Suspense fallback={<div />}>
            <Facebook data={facebook} />
          </Suspense>
          <Suspense fallback={<div />}>
            <Disney data={disney} />
          </Suspense>
          <Suspense fallback={<div />}>
            <Microsoft data={microsoft} />
          </Suspense>
          <Suspense fallback={<div />}>
            <Tesla data={tesla} />
          </Suspense>
          <Suspense fallback={<div />}>
            <Netflix data={netflix} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Homepage;
