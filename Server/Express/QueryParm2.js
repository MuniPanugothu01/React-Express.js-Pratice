const express = require('express');

const app = express();
app.use((req,res,next)=>{
    if(req.query.name || req.query.city || req.query.role){
        next()
    }
    else{
        res.status(500).send('server is not responding')
    }
})

app.get('/',(req,res)=>{
    console.log(req.query);
    let name = req.query.name
    let city = req.query.city
    let role = req.query.role

    let UserInfo = {
        name : name,
        city : city,
        role : role,
        city : city
    }
    
    res.send({status:200,"UserInfo":[UserInfo]})
})

let PORT = 3003;
app.listen(PORT,()=>{
    console.log(`port is connected ${PORT}`);
    
})