const express = require('express');
const app = express();
const path = require('path');
const port = 80;

//Express stuff
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//pug stuff
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname,'views')); // set the views directory


//endpoints
app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
});
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug');
});

//start server
app.listen(port,()=>{
    console.log("Server started on "+port);
});


