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
// Schema POST
const SchemaPost = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
  city: String,
});
const ModelPost = mongoose.model("users", SchemaPost);

// POST
app.post("/post", async (req, res) => {
  let Data = new ModelPost({
    name: req.body.name,
    age: req.body.age,
    role: req.body.role,
    city: req.body.city,
  });
  await Data.save();
  console.log(req.body);
  res.status(200).send({ message: "data posted to body" });
});
// GET Method
app.get("/user", async (req, res) => {
  try {
    let DataFind = await UserModel.find();
    res.json(DataFind);
    console.log(DataFind, "data");
  } catch (err) {
    res.status(500).send({ message: "server error" });
  }
});
// to find the specific id
app.get("/post/:id", async (req, res) => {
  try {
    let FindData = await ModelPost.findById(req.params.id);
    return res.json(FindData);
  } catch (err) {
    res.status(500).send("server error");
  }
});

// PUT method
app.put("/post/:id", async (req, res) => {
  try {
    let UpdateData = await ModelPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(UpdateData);
  } catch (err) {
    res.status(500).json(req.params.id, "id");
  }
});

// PATCH Method
app.patch("/post/:id", async (req, res) => {
  try {
    let UpdatePATCH = await ModelPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        overwrite: true,
      }
    );
    res.send(UpdatePATCH);
  } catch (err) {
    res.status(500).send({ message: "data not upated by patch" });
  }
});

// DELETE Method
app.delete("/post/:id", async (req, res) => {
  try {
    let DeletData = await ModelPost.findByIdAndDelete(req.params.id);
    res.send(DeletData);
  } catch (err) {
    res.status(500).send("Detele Error");
  }
});

let Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`port is connected${Port}`);
});
