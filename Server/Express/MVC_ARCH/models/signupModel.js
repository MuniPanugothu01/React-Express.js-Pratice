const mongoose = require('mongoose');
// create the Schema
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel = mongoose.model('signup',UserSchema)
module.exports = {UserModel}

// this model file export and import into controller file