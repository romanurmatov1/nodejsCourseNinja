var events = require('events');

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (mes) {
   console.log(mes);
});

myEmitter.emit('someEvent', 'the event has mmm');