const http = require("http");
const url = require("url");
// require the expertanl file
const { PORT, Books } = require("./SourceCode");
const Server = http.createServer((req, res) => {
  const Parse = req.url;
  const PathName = Parse.split("/");
  const id = PathName[1];

  const data = Books.find((x) => {
    return x.id == id;
  });
  console.log(data, "find!");

  if (data) {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(JSON.stringify(data));
  } else {
    res.writeHead(404, { "content-Type": "application/json" });
    res.write(JSON.stringify({status:"404",message:"data not found in url"}));
  }

  console.log(id, "id is");
  console.log(Parse, "path");
  res.end();
});


Server.listen(PORT, () => {
  console.log(`Port is connected ${PORT}`);
});
