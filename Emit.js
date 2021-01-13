

//Emiter Examples//
let events = require('events');
let util = require('util');

let Person = (name) =>
{
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let Ruby = new Person('Ruby');
let James = new Person('James');
let Jason = new Person('Jason');

let People = [Ruby, James, Jason];
People.forEach = (Person) =>
{
    Person.on('Speak', (msg) =>
    {
        console.log(Person.name + 'Said: ' + msg);
    });
};

Ruby.emit('Speak', 'Said Mummy teach me Programing I have grown Up Now');

