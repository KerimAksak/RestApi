const express = require("express");
const router = express.Router();
const newsData = require("../data/newsData");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "news screen - GET -",
  });
});

router.get("/getNews/:newsID", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const id = req.params.newsID;
  const control = Number(id) / 1;
  if (control > 0) {
    if (id <= newsData.length) {
      const found = newsData.find((item) => item.id == id);
      res.status(200).end(JSON.stringify(found, null, 3));
    } else {
      res.status(200).json({
        Error: "INVALID ARGUMENT!",
      });
    }
  } else {
    res.status(200).json({
      Error: "INVALID ARGUMENT TYPE!",
    });
  }
});

router.get("/dataLength", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.status(200).end(JSON.stringify(newsData.length, null, 3));
});

router.get("/getAllNews", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).end(JSON.stringify(newsData, null, 3));
});

router.get("/getAllNewsID", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const newsID = newsData.map((item) => item.news_id);
  res.status(200).end(JSON.stringify(newsID, null, 3));
});

module.exports = router;
