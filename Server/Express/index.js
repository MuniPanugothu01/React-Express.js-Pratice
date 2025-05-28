const express = require('express');
// imported express
const app = express()
// assigned to app variable

app.get("/",(req,res)=>{
    res.send('this is the home page')
})

app.post('/about',(req,res)=>{
    res.send('this is the home page')
})

app.put('/contact',(req,res)=>{
    res.send('this is contact page')
})

app.patch('/patch',(req,res)=>{
    res.send('this is the patch method')
})

app.delete('/delete',(req,res)=>{
    res.send('this is the deleted page')
})

// assign listen to app
let PORT = 3000
app.listen(PORT,()=>{
    console.log(`Port is conected ${PORT}`);
    
})