const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html'); // serve the HTML form
});

app.post('/upload',(req,res)=>{
    console.log(req.body);
    res.status(201).send(req.body)
    
})

const PORT = 3002;
app.listen(PORT,()=>{
    console.log(`port is connected ${PORT}`);
    
})