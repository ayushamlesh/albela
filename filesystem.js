// how to create file.
const fs = require("fs")
{/* module is created or we can say object */ }

fs.writeFileSync('read.txt', "Hello, you are welcome ");
{/* a new file will be created with name read.txt */ }

// fs.writeFileSync('read.txt', "welcome, Ayush");
// it will overwrite perivious data.

fs.appendFileSync('read.txt', "I am in the new line")
/* this line will append the data into the file without
 overwriting just after the previous cursour position*/

const buf_data = fs.readFileSync("read.txt")
//buffer is used to store binary data,while reading from a file

org_data = buf_data.toString()
//change data to string

console.log(buf_data)
//print data on console
