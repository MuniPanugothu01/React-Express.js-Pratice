const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 10,
      validate(value) {
        if (!validator.isAlpha(value, "en-US")) {
          throw new Error(
            "value must contains only in letters A-Z or a-z" + value
          );
        }
      },
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
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email address!" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true, // if user can give space it remove the spaces,
      minLength: 3,
      maxLength: 10,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      maxNumbers: 3,
      minSymbols: 1,
      maxSymbols: 2,
      validate(value) {
        if (!validator.isStrongPassword(value, options)) {
          throw new Error(
            `Please enter a valid password! Requirements:
      - Min lowercase: ${options.minLowercase}
      - Min uppercase: ${options.minUppercase}
      - Min numbers: ${options.minNumbers}
      - Min symbols: ${options.minSymbols}
      - Min length: ${options.minLength}
      \nEntered password: ${value}`
          );
        }
      },
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
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("Invalid Url address!" + value);
        }
      },
    },
    about: {
      type: String,
      default: "this is the defalut about of the user!",
    },
    skills: {
      type: [String],
      minLength: 1,
      maxLength: 20,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
