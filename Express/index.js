const express = require('express');
const path = require('path');
const app = express();
const port = 80;
const fs = require('fs'); //we will save output file with this

//Express specific stuff
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded())

// pug specific stuff
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory

//End points
app.get('/', (req, res) => {
    const con = "This is the best content on the internet";
    const params = { 'title': ' Pug is the best', "content": con };
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
    console.log(req.body); // just to see inserted data in console
    name = req.body.name;
    age = req.body.app;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.address.more;
    outputToWrite = `The name of the client is ${name} gender is ${gender} age is ${age} address is ${address}.  & he/she says ${more}`;
    fs.writeFileSync('output.txt',outputToWrite);

    const params = { 'message': ' Your form has been submitted successfully ' };
    res.status(200).render('index.pug', params);
});

//start the server
app.listen(port, () => {
    console.log("server is up on port " + port);
});