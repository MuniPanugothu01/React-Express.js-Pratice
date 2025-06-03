const express = require("express");
const { dbConnect } = require("./Database");
// import dotenv file
const dotenv = require("dotenv");
dotenv.config();
const app = express();
// middle ware we can use the express.json() beacuase of getting data json formate
app.use(express.json());

// export file here db connect
dbConnect();
let Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`port is connected ${Port}`);
});
