const http = require("http");
const hostname = "127.0.0.1";

const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
