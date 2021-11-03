'use strict';

const client = require('socket.io-client');
const CAPS = client.connect('http://localhost:3030/caps');

let handleDelivery = (payload) => {
	console.log(`DRIVER: picked up ${payload.orderId}`);
	CAPS.emit('in-transit', payload);
	CAPS.emit('delivered', payload);
};

CAPS.on('pick-up', handleDelivery);

module.exports = handleDelivery;
