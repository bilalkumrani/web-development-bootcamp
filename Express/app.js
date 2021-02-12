const express = require('express');
const app = express();
const port = 80;
const path = require('path');

//using static file - > static file wo hoti hen jo hum chahty hen site pr publicly available hon, static folder created
app.use('/static',express.static('static')); // last me jo likha hai wo folder ka name hai


//set the template engine as pug

app.set('view engine', 'pug')

////
//set the views directory
app.set('views',path.join(__dirname,'views'));
/// our pug demo endpoint

app.get("/demo",(req,res)=>{
res.render('demo',{title:'BK', message:"This is dynamically created with pug"})
});



app.get('/',(req,res)=>{
res.send("Hi bilal here");
});
app.get('/about',(req,res)=>{
res.send("This is about page");
});
app.listen(port, ()=>{
console.log("app started on port "+ port);
});