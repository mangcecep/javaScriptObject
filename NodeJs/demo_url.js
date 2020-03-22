var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=march';
// parse the address
var q = url.parse(adr, true);

// the parse mthode returns an object containing url properties
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

// the query property returns an object with all the query string parameters as properties:
var qdata = q.query;
console.log(qdata.month);