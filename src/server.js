var http = require('http');
var fs = require('fs');

var server = http.createServer(handler);

server.listen(3000, function(){
    console.log("Server listening on port 3000. Ready to accept requests!");
})

var message = "We are making servers!"

function handler (request, response){
    var endpoint = request.url;
    var method = request.method;

    if (endpoint ==='/'){

        console.log(endpoint);

        response.writeHead(200,{"content-type":"text/html"});

        fs.readFile(__dirname + '/../public/index.html', function(err, file){
            if (err) {
                console.log(err);
                return;
            }
            response.end(file);
        })
    }
}
