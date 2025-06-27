const express = require("express");
const app = express();
const {ConnectDB} =  require("./config/database.js");
const e = require("express");
ConnectDB()


app.post('/user',async(req,res)=>{
  let body = req.body
  console.log(body)
})


let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
