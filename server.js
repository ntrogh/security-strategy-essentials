var http = require('http');
http.createServer(function (req, res) {
  const options = {};
  send(req, req.url!, options);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
