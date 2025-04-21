const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/Crud");

let PORT = 3001;
app.listen(PORT, () => {
  console.log(`port is connected is ${PORT}`);
});
