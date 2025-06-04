const express = require("express");
const app = express();
const { DbData } = require("./db.js");
const { mongoose } = require("mongoose");

app.use(express.json());

// middle wares
app.use("/users", (req, res, next) => {
  console.log(req.path, "path name");
  console.log(req.baseUrl, "base");
  if (req.baseUrl === "/users") {
    next();
  } else {
    res.status(404).send({ message: "unauthorised the users" });
  }
});

DbData();
// create the schema
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
});
// define the model
const UserModel = mongoose.model("collections", UserSchema);
// define the router
app.get("/users", async (req, res) => {
  try {
    let Data = await UserModel.find();
    res.json(Data);
  } catch (err) {
    res.status(500).json({ message: "error in rectriving the data" });
  }
});

// create the another schema beacuse of we have antother collection
const Schema = new mongoose.Schema({});
const Model = mongoose.model("reels", Schema);

app.post("/admin", async (req, res) => {
  try {
    const users = await Model.find({ age: { $gt: 10 } });
    res.json(users);
  } catch (err) {
    res.status(401).json({ message: "error in rectriving data" });
  }
});

// create the Schema
const SchemaPost = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
});
const SchemaPost2 = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
});
const ModelPost2 = mongoose.model("post2", SchemaPost2);
// define the model, model can create the collections
const ModelPost = mongoose.model("posts", SchemaPost);

// post the data through body
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

app.post("/userdata", async (req, res) => {
  const Users = new ModelPost2({
    name: req.body.name,
    age: req.body.age,
    role: req.body.role,
  });
  await Users.save();
  console.log(req.body);
  res.status(200).send({ message: "successfully posted data" }, Users);
});

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
