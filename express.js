const express = require('express');
const fs = require('fs');
const _ = require('lodash')
const mangoose = require('mongoose')
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.set('views','myviews')


// normal GET request 

// app.get('/',(req,res)=>{
//     res.sendFile('./view/index.html',{root: __dirname});
// })


// Middleware

// app.use((req,res, next)=>{
//     console.log('in the middleware')
//     console.log(req.hostname)
//     console.log(req.path)
//     console.log(req.method)
//     next();
// })

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mango db
const mdUrl = 'mongodb+srv://ahmed:ahmed123@mymango.oifxe.mongodb.net/my-mangodb?retryWrites=true&w=majority';
mangoose.connect(mdUrl)
.then((result)=> app.listen('3000',()=>{
    console.log('express request has been made :)');
}))
.catch((err)=> console.log(err));

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