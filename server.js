const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    console.log(req.url)

    // setting the headers
    res.setHeader('content-type', 'text/html');

    let path="./view/";

    switch(req.url){
        case "/": path+="index.html";
                res.statusCode = 200;
                break;
        case "/about": path+="about.html";
                res.statusCode = 200;
                break;
        case "/aboutme":
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                break;
        default: path+="404.html";
                res.statusCode = 404;
    }
    
    // read html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else{
            res.write(data);
            res.end();
        }
    })
})

server.listen('3000','localhost',()=>{
    console.log('request has been made !')
})