import axios from "axios";
import moment from "moment";
import "moment-timezone";

// console.log(newYorkTime);
// console.log(newYorkDate);
export const fetchData = async (companyData) => {
  let newYorkTime = moment().tz("America/New_York").format("HH:mm");
  let newYorkDate = moment().tz("America/New_York").format("YYYY-MM-DD");
  let url = `https://sandbox.tradier.com/v1/markets/timesales?symbol=${companyData}&interval=1min&start=${newYorkDate} ${newYorkTime}&end=${newYorkDate} ${newYorkTime}&session_filter=open`;
  try {
    const {
      data: { series },
    } = await axios.get(
      decodeURI(url),

      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer Vy8fLhiAyRiTTaJLbPWPlAppg2hu",
        },
      }
    );
    const modifiedData = {
      data: series.data,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
