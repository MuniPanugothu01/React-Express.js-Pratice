const express = require("express");
const app = express();
// dotenv file imppor
const dotenv = require("dotenv");
dotenv.config();
// db.js file import
const { DbConnect } = require("./db.js");
DbConnect();


// app.use('/api',userRouter)

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
