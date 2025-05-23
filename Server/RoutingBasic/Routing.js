const http = require('http');
const url = require('url');
// import the file SatusCode
const {PORT} = require('./StatusCodes');
const Server = http.createServer((req,res)=>{
    const Parse = url.parse(req.url);
    if(Parse.pathname === '/'){

    }
    else if(Parse.pathname === '/about'){

    }
    else if(Parse.pathname === '/contact'){

    }
    else{
}
res.end();
})
Server.listen(PORT,()=>{
    console.log(`Port is connected ${PORT}`);
    
})

