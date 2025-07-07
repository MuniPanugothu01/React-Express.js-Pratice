const e = require("express");
const validator = require("validator");

const valideSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("must enter the names!");
  } else if (firstName.length < 4 && firstName.length > 10) {
    throw new Error("name must be in range!");
  } else if (validator.isEmail(emailId)) {
    throw new Error("mail is not valid!");
  } else if (validator.isStrongPassword(password)) {
    throw new Error("enter the strong password!");
  }
};
module.exports = {
  valideSignUpData,
};
