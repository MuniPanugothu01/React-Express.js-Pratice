const express = require("express");
const app = express();

// multiple handle function
app.use("/router", rH1, [rH2, rH3], rH4);
app.use(
  "/user",
  rH1,
  (req, res, next) => {
    console.log("response1");
    next();
  },
  (req, res, next) => {
    console.log("response2");
    next();
  },
  [
    (req, res, next) => {
      console.log("response2");
      next();
    },
    (req, res, next) => {
      console.log("response3");
      res.send("response3");
    },
  ]
);

app.listen(3002, () => {
  console.log(`port is connected ${3002}!`);
});
