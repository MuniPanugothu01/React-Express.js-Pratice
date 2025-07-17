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
      const token = await jwt.sign({ _id: users._id }, "dev@tendirproject");
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
app.get("/profile", async (req, res) => {
  try {
    const cookies = req.cookies;
    console.log(cookies);
    // validate the tokens
    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid token");
    }
    const decodedMessage = await jwt.verify(token, "dev@tendirproject");
    console.log("decodedMessageId", decodedMessage);
    // find the which user can logged in
    const { _id } = decodedMessage;
    console.log("logged user is:", _id);
    // find the user in mongoDB
    const user = await UserModel.find({ _id });
    if (!user) {
      throw new Error("user is not found!");
    }
    res.status(200).send({ status: 200, "user is:": user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error: " + error.message);
  }
});

// get the all data from mongodb
app.get("/signdata", async (req, res) => {
  try {
    const getData = await UserModel.find({});
    res.status(200).send({ status: 200, message: getData });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, message: "data not found" });
  }
});

// find the specific data with the help of email, while using the find()
app.get("/userEmail", async (req, res) => {
  // let userEmail = req.body.emailId;
  try {
    let Users = await UserModel.find({ emailId: req.body.emailId });
    if (Users.length === 0) {
      //  throw new Error("User Not fround !")
      // res.status(404).send({ status: 404, message: "user is not found here!" });
      throw new Error("user is not found! Email");
    } else {
      res.status(200).send(Users);
      console.log("user mail", Users);
    }
  } catch (error) {
    console.log("throw", error.message);
    res.status(400).send(error.message);
  }
});

// to get the while using the findOne()

app.get("/userOne", async (req, res) => {
  let getEmail = req.body.emailId;
  try {
    let user = await UserModel.findOne({ emailId: getEmail });
    res.status(200).send({ status: 200, message: user });
    console.log("get the userOne", user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: 500, message: "internal server error" });
  }
});

// find the data through Id
app.get("/userId/:id", async (req, res) => {
  let Id = req.params.id;
  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(Id)) {
    return res.status(400).send({ status: 400, message: "Invalid ID format" });
  }
  try {
    let findId = await UserModel.findById(Id);
    if (!findId) {
      res.status(404).send({ status: 404, message: "data not found" });
    } else {
      res.status(200).send({ status: 200, message: findId });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: 500, message: "server error" });
  }
});

// Delete the data the user to mongodb, doing my way
app.delete("/userDeleta/:id", async (req, res) => {
  let dataDelete = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(dataDelete)) {
    res.status(400).send({ status: 400, message: "invlaid id" });
  }
  try {
    const userDelete = await UserModel.findByIdAndDelete(dataDelete);
    if (!userDelete) {
      res.status(404).send({ status: 404, message: "user not found here!" });
    } else {
      res.status(204).send({ status: 204, message: userDelete });
      console.log("deleted!", userDelete);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, message: "something went wrong!" });
  }
});

// another way to send the userId to body thorugh delete the user, id we can send to body though we can delete the data
app.delete("/deleteUser", async (req, res) => {
  let userId = req.body.userId;
  try {
    const userDelete = await UserModel.findByIdAndDelete(userId);
    // const userDelete = await UserModel.findByIdAndDelete({ _id: userId });
    res.status(204).send({ status: 204, message: "user deleted successfully" });
    console.log(userDelete);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: 500, message: "internal server error" });
  }
});

// PATCH method, update the data
app.patch("/user/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ status: 400, message: "invalid Id mongoId" });
  }
  try {
    // API validation, user can't change the every validation
    const ALLOWED_UPDATES = [
      "lastName",
      "about",
      "gender",
      "skills",
      "age",
      "photoUrl",
    ];

    const isUpdateAllowed = Object.keys(req.body).every((key) =>
      ALLOWED_UPDATES.includes(key)
    );
    if (!isUpdateAllowed) {
      throw new Error("cant update the fileds!");
    }

    // skills validations
    // if (req.body?.skills.length > 10) {
    //   throw new Error("cant give more than 10 skills");
    // }

    const updateData = await UserModel.findByIdAndUpdate(
      req.params?.id,
      req.body,
      {
        run: true,
        runValidators: true,
      }
    );
    if (!updateData) {
      res.status(200).send({ status: 200, message: "not found data" });
    } else {
      console.log("before", updateData);
      res
        .status(200)
        .send({ status: 200, message: "data updated successfully!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      status: 400,
      errorFacing: "internal server error! " + error.message,
    });
  }
});

// another to update the data, PATCH
app.patch("/userUpdate", async (req, res) => {
  let userId = req.body.userId;
  let data = req.body;
  try {
    let UpdateData = await UserModel.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    console.log("updated", UpdateData);
    res
      .status(200)
      .send({ status: 200, message: "data updated successfully!🎉" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, errorFacing: error.message });
  }
});

// Task-- update the user data through emailId
app.patch("/useremail", async (req, res) => {
  let email = req.body.emailId;
  let data = req.body;
  try {
    const emailUpdate = await UserModel.findOneAndUpdate(
      { emailId: email },
      data
    );
    console.log("updated the email", emailUpdate);
    res.status(200).send({ status: 200, message: "data updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, errorFacing: error.message });
  }
});




// task Login and cookies validate the in login api and Profile api

app.post("/praticeLogin", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      throw new Error("Enter the all fields in login!");
    }
    // validate the emailId, if can enter the worng mailId this condition will execute
    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid mailId");
    }
    // find the mail is present in mongoDb or not
    const User = await UserModel.findOne({ emailId });
    if (!User) {
      throw new Error("MailIs is not Valid!");
    }
    // compare password
    const PasswordComp = await bcrypt.compare(password, User.password);
    if (PasswordComp) {
      // create the jwt token
      const token = await jwt.sign({ _id: User._id }, "dev@Tinder");
      console.log("token is:", token);
      res.cookie("jwttokens", token);
      res.status(200).send({ status: 200, message: "login successfully!" });
    } else {
      throw new Error("Invalid Password!");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ stuatus: 500, "ERROR:": error.message });
  }
});
// get profile API Task
app.get("/TaskProfile", async (req, res) => {
  try {
    const cookies = req.cookies;
    console.log(cookies);
    // access the jwt token
    const  token  = cookies.jwttokens;
    if (!token) {
      throw new Error("Invalid Tokens!");
    }
    // verifyu the tokens
    const DecodedMesage = await jwt.verify(token, "dev@Tinder");
    console.log("decoderMsg", DecodedMesage);
    // to find if the user is present in mongodb or not
    const { _id } = DecodedMesage;
    // find user in mongodb
    const user = await UserModel.findById(_id);
    if (!user) {
      throw new Error("user is not present in mongodb");
    }
    res.status(200).send({ status: 200, message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ status: 500, "ERROR: ": error.message });
  }
});

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
