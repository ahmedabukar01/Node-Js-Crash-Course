
const express = require('express');
const routes = express.Router();
const blogController = require('../controllers/blogController');

// get blogs
routes.get('/', blogController.blog_index);

// create get
routes.get('/create', blogController.blog_create_get);

// create post request
routes.post('/', blogController.blog_create);

//  blog detials
routes.get('/:id', blogController.blog_details);

// delete request
routes.delete('/:id', blogController.blog_delete);

module.exports = routes;