//the output willl be on browser page
const https = require("http")
//serve use horaha hai as server object
const serve = https.createServer((req, res) => {
    res.end("request is bieng listened");
    console.log("working");
})
serve.listen(4000)
