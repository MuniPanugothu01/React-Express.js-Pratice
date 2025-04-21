const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/Crud")
  .then(() => {
    console.log("mongoose is connected!");
  })
  .catch(() => {
    console.log("mongoose is not connected!");
  });

// usersSchema to define the users formate
const usersSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Usermodel = mongoose.model("users", usersSchema);

app.get("/getUsers", (req, res) => {
  Usermodel.find({}).then(function (users) {
        res.json(users);
      })
    .catch((err) => {
      console.log(err);
    });
});

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected is ${PORT}`);
});
