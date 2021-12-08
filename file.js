const fs = require('fs');
const { fileURLToPath } = require('url');

// read file

// fs.readFile('./docs/blog1.txt', (error,data)=>{
//     if(error){
//         console.log(error);
//     }

//     console.log(data.toString());
// })

// write file
fs.writeFile('./docs/blog1.txt',"hello ahmed the warrior", ()=>{
    console.log("file written")
})

// redirect file
// if (!fs.existsSync('assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }

//         console.log('folder created');
//     })
// } else{
//     fs.rmdir('./assets', ()=>{
//         console.log('file removed')
//     })
// }

// delete file
if(fs.existsSync('deleted.txt')){
    fs.unlinkSync('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
    
        console.log('file deleted')
    
    })
}