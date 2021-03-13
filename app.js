const express = require("express");
const app = express();

const newsRouters = require("./routes/news");
app.use("/newsAPI", newsRouters);

const postsRouters = require("./routes/posts");
app.use("/postsAPI", postsRouters);
module.exports = app;
