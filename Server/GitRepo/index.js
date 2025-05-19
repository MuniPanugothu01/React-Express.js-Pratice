console.log("hello this is the GitRepo Flder");
console.log("Muni");

const http = require("http");

const obj = {
  name: "muni",
  age: 23,
  course: "mernstack",
};

const server = http.createServer((req, res) => {
  res.writeHead(201, { "content-Type": "application/json" });
  res.write(JSON.stringify(obj));
  res.end();
});
server.listen(3002, () => {
  console.log(`port is connected here`);
});
