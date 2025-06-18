// logic part routers, import to routers file
const { userModel } = require("../models/userModel.js");
const bcrypt = require("bcrypt");
// password bcrypted to encrypted string
const Encryptedpass = async (input) => {
  try {
    let Salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(input, Salt);
  } catch (error) {
    console.log(error.message);
  }
};

// password comparred
const comparedPass = async (password, hashedpassword) => {
  try {
    return await bcrypt.compare(password, hashedpassword);
  } catch (error) {
    console.log(error.message);
  }
};

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({ message: "fill all detials" });
    }
    const checkMail = await userModel.findOne({ email });
    if (checkMail) {
      return res.status(409).send({ message: "Already Exists mail id" });
    }

    // call here encrypted function

    const passEncrypted = await Encryptedpass(password);

    const newUser = new userModel({ email, name, password: passEncrypted });
    await newUser.save();

    res.status(200).send({ message: "register successfully", user: newUser });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "server error" });
  }
};

// Login user : /api/user/login

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ message: "please all fields!" });
  }
  const emailCheck = await userModel.findOne({ email });
  if (!emailCheck) {
    return res.status(401).send({ message: "invalid email address" });
  }
  // compare password to encrypted password

  const compared = await comparedPass(password, emailCheck.password);
  if (!compared) {
    res.status(401).send({ message: "invalid password" });
  }

  res.status(200).send({ status: true, message: "login successfully😊" });
};

module.exports = { Register, Login };
