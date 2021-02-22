const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res)
{
    console.log('request was made: ' + req.url);

    res.writeHead(200, { 'Content-Type': 'application/json' });

    const myObj = {
        name: ' Ruby',
        age: 5,
        gender: 'female',
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log("Listening at port");
