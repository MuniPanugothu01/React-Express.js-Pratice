const express = require("express");
const app = express();
const { ConnectDB } = require("./config/database.js");
ConnectDB();
// import model
const { UserModel } = require("./models/user.js");

// middleware
app.use(express.json());

app.post("/user", async (req, res) => {
  const { firstName, lastName, email,password ,age, gender, } = req.body;
  try {
    const NewData = new UserModel({
      firstName,
      lastName,
      email,
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

let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});