const express = require("express");
const app = express();

const rH1 = (req, res, next) => {
  console.log("response1");
  next();
};
const rH2 = (req, res, next) => {
  console.log("response2");
  next();
};
const rH3 = [
  (req, res, next) => {
    console.log("response2");
    next();
  },
  (req, res, next) => {
    console.log("response3");
    res.send("response3");
  },
];
// multiple handle function
app.use("/router", rH1, [rH2, rH3]);

app.listen(3002, () => {
  console.log(`port is connected ${3002}!`);
});
