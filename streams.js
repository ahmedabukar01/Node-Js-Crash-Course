const fs = require('fs');

const streams = fs.createReadStream('./docs/blog2.txt', {encoding: 'utf-8'});

streams.on('data',(chunks)=>{
    console.log('----New Data -----');
    console.log(chunks);
})