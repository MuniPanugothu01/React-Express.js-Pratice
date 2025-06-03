const express = require("express");
const app = express();
const { mongoose, Schema } = require("mongoose");

app.use(express.json());

// connect mongodb to node js.
mongoose
  .connect("mongodb://localhost:27017/Table-Data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("mongodb is not connected here",err);
  });
// define the Schema what data type we mentioned in ur mongodb
let UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
});
// to defined the model and get data from mongodb we can mention the table name it mean collection name
let UserModel = mongoose.model("user", UserSchema);
// create the router
app.get("/getUser", (req, res) => {
  UserModel.find()
    .then((data) => { 
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('error in rectriving data')
    });
});

let PORT = 3009;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
