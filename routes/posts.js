const express = require("express");
const router = express.Router();
const postsData = require("../data/postsData");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "posts screen - GET -",
  });
});

router.get("/getPost/:postID", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  const id = req.params.postID;
  const control = Number(id) / 1;
  if (control > 0) {
    if (id <= postsData.length) {
      const found = postsData.find((item) => item.id == id);
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
  res.status(200).end(JSON.stringify(postsData.length, null, 3));
});

router.get("/getAllPosts", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.status(200).end(JSON.stringify(postsData, null, 3));
});

router.get("/getAllPostsID", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  const postID = postsData.map((item) => item.post_id);
  res.status(200).end(JSON.stringify(postID, null, 3));
});

module.exports = router;
