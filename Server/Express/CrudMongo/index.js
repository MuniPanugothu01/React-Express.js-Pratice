const express = require("express");
const app = express();

const dotenv = require("dotenv");
const { DbConnect } = require("./db.js");
const { mongoose } = require("mongoose");
DbConnect();
dotenv.config();

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});
const UserModel = mongoose.model("reels", UserSchema);
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
