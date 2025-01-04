// import { URL } from ' url';
import EventEmitter from 'event';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
	console.log('An event occur');
});

myEmitter.emit('event');
