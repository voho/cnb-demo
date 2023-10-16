const superagent = require("superagent");
const { parseCsvResponse } = require("./parser");

const url =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

const fetchCnbRates = () => {
  return superagent
    .get(url)
    .retry(3)
    .then((res) => {
      return parseCsvResponse(res.text);
    });
};

module.exports = { fetchCnbRates };
