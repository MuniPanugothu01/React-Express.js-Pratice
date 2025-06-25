const mongoose = require("mongoose");

const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://munipanugothu2001:goXYNN1zTWHwR4OS@namaste.ontn3jx.mongodb.net/"
  );
};
ConnectDB()
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.log("mongodb is not connected!!");
  });
