const http = require('http');
const fs = require('fs');

const streams = fs.createReadStream(__dirname + '/readMe.txt');
const stream = fs.createWriteStream(__dirname + '/writeMe.txt');

streams.on('data', (chunk) =>
{
    console.log('new chunk Received:');
    stream.write(chunk)
});