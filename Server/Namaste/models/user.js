const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength:2,
    maxLength:10,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim:true,
    lowercase:true,
  
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
  },
  photoUrl: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740",
  },
  about: {
    type: String,
    default: "this is the defalut about of the user!",
  },
  skills: {
    type: [String],
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
