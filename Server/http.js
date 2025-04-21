const http = require("http");

const Myserver = http.createServer((req, res) => {
  res.write("http module!");
  res.end("we need to use to stop the server!");
});

// another one server
const Myserver2 = http.createServer((req, res) => {
  res.write("second server!");
  res.end("second server ended");
});

let PORT = 3002;

Myserver.listen(PORT, () => {
  console.log(`port is connected! is ${PORT}`);
});
