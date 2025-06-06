const express = require("express");
const app = express();

const { DbConnect } = require("./db.js");
DbConnect();
const { mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

// Create the Schema
const SchemaSign = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Modelsign = mongoose.model("signup", SchemaSign);

app.post("/signup", async (req, res) => {
  //   const { name, email, pass } = req.body;
  //   let SignupDate = new Modelsign({ name, email, pass });
  //   await SignupDate.save();
  //   res.status(200).send(SignupDate);

//   both way are correct to define the data to body

  const SignupDate = new Modelsign({
    name: req.body.name,
    emai: req.body.emai,
    password: req.body.password,
  });
  await SignupDate.save();
  res.status(200).send(SignupDate);
  console.log(SignupDate, "ff");
});
let PORT = 3010;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
