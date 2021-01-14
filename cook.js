let time = 0;
setInterval(function ()
{
    time += 2;
    console.log(time + 'Seconds have passed')


}, 2000);






//Emiter Examples//
let events = require('events');
var util = require('util');

var Person = (name) =>
{
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var Ruby = new Person('Ruby');
var James = new Person('James');
var Jason = new Person('Jason');

var People = [Ruby, James, Jason];
People.forEach(function (Person)
{
    Person.on('Speak', function (msg)
    {
        console.log(Person.name + 'Said: ' + msg);
    });
});

Ruby.emit('Speak', 'Said Mummy teach me Programing I have grown Up Now');





