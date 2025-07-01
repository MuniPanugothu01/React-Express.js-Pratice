const express = require("express");
const app = express();
const { ConnectDB } = require("./config/database.js");
ConnectDB();
// import model
const { UserModel } = require("./models/user.js");
const mongoose = require("mongoose");
const { use } = require("react");

// middleware
app.use(express.json());

app.post("/signup", async (req, res) => {
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

  try {
    const NewData = new UserModel({
      firstName,
      lastName,
      emailId,
      age,
      gender,
      password,
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
    res
      .status(500)
      .send({ status: 500, errorFacing: "server error" + error.message });
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
      res.status(404).send({ status: 404, message: "user is not found here!" });
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
    res.status(400).send({ status: 400, message: "invalid Id" });
  }
  try {
    const updateData = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
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
    res.status(400).send({ status: 400, message: "internal server error!" });
  }
});

// another to update the data, PATCH
app.patch("/userUpdate", async (req, res) => {
  let userId = req.body.userId;
  let data = req.body;
  try {
    let UpdateData = await UserModel.findByIdAndUpdate({ _id: userId }, data);
    console.log("updated", UpdateData);
    res
      .status(204)
      .send({ status: 204, message: "data updated successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, message: "internal server error" });
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
    res.status(400).send({ status: 400, message: "internal server error" });
  }
});

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
