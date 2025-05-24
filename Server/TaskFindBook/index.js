const http = require("http");
const url = require("url");
const {
  PORT,
  Books,
  SuccessCode,
  SuccessMessage,
  Invalid,
  MessageInvalid,
  InvalidMessage,
  SuccessCode2,
  MessageSuccess,
} = require("./SourceCode.js");

const Server = http.createServer((req, res) => {
  const Path = req.url;
  console.log(Path, "kk");
  const Pathname = Path.split("/");
  const NamePath = Pathname[1];
  console.log(NamePath, "pathname");

  if (NamePath === "") {
    res.writeHead(201, { "content-Type": "application" });
    res.write(
      JSON.stringify({ status: SuccessCode, message: SuccessMessage })
    );
    res.end();
    return;
  } else if (!isNaN(NamePath)) {
    res.writeHead(404, { "content-Type": "application/json" });
    res.write(JSON.stringify({ status: Invalid, message: InvalidMessage }));
    res.end();
    return;
  }


  // find the book name while enter in url
  const BookFind = Books.find((BookName) => {
    return (
      (BookName.name &&
        BookName.name.toLowerCase() === NamePath.toLocaleLowerCase()) ||
      (BookName.class &&
        BookName.class.toLocaleLowerCase() === NamePath.toLocaleLowerCase())
    );
  });
  if (BookFind) {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: SuccessCode2,
        message: MessageSuccess,
        BookData: BookFind,
      })
    );
    res.end();
    return;
  } else {
    res.writeHead(404, { "content-Type": "application/json" });
    res.write(JSON.stringify({ status: Invalid, message: MessageInvalid }));
  }
  res.end();
});

Server.listen(PORT, () => {
  console.log(`Port is connected ${PORT}`);
});
