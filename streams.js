const fs = require('fs');

const streams = fs.createReadStream('./docs/blog2.txt', {encoding: 'utf-8'});
const writeStreams = fs.createWriteStream('./docs/blog3.txt');

// streams.on('data',(chunks)=>{
//     console.log('----New Data -----');
//     console.log(chunks);
//     writeStreams.write(`\nNew Data\n`);
//     writeStreams.write(chunks);
// })

// piping
streams.pipe(writeStreams)