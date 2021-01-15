const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res)
{
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else (req.url === '/contact')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
});


server.listen(3000, '127.0.0.1');
console.log('Listening at port .....3000');