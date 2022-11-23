//html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="/">
        <input type="text" name="sname" placeholder="name">
        <input type="text" name="massage" placeholder="massage">
        <input type="text" name="reg" placeholder="reg.">
        <button type="submit" name="submit">submit</button>
    </form>
</body>
</html>

//html ends


//it is a middleware to parse the data coming from url
const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const port = process.env.port || 3000;
//it decode the data coming from url
const url = bodyParser.urlencoded({extended:false});
const fs = require ('fs');
const chalk = require ('chalk');


//help to route in the pages
app.get('/',(req, res) =>
    {
        res.render("home.ejs");
        console.log(chalk.red("done"));
    }
);
//by the help of this we fetch the data from the webpage
//"url" is used for the data coming from the form
app.post('/', url, (req,res) =>
    {   //storing all the data in the variable
        var all = req.body
        //storing the name only into the variable
        var file = all.sname
        //create the file , json.stringify is used to convert json data to string
        fs.writeFileSync(file+'.txt', JSON.stringify(all))
        res.send(req.body)
    }
)


app.listen(port);
