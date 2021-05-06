const http = require("http");
const hostname = "https://mangala-api.herokuapp.com";

const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
