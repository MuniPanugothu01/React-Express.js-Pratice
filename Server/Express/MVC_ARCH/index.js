const express = require("express");
const app = express();
// dotenv file imppor
const dotenv = require("dotenv");
dotenv.config();
// db.js file import
const { DbConnect } = require("./db.js");
DbConnect();
const SignUpController = require ('./routes/routes.js')
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api',userRouter)

app.use('/api/user',SignUpController);



let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT}`);
});
