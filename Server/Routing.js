const http = require("http");
const url = require("url");

const Server = http.createServer((req, res) => {
  // to find the path name using the url
  const ParsedUrl = url.parse(req.url);
  console.log(ParsedUrl, "here is the path");

  // userData
  const Data = {
    name: "Muni",
    age: 23,
    mail: "munipanugothu2001@gmail.com",
  };
  if (ParsedUrl.pathname === "/") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write("well come to home page");
  } else if (ParsedUrl.pathname === "/about") {
    res.writeHead(201, { "content-Type": "application/json" });
    res.write(JSON.stringify(Data));
  } else if (ParsedUrl.pathname === "/contact") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write("contact page");
  } else {
    res.writeHead(400, { "content-Type": "text/plain" });
    res.write("getting server error");
  }
  res.end();
});

let PORT = 3005;
Server.listen(PORT, () => {
  console.log(`Port is connected to server ${PORT}`);
});
