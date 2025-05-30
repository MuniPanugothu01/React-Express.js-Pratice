const express = require("express");

let app = express();

app.use((req, res, next) => {
  if (req.query.name) {
    if (/^[a-zA-Z]+$/.text(req.query.name)) {
      next();
    } else {
      res.status(500).send("it requires only alpha bets");
    }
  } else {
    res.status(500).send("name is reqired here");
  }
});
app.get("/", (req, res) => {
  res.status(200).send({});
});

let PORT = 3004;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});
