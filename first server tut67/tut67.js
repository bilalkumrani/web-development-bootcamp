const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');
const contact = fs.readFileSync('contact.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    let url = req.url; 
    if(url=="/" || url=="/home"){

        res.end(home);
    }
    else if(url=="/about"){
        res.end(about);
    }
    else if(url=="/services"){
        res.end(services);
    }
    else if(url=="/contact"){
        res.end(contact);
    }
    else
    {
        res.statusCode = 404;
        res.end("<h1>404 Page Not Found</h1>")
    }
});

server.listen(80,'127.0.0.1',()=>{
console.log("Server is up on port 80");
});
