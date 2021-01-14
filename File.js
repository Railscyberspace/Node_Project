//Making Directories And Removing them
const fs = require('fs');

fs.mkdir('File', function ()
{
    fs.readFile('readMe.txt', 'utf8', function (err, data) 
    {
        fs.writeFile('./File/writeMe.txt', data);
    });
});






