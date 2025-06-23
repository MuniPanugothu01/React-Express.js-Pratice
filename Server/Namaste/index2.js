const express = require("express");
const app = express();

// we can take the seperate handler function, as we take the pervious example.

app.get("/user", (req, res, next) => {
  console.log("response2");
  // next()
  res.status(200).send("response2");
});

app.get("/user", (req, res, next) => {
  console.log("response1");
  next();
});

app.listen(3003, () => {
  console.log(`port is connected ${3003}`);
});
