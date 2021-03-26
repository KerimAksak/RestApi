const http = require("http");
const hostname = "localhost";

const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
