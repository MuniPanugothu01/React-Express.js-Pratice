const express = require("express");
const app = express();
const { ConnectDB } = require("./config/database.js");
ConnectDB();
// import model
const { UserModel } = require("./models/user.js");
const { get } = require("mongoose");

// middleware
app.use(express.json());

app.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password, age, gender } = req.body;
  try {
    const NewData = new UserModel({
      firstName,
      lastName,
      emailId,
      age,
      gender,
      password,
    });
    console.log("new data", NewData);
    await NewData.save();
    res.status(200).send({ status: 200, message: NewData });
  } catch (error) {
    console.log("try block", error.message);
    res.status(500).send({ status: 500, message: "server error" });
  }
});

// get the data from mongodb
app.get("/signdata", async (req, res) => {
  try {
    const getData = await UserModel.find();
    res.status(200).send({ status: 200, message: getData });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, message: "data not found" });
  }
});

// find the specific data with the help of email
app.get("/userEmail", async (req, res) => {
  // let userEmail = req.body.emailId;
  try {
    let getEmail = await UserModel.find({ emailId: req.body.emailId });
    if (!getEmail) {
      res.status(404).send({ status: 404, message: "user is not found here!" });
    }
    res.status(200).send(getEmail);
    console.log("user mail", getEmail);
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: "something went wrong!" });
  }
});

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
