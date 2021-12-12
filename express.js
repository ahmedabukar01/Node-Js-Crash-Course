const express = require('express');
const fs = require('fs');
const _ = require('lodash')

const app = express();

app.set('view engine', 'ejs');
app.set('views','myviews')

app.listen('3000',()=>{
    console.log('express request has been made :)');
})


// normal GET request 

// app.get('/',(req,res)=>{
//     res.sendFile('./view/index.html',{root: __dirname});
// })

app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
   res.render('about');
})

app.get('/blogs/create',(req,res)=>{
    res.render('create');
})

// 404 erros
app.use((req,res)=>{
    res.status(404).render('404');
})