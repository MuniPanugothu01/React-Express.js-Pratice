const express = require("express");
const app = express();

const { DbConnect } = require("./db.js");
DbConnect();
const { mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create the Schema
const SchemaSign = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Modelsign = mongoose.model("signup", SchemaSign);

// Encrypted function
async function toEncrypt(input) {
  try {
    let SaltGen = await bcrypt.genSalt(10);
    return await bcrypt.hash(input, SaltGen);
  } catch (err) {
    console.log(err);
  }
}

// password compare
async function Comparepass(password, hashedpassword) {
  try {
    return await bcrypt.compare(password, hashedpassword);
  } catch (err) {
    console.log(err, "error pass");
  }
}

app.post("/signup", async (req, res) => {
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

  let encryptedPassword = await toEncrypt(password);

  let SignupDate = new Modelsign({
    name: name,
    email: email,
    password: encryptedPassword,
  });

  await SignupDate.save();

  res.status(200).send(SignupDate);
});

// login user
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Please fill all fields" });
  }

  // to check the email is matching or not
  const CheckMail = await Modelsign.findOne({ email });
  if (!CheckMail) {
    return res.status(401).send({ message: "Invalid email address" });
  }

  // check the password and call the compare function
  const isValid = await Comparepass(password, CheckMail.password);
  if (!isValid) {
    return res.status(401).send({ message: "Password is invalid!" });
  }

  res.status(200).send({ message: "Login successful!" });
});


let PORT = 3010;
app.listen(PORT, () => {
  console.log(`Port is connected on ${PORT}`);
});
