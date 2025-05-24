const http = require("http");
const url = require("url");
// require the expertanl file
const { PORT, Books } = require("./SourceCode");
const Server = http.createServer((req, res) => {
  const Parse = req.url;
  const PathName = Parse.split("/");
  const id = PathName[1];

  const find = Books.find((x) => {
    return x.id == id;
  });
  console.log(find,'find!');
  
  console.log(id, "id is");
  console.log(Parse, "path");
  res.end();
});

Server.listen(PORT, () => {
  console.log(`Port is connected ${PORT}`);
});
