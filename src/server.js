var http = require('http');

var server = http.createServer();

server.list(3000, function{
    console.log("Server listening on port 3000. Ready to accept requests!");
})
