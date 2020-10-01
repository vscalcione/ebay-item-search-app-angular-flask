const express = require("express");
const cors = require("cors");
const got = require("got");
const router = require("express-promise-router");
const app = express();

app.use(cors());

app.get("/input", cors(), (req, res) => {
  keyWord = req.query["keyWord"];
  price1 = req.query["price1"];
  price2 = req.query["price2"];
  newItem = req.query["newItem"];
  used = req.query["used"];
  good = req.query["good"];
  veryGood = req.query["veryGood"];
  acceptable = req.query["acceptable"];
  canReturn = req.query["canReturn"];
  free = req.query["free"];
  expedited = req.query["expedited"];
  sortBy = req.query["sortBy"];
  url = getUrl();
  console.log(url);

  (async () => {
    try {
      const { body } = await got.get(url, {
        responseType: "json",
      });
      data = body.findItemsAdvancedResponse[0].searchResult;
      objects = data[0].item;
      count = Number(data[0]["@count"]);
    }
  });
});
