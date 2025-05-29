const express = require("express");

const app = express();

// object data
const Data = {
  Name: "Muni",
  age: 23,
  city: "Hyderabd",
};
// UserInfo
const UserInfo = {
  status: 200,
  message: "Data rectrived successfully",
  Details: Data,
};
// about Details
const AboutData = {
  name: "John",
  age: 25,
  city: "Banglore",
  Role: "fullstack developer",
  Exprerience: "yes",
};
// Information with status code
const UserAbout = {
  status: 201,
  messsage: "data instead successfully",
  UserData: AboutData,
};

app.use((req, res, next) => {
  let success = true;
  if (success) {
    next();
  } else {
    res.send("it is not able to handle the request");
  }
});

app.get("/", (req, res) => {
  res.writeHead(200, { "content-Type": "application/json" });
  res.send(JSON.stringify(UserInfo));
});

app.post("/about", (req, res) => {
  res.writeHead(201, { "content-Type": "application/json" });
  res.send(JSON.stringify(UserAbout));
});

app.put("/contact", (req, res) => {
  res.send("contact section");
});

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
