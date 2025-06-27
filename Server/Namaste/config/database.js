const mongoose = require("mongoose");

const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://munipanugothu2001:6B0qEtQTN8jMnY5V@namastenode.pmch9kr.mongodb.net/DataUser"
  );
};
ConnectDB()
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.log("mongodb is not connected!!");
  });

  module.exports = {
    ConnectDB
  }