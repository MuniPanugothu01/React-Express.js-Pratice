const http = require('http');
const url = require('url');

const Server = http.createServer((req,res)=>{
    const Parsed = url.parse(req.url)
    console.log(Parsed);
    if(Parsed.pathname === '/'){
        res.writeHead(200,{"content-Type":"application/json"});
        res.write()
    }
})