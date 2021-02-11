//creating server and serving html file 

const fs = require('fs');
const fileContent = fs.readFileSync('tut39.html');

const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent);
});

server.listen(80,'127.0.0.1',()=>{
    console.log("Server is running on port 80");
});




