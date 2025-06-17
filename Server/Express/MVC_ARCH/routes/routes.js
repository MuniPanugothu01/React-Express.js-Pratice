const express = require("express");
const userRouter = express.Router();
// singUp

const SignUpController = require("../controllers/authController");
const loginController = require("../controllers/authController.js");

// api /register

userRouter.post("/register", SignUpController);
userRouter.post("/login", loginController);

module.exports = userRouter;
