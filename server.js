const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res)=>{

    // lodash
    const num = _.random(0, 20);
    console.log(num)

    const runme = () =>{
        console.log('hey the hacker is back ...!');
    }
    runme();
    runme();
    
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