const { default: mongoose } = require("mongoose");

// create the Schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,   
    password:String,
    profilePic:String
})

const userModel = mongoose.model('register',userSchema);
module.exports = {userModel}