const http = require("http");
const url = require("url");
const Server = http.createServer((req, res) => {
  //   console.log(req, "resquest object");
  //   console.log(req.method,'this is methods on request');
  //   console.log(req.url,'this method can show the url on server');
  // http://localhost:3001/home i want thi entire url
  // console.log(`http://${req.headers.host}${req.url}`);

  const FullUrl = `http://${req.headers.host}${req.url}`;
  //   console.log(url.parse(FullUrl));
  //   console.log(req.headers.host);
  //   console.log(req.headers);

  //   path name this is the one way to find the path name.
//   above one is the another way to find the path name
  const parsed = url.parse(req.url);
  console.log(parsed);
  console.log(parsed.pathname);
  

  res.writeHead(200, { "content-Type": "application/json" });
  res.end("end the server");
});
let PORT = 3004;
Server.listen(PORT, () => {
  console.log("port is connected!");
});
