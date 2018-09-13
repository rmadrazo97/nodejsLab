var fs = require('fs')
//Read file function
function callback  (err, data) {
    if (err) return console.error(err);
    var textPlain = data.toString()
    var j = 0;
    for (var i = 0; i <= textPlain.length; i++){
        
        //console.log(textPlain[i]);
        if (textPlain[i] == '\n' ){
            //console.log("LINEBREAK")
            fs.appendFile('./fileTest', '\n Linea:'+j-- , function (err) {
                if (err) throw err;
              });
            j = 0;
        }
        j++;
    }
    //console.log(textPlain)    
};
function readFile(){
    //fs.readFile("./fileTest", function (err, data) {
    var buffer = fs.readFile("./fileTest",callback )
    
    
  
}

readFile()
