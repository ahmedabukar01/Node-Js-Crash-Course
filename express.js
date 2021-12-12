const express = require('express');
const fs = require('fs');
const { escapeRegExp } = require('lodash');

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

// redirects
app.get('/aboutus',(req,res)=>{
    res.redirect('/about');
})

// 404 erros
app.use((req,res)=>{
    res.status(404).sendFile('./view/404.html',{root: __dirname});
})