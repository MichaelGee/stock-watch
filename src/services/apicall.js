import axios from "axios";

import "moment-timezone";

export const fetchData = async (companyData) => {
  let url = `http://api.marketstack.com/v1/eod?access_key=${process.env.REACT_APP_API_KEY}&symbols=${companyData}`;
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


