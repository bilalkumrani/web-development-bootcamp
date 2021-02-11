//this code will read from a file named "dele.txt"

const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
console.log(text);

//now i want to replace something in text

text = text.replace('Writing','reading'); //text is case sensitive if it is in small case you have write that otherwise 
//it will not match and it will not replace the text
console.log(text);


// now we want to write in the file
fs.writeFileSync("bilal.txt",text); //frst argument create file 2nd will be the text we wanna insert

