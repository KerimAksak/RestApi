const express = require("express");
const app = express();

const newsRouters = require("./api/routes/news");
app.use("/news", newsRouters);

module.exports = app;
