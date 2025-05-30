const express = require("express");
const app = express();

// middle wares
app.use("/admin", (req, res, next) => {
  if (req.query.user === "admin") {
    next();
  } else {
    res.status(401).send("unauthorisied admin details!");
  }
});
// routers admin side
app.get("/admin/home", (req, res) => {
  res.send("wellcome admin to home section");
});
app.get("/admin/contact", (req, res) => {
  res.send("wellcome admin to contact page");
});
app.get("/admin/about", (req, res) => {
  res.send("wellcome admin to about page");
});
app.get("/admin/products", (req, res) => {
  res.send("wellcome admin to products page");
});

// normal routing
app.post("/home", (req, res) => {
  res.send("home page demo");
});

// middleware for user Routings
app.use('/user',(req,res,next)=>{
    if(req.query.user === 'user'){
        next()
    }
    else{
        res.status(401).send('user unauthorized please go to login page!')
    }
})

app.post('/user/home',(req,res)=>{
    res.send('wellcome user to home page')
})
app.post('/user/about',(req,res)=>{
    res.send('wellcome to user to about page')
})
app.post('/user/contact',(req,res)=>{
    res.send('wellcome user to contact page')
})
app.post('/user/products',(req,res)=>{
    res.send('wellcome user to products page')
})


let PORT = 3006;
app.listen(PORT, () => {
  console.log(`port is connected ${PORT} here`);
});
