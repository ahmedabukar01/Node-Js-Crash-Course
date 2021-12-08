const fs = require('fs');

// read file
fs.readFile('./docs/blog1.txt', (error,data)=>{
    if(error){
        console.log(error);
    }

    console.log(data.toString());
})

// write file

// redirect file

// delete file