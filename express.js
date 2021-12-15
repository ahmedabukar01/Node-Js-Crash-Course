const express = require('express');
const app = express();
const fs = require('fs');
const _ = require('lodash')
const mangoose = require('mongoose')
const morgan = require('morgan');
const Blog = require('./models/blogs');

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

// mongoose and mongo sandbox routs
app.get('/add-new', (req,res)=>{
    const blog = new Blog({
        title: 'What is blog',
        snippet: 'how about my new mongo db database',
        body: 'mongo db is the best non-sql database :) '
    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>console.log(err));
})


// express
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