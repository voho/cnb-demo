const express = require("express");
const { fetchCnbRates } = require("./fetcher");
var cache = require("memory-cache");

const cacheKey = "rates";
const cacheUpdateIntervalMs = 60 * 60 * 1000; // 1 h
const port = process.env.PORT || 3000;
const app = express();

// fetch and update cache
const fetchAndUpdateCache = () => {
  return fetchCnbRates().then((rates) => {
    cache.put(cacheKey, rates);
    console.debug("cache updated: " + rates.date);
  });
};

// periodic cache update
setInterval(function () {
  console.debug("refreshing cache");
  fetchAndUpdateCache();
}, cacheUpdateIntervalMs);

// initial cache update
fetchAndUpdateCache();

// API handler
app.get("/", (req, res) => {
  const cachedValue = cache.get(cacheKey);
  if (cachedValue === null) {
    fetchAndUpdateCache()
      .then((rates) => {
        res.json(rates);
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  } else {
    res.json(cachedValue);
  }
});

// define app
app.listen(port, () => {
  console.debug(`listening on port ${port}`);
});
