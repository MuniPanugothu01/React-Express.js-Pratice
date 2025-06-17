const express = require('express');
const app = express();
const { DbConnect } = require('./config/db');
DbConnect()
const dotenv = require('dotenv');
const { userRouter } = require('./router/userRouter');
dotenv.config()
app.use(express.json())

app.use('/api/user',userRouter)


const PORT = process.env.PORT || 3002

app.listen(PORT,()=>{
    console.log(`port is connected ${PORT}`);
    
})