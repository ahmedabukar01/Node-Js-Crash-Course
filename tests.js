

// let name = "ahmed the warrior";

// setTimeout(()=>{
//     console.log(`Hello ${name}`);
//     clearInterval(int)
// },1000);

// const int = setInterval(()=>{
//     console.log('in the interval...');
// },1000);

const fs = require('fs');
const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Blog = require('./people');

app.use(express.static('public'));
// fs.writeFile('./nor.txt','hey weredddd are writing something', (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('aldkfjkl')
//     }
// })

// fs.readFile('./nor.txt',{'encoding': 'utf-8'},(err,data)=>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(data)
//     }
// })

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         } else{
//             console.log('folder created');
//         }
//     })
   
// } else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         } else{
//             console.log('folder removed')
//         }
//     })
// }


// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.setHeader('content-type', 'text/plain')
//     res.write('hey')
    

//     if(req.url === '/me'){
//         res.write('yes of course')
//         res.end()
//     }

//     console.log('meeeeddaldkfj',req.url);

// })

// server.listen('3000','localhost',()=>{
//     console.log('request is bein made')
// })

// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//   res.sendFile('./myviews/html/index.html',{root: __dirname})
// })
// app.get('/us',(req,res)=>{
//  res.redirect('/')
// })

// app.listen('3000')


    // EJS & mongoose

  const db = 'mongodb+srv://ahmed:ahmed123@mymango.oifxe.mongodb.net/own?retryWrites=true&w=majority';

mongoose.connect(db)
.then((result)=>
    app.listen('3000',()=>{
    console.log('hey We are listining something you literaly dont know');
  })
)
.catch(err=>console.log(err));

// mongoose.connect(db)
// .then((result)=> app.listen('3000',()=>{
//     console.log('express request has been made :)');
// }))
// .catch((err)=> console.log(err));


app.set('view engine','ejs');
app.set('views','myviews');

// app.get('/test', (req,res)=>{
//   const who = [{name: 'nor', age: '30'},{name: 'Ali', age: '54'}]
//   res.render('index', {title: 'Testing Blog', who});
// })

// add some data to the database
app.get('/add-blog',(req,res)=>{
  const blog = new Blog({
    title: 'hey here we are gangs 3',
    snippet: 'Please introduce your self.',
    body: 'We are the rarest thing on earth :)'
  });

  blog.save()
    .then(result=>{
      res.send(result)
    })
})

app.get('/', (req,res)=>{
  Blog.find().sort({createdAt: -1})
    .then(result=>{
      res.render('index',{title: 'All Blogs', blogs: result})
    })
})