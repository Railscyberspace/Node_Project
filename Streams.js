var http = require('http');

var fs = require('fs');
var stream = fs.createReadStream(__dirname + '/readMe.txt');

stream.on('data', (chunk) =>
{
    console.log('new chunk received');
    console.log(chunk);

});
