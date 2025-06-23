const express = require("express");
const { adminAuth } = require("./middleWare/adminAuth");
const app = express();

app.use("/admin", adminAuth);

app.get("/admin/home", (req, res) => {
  res.status(200).send("home section");
});
app.post("/admin/about", (req, res) => {
  res.status(201).send("about section");
});

let PORT = 3002;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
