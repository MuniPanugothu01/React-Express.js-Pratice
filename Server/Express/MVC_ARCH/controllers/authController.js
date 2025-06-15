const { default: mongoose } = require("mongoose");
const ModelImport = require("../models/signupModel.js");
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
exports.SignUp = async (req, res) => {
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
