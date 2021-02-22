//Basic Routing 
const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res)
{
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact')
    {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === './api/Ruby')
    {   //Still have to work on this conditional statments
        var Ruby = [{ name: 'Jason', age: 5 }, { name: 'Zenitha', age: 11 }];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(Ruby));
    } else
    {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});


server.listen(3000, '127.0.0.1');
console.log('Listening at port .....3000');

