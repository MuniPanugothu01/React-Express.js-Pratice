const e = require("express");
const validator = require("validator");

const valideSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("must enter the both first and last Names");
  } else if (!emailId || !validator.isEmail(emailId)) {
    throw new Error("mail is not valid!");
  } else if (!password || !validator.isStrongPassword(password)) {
    throw new Error("enter the strong password!");
  }
};
module.exports = {
  valideSignUpData,
};
