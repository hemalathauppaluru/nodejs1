//Event emittors are synchronous

console.log('Program Started');
const events =require('events')

//return class of event emitter
const EventEmitter = events.EventEmitter;

//creating an instance / object of event emmiter
const eventEmitter = new EventEmitter();
//creating an instance of event in single line
const eventEmitter2= new events.EventEmitter()
console.log('Event Emittor', eventEmitter);
console.log('Event Emitter  class',EventEmitter);
//lisening to Event
eventEmitter.on('test', ()=>{
    console.log('Test event executed');
})

eventEmitter.on('test', ()=>{
    console.log('Test1 event executed');
})

//execute Event
eventEmitter.emit('test') //-->we can call how many  times we want no error 
eventEmitter.emit('test')



// eventEmitter.on('test', ()=>{
//     console.log('Test1 event executed');//-->without publishing an event we can't subscribe (now here output is not printing)
// })




 eventEmitter.on('add', (a,b)=>{
    console.log('Sum', (a+b));
})
eventEmitter.emit('add', 10,20)

 eventEmitter2.on('print', ()=>{
     console.log('Print Data');
 })

eventEmitter2.emit('print')

// //The below code is Invalid
eventEmitter.emit('print')
eventEmitter.once('myEvent', (data)=>{
    console.log('Once -', data);
 })

const eventNames = eventEmitter.eventNames()
 console.log('Event Names',eventNames);
 eventEmitter.emit('myEvent', 'execute once 1')
 eventEmitter.emit('myEvent', 'execute') //-->if we call 'n ' times it will executed only once becuse  we are giving .once
eventEmitter.emit('myEvent', 'execute')

 console.log('Event Names1',eventNames);
console.log('Program Ended');