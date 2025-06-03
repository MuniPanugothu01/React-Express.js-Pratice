const express = require("express");
const app = express();
const { DbData } = require("./db.js");
const { mongoose } = require("mongoose");

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

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
