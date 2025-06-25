const mongoose = require("mongoose");

const ConnectDB = async () => {
  await mongoose.connect("");
};
ConnectDB()
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.err("mongodb is not connected!!");
  });
