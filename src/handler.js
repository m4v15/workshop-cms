var fs = require('fs');
var querystring = require('querystring');

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
        });
    }

    else if (endpoint === '/create-post'){

        var allTheData = '';

        response.writeHead(301,{"Location":'/'});

        request.on('data', function (someData) {

            allTheData += someData;
        });
        request.on('end', function(){
            var convertedData = querystring.parse(allTheData);
            console.log(convertedData);
            response.end();
        });
    }

    else {
        var ext = endpoint.split('.')[1];
        var extType = {
            "ico": 'image/x-icon',
            "css": 'text/css',
            "js": 'text/javascript'
        }

        response.writeHead(200, {"content-type":extType[ext]});

        fs.readFile(__dirname + '/../public' + endpoint, function(err, file){
            if (err) {
                console.log(err);
                return;
            }
            response.end(file);
        });
    }

}

module.exports = handler;
