const express = require('express');
const userRouter = express.Router()
// singUp

const SignUpController = require('../controllers/authController');


// api /register

userRouter.post('/register',SignUpController)
userRouter.post('/login',)

module.exports = userRouter