const http = require('http');
const url = require('url');
const fibonacci = require('./fibonacci');

http.createServer(function(req, res){
  const urlP = url.parse(req.url, true);
  const query = urlP.query['n'];
  let fibo;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if(query){
    fibo = fibonacci(query);
   res.end('Fibonacci ' + query + ' =  ' + fibo );
  }else{
    res.end('USAGE: http:127.0.0.1:8124?n=## where ## is the Fibonacci number desired');
  }
  res.end('Hello world!!\n');
}).listen(8124, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8124/');
