const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res)
{
    console.log('request was made: ' + req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });


    const streams = fs.createReadStream(__dirname + '/index.html');
    streams.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Listening at port");





