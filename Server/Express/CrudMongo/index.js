const express = require("express");
const app = express();

const dotenv = require("dotenv");
const {DbConnect} = require("./db.js");
DbConnect()
dotenv.config();

let Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`port is connected${Port}`);
});
