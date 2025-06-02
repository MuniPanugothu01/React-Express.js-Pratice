const express = require('express');
const {dbConnect} = require('./Database')

const app = express()
// middle ware we can use the express.json() beacuase of getting data json formate
app.use(express.json());

// export file here db connect 
dbConnect();

app.listen(PORT,()=>{
    console.log(`port is connected ${PORT}`);
    
})