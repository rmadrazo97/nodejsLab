var fs = require('fs')
//Read file function
function callback  (err, data) {
    if (err) return console.error(err);
    var textPlain = data.toString()
    
    var arreglo = textPlain.split('\n');

    arreglo.forEach(elem => {
        var pal = elem.split(' ').length;
        fs.appendFile('./fileTest', '\n Palabras: ' + pal, function (err) {
            if (err) throw err;
          });
    });

    console.log(textPlain);
};

function readFile(){
    var buffer = fs.readFile("./fileTest",callback )
  
}

readFile()
