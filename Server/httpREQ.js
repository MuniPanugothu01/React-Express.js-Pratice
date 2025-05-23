const http = require("http");
const path = require("path");
const url = require("url");
const Server = http.createServer((req, res) => {
  console.log(req.method, "we can known the metods");
  //   console.log(req, "resquest object");
  //   console.log(req.method,'this is methods on request');
  //   console.log(req.url,'this method can show the url on server');
  // http://localhost:3001/home i want thi entire url
  // console.log(`http://${req.headers.host}${req.url}`);

  //   this is the another way to find the path name below one is the simple way to find the path name
  const FullUrl = `http://${req.headers.host}${req.url}`;
  console.log(url.parse(FullUrl));
  let Structure = url.parse(FullUrl);
  let pathName = Structure.pathname;
  console.log(pathName, "path name");
  console.log(req.headers.host);
  console.log(req.headers);

  if (pathName === "/home") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write("this is home");
  } else if (pathName === "/about") {
    res.writeHead(201, { "content-Type": "text/plain" });
    res.write("this is about us");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("data not found");
  }
  res.end();

  //   path name this is the one way to find the path name.
  //   above one is the another way to find the path name
  const parsed = url.parse(req.url);
  console.log(parsed);
  console.log(parsed.pathname);

  // res.writeHead(200, { "content-Type": "application/json" });
});
let PORT = 3004;
Server.listen(PORT, () => {
  console.log("port is connected!");
});
