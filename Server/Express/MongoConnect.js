const express = require("express");
const app = express();
const { mongoose, Schema } = require("mongoose");

// connect mongodb to node js.
mongoose
  .connect("mongodb://localhost:27017/Table-Data")
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("mongodb is not connected here");
  });
// define the Schema what data type we mentioned in ur mongodb
let UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
});
// to defined the model and get data from mongodb we can mention the table name it mean collection name
let userModel = mongoose.model("user",UserSchema);
// create the router 
app.get('/getUser',(req,res)=>{
    
})

let PORT = 3009;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
