const http = require("http");
const url = require("url");
const {
  interErrorMessage,
  NotFoundMessage,
  SuccessMessage,
  InternalCodeError,
  notFountCode,
  SuccesCode,
  SuccessCodeInsteat,
  SuccessCodeInsteatMessage,
} = require("./StatusCodeBASIC");

//  Userdata
const data = {
  name: "Muni",
  age: 23,
};
// aboutus userData
const UserData = {
  Name: "John",
  age: 30,
  role: "frontend",
};

// contactRoute Users
const User1 = {
  name: "user1",
  age: 23,
  role: "backend",
  experience: "fresher",
};
const user2 = {
  name: "user2",
  age: 30,
  role: "frontend",
  experience: "fresher",
};
const user3 = {
  name: "user3",
  age: 26,
  role: "devops",
  experience: "mid range",
};
const user4 = {
  name: "user4",
  age: 27,
  role: "mernStack developer",
  experience: "fresher",
};
// userInfo
const UserInfo = { User1: User1, user2: user2, user3: user3, user4: user4 };

const Server = http.createServer((req, res) => {
  const Parsed = url.parse(req.url);
  console.log(Parsed);
  if (Parsed.pathname === "/") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(
      JSON.stringify([
        { status: SuccesCode, message: SuccessMessage, User: data },
      ])
    );
  } else if (Parsed.pathname === "/about") {
    res.writeHead(201, { "content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: SuccessCodeInsteat,
        message: SuccessCodeInsteatMessage,
        Users: UserData,
      })
    );
  } else if (Parsed.pathname === "/contact") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: SuccesCode,
        message: SuccessMessage,
        TotalUsers: UserInfo,
      })
    );
  } else {
    res.writeHead(notFountCode);
    res.write(NotFoundMessage);
  }
  res.end();
});

let PORT = 3006;
Server.listen(PORT, () => {
  console.log(`port is connected ${PORT}!`);
});
