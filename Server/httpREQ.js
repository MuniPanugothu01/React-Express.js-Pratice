const http = require("http");
const Server = http.createServer((req, res) => {
  console.log(req, "resquest object");
  console.log(req.method,'this is methods on request');
  console.log(req.url,'this method can show the url on server');
  res.writeHead(200, { "content-Type": "application/json" });
  res.end("end the server");
});
let PORT = 3004;
Server.listen(PORT, () => {
  console.log("port is connected!");
});
