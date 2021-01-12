let events = require('events');

let myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', (msg) =>
{
    console.log(msg);
});

myEmitter.emit('someEvent', 'The girl Ruby is emited')