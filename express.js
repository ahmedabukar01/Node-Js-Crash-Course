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
app.use(express.urlencoded({extended: true}))
// app.use(express.urlencoded({extended: true})) this is optional
app.use(morgan('dev'));

// mango db
const mdUrl = 'mongodb+srv://ahmed:ahmed123@mymango.oifxe.mongodb.net/my-mangodb?retryWrites=true&w=majority';
mangoose.connect(mdUrl)
.then((result)=> app.listen('3000',()=>{
    console.log('express request has been made :)');
}))
.catch((err)=> console.log(err));

// mongoose and mongo sandbox routs

// app.get('/add-new', (req,res)=>{
//     const blog = new Blog({
//         title: 'What is blog',
//         snippet: 'how about my new mongo db database',
//         body: 'mongo db is the best non-sql database :) '
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch(err=>console.log(err));
// });

// app.get('/all-blogs', (req,res)=>{
//     Blog.find()
//     .then(result=>{
//         res.send(result);
//     })
//     .catch(err=>console.log(err));
// })

// app.get('/single', (req,res)=>{
//     Blog.findById('61ba96e0d91f755e6a26f17a')
//     .then(result=>res.send(result))
//     .catch(err=>console.log(err));
// })

// express
app.get('/', (req,res)=>{
   res.redirect('/blogs');
})

app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All blogs', blogs: result});
    })
    .catch(err=>console.log(err));
});

app.get('/about',(req,res)=>{
   res.render('about',{title: 'About'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('create', {title: 'Create'});
})

// post request
app.post('/blogs', (req,res)=>{
    const newBlog = new Blog(req.body);
    newBlog.save()
        .then(result=>{
            console.log('data has beens saved')
            res.redirect('/blogs')
        })
        .catch(err=>{
            console.log(err)
        })
})

app.get('/blogs/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
        res.render('details', {title: 'Detials', blog: result});
    })
})

app.delete('/blogs/:id',(req,res)=>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect: '/blogs'});
    })
    .catch(err=>console.log(err));

})
// 404 erros
app.use((req,res)=>{
    res.status(404).render('404',{title: 'error'});
})

