'use strict';

const hub = require('../eventPool');
require('./vendor/vendor');
require('./driver/driver');
const date = new Date();
let time = date.toString();

hub.on('pick-up', (payload) =>
	console.log(
		`EVENT {event: pick-up, time: ${time}, payload: ${JSON.stringify(payload)}}`
	)
);
hub.on('in-transit', (payload) =>
	console.log(
		`EVENT {event: in-transit, time: ${time}, payload: ${JSON.stringify(
			payload
		)}}`
	)
);
hub.on('delivered', (payload) =>
	console.log(
		`EVENT {event: delivered, time: ${time}, payload: ${JSON.stringify(
			payload
		)}}`
	)
);
