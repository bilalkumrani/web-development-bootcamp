const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 80;

//mongoose stuff
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});

//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
    
  });
  
  const Contact = mongoose.model('contact', contactSchema);


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
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been save dto database");
    }).catch(()=>{
        res.status(400).send("Item is faild to save in database")
    });
});

//start server
app.listen(port,()=>{
    console.log("Server started on "+port);
});


