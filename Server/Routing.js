const http = require("http");
const url = require("url");

const Server = http.createServer((req, res) => {
  // to find the path name using the url
  const ParsedUrl = url.parse(req.url);
  console.log(ParsedUrl, "here is the path");

  // StatusCode
  const StatusCode = 200;

  // userData
  const Data = {
    name: "Muni",
    age: 23,
    role: "FrontEnd developer",
  };

  const FullData = {
    status: StatusCode,
    data: Data,
  };

  // contact information
  const User1 = {
    name: "User",
    age: 23,
    city: "Hyd",
    Role: "FullStack developer",
  };
  const User2 = {
    name: "user2",
    age: 20,
    city: "Delhi",
    Role: "backend Developer",
  };
  const User3 = {
    name: "user3",
    age: 25,
    city: "banglore",
    Role: "Frontend Developer",
  };
  const User4 = {
    name: "user4",
    age: 26,
    city: "Munbai",
    Role: "devops",
  };

  // To display in array formate all users
  const UserInfo = [User1, User2, User3, User4];

  if (ParsedUrl.pathname === "/") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write("well come to home page");
  } else if (ParsedUrl.pathname === "/about") {
    res.writeHead(201, { "content-Type": "application/json" });
    res.write(JSON.stringify(FullData));
  } else if (ParsedUrl.pathname === "/contact") {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write(JSON.stringify(UserInfo));
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
