// const people = ["ahmed","aubkar","omar"];
// const ages = [12,29,90];

// console.log(people);

// module.exports = {
//     people, ages
// }

// const people = ['ahmed','cali','rooble'];
// const ages = [23,44,32,54,32];

// module.exports = {
//     people,ages
// }


// mongoose 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('test',blogSchema);

module.exports = Blog;