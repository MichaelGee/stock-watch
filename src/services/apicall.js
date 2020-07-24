import axios from "axios";

import "moment-timezone";

export const fetchData = async (companyData) => {
  let url = `https://cors-anywhere.herokuapp.com/http://api.marketstack.com/v1/eod/latest/?access_key=${process.env.REACT_APP_API_KEY}&symbols=${companyData}&limit=1`;
  try {
    const {
      data: { data },
    } = await axios.get(url);
    const modifiedData = {
      data: data[0],
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
