const mongoose = require("mongoose");
let dbConnect = () => {
  mongoose
    .connect("mongodb://localhost:27017/Table-Data")
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log("not connected mongoDB");
    });

    
};
module.exports = { dbConnect };
