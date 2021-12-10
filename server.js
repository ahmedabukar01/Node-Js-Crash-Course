const http = require('http');
const fs = require('fs');
const { ESRCH } = require('constants');

const server = http.createServer((req,res)=>{
    console.log(req.url)

    // setting the headers
    res.setHeader('content-type', 'text/html');
    
    // read html file
    fs.readFile('./view/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }

        res.write(data);
        res.end();
    })
})

server.listen('3000','localhost',()=>{
    console.log('request has been made !')
})