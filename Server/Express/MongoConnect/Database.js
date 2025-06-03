const mongoose = require("mongoose");
// import the dotenv file
const dotenv = require("dotenv");
dotenv.config();
function DbConnect() {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("✅ MongoDB connected");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
    });
}
module.exports = {
  DbConnect,
};
