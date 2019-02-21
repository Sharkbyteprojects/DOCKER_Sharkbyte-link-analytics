var user = 0;
console.log("SHARKBYTE LINKCHANGER SERVER");
	console.log("RUNNING UNDER localhost:8020 or with gui localhost:8080");
	var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
user++;
  res.end(req.url);
  console.log(user + "USER has called without GUI: " + req.url);
}).listen(8020); 
var http = require('http');
//HTML:
http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '<title>SHARK ANALYTICS</title><style>body{color: white; background-color: black;}</style><link rel="icon" sizes="32x32" type="image/png" href="https://nodejs.org/static/favicon.png">';
  var body = '<h1><img height="150" src="https://nodejs.org/static/images/logo.svg"></h1><hr>'+ req.url ;
user++;
  console.log(user + "USER has called with GUI: " + req.url);
  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};//END HTML
