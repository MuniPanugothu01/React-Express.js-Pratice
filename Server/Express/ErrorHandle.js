const express = require("express");
const app = express();

// error handling this is the one way to write the error handling
// app.get("/home", (req, res) => {
//   throw new Error("error occures here");
// });

// this is the another way to write the error handling try catch block
app.get("/home", (req, res) => {
  try {
    throw new Error("this is thrown an error");
  } catch (error) {
    next(error);
  }
});

// routing for admin side
app.use("/admin", (req, res, next) => {
  if (req.query.user) {
    next();
  } else {
    res.status(401).send("server is not responding here!");
  }
});
// routers for admin side
app.get("/admin/home", (req, res) => {
  let name = req.query.user;
  let city = req.query.city;
  console.log("city name is!", city);
  console.log("user name:", name);
  let InputData = {
    name: name,
    city: city,
  };
  res.send({ status: 200, userData: InputData });
});
app.get("/admin/about", (req, res) => {
  res.send("wellcome admin to about page");
});
// error handling router, it will act like universal router for all above routers if error can find above routers then it will be display.
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong in server!");
  }
});
let PORT = 3007;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});


