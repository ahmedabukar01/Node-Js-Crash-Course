
const express = require('express');
const Blog = require('../models/blogs');


const routes = express.Router();

routes.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All blogs', blogs: result});
    })
    .catch(err=>console.log(err));
});

routes.get('/create',(req,res)=>{
    res.render('create', {title: 'Create'});
})

// post request
routes.post('/', (req,res)=>{
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

routes.get('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
        res.render('details', {title: 'Detials', blog: result});
    })
})

routes.delete('/:id',(req,res)=>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect: '/blogs'});
    })
    .catch(err=>console.log(err));

})

module.exports = routes;