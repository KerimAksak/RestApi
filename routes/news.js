const express = require("express");
const router = express.Router();
const newsData = require("../data/newsData");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "news home screen - GET -",
  });
});

router.get("/:newsID", (req, res, next) => {
  const id = req.params.newsID;
  if (id === "kerim") {
    res.status(200).json({
      message: "Merhaba Kerim!",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "invalid id",
    });
  }
});

module.exports = router;
