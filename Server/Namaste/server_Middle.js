const express = require('express');
const { adminAuth } = require('./middleWare/adminAuth');
const app = express();

app.use('/admin',adminAuth)

app.get('/admin/home',(req,res)=>{
    console.log()
})

let PORT = 3002;
app.listen(PORT,()=>{
    console.log(`port is connected ${PORT}`);    
})