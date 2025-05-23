const http = require("http");
const url = require("url");
// import the file SatusCode
const {
  PORT,
  SuccessCode,
  SuccessMessage,
  SuccessCodeInsted,
  SuccessMessageInstead,
  InvalidCode,
  InvalidMessage,
} = require("./StatusCodes");

// const Data Home Section
const Data = {
  name: "Muni",
  age: 23,
};
// Aboutus
const Users = {
  name: "john",
  age: 29,
  city: "hyd",
};
// contact us
const user1 = {
  name: "Muni",
  age: 23,
  city: "Hyd",
  role: "Fullstack developer",
  experience: "fresher",
};
const user2 = {
  name: "john",
  age: 24,
  city: "Delhi",
  role: "Fullstack developer",
  experience: "fresher",
};
const user3 = {
  name: "marri",
  age: 27,
  city: "banglore",
  role: "backend developer",
  experience: "internship",
};
const user4 = {
  name: "ravi",
  age: 30,
  city: "delhi",
  role: "frontend developer",
  experience: "fresher",
};
// Total info
const USerInfo = [{ user1: user1, user2: user2, user3: user3, user4: user4 }];

const Server = http.createServer((req, res) => {
  const Parse = url.parse(req.url);
  if (Parse.pathname === "/") {
    res.writeHead(SuccessCode, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        status: SuccessCode,
        message: SuccessMessage,
        Userinfo: Data,
      })
    );
  } else if (Parse.pathname === "/about") {
    res.writeHead(201, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        status: SuccessCodeInsted,
        message: SuccessMessageInstead,
        Userdata: Users,
      })
    );
  } else if (Parse.pathname === "/contact") {
    res.writeHead(200, { "content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: SuccessCode,
        message: SuccessMessage,
        UsersData: USerInfo,
      })
    );
  } else {
    res.writeHead(404, { "content-Type": "application/json" });
    res.write(JSON.stringify({ status: InvalidCode, message: InvalidMessage }));
  }
  res.end();
});
Server.listen(PORT, () => {
  console.log(`Port is connected ${PORT}`);
});
