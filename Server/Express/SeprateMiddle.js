const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send('started')
})
const PORT = 3005;
app.listen(PORT,()=>{
    console.log(`port is connected ${PORT} here`);
    
})