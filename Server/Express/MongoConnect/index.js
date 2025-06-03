const express = require("express");
// import the database file
const { DbConnect } = require("./Database");
const app = express();
// function call
DbConnect();

let PORT = 3010;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
