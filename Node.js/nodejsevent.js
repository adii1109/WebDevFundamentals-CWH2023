const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter= new MyEmitter();

//code will run when event will fire
myEmitter.on('WaterFull',()=>{
    console.log('please turn off the motor!');
    setTimeout(()=>{
        console.log('Please turn off the motor ! Its a gental reminder');
    },3000)
})
console.log('The Script is running..');
myEmitter.emit('WaterFull');
console.log('The script still running');