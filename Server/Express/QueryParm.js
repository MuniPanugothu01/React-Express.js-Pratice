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
let name = req.query.name
console.log('user name:',name);

let city = req.query.city
console.log('city is:',city);

let role = req.query.role
let UserInfo = {
    name : name,
    city : city,
    role : role
}
  res.send({status:200,UserInfo});
});

let PORT = 3002;
app.listen(PORT, () => {
  console.log(`Port is connected ${PORT} here`);
});
