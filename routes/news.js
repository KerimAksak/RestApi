const express = require("express");
const router = express.Router();
const newsData = require("../data/newsData");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "news screen - GET -",
  });
});

router.get("/:newsID", (req, res, next) => {
  const id = req.params.newsID;
  const control = Number(id) / 1;
  if (control > 0) {
    if (id <= newsData.length) {
      const found = newsData.find((item) => item.id == id);
      res.status(200).json({
        value: found.news_title,
      });
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

module.exports = router;
