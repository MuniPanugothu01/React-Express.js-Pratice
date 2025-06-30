const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min:10,
    max:40
  },
  gender: {
    type: String,
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
