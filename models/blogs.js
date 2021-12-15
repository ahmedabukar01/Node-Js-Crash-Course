const { truncate } = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: truncate
    },
    body:{
        type: String,
        required: true
    }
});

const Blog = mongoose.model('Blog');