var http = require('http');

// setup a web server
http.createServer(function (req, res) {
  const options = {};
  
  // this should not pass code scanning - user input is not checked!
  send(req, req.url!, options);
  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
