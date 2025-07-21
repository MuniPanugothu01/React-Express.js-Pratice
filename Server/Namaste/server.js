const express = require("express");
const app = express();
const { ConnectDB } = require("./config/database.js");
ConnectDB();
// import model
const { UserModel } = require("./models/user.js");
const mongoose = require("mongoose");
// import the utils
const { valideSignUpData } = require("./utils/validations.js");
// Validator function
const validator = require("validator");
// bcrypt
const bcrypt = require("bcrypt");
// cookieparser
const cookieparser = require("cookie-parser");
// jwt
const jwt = require("jsonwebtoken");
// userAuth middle ware
const { userAuth } = require("./middleWare/adminAuth.js");

// middleware
app.use(express.json());
app.use(cookieparser());

app.post("/signup", async (req, res) => {
  try {
    // validation of data
    valideSignUpData(req);

    const {
      firstName,
      lastName,
      emailId,
      password,
      age,
      gender,
      photoUrl,
      about,
      skills,
    } = req.body;

    // Encrypet the password

    const hashPassword = await bcrypt.hash(password, 10);
    console.log("encrypted!", hashPassword);

    // skills validation
    if (req.body?.skills.length > 10) {
      throw new Error("skills cant enter the more than 10!");
    }
    // password validation
    // if (!req.body?.password || req.body.password.length <= 3) {
    //   throw new Error("password length must greater than 3 characters");
    // }

    const NewData = new UserModel({
      firstName,
      lastName,
      emailId,
      age,
      gender,
      password: hashPassword,
      photoUrl,
      about,
      skills,
    });

    console.log("new data", NewData);
    const userSaved = await NewData.save();
    if (!userSaved) {
      throw new Error("email should be uniquee");
    }
    res.status(200).send({ status: 200, message: NewData });
  } catch (error) {
    console.log("try block", error.message);
    res.status(500).send("Error: " + error.message);
  }
});

// Login API
app.post("/login", async (req, res) => {
  const { emailId, password } = req.body;
  try {
    if (!emailId) {
      throw new Error("enter the all fields");
    }

    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid emailId");
    }
    // Check if user exists
    const users = await UserModel.findOne({ emailId });
    if (!users) {
      throw new Error("EmailId credentials!");
    }
    // compare password
    const isPasswordValid = await bcrypt.compare(password, users.password);
    if (isPasswordValid) {
      // create the jwt token
      const token = await jwt.sign({ _id: users._id }, "dev@tendirproject",{expiresIn:"1d"});
      console.log("toke generated!", token);

      // add the token to cookies and send the response back to the user
      res.cookie("token", token);
      res.status(200).send({ status: 200, message: "login successfully!🎉" });
    } else {
      throw new Error("password is not Valid!");
    }

    // another to find the passowrd logic
    // if (!isPasswordValid) {
    //   throw new Error("Invalid Passowrd credentials!");
    // }
    // res.status(200).send({ status: 200, message: "login successfully!🎉" });
  } catch (error) {
    console.log("Login ERROR:", error.message);
    res.send("ERROR:" + error.message);
  }
});

// get the profile
app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).send({ status: 200, "user is:": user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error: " + error.message);
  }
});
// sendConnectionRequest to the server
app.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  console.log("sending the connection request");
  res.send({User:user.firstName + " this user is sending the request!"})
});

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
