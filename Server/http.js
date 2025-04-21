const http = require("http");

const Myserver = http.createServer((req, res) => {
  console.log(req);
  res.write("http module!");
//   res.end("we need to use to stop the server!");
});

let PORT = 3002;

Myserver.listen(PORT, () => {
  console.log(`port is connected! is ${PORT}`);
});
