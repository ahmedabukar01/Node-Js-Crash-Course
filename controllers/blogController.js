const Blog = require('../models/blogs');

// get all blogs
const blog_index = (req,res) =>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: 'All blogs', blogs: result});
    })
    .catch(err=>console.log(err));
}

// blog details
const blog_details = (req,res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
        res.render('details', {title: 'Detials', blog: result});
    })
}

// create post 
const blog_create = (req,res) =>{
    const newBlog = new Blog(req.body);
    newBlog.save()
        .then(result=>{
            console.log('data has beens saved')
            res.redirect('/blogs')
        })
        .catch(err=>{
            console.log(err)
        })
}

// create get request
const blog_create_get = (req,res) =>{
    res.render('create', {title: 'Create'});
}

// delete blog
const blog_delete = (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect: '/blogs'});
    })
    .catch(err=>console.log(err));
}


// exports
module.exports = {
    blog_index,
    blog_details,
    blog_create,
    blog_delete,
    blog_create_get
}