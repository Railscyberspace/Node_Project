// Reading File Methods Blocking method
const fs = require('fs');

const readMe = fs.readFileSync('ReadMe.txt', 'utf8');

fs.writeFileSync('WriteMe.txt', readMe);

//None Blocking
fs.readFile('readMe.txt', 'utf8', (err, data) =>
{
    fs.writeFile('Write.txt', data);
});


