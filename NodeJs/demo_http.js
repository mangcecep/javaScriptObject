var http = require('http');

//create a server object:
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'}); // write a respone to the client
//     res.write(req.url); // write a respone to the client
//     res.end(); // end the response
// }).listen(8080); //the server object listens on port 8080
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); // write a respone to the client
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month; // write a respone to the client
    res.end(txt); // end the response
}).listen(8080); //the server object listens on port 8080