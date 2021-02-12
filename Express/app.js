const express = require('express');
const app = express();
const port = 80;

app.get('/',(req,res)=>{
res.send("Hi bilal here");
});
app.get('/about',(req,res)=>{
res.send("This is about page");
});
app.listen(port, ()=>{
console.log("app started on port "+ port);
});