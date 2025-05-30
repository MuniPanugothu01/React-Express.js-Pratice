const express = require("express");

let app = express();
// middle wares
app.use((req, res, next) => {
  if (req.query.name) {
    if (/^[a-zA-Z]+$/.test(req.query.name)) {
      next();
    } else {
      res.status(400).send("it requires only alpha bets");
    }
  } else {
    res.status(500).send("name is reqired here");
  }
});

app.get("/", (req, res) => {
  // getting the input quer params
  let name = req.query.name;
  console.log("user name:",name)
  let city = req.query.city;
  let role = req.query.role;
  let GetDATA = {
    name: name,
    city: city,
    role: role,
  };
  res.status(200).send({ status: 200, Input: GetDATA });
});

let PORT = 3004;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});
