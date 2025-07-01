const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true, // if user can give space it remove the spaces
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    // enum : ["male", "female", "others"],
    lowercase: true,
    trim: true,
    
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("gender is not validate");
      }
    },
    
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
