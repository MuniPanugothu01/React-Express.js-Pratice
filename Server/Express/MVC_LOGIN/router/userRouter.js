const express = require("express");
const { Register, Login } = require("../controller/userController");
const userRouter = express.Router();
const {upload} = require("../config/multer.js");

userRouter.post("/register", upload.single("profile"), Register);
userRouter.post("/login", Login);

module.exports = { userRouter };
