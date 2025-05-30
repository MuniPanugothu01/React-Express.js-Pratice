const e = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("started");
});

// middle ware for get home section
const Home = (req, res, next) => {
  if (req.query.name) {
    if (/^[a-zA-Z]+$/.test(req.query.name)) {
      next();
    } else {
      res.status(400).send("numeric and special character is not allowed");
    }
  } else {
    res.status(500).send("server is not responding");
  }
};

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});
