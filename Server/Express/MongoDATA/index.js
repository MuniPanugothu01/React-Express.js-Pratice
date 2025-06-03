const express = require("express");
const app = express();
const { DbData } = require("./db.js");
const { mongoose } = require("mongoose");

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

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
