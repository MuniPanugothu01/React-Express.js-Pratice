const mongoose = require("mongoose");
// import the dotenv file
const dotenv = require("dotenv");
dotenv.config();
function DbConnect() {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log("not connected ");
    });
}

module.exports = {
  DbConnect,
};
