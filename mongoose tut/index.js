// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bilalkart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("We are connected");
});


const kittySchema = new mongoose.Schema({
    name: String  
});
kittySchema.methods.speak = function(){
 var greeting = "My name is "+ this.name;
 console.log(greeting);   
}

const Kitten = mongoose.model('Kitten', kittySchema);

//creating new doc/obj
const silence = new Kitten({ name: 'Silence Bilal' });
console.log(silence.name); // 'Silence'


silence.save(function (err, silence) {
    if (err) return console.error(err);
    silence.speak();
  });