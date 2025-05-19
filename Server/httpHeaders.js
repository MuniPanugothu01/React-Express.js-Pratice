const http = require("http");
const data = {
  name: "Muni",
  age: 23,
  role: "mern stack developer",
  gender: "male",
};

const server = http.createServer((req, res) => {
  res.writeHead(201, { "content-Type": "application/json" });
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(3003, () => {
  console.log("ported is connected here!");
});
