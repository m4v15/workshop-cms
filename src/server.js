var http = require('http');

var server = http.createServer(handler);

server.listen(3000, function(){
    console.log("Server listening on port 3000. Ready to accept requests!");
})

var message = "We are making servers!"

function handler (request, response){
    response.writeHead(200,{"content-type":"text/html"});
    response.write(message);
    response.end();
}
