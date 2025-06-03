const express = require("express");
// import the database file
const { DbConnect } = require("./Database");

// import the file dotenv
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// function call
DbConnect();

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
