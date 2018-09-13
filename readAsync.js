var fs = require('fs')
//Read file function
function readFile(){
    var buffer = fs.readFile("./fileTest") 
    var textPlain = buffer.toString()
    var myArray = textPlain.split("\n")
    myArray.forEach(function(value){
        console.log(value);
    });
}
readFile()