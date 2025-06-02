const express = require("express");
const app = express();
const { mongoose } = require("mongoose");

// connect mongodb to node js.
mongoose
  .connect("mongodb://localhost:27017/")
  .then((res) => {
    console.log(res, "mongodb is connected");
  })
  .catch((err) => {
    console.log("mongodb is not connected here");
  });

let PORT = 3009;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
