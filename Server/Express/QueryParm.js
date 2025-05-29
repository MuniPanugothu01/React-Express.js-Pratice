const express = require("express");

const app = express();

app.use((req, res, next) => {
  let success = true;
  if (success) {
    next();
  } else {
    res.status(500).send("server is error!");
  }
});

app.get("/home", (req, res) => {
  console.log(req.query);

  res.send("home section");
});

let PORT = 3002;
app.listen(PORT, () => {
  console.log(`Port is connected ${PORT} here`);
});
