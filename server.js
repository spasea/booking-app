const http = require('http');
const static = require('node-static');
const file = new static.Server('.');
const port = 3000;

http.createServer((req, res) => {
	file.serve(req, res);
}).listen(port);

console.log(`Server running on port ${port}`);