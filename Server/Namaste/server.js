const express = require("express");
const app = express();
const {ConnectDB} =  require("./config/database.js");
ConnectDB()

// middleware
app.use(express.json())


app.post('/user',async(req,res)=>{
  let body = req.body
  console.log(body)
  res.status(200).send({status:200,message:body})
})


let PORT = 3003;
app.listen(PORT, () => {
  console.log(`port is running with ${PORT}`);
});
