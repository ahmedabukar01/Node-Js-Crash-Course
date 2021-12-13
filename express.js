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
    const blogs = [
        {title: 'how to get 10 million dollars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas repellat nesciunt eligendi excepturi delectus minus qui necessitatibus odio sint.'},
        {title: 'how to get 10 million dollars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas repellat nesciunt eligendi excepturi delectus minus qui necessitatibus odio sint.'},
        {title: 'how to get 10 million dollars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas repellat nesciunt eligendi excepturi delectus minus qui necessitatibus odio sint.'}
    ];
    res.render('index', {title: 'home', blogs});
})

app.get('/about',(req,res)=>{
   res.render('about',{title: 'About'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('create', {title: 'Create'});
})

// 404 erros
app.use((req,res)=>{
    res.status(404).render('404',{title: 'error'});
})