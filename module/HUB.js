'use strict';

const socketio = require('socket.io');
const PORT = process.env.PORT || 3030;
const server = socketio(PORT);
const date = new Date();
let time = date.toString();

const caps = server.of('/caps');

caps.on('connection', (socket) => {
	console.log('socket is connected on', socket.id);
	socket.on('join', (payload) => {
		socket.join(payload);
	});
	socket.on('pick-up', (payload) => {
		console.log(
			`EVENT {event: pick-up, time: ${time}, payload: ${JSON.stringify(
				payload
			)}}`
		);
		caps.emit('pick-up', payload);
	});
	socket.on('in-transit', (payload) => {
		console.log(
			`EVENT {event: in-transit, time: ${time}, payload: ${JSON.stringify(
				payload
			)}}`
		);
		caps.emit('in-transit', payload);
	});
	socket.on('delivered', (payload) => {
		console.log(
			`EVENT {event: delivered, time: ${time}, payload: ${JSON.stringify(
				payload
			)}}`
		);
		caps.emit('delivered', payload);
	});
});
