const { pipeline } = require('stream');
        
        
          
const {
        
        
          
    createReadStream,
        
        
          
    createWriteStream
        
        
          
} = require('fs');
        
        
          


        
        
          
const source = createReadStream('input.txt');
        
        
          
const destination = createWriteStream('input.txt.gz');
        
        
          
const gzip = createGzip();
        
        
          


        
        
          
pipeline(source, gzip, destination, (err) => {
        
        
          
    if (err) {
        
        
          
        console.error('An error occurred:', err);
        
        
          
        process.exitCode = 1;
        
        
          
    }
        
        
          
});
        
        
          


        
        
          
console.log("Gzip object created")const { createGzip } = require('zlib');
        
        
          
