const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
function DbConnect() {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("mongoDB connected");
    })
    .catch((err) => {
      console.log("not connected", err);
    });
}

module.exports = {
  DbConnect,
};
