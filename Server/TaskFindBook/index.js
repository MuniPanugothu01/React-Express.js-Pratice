const http = require('http')
const url = require('url')

const Server = http.createServer((req,res)=>{
    const Path = req.url;
console.log(Path)
})