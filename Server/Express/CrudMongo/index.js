const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const { DbConnect } = require("./db.js");
DbConnect();
const { mongoose } = require("mongoose");
app.use(express.json());

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});
const UserModel = mongoose.model("reels", UserSchema);
// Post the data to mongodb using of POST Method
const SchemaPost = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});
const ModelPost = mongoose.model("users", SchemaPost);
// router
app.post("/post", async (req, res) => {
  let Data = new ModelPost({
    name: req.body.name,
    age: req.body.age,
    role: req.body.role,
  });
  await Data.save();
  console.log(req.body);
  res.status(200).send({ message: "data posted to body" });
});

app.get("/user", async (req, res) => {
  try {
    let DataFind = await UserModel.find();
    res.json(DataFind);
    console.log(DataFind, "data");
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
});

let Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`port is connected${Port}`);
});
