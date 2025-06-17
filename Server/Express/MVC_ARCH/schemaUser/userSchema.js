const mongoose = require("mongoose");
const { parseAst } = require("vite");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const userModel = mongoose.model("validation", userSchema);

module.exports = {
  userModel,
};
