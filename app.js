const express = require("express");
const app = express();

const newsRouters = require("./routes/news");
app.use("/newsAPI", newsRouters);

module.exports = app;
