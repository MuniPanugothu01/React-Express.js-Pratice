const express = require("express");
const app = express();

// middle wares
app.use("/admin", (req, res, next) => {
  if (req.query.user === "admin") {
    next();
  } else {
    res.status(401).send("unauthorisied admin details!");
  }
});
// routers admin side
app.get("/admin/home", (req, res) => {
  res.send("wellcome admin to home section");
});
app.get("/admin/contact", (req, res) => {
  res.send("wellcome admin to contact page");
});
app.get("/admin/about", (req, res) => {
  res.send("wellcome admin to about page");
});
app.get("/admin/products", (req, res) => {
  res.send("wellcome admin to products page");
});

// normal routing
app.post("/home", (req, res) => {
  res.send("home page demo");
});

let PORT = 3006;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});
