const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("response");
    next();
    // res.send("response");
  },
  (req, res, next) => {
    console.log("response2");
    // res.send("response2");
    next();
  },
  (req, res, next) => {
    console.log("response3");
    res.send("response3");
  }
);

app.listen(3001, () => {
  console.log("port");
});
