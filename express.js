const express = require('express');
const fs = require('fs');

const app = express();

app.listen('3000',()=>{
    console.log('express request has been made :)');
})

app.get('/',(req,res)=>{
    res.sendFile('./view/index.html',{root: __dirname});
})

app.get('/about',(req,res)=>{
   res.sendFile('./view/about.html', {root: __dirname});
})