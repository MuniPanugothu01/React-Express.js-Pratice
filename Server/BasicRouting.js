const http = require("http");
const url = require("url");
const {
  interErrorMessage,
  NotFoundMessage,
  SuccessMessage,
  InternalCodeError,
  notFountCode,
  SuccesCode,
} = require("./StatusCodeBASIC");

//  Userdata
const data = {
  name: "Muni",
  age: 23,
};

const Server = http.createServer((req, res) => {
  const Parsed = url.parse(req.url);
  console.log(Parsed);
  if (Parsed.pathname === "/") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(JSON.stringify([{ status: SuccesCode, message: SuccessMessage, data }]));
  }
  res.end()
});

let PORT = 3006;
Server.listen(PORT, () => {
  console.log(`port is connected ${PORT}!`);
});
