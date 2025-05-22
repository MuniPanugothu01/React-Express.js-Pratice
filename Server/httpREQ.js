const http = require("http");
const Server = http.createServer((req, res) => {
  console.log(req, "resquest object");
  res.writeHead(200, { "content-Type": "application/json" });
  res.end("end the server");
});
let PORT = 3004;
Server.listen(PORT, () => {
  console.log("port is connected!");
});
