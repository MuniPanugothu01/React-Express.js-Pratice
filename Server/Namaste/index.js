const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("response");
    // res.send('response')
    next();
  },
  (req, res) => {
    console.log("response2");
    res.send("response2");
  }
);

app.listen(3001, () => {
  console.log("port");
});
