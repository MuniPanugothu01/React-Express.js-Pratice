const express = require('express');
const { Register } = require('../controller/userController');
const userRouter = express.Router()

userRouter.post('/register',Register)

module.exports = { userRouter}