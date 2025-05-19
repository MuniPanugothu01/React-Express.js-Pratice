console.log("hello this is the GitRepo Flder");
console.log("Muni");

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(201, { "content-Type": "application/json" });
  res.write("this is the first");
  res.end();
});
server.listen(3002, () => {
  console.log(`port is connected here`);
});
