'use strict';

const driver = require('../../eventPool');
require('../vendor/vendor.js');
require('../HUB');

driver.on('pick-up', (payload) => {
	console.log(`DRIVER: picked up ${payload.orderId}`);
	driver.emit('in-transit', payload);
	driver.emit('delivered', payload);
});
