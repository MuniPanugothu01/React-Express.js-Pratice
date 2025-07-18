// import the jwt
const jwt = require("jsonwebtoken");
// import the UserModel
const {UserModel} = require("../models/user.js");

const userAuth = async (req, res, next) => {
  try {
    // read the tokens from the req cookies
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid token!");
    }
    //verify the token and decode it
    const DecodedData = await jwt.verify(token, "dev@tendirproject");
    console.log("authUser DecodeData", DecodedData);
    const { _id } = DecodedData;
    // find the userId in mongoDB
    const user = await UserModel.findById(_id);
    if (!user) {
      throw new Error("User is not found!");
    }
    req.user = user
    next();
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ status: 400, "Error: ": error.message });
  }
};

module.exports = {
  userAuth,
};
