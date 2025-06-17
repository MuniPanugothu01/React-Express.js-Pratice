const { mongoose } = require("mongoose");
const Modelsign = require("../models/signupModel.js");
const bcrypt = require("bcrypt");

// create the logical functions we can write in controllers
async function Encrypted(input) {
  try {
    let Salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(input, Salt);
  } catch (err) {
    console.log(err);
  }
}

// compared the password logic
async function ComparedPass(password, hashedpass) {
  try {
    return await bcrypt.compare(password, hashedpass);
  } catch (err) {
    console.log(err);
  }
}

// router logical part we can write here in Controllers
exports.SignUpController = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({ message: "Please fill all details" });
  }

  // if user already exists
  const existingUser = await Modelsign.findOne({ email });
  if (existingUser) {
    return res.status(409).send({ message: "Email already exists" });
  }

  // username
  const UserName = await Modelsign.findOne({ name });
  if (UserName) {
    return res.status(409).send({ message: "Username already exists" });
  }

  let encryptedPassword = await Encrypted(password);

  let SignupDate = new Modelsign({
    name: name,
    email: email,
    password: encryptedPassword,
  });

  await SignupDate.save();

  res.status(200).send(SignupDate);
};

// login Api : /login
const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).send({ status: 404, message: "please enter all fileds!" });
  }
  // find the email is aleady user is alredy login or not i will check
  const checkEmail = await Modelsign.findOne({ email });
  if (!checkEmail) {
    res.status(401).send({ status: 401, message: "Invalid Email Address!" });
  }

  // to check the password, throught compared function
  const isValidpass = await ComparedPass(password, Modelsign.password);
  if (!isValidpass) {
    res.status(401).send({ status: true, message: "Incorrect Password!" });
  }
  res.send({ status: 200, message: "login successsfully❤️" });
};

module.exports = loginController;
