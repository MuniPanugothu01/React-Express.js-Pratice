const mongoose = require("mongoose");

function DbConnect(){
  mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("not connected mongoDB");
  });
}

module.exports={
  DbConnect
}