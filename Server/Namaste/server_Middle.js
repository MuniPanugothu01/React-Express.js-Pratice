const express = require("express");
const { adminAuth, userAuth } = require("./middleWare/adminAuth");
const app = express();

app.use("/admin", adminAuth);

app.get("/admin/home", (req, res) => {
  res.status(200).send("home section");
});
app.post("/admin/about", (req, res) => {
  res.status(201).send("about section");
});

app.get("/user/home", userAuth, (req, res) => {
  res.status(200).send({ status: 200, messsage: "home section for user" });
});

app.put("/user/about", (req, res) => {
  res.status(200).send({ status: 201, messsage: "about section for user" });
});

app.get("/user/login", (req, res) => {
  res.status(200).send({ status: 200, messsage: "login successfully!" });
});

let PORT = 3002;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
