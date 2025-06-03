const express = require("express");
// import the database file
const { DbConnect } = require("./Database");

// import the file dotenv
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
// function call
DbConnect();

// create the Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
});
// model
const UserModel = mongoose.model("Datas", userSchema);

// routers
app.get("/getData", async (req, res) => {
  try {
    let Data = await UserModel.find();
    res.json(Data);
  } catch (err) {
    res.status(500).json({ message: "error occured fetching the data" });
  }
});

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
