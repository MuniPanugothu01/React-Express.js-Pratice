const http = require("http");
const SuccessCode = 200;
const messageCode = "data rectrived successfully";

const data = {
  name: "Muni",
  age: 23,
  role: "mern stack developer",
  gender: "male",
};
// create the object to display in browser
const resData = {
  status: SuccessCode,
  message: messageCode,
  res: data,
};

const server = http.createServer((req, res) => {
  res.writeHead(201, { "content-Type": "application/json" });
  res.write(JSON.stringify(resData));
  res.end();
});

server.listen(3003, () => {
  console.log("ported is connected here!");
});
