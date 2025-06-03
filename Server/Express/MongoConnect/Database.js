const mongoose = require("mongoose");
// import the dotenv file
const dotenv = require("dotenv");
dotenv.config();
let dbConnect = () => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log("not connected mongoDB");
    });
};
module.exports = { dbConnect };
