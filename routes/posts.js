const express = require("express");
const router = express.Router();
const postsData = require("../data/postsData");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "posts screen - GET -",
  });
});

router.get("/:postID", (req, res, next) => {
  const id = req.params.postID;
  const control = Number(id) / 1;
  if (control > 0) {
    if (id <= postsData.length) {
      const found = postsData.find((item) => item.id == id);
      res.status(200).json({
        value: found,
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
