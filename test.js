

// let name = "ahmed the warrior";

// setTimeout(()=>{
//     console.log(`Hello ${name}`);
//     clearInterval(int)
// },1000);

// const int = setInterval(()=>{
//     console.log('in the interval...');
// },1000);

const fs = require('fs');
const http = require('http');

// fs.writeFile('./nor.txt','hey weredddd are writing something', (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('aldkfjkl')
//     }
// })

// fs.readFile('./nor.txt',{'encoding': 'utf-8'},(err,data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         } else{
//             console.log('folder created');
//         }
//     })
   
// } else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         } else{
//             console.log('folder removed')
//         }
//     })
// }


// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.setHeader('content-type', 'text/plain')
//     res.write('hey')
    

//     if(req.url === '/me'){
//         res.write('yes of course')
//         res.end()
//     }

//     console.log('meeeeddaldkfj',req.url);

// })

// server.listen('3000','localhost',()=>{
//     console.log('request is bein made')
// })

const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.sendFile('./myviews/html/index.html',{root: __dirname})
})
app.get('/us',(req,res)=>{
 res.redirect('/')
})

app.listen('3000')