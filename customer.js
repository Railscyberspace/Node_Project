let time = 0;
let timer = setInterval(function ()
{
    time += 2;
    console.log(time + 'Seconds have passed');
    if (time > 5)
    {
        clearInterval(timer);
    }
}, 3000);


let events = require('events');

let myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', (msg) =>
{
    console.log(msg);
});

myEmitter.emit('someEvent', 'The girl Ruby is emited')