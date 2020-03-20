var fs = require('fs');

//create a file named newfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});