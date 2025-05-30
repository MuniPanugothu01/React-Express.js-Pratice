const e = require("express");
const express = require("express");
const app = express();

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

app.get("/", Home, (req, res) => {
  let name = req.query.name;
  console.log("name is:", name);
  let city = req.query.city;
  let role = req.query.role;
  // inputData in object formate
  const InputData = {
    name: name,
    city: city,
    role: role,
  };
  res.send({ status: 200, Data: InputData });
});
app.post("/about", (req, res) => {
  res.send("about section");
});
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});
